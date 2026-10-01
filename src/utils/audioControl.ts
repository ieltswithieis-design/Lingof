/**
 * Centralized Audio & Media Lifecycle Manager
 * Ensures that any speech synthesis, audio playback, or media streams
 * are completely silenced and stopped whenever the user moves between
 * tests, sections, or pages.
 */

export function stopAllActiveMedia(): void {
  // 1. Cancel browser SpeechSynthesis TTS immediately
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {
      console.warn("Error cancelling speech synthesis:", e);
    }
  }

  // 2. Pause and reset all HTMLAudioElement and HTMLVideoElement instances in the DOM
  if (typeof document !== "undefined") {
    try {
      const mediaElements = document.querySelectorAll<HTMLMediaElement>("audio, video");
      mediaElements.forEach(el => {
        try {
          el.pause();
          el.currentTime = 0;
        } catch {}
      });
    } catch {}
  }
}
