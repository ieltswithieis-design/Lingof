import React, { useState, useEffect, useRef } from "react";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  SkipBack, 
  SkipForward, 
  MessageSquare, 
  Users, 
  User, 
  Timer, 
  Sparkles, 
  Clock, 
  ArrowRight, 
  Check, 
  Headphones, 
  FileText, 
  Radio
} from "lucide-react";
import { 
  parseScriptToDialogue, 
  getVoicesForDialogue, 
  applyVoiceToUtterance, 
  DialogueTurn, 
  ParsedPartScript, 
  SpeakerGender 
} from "../utils/listeningDialogue";
import { useLanguage } from "../context/LanguageContext";
import { translateTextToLanguage } from "../utils/universalTranslator";

interface ListeningAudioPlayerProps {
  script: string;
  partNumber: number;
  partTitle?: string;
  playbackRate: number;
  onRateChange: (rate: number) => void;
  onScrollToQuestions?: () => void;
}

export const ListeningAudioPlayer: React.FC<ListeningAudioPlayerProps> = ({
  script,
  partNumber,
  partTitle,
  playbackRate,
  onRateChange,
  onScrollToQuestions,
}) => {
  const { currentLanguage, currentLanguageInfo } = useLanguage();
  const localize = (text: string): string => {
    if (!text || currentLanguage === "en") return text;
    return translateTextToLanguage(text, currentLanguage);
  };
  // Test audio/content is always English; only the interface is localized.
  const testContent = (text: string): string => text;
  const [parsedData, setParsedData] = useState<ParsedPartScript>(() => 
    parseScriptToDialogue(script, partNumber)
  );
  const [currentTurnIndex, setCurrentTurnIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isReadingPause, setIsReadingPause] = useState<boolean>(false);
  const [pauseCountdown, setPauseCountdown] = useState<number>(15);
  const [viewMode, setViewMode] = useState<"conversation" | "classic">("conversation");
  const [audioNotice, setAudioNotice] = useState<string | null>(null);
  const [voices, setVoices] = useState(() => getVoicesForDialogue("en-US", "en"));

  useEffect(() => {
    const updateVoices = () => {
      setVoices(getVoicesForDialogue("en-US", "en"));
    };
    updateVoices();
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        if (window.speechSynthesis.onvoiceschanged === updateVoices) {
          window.speechSynthesis.onvoiceschanged = null;
        }
      }
    };
  }, [currentLanguage, currentLanguageInfo.locale]);

  // References for handling async speech session ID to prevent race condition fast-skipping
  const playSessionIdRef = useRef<number>(0);
  const isPlayingRef = useRef<boolean>(false);
  const pauseIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const playDelayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const currentUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const activeAudioRef = useRef<HTMLAudioElement | null>(null);
  const conversationScrollRef = useRef<HTMLDivElement>(null);

  const clearTimers = () => {
    if (pauseIntervalRef.current) {
      clearInterval(pauseIntervalRef.current);
      pauseIntervalRef.current = null;
    }
    if (playDelayTimeoutRef.current) {
      clearTimeout(playDelayTimeoutRef.current);
      playDelayTimeoutRef.current = null;
    }
  };

  const stopPlayback = () => {
    // Invalidate current speech session so any lingering browser callbacks are ignored
    playSessionIdRef.current++;
    isPlayingRef.current = false;
    clearTimers();
    setIsReadingPause(false);
    setIsPlaying(false);

    if (activeAudioRef.current) {
      try {
        activeAudioRef.current.pause();
        activeAudioRef.current.currentTime = 0;
      } catch {}
      activeAudioRef.current = null;
    }

    // Detach listeners from any active utterance before cancelling
    if (currentUtteranceRef.current) {
      currentUtteranceRef.current.onend = null;
      currentUtteranceRef.current.onerror = null;
      currentUtteranceRef.current = null;
    }

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  };

  // Parse script when script or partNumber changes
  useEffect(() => {
    stopPlayback();
    const parsed = parseScriptToDialogue(script, partNumber);
    setParsedData(parsed);
    setCurrentTurnIndex(0);
    setIsReadingPause(false);
    setViewMode(parsed.isConversation ? "conversation" : "conversation");
  }, [script, partNumber]);



  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopPlayback();
    };
  }, []);

  // Localized scroll: scroll only within the dialogue box, NOT the whole document/window
  useEffect(() => {
    if (viewMode === "conversation" && conversationScrollRef.current) {
      const container = conversationScrollRef.current;
      const activeEl = document.getElementById(`dialogue-turn-${currentTurnIndex}`);
      if (container && activeEl) {
        const cTop = container.scrollTop;
        const cHeight = container.clientHeight;
        const elTop = activeEl.offsetTop - container.offsetTop;
        const elHeight = activeEl.clientHeight;

        // If outside comfortable view range inside the container, scroll smoothly
        if (elTop < cTop + 10 || elTop + elHeight > cTop + cHeight - 10) {
          container.scrollTo({
            top: Math.max(0, elTop - 18),
            behavior: "smooth",
          });
        }
      }
    }
  }, [currentTurnIndex, viewMode]);

  // Play a specific turn safely with session locking
  const playTurn = (index: number) => {
    if (!("speechSynthesis" in window)) {
      setAudioNotice("Text-to-speech audio is not supported in this browser environment.");
      return;
    }

    if (index >= parsedData.turns.length) {
      // Reached the end of audio turns for this section
      stopPlayback();
      setCurrentTurnIndex(0);
      return;
    }

    // 1. Invalidate any previous session and clear pending timers
    clearTimers();
    if (currentUtteranceRef.current) {
      currentUtteranceRef.current.onend = null;
      currentUtteranceRef.current.onerror = null;
      currentUtteranceRef.current = null;
    }
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    // 2. Generate a unique session token for this turn
    const sessionToken = ++playSessionIdRef.current;
    setCurrentTurnIndex(index);
    isPlayingRef.current = true;
    setIsPlaying(true);

    const turn = parsedData.turns[index];

    // Check if this turn is an exam pause
    if (turn.type === "pause") {
      setIsReadingPause(true);
      const duration = turn.pauseDuration || 15;
      setPauseCountdown(duration);

      let timeLeft = duration;
      pauseIntervalRef.current = setInterval(() => {
        if (sessionToken !== playSessionIdRef.current) {
          clearTimers();
          return;
        }
        timeLeft -= 1;
        setPauseCountdown(timeLeft);
        if (timeLeft <= 0) {
          clearTimers();
          setIsReadingPause(false);
          // Advance automatically to the next turn after reading pause expires
          playTurn(index + 1);
        }
      }, 1000);

      return;
    }

    // Normal dialogue line or narrator announcement
    setIsReadingPause(false);

    // Provide a small 60ms buffer so Chrome/Safari can cleanly finish cancelling previous speech
    playDelayTimeoutRef.current = setTimeout(async () => {
      if (sessionToken !== playSessionIdRef.current) return;
      if (!isPlayingRef.current) return;

      const spokenText = testContent(turn.text);

      // 2. Web Speech API playback
      playWithWebSpeech(spokenText, sessionToken, index);
    }, 60);
  };

  const playWithWebSpeech = (spokenText: string, sessionToken: number, index: number) => {
    const turn = parsedData.turns[index];
    if (!turn) return;

    const utterance = new SpeechSynthesisUtterance(spokenText);
    const activeDialogueVoices =
      voices.defaultVoice || voices.femaleVoice || voices.maleVoice
        ? voices
        : getVoicesForDialogue("en-US", "en");
    applyVoiceToUtterance(utterance, turn.gender, playbackRate, activeDialogueVoices, "en-US");

    utterance.onend = () => {
      // Disregard if a new turn or stopPlayback was initiated
      if (sessionToken !== playSessionIdRef.current) return;
      if (!isPlayingRef.current) return;

      // Line finished naturally: advance to the next line
      if (index + 1 < parsedData.turns.length) {
        playTurn(index + 1);
      } else {
        stopPlayback();
        setCurrentTurnIndex(0);
      }
    };

    utterance.onerror = (e) => {
      // Disregard if cancelled or obsolete session
      if (sessionToken !== playSessionIdRef.current) return;
      if (e.error === "interrupted" || e.error === "canceled") {
        return; // Ignore intentional user cancellation/navigation
      }
      console.warn("SpeechSynthesis error:", e.error);

      // If voice or language was unavailable for other languages, retry current turn with fallback system voice
      if ((e.error === "voice-unavailable" || e.error === "language-unavailable") && isPlayingRef.current) {
        const availableVoices = window.speechSynthesis.getVoices();
        const englishVoice = availableVoices.find(v => /^en(-|_)/i.test(v.lang))
          || availableVoices.find(v => /english/i.test(v.name))
          || null;
        if (englishVoice && utterance.voice !== englishVoice) {
          const retryUtterance = new SpeechSynthesisUtterance(spokenText);
          retryUtterance.voice = englishVoice;
          retryUtterance.lang = englishVoice.lang || "en-US";
          retryUtterance.rate = playbackRate;
          retryUtterance.pitch = turn.gender === "female" ? 1.18 : (turn.gender === "male" ? 0.88 : 1.0);
          retryUtterance.onend = () => {
            if (sessionToken !== playSessionIdRef.current || !isPlayingRef.current) return;
            if (index + 1 < parsedData.turns.length) {
              playTurn(index + 1);
            } else {
              stopPlayback();
              setCurrentTurnIndex(0);
            }
          };
          retryUtterance.onerror = () => {
            if (isPlayingRef.current && index + 1 < parsedData.turns.length) {
              playDelayTimeoutRef.current = setTimeout(() => {
                if (sessionToken === playSessionIdRef.current && isPlayingRef.current) {
                  playTurn(index + 1);
                }
              }, 100);
            }
          };
          currentUtteranceRef.current = retryUtterance;
          window.speechSynthesis.speak(retryUtterance);
          return;
        }
      }

      // Only advance if still active session
      if (isPlayingRef.current && index + 1 < parsedData.turns.length) {
        playDelayTimeoutRef.current = setTimeout(() => {
          if (sessionToken === playSessionIdRef.current && isPlayingRef.current) {
            playTurn(index + 1);
          }
        }, 200);
      }
    };

    currentUtteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      stopPlayback();
    } else {
      if (isReadingPause) {
        skipReadingPause();
      } else {
        playTurn(currentTurnIndex);
      }
    }
  };

  const skipReadingPause = () => {
    clearTimers();
    setIsReadingPause(false);
    playTurn(currentTurnIndex + 1);
  };

  const handlePreviousTurn = () => {
    if (currentTurnIndex <= 0) return;
    const prevIndex = currentTurnIndex - 1;
    playTurn(prevIndex);
  };

  const handleNextTurn = () => {
    if (currentTurnIndex >= parsedData.turns.length - 1) return;
    const nextIndex = currentTurnIndex + 1;
    playTurn(nextIndex);
  };

  const handleJumpToTurn = (index: number) => {
    playTurn(index);
  };

  const handleRestart = () => {
    playTurn(0);
  };

  const currentTurn = parsedData.turns[currentTurnIndex];

  return (
    <div className="rounded-2xl border-2 border-cyan-200/90 bg-gradient-to-b from-cyan-50/70 via-white to-blue-50/50 p-4 sm:p-5 shadow-sm space-y-4">
      {audioNotice && (
        <div className="flex items-center justify-between rounded-lg bg-amber-50 border border-amber-200 p-2.5 text-xs text-amber-900 font-medium">
          <span>{audioNotice}</span>
          <button
            type="button"
            onClick={() => setAudioNotice(null)}
            className="text-amber-700 hover:text-amber-950 font-bold ml-2 cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}
      {/* Top Header: Title, Active Speaker Status, and View Mode */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-cyan-100 pb-3">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-900 px-3 py-1 text-xs font-black text-white shadow-2xs">
              <Headphones className="h-3.5 w-3.5 text-cyan-300" />
              {localize(`Part ${partNumber} Audio Track`)}
            </span>

            {parsedData.isConversation ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-purple-100 border border-purple-200 px-2.5 py-0.5 text-[11px] font-extrabold text-purple-900">
                <Users className="h-3 w-3 text-purple-700" />
                {localize("Interactive Dialogue • Boy & Girl Voices")}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 border border-blue-200 px-2.5 py-0.5 text-[11px] font-extrabold text-blue-900">
                <Radio className="h-3 w-3 text-blue-700" />
                {localize("Audio Monologue Simulation")}
              </span>
            )}
          </div>

          <p className="mt-1 text-xs font-semibold text-slate-700">
            {localize(partTitle || `IELTS Listening Part ${partNumber}`)}
            <span className="ml-1.5 text-slate-500 font-normal">
              {localize("Answers are spoken in exact chronological order.")}
            </span>
          </p>
        </div>

        {/* View Switcher: Conversation Cards vs Classic Transcript */}
        <div className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white p-1 shadow-2xs">
          <button
            onClick={() => setViewMode("conversation")}
            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-bold transition cursor-pointer ${
              viewMode === "conversation"
                ? "bg-cyan-700 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>{localize("Conversation")}</span>
          </button>
          <button
            onClick={() => setViewMode("classic")}
            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-bold transition cursor-pointer ${
              viewMode === "classic"
                ? "bg-cyan-700 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            <FileText className="h-3.5 w-3.5" />
            <span>{localize("Full Script")}</span>
          </button>
        </div>
      </div>

      {/* Main Playback Controls and Forward / Backward Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-white p-3.5 border border-slate-200 shadow-2xs">
        {/* Navigation buttons: Rewind / Prev Line, Play/Pause, Forward / Next Line */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Previous Turn Button */}
          <button
            onClick={handlePreviousTurn}
            disabled={currentTurnIndex <= 0}
            className="flex h-11 items-center gap-1.5 px-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer shadow-2xs"
          >
            <SkipBack className="h-4 w-4" />
            <span className="text-xs font-bold">{localize("Prev Line")}</span>
          </button>

          {/* Primary Play / Pause Toggle Button */}
          <button
            onClick={handleTogglePlay}
            className={`flex h-11 px-5 items-center justify-center gap-2 rounded-xl font-black text-xs text-white shadow-md transition-all cursor-pointer ${
              isPlaying
                ? "bg-amber-500 hover:bg-amber-600 shadow-amber-200"
                : "bg-cyan-700 hover:bg-cyan-800 shadow-cyan-200"
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="h-4 w-4 fill-white" />
                <span>{localize("Pause")}</span>
              </>
            ) : (
              <>
                <Play className="h-4 w-4 fill-white ml-0.5" />
                <span>{localize("Play Audio")}</span>
              </>
            )}
          </button>

          {/* Next Turn Button */}
          <button
            onClick={handleNextTurn}
            disabled={currentTurnIndex >= parsedData.turns.length - 1}
            className="flex h-11 items-center gap-1.5 px-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer shadow-2xs"
          >
            <span className="text-xs font-bold">{localize("Next Line")}</span>
            <SkipForward className="h-4 w-4" />
          </button>

          {/* Restart Button */}
          <button
            onClick={handleRestart}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition cursor-pointer shadow-2xs"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>

        {/* Turn Progress Counter & Navigation Scrubber */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
            {localize("Turn")} {currentTurnIndex + 1} / {parsedData.turns.length}
          </span>
          <div className="flex items-center gap-1">
            {parsedData.turns.map((t, idx) => (
              <button
                key={idx}
                onClick={() => handleJumpToTurn(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentTurnIndex === idx
                    ? "w-6 bg-cyan-700 shadow-xs"
                    : t.type === "pause"
                    ? "w-2 bg-amber-400"
                    : "w-2 bg-slate-200 hover:bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Speed Controls & Jump to Questions link */}
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-lg border border-slate-200 bg-slate-50 p-0.5 text-xs font-bold text-slate-600">
            <span className="px-1.5 text-[10px] uppercase tracking-wider text-slate-400">{localize("Speed")}</span>
            {[0.8, 1.0, 1.2].map((speed) => (
              <button
                key={speed}
                onClick={() => onRateChange(speed)}
                className={`rounded px-2 py-0.5 transition cursor-pointer ${
                  playbackRate === speed
                    ? "bg-white text-cyan-800 shadow-xs font-black"
                    : "hover:text-slate-900"
                }`}
              >
                {speed}x
              </button>
            ))}
          </div>

          {onScrollToQuestions && (
            <button
              onClick={onScrollToQuestions}
              className="flex items-center gap-1 rounded-lg border border-cyan-200 bg-cyan-50/80 px-2.5 py-1.5 text-xs font-extrabold text-cyan-900 hover:bg-cyan-100 transition cursor-pointer"
            >
              <span>{localize("Questions")}</span>
              <ArrowRight className="h-3 w-3" />
            </button>
          )}
        </div>
      </div>

      {/* PROMINENT EXAM PAUSE BANNER */}
      {isReadingPause && (
        <div className="relative overflow-hidden rounded-2xl border-2 border-amber-400 bg-gradient-to-r from-amber-50 via-amber-100/70 to-yellow-50 p-4 sm:p-5 shadow-md animate-pulse">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-sm shrink-0">
                <Timer className="h-6 w-6 animate-spin" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-700 px-3 py-0.5 text-xs font-black text-white uppercase tracking-wider shadow-2xs">
                    {localize("Pause for reading the questions")}
                  </span>
                  <span className="rounded-md bg-amber-200/90 px-2 py-0.5 text-xs font-mono font-black text-amber-950">
                    0:{pauseCountdown.toString().padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-1 text-xs text-amber-950 font-medium">
                  {localize("The exam audio is silently paused so you can read questions")} {(partNumber - 1) * 10 + 1} {localize("to")} {(partNumber - 1) * 10 + 10}. {localize("Recording will resume automatically when time expires.")}
                </p>
              </div>
            </div>

            <button
              onClick={skipReadingPause}
              className="flex items-center gap-2 rounded-xl bg-amber-800 px-4 py-2 text-xs font-black text-white hover:bg-amber-900 shadow-xs transition cursor-pointer shrink-0"
            >
              <span>{localize("I'm Ready • Continue Audio")}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Active Speaker Status Bar */}
      {isPlaying && !isReadingPause && currentTurn && (
        <div className="flex items-center justify-between gap-2 rounded-xl bg-cyan-50 border border-cyan-200 px-3.5 py-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-cyan-600 animate-ping" />
            <span className="font-extrabold text-cyan-950">
              {localize("Speaking Now")}: <span className="text-cyan-800">{localize(currentTurn.speakerName)}</span>
            </span>
            <span className={`inline-flex items-center rounded-full px-2 py-0.2 text-[10px] font-black uppercase ${
              currentTurn.gender === "female"
                ? "bg-pink-100 text-pink-800 border border-pink-200"
                : currentTurn.gender === "male"
                ? "bg-blue-100 text-blue-800 border border-blue-200"
                : "bg-slate-100 text-slate-700 border border-slate-200"
            }`}>
              {currentTurn.gender === "female" && localize("♀ Girl's Voice")}
              {currentTurn.gender === "male" && localize("♂ Boy's Voice")}
              {currentTurn.gender === "narrator" && localize("Narrator")}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
            <Volume2 className="h-3.5 w-3.5 text-cyan-700 animate-bounce" />
            <span className="font-mono">{playbackRate}x</span>
          </div>
        </div>
      )}

      {/* CONVERSATION VIEW (Dialogue Bubbles & Avatars) */}
      {viewMode === "conversation" ? (
        <div 
          ref={conversationScrollRef}
          className="max-h-[360px] overflow-y-auto pr-1 space-y-3 scroll-smooth rounded-xl border border-slate-200 bg-slate-50/50 p-3 sm:p-4"
        >
          {parsedData.turns.map((turn, index) => {
            const isActive = currentTurnIndex === index;
            const isPauseTurn = turn.type === "pause";

            if (isPauseTurn) {
              return (
                <div
                  key={turn.id}
                  id={`dialogue-turn-${index}`}
                  onClick={() => handleJumpToTurn(index)}
                  className={`flex items-center justify-center p-3 rounded-xl border-2 transition cursor-pointer ${
                    isActive && isReadingPause
                      ? "border-amber-400 bg-amber-100/80 shadow-xs ring-2 ring-amber-300"
                      : "border-dashed border-amber-300 bg-amber-50/50 hover:bg-amber-100/60"
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-extrabold text-amber-900">
                    <Timer className="h-4 w-4 text-amber-700" />
                    <span>[{localize("Exam Pause for reading questions — 15 seconds")}]</span>
                    {isActive && isReadingPause && (
                      <span className="ml-1 rounded-md bg-amber-700 px-2 py-0.5 text-[11px] font-mono text-white">
                        0:{pauseCountdown.toString().padStart(2, "0")} {localize("Active")}
                      </span>
                    )}
                  </div>
                </div>
              );
            }

            const isFemale = turn.gender === "female";
            const isMale = turn.gender === "male";
            const isNarrator = turn.gender === "narrator";

            return (
              <div
                key={turn.id}
                id={`dialogue-turn-${index}`}
                onClick={() => handleJumpToTurn(index)}
                className={`group relative flex gap-3 p-3 sm:p-3.5 rounded-2xl border transition-all cursor-pointer ${
                  isActive
                    ? "border-cyan-500 bg-cyan-50/90 shadow-md ring-2 ring-cyan-400/40"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/80 shadow-2xs"
                }`}
              >
                {/* Speaker Avatar */}
                <div className="shrink-0 pt-0.5">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-2xl text-xs font-black shadow-xs ${
                      isFemale
                        ? "bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-pink-200"
                        : isMale
                        ? "bg-gradient-to-br from-blue-600 to-cyan-700 text-white shadow-blue-200"
                        : "bg-slate-700 text-white shadow-slate-200"
                    }`}
                  >
                    {isFemale ? (
                      <User className="h-5 w-5" />
                    ) : isMale ? (
                      <User className="h-5 w-5" />
                    ) : (
                      <Headphones className="h-4 w-4" />
                    )}
                  </div>
                </div>

                {/* Bubble Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-slate-900">
                        {localize(turn.speakerName)}
                      </span>

                      {/* Gender Voice Tag */}
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2 py-0.2 text-[10px] font-black uppercase ${
                          isFemale
                            ? "bg-pink-100 text-pink-800 border border-pink-200"
                            : isMale
                            ? "bg-blue-100 text-blue-800 border border-blue-200"
                            : "bg-slate-100 text-slate-700 border border-slate-200"
                        }`}
                      >
                        {isFemale && localize("♀ Girl's Voice")}
                        {isMale && localize("♂ Boy's Voice")}
                        {isNarrator && localize("Official Audio")}
                      </span>
                    </div>

                    {/* Active playing indicator or jump to play button */}
                    <div className="flex items-center gap-1.5">
                      {isActive && isPlaying && !isReadingPause ? (
                        <span className="flex items-center gap-1 rounded-full bg-cyan-700 px-2 py-0.5 text-[10px] font-black text-white animate-pulse">
                          <Volume2 className="h-3 w-3" />
                          {localize("Speaking Now")}
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold text-slate-400 opacity-0 group-hover:opacity-100 transition">
                          {localize("Click to play line")}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Spoken Text */}
                  <p data-no-translate data-test-content className="text-xs sm:text-sm leading-relaxed text-slate-800 font-sans">
                    {turn.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* CLASSIC FULL SCRIPT VIEW */
        <div className="max-h-[360px] overflow-y-auto rounded-xl border border-slate-200 bg-white p-4 font-serif text-sm leading-relaxed text-slate-800 shadow-2xs whitespace-pre-line">
          <span data-no-translate data-test-content>{script}</span>
        </div>
      )}
    </div>
  );
};
