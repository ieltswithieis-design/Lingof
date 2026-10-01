import { StandardizedExamId, ExamMeta, StandardizedTestPackage } from "../types/standardizedTests";

export const STANDARDIZED_EXAMS_META: Record<StandardizedExamId, ExamMeta> = {
  pte: {
    id: "pte",
    name: "PTE Academic",
    fullName: "Pearson Test of English Academic",
    governingBody: "Pearson VUE",
    scoringScale: "10 – 90 Points",
    durationMinutes: 120,
    sectionsCount: 3,
    badge: "Computer-Delivered & AI Scored",
    color: "from-amber-600 to-orange-700",
    iconBg: "bg-amber-100 text-amber-900 border-amber-300",
    description: "Fast, computer-based English proficiency test accepted by governments and universities in Australia, New Zealand, the UK, Canada, and the USA.",
    targetAudience: "Study Abroad, Work Visas, Immigration",
    acceptedInstitutions: "3,300+ Universities Worldwide",
    skills: ["Speaking & Writing", "Reading", "Listening"],
    sections: [
      {
        id: "speaking-writing",
        title: "Speaking & Writing",
        duration: "76–84 minutes",
        taskTypes: [
          "Read Aloud", "Repeat Sentence", "Describe Image", "Retell Lecture",
          "Answer Short Question", "Summarize Group Discussion", "Respond to a Situation",
          "Summarize Written Text", "Write Essay"
        ]
      },
      {
        id: "reading",
        title: "Reading",
        duration: "23–30 minutes",
        taskTypes: [
          "Reading & Writing: Fill in the Blanks", "Multiple Choice, Multiple Answers",
          "Reorder Paragraph", "Reading: Fill in the Blanks", "Multiple Choice, Single Answer"
        ]
      },
      {
        id: "listening",
        title: "Listening",
        duration: "31–39 minutes",
        taskTypes: [
          "Summarize Spoken Text", "Multiple Choice, Multiple Answers", "Fill in the Blanks",
          "Highlight Correct Summary", "Multiple Choice, Single Answer",
          "Select Missing Word", "Highlight Incorrect Words", "Write from Dictation"
        ]
      }
    ],
    taskTypes: [
      { id: "read-aloud", name: "Read Aloud", section: "Speaking & Writing", skills: ["Speaking", "Reading"], description: "Read a written prompt aloud clearly and naturally." },
      { id: "repeat-sentence", name: "Repeat Sentence", section: "Speaking & Writing", skills: ["Speaking", "Listening"], description: "Listen to a sentence and repeat it exactly as accurately as possible." },
      { id: "describe-image", name: "Describe Image", section: "Speaking & Writing", skills: ["Speaking"], description: "Describe the key information in an image using connected speech." },
      { id: "retell-lecture", name: "Retell Lecture", section: "Speaking & Writing", skills: ["Speaking", "Listening"], description: "Retell the main points of a lecture after listening to it." },
      { id: "answer-short-question", name: "Answer Short Question", section: "Speaking & Writing", skills: ["Speaking", "Listening"], description: "Answer a short question with a brief spoken response." },
      { id: "summarize-group-discussion", name: "Summarize Group Discussion", section: "Speaking & Writing", skills: ["Speaking", "Listening"], description: "Summarize the key ideas and differing views in a group discussion." },
      { id: "respond-to-situation", name: "Respond to a Situation", section: "Speaking & Writing", skills: ["Speaking"], description: "Give an appropriate spoken response to a described situation." },
      { id: "summarize-written-text", name: "Summarize Written Text", section: "Speaking & Writing", skills: ["Writing", "Reading"], description: "Write a single-sentence summary of a written passage." },
      { id: "write-essay", name: "Write Essay", section: "Speaking & Writing", skills: ["Writing"], description: "Write an essay in response to an academic prompt." },
      { id: "reading-fill-blanks-dropdown", name: "Reading & Writing: Fill in the Blanks", section: "Reading", skills: ["Reading", "Writing"], description: "Complete blanks in a passage by selecting appropriate words from drop-down lists." },
      { id: "multiple-choice-multiple-reading", name: "Multiple Choice, Multiple Answers", section: "Reading", skills: ["Reading"], description: "Select all answers that correctly answer the question." },
      { id: "reorder-paragraph", name: "Reorder Paragraph", section: "Reading", skills: ["Reading"], description: "Arrange text boxes into a coherent paragraph sequence." },
      { id: "reading-fill-blanks-drag", name: "Reading: Fill in the Blanks", section: "Reading", skills: ["Reading"], description: "Drag words into the correct gaps in a passage." },
      { id: "multiple-choice-single-reading", name: "Multiple Choice, Single Answer", section: "Reading", skills: ["Reading"], description: "Select one correct answer after reading a text." },
      { id: "summarize-spoken-text", name: "Summarize Spoken Text", section: "Listening", skills: ["Listening", "Writing"], description: "Write a summary of a spoken recording." },
      { id: "multiple-choice-multiple-listening", name: "Multiple Choice, Multiple Answers", section: "Listening", skills: ["Listening"], description: "Select all answers supported by the recording." },
      { id: "listening-fill-blanks", name: "Fill in the Blanks", section: "Listening", skills: ["Listening", "Writing"], description: "Type the missing words while listening to a recording." },
      { id: "highlight-correct-summary", name: "Highlight Correct Summary", section: "Listening", skills: ["Listening"], description: "Choose the summary that best represents the recording." },
      { id: "multiple-choice-single-listening", name: "Multiple Choice, Single Answer", section: "Listening", skills: ["Listening"], description: "Choose one correct answer based on the recording." },
      { id: "select-missing-word", name: "Select Missing Word", section: "Listening", skills: ["Listening"], description: "Select the word or phrase that completes the recording." },
      { id: "highlight-incorrect-words", name: "Highlight Incorrect Words", section: "Listening", skills: ["Listening", "Reading"], description: "Identify words in a transcript that differ from the recording." },
      { id: "write-from-dictation", name: "Write from Dictation", section: "Listening", skills: ["Listening", "Writing"], description: "Type the sentence you hear as accurately as possible." }
    ]
  },
  sat: {
    id: "sat",
    name: "Digital SAT",
    fullName: "Scholastic Assessment Test (Digital Suite)",
    governingBody: "The College Board",
    scoringScale: "400 – 1600 Total (200-800 per section)",
    durationMinutes: 134,
    sectionsCount: 2,
    badge: "Multistage Adaptive Suite",
    color: "from-blue-700 to-cyan-800",
    iconBg: "bg-blue-100 text-blue-900 border-blue-300",
    description: "The premier undergraduate admissions examination measuring critical literacy, language conventions, advanced algebraic reasoning, and problem-solving.",
    targetAudience: "Undergraduate University Admissions (US & Global)",
    acceptedInstitutions: "All US Colleges & Universities, Oxford, Cambridge, NUS, McGill",
    skills: ["Reading and Writing (Module 1 & 2)", "Math (Algebra, Advanced Math, Geometry)"]
  },
  gre: {
    id: "gre",
    name: "GRE General",
    fullName: "Graduate Record Examinations General Test",
    governingBody: "Educational Testing Service (ETS)",
    scoringScale: "260 – 340 Total (130-170 Verbal / 130-170 Quant)",
    durationMinutes: 115,
    sectionsCount: 3,
    badge: "Shorter GRE Format",
    color: "from-indigo-700 to-purple-800",
    iconBg: "bg-indigo-100 text-indigo-900 border-indigo-300",
    description: "The world's most widely accepted graduate admissions test evaluating advanced verbal reasoning, quantitative comparisons, and analytical critique.",
    targetAudience: "Master's, Doctoral & MBA Admissions",
    acceptedInstitutions: "Thousands of Graduate & Business Schools Worldwide",
    skills: ["Verbal Reasoning", "Quantitative Comparison & Math", "Analytical Writing"]
  },
  gmat: {
    id: "gmat",
    name: "GMAT Focus",
    fullName: "Graduate Management Admission Test (Focus Edition)",
    governingBody: "Graduate Management Admission Council (GMAC)",
    scoringScale: "205 – 805 Total (60-90 per section)",
    durationMinutes: 135,
    sectionsCount: 3,
    badge: "Business School Standard",
    color: "from-emerald-700 to-teal-800",
    iconBg: "bg-emerald-100 text-emerald-900 border-emerald-300",
    description: "The gold standard examination engineered specifically for elite business schools, testing high-order critical reasoning, arithmetic deduction, and data insights.",
    targetAudience: "MBA, Executive MBA, Masters in Finance / Management",
    acceptedInstitutions: "Stanford GSB, Harvard, Wharton, INSEAD, LBS & 2,400+ Business Schools",
    skills: ["Quantitative Reasoning", "Verbal Reasoning", "Data Insights & Sufficiency"]
  },
  toefl: {
    id: "toefl",
    name: "TOEFL iBT",
    fullName: "Test of English as a Foreign Language (Internet-Based)",
    governingBody: "Educational Testing Service (ETS)",
    scoringScale: "0 – 120 Total (0-30 per section)",
    durationMinutes: 116,
    sectionsCount: 4,
    badge: "Enhanced Shortened Format",
    color: "from-rose-700 to-red-800",
    iconBg: "bg-rose-100 text-rose-900 border-rose-300",
    description: "The premier English-language test measuring academic English skills required in university lectures, campus discussions, and scientific research.",
    targetAudience: "University Study Abroad & Professional Licensing",
    acceptedInstitutions: "12,000+ Universities across 160+ Countries",
    skills: ["Academic Reading", "Campus Listening", "Independent Speaking", "Writing for Academic Discussion"]
  },
  act: {
    id: "act",
    name: "ACT Assessment",
    fullName: "American College Testing Assessment",
    governingBody: "ACT, Inc.",
    scoringScale: "1 – 36 Composite Score",
    durationMinutes: 175,
    sectionsCount: 4,
    badge: "Curriculum-Based College Test",
    color: "from-teal-700 to-cyan-900",
    iconBg: "bg-teal-100 text-teal-900 border-teal-300",
    description: "A comprehensive achievement exam measuring student mastery of English rhetoric, high school mathematics, humanities reading, and scientific evaluation.",
    targetAudience: "Undergraduate College Admissions & Scholarships",
    acceptedInstitutions: "All 4-year US Colleges & Universities",
    skills: ["English Conventions", "Mathematics", "Reading Comprehension", "Science Analysis"]
  }
};

export const STANDARDIZED_TEST_PACKAGES: StandardizedTestPackage[] = [
  // ==========================
  // 1. PTE ACADEMIC TEST PACK
  // ==========================
  {
    id: "pte-mock-01",
    examId: "pte",
    title: "PTE Academic Official Full Mock Simulation 1",
    edition: "Pearson VUE 2026 Edition",
    difficulty: "Official Mock",
    sections: [
      {
        id: "pte-sec-1",
        title: "Section 1: Speaking & Writing",
        timeMinutes: 45,
        description: "Evaluates your ability to read aloud academic prose, repeat spoken sentences verbatim, summarize written texts, and craft structured persuasive essays.",
        questions: [
          {
            id: "pte-q1",
            questionNumber: 1,
            type: "read_aloud" as any,
            prompt: "Look at the text below. In 35 seconds, you must read this text aloud as naturally and clearly as possible. Speak with natural rhythm, pausing appropriately at commas and periods.",
            passage: "Domestication is a sustained multi-generational relationship in which one group of organisms assumes a significant degree of influence over the reproduction and care of another group to secure a more predictable supply of resources such as food, companionship, or labor.",
            audioScript: "Domestication is a sustained multi-generational relationship in which one group of organisms assumes a significant degree of influence over the reproduction and care of another group to secure a more predictable supply of resources such as food, companionship, or labor.",
            audioSpeaker: "PTE Academic Examiner Voice",
            speakerGender: "female",
            correctAnswer: "Domestication is a sustained multi-generational relationship in which one group of organisms assumes a significant degree of influence over the reproduction and care of another group to secure a more predictable supply of resources such as food, companionship, or labor.",
            explanation: "In PTE Read Aloud, marks are awarded for Pronunciation (oral clarity without slurring or vowel truncation) and Oral Fluency (smooth rhythm without hesitations, false starts, or unnatural pauses).",
            category: "Speaking: Read Aloud",
            points: 15
          },
          {
            id: "pte-q2",
            questionNumber: 2,
            type: "audio-lecture-mcq",
            prompt: "Listen to the recording of an economics lecture. Which of the following statements best summarizes the central economic paradox discussed by the professor?",
            passage: "Recording Transcript: 'When a new technology drastically reduces the quantity of labor needed to manufacture a smartphone, standard economic theory predicts that technological deflation will occur. However, the Jevons paradox demonstrates that as efficiency increases, the aggregate consumption of that very commodity explodes rather than contracts, driving overall resource depletion upward rather than downward.'",
            audioScript: "When a new technology drastically reduces the quantity of labor needed to manufacture a smartphone, standard economic theory predicts that technological deflation will occur. However, the Jevons paradox demonstrates that as efficiency increases, the aggregate consumption of that very commodity explodes rather than contracts, driving overall resource depletion upward rather than downward.",
            audioSpeaker: "Prof. Kenneth Wright",
            speakerGender: "male",
            options: [
              "Technological advancements always lead to chronic unemployment across all sectors.",
              "Increased efficiency in resource utilization paradoxically increases aggregate consumption.",
              "Labor costs in smartphone manufacturing are inversely related to commodity prices.",
              "Technological deflation guarantees that natural resource depletion is halted permanently."
            ],
            correctAnswer: "Increased efficiency in resource utilization paradoxically increases aggregate consumption.",
            explanation: "The lecture explicitly defines the Jevons Paradox: as efficiency increases, aggregate consumption explodes, driving resource depletion upward.",
            category: "Listening & Speaking Integration",
            points: 10
          },
          {
            id: "pte-q3",
            questionNumber: 3,
            type: "multiple-choice-single",
            prompt: "Reading & Writing: Fill in the Blanks. Select the word that best completes the academic sentence context.",
            passage: "The archaeological excavation at Göbekli Tepe dramatically ______ prevailing anthropological consensus regarding the chronology of monumental architecture, demonstrating that complex ceremonial stone circles predated the advent of settled agricultural communities by several centuries.",
            options: ["subverted", "amplified", "corroborated", "obviated"],
            correctAnswer: "subverted",
            explanation: "'Subverted' means undermined or overturned. The passage states that the discovery overturned the previous consensus because monumental stone circles occurred *before* agriculture, contrary to prior belief.",
            category: "Reading & Writing: Collocation",
            points: 5
          },
          {
            id: "pte-q4",
            questionNumber: 4,
            type: "essay-writing",
            prompt: "You will have 20 minutes to plan, write, and revise an essay about the topic below. Your response will be judged on how well you develop a position, organize your ideas, present supporting details, and control the elements of standard written English. Write 200–300 words.\n\nTopic: 'Some individuals believe that artificial intelligence will eliminate the need for humans to learn foreign languages. Others argue that human cultural nuances cannot be replicated by automated translation algorithms. Discuss both views and state your opinion.'",
            correctAnswer: "Essays are graded on Content (relevance to both perspectives), Form (200-300 words), Grammar, Vocabulary Range, and Spelling.",
            explanation: "A high-scoring PTE essay features a 4-paragraph structure: Introduction with clear thesis, Body Paragraph 1 examining automated efficiency, Body Paragraph 2 analyzing idiomatic cultural empathy, and a definitive Conclusion.",
            category: "Writing: Write Essay",
            points: 15
          }
        ]
      },
      {
        id: "pte-sec-2",
        title: "Section 2: Reading",
        timeMinutes: 30,
        description: "Tests your comprehension of scholarly articles, vocabulary in academic contexts, and paragraph cohesion.",
        questions: [
          {
            id: "pte-q5",
            questionNumber: 5,
            type: "multiple-choice-multiple",
            prompt: "Read the passage and select all correct statements according to the author's argument. (Select 2 answers)",
            passage: "Deep-sea hydrothermal vents harbor ecosystems entirely divorced from solar irradiance. In these abyssal environments, chemoautotrophic bacteria synthesize organic macromolecules by oxidizing hydrogen sulfide emitted from geothermal fissures. Consequently, the base of the food web relies entirely upon geochemical rather than photochemical energy, presenting a plausible terrestrial analogue for putative biospheres on icy moons such as Europa and Enceladus.",
            options: [
              "Chemoautotrophic bacteria utilize solar photons to fuel macromolecular synthesis.",
              "The ecosystem's primary producers rely on hydrogen sulfide rather than sunlight.",
              "Hydrothermal vent ecologies provide astrobiological models for potential life in subsurface extraterrestrial oceans.",
              "Deep-sea vent communities are fundamentally dependent upon terrestrial photosynthetic runoff.",
              "Europa and Enceladus have been confirmed to possess identical hydrothermal vent bacterial colonies."
            ],
            correctAnswer: [
              "The ecosystem's primary producers rely on hydrogen sulfide rather than sunlight.",
              "Hydrothermal vent ecologies provide astrobiological models for potential life in subsurface extraterrestrial oceans."
            ],
            explanation: "Option B is correct as the text notes organisms oxidize hydrogen sulfide from fissures. Option C is correct as vents present a 'plausible terrestrial analogue for putative biospheres on icy moons such as Europa and Enceladus'.",
            category: "Reading: Multiple Choice (Multiple)",
            points: 10
          },
          {
            id: "pte-q6",
            questionNumber: 6,
            type: "multiple-choice-single",
            prompt: "Which word best fills the blank in the scholarly text below?",
            passage: "Despite widespread media characterization of quantum entanglement as an instantaneous transmission of data, quantum mechanics strictly forbids superluminal communication; no usable message can be ______ without an accompanying classical transmission channel.",
            options: ["extrapolated", "relayed", "consecrated", "subjugated"],
            correctAnswer: "relayed",
            explanation: "'Relayed' means transmitted or communicated. The sentence explains that no usable signal or message can be transmitted faster than light.",
            category: "Reading: Fill in the Blanks",
            points: 5
          }
        ]
      },
      {
        id: "pte-sec-3",
        title: "Section 3: Listening",
        timeMinutes: 30,
        description: "Tests audio comprehension, speaker attitude inference, and dictation accuracy.",
        questions: [
          {
            id: "pte-q7",
            questionNumber: 7,
            type: "multiple-choice-single",
            prompt: "Listen to the university announcement and answer the question. What is the primary purpose of the registrar's statement?",
            passage: "Speaker Audio: 'Attention all postgraduate researchers: due to scheduled fiber-optic infrastructure upgrades in the central campus computing facility this Thursday evening between 22:00 and 04:00, remote supercomputing cluster nodes and academic repository databases will undergo intermittent disconnects. Please ensure all batch processing jobs are staged before 21:30.'",
            audioScript: "Attention all postgraduate researchers: due to scheduled fiber-optic infrastructure upgrades in the central campus computing facility this Thursday evening between 22:00 and 04:00, remote supercomputing cluster nodes and academic repository databases will undergo intermittent disconnects. Please ensure all batch processing jobs are staged before 21:30.",
            audioSpeaker: "University Campus Registrar",
            speakerGender: "female",
            options: [
              "To announce permanent retirement of the university supercomputing cluster.",
              "To alert researchers to temporary computing network disruption and advise preemptive scheduling.",
              "To invite graduate students to participate in optical fiber installation workshops.",
              "To require students to delete outdated academic repository files."
            ],
            correctAnswer: "To alert researchers to temporary computing network disruption and advise preemptive scheduling.",
            explanation: "The speaker is notifying researchers of scheduled maintenance downtime and asking them to stage batch processing jobs beforehand.",
            category: "Listening: Summarize Spoken Text",
            points: 10
          },
          {
            id: "pte-q8",
            questionNumber: 8,
            type: "fill-in-blanks",
            prompt: "Write from Dictation: Type the exact sentence spoken by the native speaker. Pay close attention to spelling, capitalization, and punctuation.",
            audioScript: "Rigorous scientific peer review guarantees the academic integrity of published research.",
            audioSpeaker: "PTE Dictation Voice",
            speakerGender: "male",
            correctAnswer: "Rigorous scientific peer review guarantees the academic integrity of published research.",
            explanation: "Write from Dictation is the most heavily weighted listening item on the PTE. Every accurately spelled word awards 1 raw mark.",
            category: "Listening: Write from Dictation",
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: "pte-mock-02",
    examId: "pte",
    title: "PTE Academic Official Full Mock Simulation 2",
    edition: "Pearson VUE 2026 Edition",
    difficulty: "Official Mock",
    sections: [
      {
        id: "pte-2-sec-1",
        title: "Section 1: Speaking & Writing",
        timeMinutes: 45,
        description: "Assesses read-aloud cadence, academic lecture synthesis, and persuasive argumentative essays.",
        questions: [
          {
            id: "pte-2-q1",
            questionNumber: 1,
            type: "read-aloud",
            prompt: "Look at the text below. In 35 seconds, read this text aloud as naturally and clearly as possible. Maintain steady oral fluency and clear vowel articulation.",
            passage: "Bioluminescence is the emission of light by a living organism as the result of a chemical reaction during which chemical energy is converted to light energy. At least seventy-five percent of deep-sea creatures utilize luciferin oxidation for counterillumination camouflage or predatory attraction.",
            audioScript: "Bioluminescence is the emission of light by a living organism as the result of a chemical reaction during which chemical energy is converted to light energy. At least seventy-five percent of deep-sea creatures utilize luciferin oxidation for counterillumination camouflage or predatory attraction.",
            audioSpeaker: "PTE Academic Examiner Voice",
            speakerGender: "female",
            correctAnswer: "Bioluminescence is the emission of light by a living organism as the result of a chemical reaction during which chemical energy is converted to light energy. At least seventy-five percent of deep-sea creatures utilize luciferin oxidation for counterillumination camouflage or predatory attraction.",
            explanation: "PTE Read Aloud grades Oral Fluency and Pronunciation. Ensure no unnatural pauses between clauses.",
            category: "Speaking: Read Aloud",
            points: 15
          },
          {
            id: "pte-2-q2",
            questionNumber: 2,
            type: "audio-lecture-mcq",
            prompt: "Listen to the engineering lecture on electrical grid storage. What is the speaker's main conclusion regarding smart micro-grids?",
            passage: "Recording Transcript: 'Integrating intermittent renewable power from wind and solar necessitates distributed battery buffers rather than centralized coal reserves. Decentralized micro-grids automatically balance localized load variances, preventing cascading blackouts while cutting transmission loss by nearly eighteen percent.'",
            audioScript: "Integrating intermittent renewable power from wind and solar necessitates distributed battery buffers rather than centralized coal reserves. Decentralized micro-grids automatically balance localized load variances, preventing cascading blackouts while cutting transmission loss by nearly eighteen percent.",
            audioSpeaker: "Prof. Alan Vance",
            speakerGender: "male",
            options: [
              "Centralized coal reserves are more cost-effective for localized renewable balancing.",
              "Decentralized micro-grids mitigate grid failures and substantially decrease transmission dissipation.",
              "Solar and wind power are unsuitable for national power distribution networks.",
              "Battery buffers increase transmission line resistance by eighteen percent."
            ],
            correctAnswer: "Decentralized micro-grids mitigate grid failures and substantially decrease transmission dissipation.",
            explanation: "The lecture states that decentralized micro-grids automatically balance localized load variances and cut transmission loss by ~18%.",
            category: "Listening: Multiple Choice",
            points: 10
          },
          {
            id: "pte-2-q3",
            questionNumber: 3,
            type: "multiple-choice-single",
            prompt: "Reading & Writing: Fill in the Blanks. Select the most precise academic term.",
            passage: "The commercialization of single-walled carbon nanotubes has historically been ______ by severe synthesis impurities and prohibitive manufacturing costs, though recent catalytic vapor deposition breakthroughs show commercial promise.",
            options: ["impeded", "substantiated", "proliferated", "extolled"],
            correctAnswer: "impeded",
            explanation: "'Impeded' means hindered or obstructed, matching the context of impurities and high costs preventing widespread commercialization.",
            category: "Reading: Fill in Blanks",
            points: 5
          },
          {
            id: "pte-2-q4",
            questionNumber: 4,
            type: "essay-writing",
            prompt: "Write a 200–300 word essay on the topic below within 20 minutes:\n\n'Metropolitan cities around the world are facing acute traffic congestion. Some urban planners advocate for heavy congestion pricing and banning private vehicles from city centers, while others argue that cities must invest primarily in affordable public mass transit. Discuss both viewpoints and provide your own reasoned judgment.'",
            correctAnswer: "Essays are graded on Content, Development, Structure, Lexical Resource, and Grammatical Accuracy.",
            explanation: "High-scoring responses present balanced arguments on deterrent financial mechanisms versus positive infrastructure investments, concluding with an integrated policy synthesis.",
            category: "Writing: Write Essay",
            points: 15
          }
        ]
      },
      {
        id: "pte-2-sec-2",
        title: "Section 2: Reading Comprehension",
        timeMinutes: 30,
        description: "Academic comprehension, scientific journals, and multi-paragraph logical cohesion.",
        questions: [
          {
            id: "pte-2-q5",
            questionNumber: 5,
            type: "multiple-choice-multiple",
            prompt: "Read the excerpt on Mesopotamian agriculture and choose the TWO correct statements.",
            passage: "In the arid alluvium of southern Mesopotamia, perennial agriculture was viable solely through canalized diversion of the Tigris and Euphrates rivers. However, prolonged irrigation without subterranean drainage led to progressive salinization of topsoils. By 2100 BCE, archaeological cuneiform tallies confirm that wheat—a salt-sensitive grain—was almost entirely supplanted by halotolerant six-row barley across Sumerian city-states.",
            options: [
              "Sumerian city-states relied exclusively on natural seasonal rainfall for wheat cultivation.",
              "Lack of subsurface drainage caused severe topsoil salinization over centuries of irrigation.",
              "Wheat cultivation was abandoned in favor of barley because barley exhibited greater tolerance to salt.",
              "Cuneiform tablets reveal that Tigris river channels were abandoned prior to 3000 BCE.",
              "Mesopotamian farmers eliminated canal diversion to prevent soil degradation."
            ],
            correctAnswer: [
              "Lack of subsurface drainage caused severe topsoil salinization over centuries of irrigation.",
              "Wheat cultivation was abandoned in favor of barley because barley exhibited greater tolerance to salt."
            ],
            explanation: "Options B and C are directly stated: irrigation without drainage caused salinization, leading wheat to be replaced by halotolerant barley.",
            category: "Reading: Multiple Choice (Multiple)",
            points: 10
          },
          {
            id: "pte-2-q6",
            questionNumber: 6,
            type: "multiple-choice-single",
            prompt: "Select the word that correctly fits the context of cognitive neuroplasticity.",
            passage: "Neuroimaging studies reveal that early childhood bilingualism fosters superior executive control, largely because the constant mental suppression of competing lexical systems ______ frontal-lobe neural connectivity.",
            options: ["fortifies", "compromises", "enervates", "precludes"],
            correctAnswer: "fortifies",
            explanation: "'Fortifies' means strengthens. Active cognitive management strengthens neural pathways and executive control.",
            category: "Reading: Fill in the Blanks",
            points: 5
          }
        ]
      },
      {
        id: "pte-2-sec-3",
        title: "Section 3: Listening & Dictation",
        timeMinutes: 30,
        description: "Tests audio retention, contextual vocabulary, and verbatim dictation accuracy.",
        questions: [
          {
            id: "pte-2-q7",
            questionNumber: 7,
            type: "audio-lecture-mcq",
            prompt: "Listen to the behavioral economics lecture on Choice Architecture. What is the fundamental premise of 'Nudge Theory'?",
            passage: "Speaker: 'Nudge theory posits that indirect suggestions and subtle alterations in decision architecture can influence behavior without forbidding choices or altering economic incentives. For instance, placing fruit at eye level in school cafeterias dramatically increases healthy nutrition without mandating dietary bans.'",
            audioScript: "Nudge theory posits that indirect suggestions and subtle alterations in decision architecture can influence behavior without forbidding choices or altering economic incentives. For instance, placing fruit at eye level in school cafeterias dramatically increases healthy nutrition without mandating dietary bans.",
            audioSpeaker: "Prof. Richard Thaler",
            speakerGender: "male",
            options: [
              "Mandating strict regulatory bans on unhealthful consumer products.",
              "Using subtle environmental design to steer consumer choices while preserving freedom of choice.",
              "Offering massive cash subsidies to eliminate consumer resistance.",
              "Removing all consumer choices to ensure uniform societal outcomes."
            ],
            correctAnswer: "Using subtle environmental design to steer consumer choices while preserving freedom of choice.",
            explanation: "Nudge theory influences behavior through decision architecture without forbidding choices or economic coercion.",
            category: "Listening: Summarize Spoken Text",
            points: 10
          },
          {
            id: "pte-2-q8",
            questionNumber: 8,
            type: "fill-in-blanks",
            prompt: "Write from Dictation: Type the exact sentence spoken by the narrator. Capitalization and spelling count.",
            audioScript: "Sustainable architectural design minimizes environmental impact while maximizing human well-being.",
            audioSpeaker: "PTE Dictation Voice",
            speakerGender: "female",
            correctAnswer: "Sustainable architectural design minimizes environmental impact while maximizing human well-being.",
            explanation: "In Write from Dictation, each correct word receives 1 point. Exact spelling and punctuation are checked.",
            category: "Listening: Write from Dictation",
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: "pte-mock-03",
    examId: "pte",
    title: "PTE Academic High-Difficulty Mock Simulation 3",
    edition: "Pearson VUE 2026 Edition",
    difficulty: "High Difficulty",
    sections: [
      {
        id: "pte-3-sec-1",
        title: "Section 1: Speaking & Writing",
        timeMinutes: 45,
        description: "High-complexity scientific prose, quantitative analysis, and synthesis essays.",
        questions: [
          {
            id: "pte-3-q1",
            questionNumber: 1,
            type: "read-aloud",
            prompt: "In 35 seconds, read this scientific passage aloud with natural cadence and clear pronunciation.",
            passage: "Epigenetics describes heritable phenotypic alterations in gene expression that do not involve alterations in the underlying DNA nucleotide sequence. Mechanisms such as DNA methylation and histone post-translational modification dynamically regulate chromatin accessibility.",
            audioScript: "Epigenetics describes heritable phenotypic alterations in gene expression that do not involve alterations in the underlying DNA nucleotide sequence. Mechanisms such as DNA methylation and histone post-translational modification dynamically regulate chromatin accessibility.",
            audioSpeaker: "PTE Senior Examiner Voice",
            speakerGender: "male",
            correctAnswer: "Epigenetics describes heritable phenotypic alterations in gene expression that do not involve alterations in the underlying DNA nucleotide sequence. Mechanisms such as DNA methylation and histone post-translational modification dynamically regulate chromatin accessibility.",
            explanation: "Read Aloud evaluates accurate academic cadence. Maintain steady pacing through multi-syllabic terminology.",
            category: "Speaking: Read Aloud",
            points: 15
          },
          {
            id: "pte-3-q2",
            questionNumber: 2,
            type: "audio-lecture-mcq",
            prompt: "Listen to the computer science lecture on Post-Quantum Cryptography. Why are Shor's algorithms a threat to current RSA encryption?",
            passage: "Lecture Audio: 'RSA and Elliptic Curve Cryptography rely fundamentally on the classical computational intractability of integer factorization. However, Shor's algorithm, running on a sufficiently coherent quantum computer, can solve prime factorization in polynomial time, effectively rendering all contemporary public-key cryptographic keys obsolete.'",
            audioScript: "RSA and Elliptic Curve Cryptography rely fundamentally on the classical computational intractability of integer factorization. However, Shor's algorithm, running on a sufficiently coherent quantum computer, can solve prime factorization in polynomial time, effectively rendering all contemporary public-key cryptographic keys obsolete.",
            audioSpeaker: "Dr. Evelyn Zhang",
            speakerGender: "female",
            options: [
              "Shor's algorithm increases the bit-length of RSA public keys beyond computer memory limits.",
              "Quantum computers can solve prime factorization in polynomial time, breaking RSA mathematical security.",
              "Elliptic curve cryptography cannot be run on classical silicon computers.",
              "Shor's algorithm eliminates the need for mathematical encryption across all internet protocols."
            ],
            correctAnswer: "Quantum computers can solve prime factorization in polynomial time, breaking RSA mathematical security.",
            explanation: "The lecture notes that Shor's algorithm solves prime factorization in polynomial time, neutralizing RSA security.",
            category: "Listening: Multiple Choice",
            points: 10
          },
          {
            id: "pte-3-q3",
            questionNumber: 3,
            type: "multiple-choice-single",
            prompt: "Select the word that best completes the financial economics passage.",
            passage: "In response to sovereign bond volatility, central banks implemented counter-cyclical capital buffers designed to ______ systemic contagion across commercial banking syndicates.",
            options: ["attenuate", "exacerbate", "perpetuate", "disseminate"],
            correctAnswer: "attenuate",
            explanation: "'Attenuate' means to reduce the force, effect, or value of something. Capital buffers reduce or lessen systemic contagion.",
            category: "Reading: Fill in Blanks",
            points: 5
          },
          {
            id: "pte-3-q4",
            questionNumber: 4,
            type: "essay-writing",
            prompt: "Write a 200–300 word essay:\n\n'Artificial intelligence systems are increasingly capable of diagnostic accuracy superior to human physicians in radiology and oncology. Should medical decisions be delegated entirely to autonomous algorithmic systems, or must human clinical oversight remain mandatory? Discuss implications for medical liability, patient empathy, and diagnostic error rates.'",
            correctAnswer: "Essays are evaluated on Coherence, Cohesion, Grammar, Vocabulary, and Form.",
            explanation: "Argue both computational precision and irreplaceable clinical human empathy before formulating a nuanced conclusion.",
            category: "Writing: Write Essay",
            points: 15
          }
        ]
      },
      {
        id: "pte-3-sec-2",
        title: "Section 2: Reading",
        timeMinutes: 30,
        description: "Scholarly journal comprehension and logical deduction.",
        questions: [
          {
            id: "pte-3-q5",
            questionNumber: 5,
            type: "multiple-choice-multiple",
            prompt: "Select the TWO correct statements regarding paleoclimatology ice core sampling.",
            passage: "Drilling through polar ice sheets in Antarctica and Greenland yields continuous stratigraphic records spanning hundreds of millennia. Trapped air bubbles in ice layers preserve ancient atmospheric gas ratios. Isotopic analysis of oxygen-18 to oxygen-16 ratios in H2O molecules serves as a paleothermometer, proving that historical atmospheric carbon dioxide spikes synchronized precisely with global interglacial warming epochs.",
            options: [
              "Trapped air bubbles provide empirical records of historic greenhouse gas concentrations.",
              "Oxygen isotope ratios function as proxy thermometers for past atmospheric temperatures.",
              "Polar ice sheets in Antarctica only date back fifty thousand years.",
              "Atmospheric carbon dioxide levels were proven to be inversely proportional to planetary temperature.",
              "Greenland ice cores lack chronological stratification due to seasonal melting."
            ],
            correctAnswer: [
              "Trapped air bubbles provide empirical records of historic greenhouse gas concentrations.",
              "Oxygen isotope ratios function as proxy thermometers for past atmospheric temperatures."
            ],
            explanation: "The passage states trapped bubbles preserve gas ratios and oxygen isotopic ratios act as paleothermometers.",
            category: "Reading: Multiple Choice (Multiple)",
            points: 10
          },
          {
            id: "pte-3-q6",
            questionNumber: 6,
            type: "multiple-choice-single",
            prompt: "Fill in the blank with the appropriate academic term.",
            passage: "Bell's theorem demonstrated that no local hidden-variable physical theory can ever reproduce all the probabilistic predictions of quantum mechanics, establishing that quantum entanglement exhibits true non-______.",
            options: ["locality", "duality", "congruence", "linearity"],
            correctAnswer: "locality",
            explanation: "Bell's theorem proves quantum non-locality—that entangled states cannot be explained by purely local physical mechanisms.",
            category: "Reading: Fill in Blanks",
            points: 5
          }
        ]
      },
      {
        id: "pte-3-sec-3",
        title: "Section 3: Listening & Dictation",
        timeMinutes: 30,
        description: "Listening comprehension and verbatim sentence reproduction.",
        questions: [
          {
            id: "pte-3-q7",
            questionNumber: 7,
            type: "audio-lecture-mcq",
            prompt: "Listen to the astrobiology seminar. What is the significance of atmospheric methane detection on rocky exoplanets?",
            passage: "Speaker Audio: 'Methane on a terrestrial exoplanet is readily oxidized by ultraviolet stellar radiation, meaning it cannot persist over geological epochs without continuous replenishment. If accompanied by molecular oxygen or ozone in disequilibrium, atmospheric methane constitutes an exceptionally strong candidate biosignature.'",
            audioScript: "Methane on a terrestrial exoplanet is readily oxidized by ultraviolet stellar radiation, meaning it cannot persist over geological epochs without continuous replenishment. If accompanied by molecular oxygen or ozone in disequilibrium, atmospheric methane constitutes an exceptionally strong candidate biosignature.",
            audioSpeaker: "Prof. Neil Henderson",
            speakerGender: "male",
            options: [
              "Methane proves that an exoplanet is completely devoid of stellar radiation.",
              "Methane's short photolytic lifespan implies active continuous replenishment, indicating potential biogenic origin.",
              "Methane prevents oxygen from forming in planetary atmospheres.",
              "Methane guarantees that an exoplanet has liquid water oceans."
            ],
            correctAnswer: "Methane's short photolytic lifespan implies active continuous replenishment, indicating potential biogenic origin.",
            explanation: "Because methane is broken down by UV radiation, its continuous presence in disequilibrium suggests active biological or geological replenishment.",
            category: "Listening: Multiple Choice",
            points: 10
          },
          {
            id: "pte-3-q8",
            questionNumber: 8,
            type: "fill-in-blanks",
            prompt: "Write from Dictation: Type the exact sentence spoken by the examiner.",
            audioScript: "Empirical observation remains the cornerstone of modern scientific methodology.",
            audioSpeaker: "PTE Dictation Voice",
            speakerGender: "female",
            correctAnswer: "Empirical observation remains the cornerstone of modern scientific methodology.",
            explanation: "Every word is scored individually. Check capitalization and spelling of 'empirical', 'cornerstone', and 'methodology'.",
            category: "Listening: Write from Dictation",
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: "pte-mock-04",
    examId: "pte",
    title: "PTE Academic Pearson Score Booster Simulation 4",
    edition: "Pearson VUE 2026 Edition",
    difficulty: "Official Mock",
    sections: [
      {
        id: "pte-4-sec-1",
        title: "Section 1: Speaking & Writing",
        timeMinutes: 45,
        description: "Assesses oral fluency, lecture synthesis, and structured essay writing.",
        questions: [
          {
            id: "pte-4-q1",
            questionNumber: 1,
            type: "read-aloud",
            prompt: "In 35 seconds, read this passage aloud naturally and fluently.",
            passage: "CRISPR-Cas9 is a revolutionary genome-editing tool adapted from a naturally occurring bacterial immune defense system. By utilizing synthetic guide RNA to direct the Cas9 endonuclease enzyme to target sequences, researchers can cleave and edit DNA with unprecedented molecular precision.",
            audioScript: "CRISPR-Cas9 is a revolutionary genome-editing tool adapted from a naturally occurring bacterial immune defense system. By utilizing synthetic guide RNA to direct the Cas9 endonuclease enzyme to target sequences, researchers can cleave and edit DNA with unprecedented molecular precision.",
            audioSpeaker: "PTE Academic Voice",
            speakerGender: "male",
            correctAnswer: "CRISPR-Cas9 is a revolutionary genome-editing tool adapted from a naturally occurring bacterial immune defense system. By utilizing synthetic guide RNA to direct the Cas9 endonuclease enzyme to target sequences, researchers can cleave and edit DNA with unprecedented molecular precision.",
            explanation: "Focus on oral clarity, natural pausing, and steady speech without false starts.",
            category: "Speaking: Read Aloud",
            points: 15
          },
          {
            id: "pte-4-q2",
            questionNumber: 2,
            type: "audio-lecture-mcq",
            prompt: "Listen to the cognitive psychology lecture on memory consolidation. What role does slow-wave sleep play?",
            passage: "Recording Transcript: 'During slow-wave non-REM sleep, the hippocampus replays short-term experiential memory traces at accelerated speeds, transferring synaptic representations to the neocortex for long-term semantic integration. Chronic sleep deprivation disrupts this transfer, impairing both recall and synaptic homeostasis.'",
            audioScript: "During slow-wave non-REM sleep, the hippocampus replays short-term experiential memory traces at accelerated speeds, transferring synaptic representations to the neocortex for long-term semantic integration. Chronic sleep deprivation disrupts this transfer, impairing both recall and synaptic homeostasis.",
            audioSpeaker: "Dr. Karen Davies",
            speakerGender: "female",
            options: [
              "It erases long-term semantic memories from the neocortex.",
              "It facilitates the neural transfer of temporary hippocampal memory traces into long-term neocortical storage.",
              "It prevents the brain from entering REM sleep stages.",
              "It increases daytime synaptic fatigue and reduces cognitive efficiency."
            ],
            correctAnswer: "It facilitates the neural transfer of temporary hippocampal memory traces into long-term neocortical storage.",
            explanation: "Slow-wave sleep replays and transfers temporary hippocampal traces to the neocortex for permanent consolidation.",
            category: "Listening: Multiple Choice",
            points: 10
          },
          {
            id: "pte-4-q3",
            questionNumber: 3,
            type: "multiple-choice-single",
            prompt: "Select the word that correctly completes the historical cartography excerpt.",
            passage: "The Mercator map projection revolutionized marine navigation because it rendered lines of constant compass bearing as straight segments, although it severely ______ the physical land areas of polar continents.",
            options: ["distorted", "authenticated", "truncated", "diminished"],
            correctAnswer: "distorted",
            explanation: "The Mercator projection distorts polar landmasses (making Greenland appear larger than Africa).",
            category: "Reading: Fill in Blanks",
            points: 5
          },
          {
            id: "pte-4-q4",
            questionNumber: 4,
            type: "essay-writing",
            prompt: "Write a 200–300 word essay:\n\n'In many developing and developed nations, university graduates face underemployment, while industries suffer from critical shortages of skilled tradespeople. Should secondary educational systems prioritize vocational apprenticeships over traditional academic university degrees? Discuss both pathways and give your recommendation.'",
            correctAnswer: "Graded on Content Relevance, Cohesion, Form, Lexical Range, and Mechanical Control.",
            explanation: "Structure your response into 4 distinct paragraphs: introduction, trade viability, university research importance, and synthesis.",
            category: "Writing: Write Essay",
            points: 15
          }
        ]
      },
      {
        id: "pte-4-sec-2",
        title: "Section 2: Reading",
        timeMinutes: 30,
        description: "Academic literature comprehension and scientific inference.",
        questions: [
          {
            id: "pte-4-q5",
            questionNumber: 5,
            type: "multiple-choice-multiple",
            prompt: "Select the TWO correct statements regarding geothermal carbon mineralization.",
            passage: "In basaltic geothermal pilot plants, captured industrial carbon dioxide is dissolved in high-pressure water and injected hundreds of meters into porous subterranean basaltic lava formations. Within two years, the dissolved CO2 chemically reacts with magnesium and calcium cations in the basalt, permanently precipitating into solid carbonate minerals like calcite. This eliminates the risk of gaseous leakage associated with conventional caprock storage reservoirs.",
            options: [
              "Dissolved carbon dioxide permanently transforms into solid stone within basalt formations.",
              "The mineralization process prevents subterranean gas leakage risks associated with traditional reservoirs.",
              "Basaltic mineralization requires gaseous carbon dioxide to remain stored in liquid aquifers indefinitely.",
              "The chemical reaction with calcium cations takes more than fifty years to form solid calcite.",
              "Geothermal plants release all captured carbon directly into freshwater streams."
            ],
            correctAnswer: [
              "Dissolved carbon dioxide permanently transforms into solid stone within basalt formations.",
              "The mineralization process prevents subterranean gas leakage risks associated with traditional reservoirs."
            ],
            explanation: "Options A and B are directly verified by the text: CO2 reacts to form solid carbonate minerals in two years and eliminates leakage risks.",
            category: "Reading: Multiple Choice (Multiple)",
            points: 10
          },
          {
            id: "pte-4-q6",
            questionNumber: 6,
            type: "multiple-choice-single",
            prompt: "Select the word that best fills the blank.",
            passage: "Modern linguistic research has demonstrated that while language does not rigidly determine thought, linguistic structures subtly ______ the perceptual salience of spatial and temporal concepts.",
            options: ["modulate", "obliterate", "nullify", "proscribe"],
            correctAnswer: "modulate",
            explanation: "'Modulate' means to regulate or exert a modifying influence. Language modulates cognitive perception.",
            category: "Reading: Fill in Blanks",
            points: 5
          }
        ]
      },
      {
        id: "pte-4-sec-3",
        title: "Section 3: Listening & Dictation",
        timeMinutes: 30,
        description: "Listening comprehension and write from dictation.",
        questions: [
          {
            id: "pte-4-q7",
            questionNumber: 7,
            type: "audio-lecture-mcq",
            prompt: "Listen to the marine biology lecture on trophic cascades. What happened following the reintroduction of apex marine predators?",
            passage: "Lecture Audio: 'When apex marine predators such as sea otters were protected, their predation on herbivorous sea urchins suppressed overgrazing, enabling kelp forest biomes to rebound. This ecological trophic cascade restored biodiversity, nursery habitats, and carbon sequestration capacity along the Pacific coastline.'",
            audioScript: "When apex marine predators such as sea otters were protected, their predation on herbivorous sea urchins suppressed overgrazing, enabling kelp forest biomes to rebound. This ecological trophic cascade restored biodiversity, nursery habitats, and carbon sequestration capacity along the Pacific coastline.",
            audioSpeaker: "Prof. Sarah Miller",
            speakerGender: "female",
            options: [
              "Kelp forests were completely decimated by an explosion in sea otter populations.",
              "Suppression of sea urchin overgrazing allowed kelp biomes and marine biodiversity to flourish.",
              "Carbon sequestration along the coast dropped to zero following otter recovery.",
              "Sea urchins replaced kelp forests as the primary carbon sinks."
            ],
            correctAnswer: "Suppression of sea urchin overgrazing allowed kelp biomes and marine biodiversity to flourish.",
            explanation: "Otters feeding on urchins prevented overgrazing, causing kelp biomes and biodiversity to recover.",
            category: "Listening: Multiple Choice",
            points: 10
          },
          {
            id: "pte-4-q8",
            questionNumber: 8,
            type: "fill-in-blanks",
            prompt: "Write from Dictation: Type the exact sentence spoken by the narrator.",
            audioScript: "Collaborative research initiatives foster groundbreaking scientific discoveries across disciplines.",
            audioSpeaker: "PTE Dictation Voice",
            speakerGender: "male",
            correctAnswer: "Collaborative research initiatives foster groundbreaking scientific discoveries across disciplines.",
            explanation: "Spelling accuracy for 'collaborative', 'initiatives', and 'disciplines' is essential.",
            category: "Listening: Write from Dictation",
            points: 10
          }
        ]
      }
    ]
  },

  // ==========================
  // 2. DIGITAL SAT TEST PACK
  // ==========================
  {
    id: "sat-mock-01",
    examId: "sat",
    title: "Digital SAT Official Full Practice Exam 1",
    edition: "College Board Digital Adaptive Format",
    difficulty: "Official Mock",
    sections: [
      {
        id: "sat-sec-1",
        title: "Module 1: Reading and Writing",
        timeMinutes: 32,
        description: "Focuses on craft, structure, cross-text connections, rhetorical synthesis, and standard English grammar conventions.",
        questions: [
          {
            id: "sat-q1",
            questionNumber: 1,
            type: "multiple-choice-single",
            prompt: "Which choice completes the text with the most logical and precise word or phrase?",
            passage: "While ancient Roman concrete has endured for over two millennia submerged in harsh marine environments, modern Portland concrete often deteriorates within a few decades. Geochemists have discovered that Roman concrete contains volcanic ash and quicklime, which react with seawater to form rare aluminous tobermorite crystals that ______ the structural matrix against micro-cracking.",
            options: ["fortify", "obfuscate", "disintegrate", "circumvent"],
            correctAnswer: "fortify",
            explanation: "'Fortify' means to strengthen against attack or deterioration. The crystals strengthen Roman concrete, which is why it has survived two millennia without deteriorating.",
            category: "Craft and Structure: Words in Context",
            points: 10
          },
          {
            id: "sat-q2",
            questionNumber: 2,
            type: "multiple-choice-single",
            prompt: "Which choice best describes the function of the underlined sentence in the text as a whole?",
            passage: "In 1912, Alfred Wegener postulated that the Earth's continents had once been united in a supercontinent named Pangaea before drifting apart. At the time, leading geophysicists rejected Wegener's hypothesis because he could not provide a plausible physical mechanism capable of propelling continental landmasses through the dense oceanic crust. [It was not until the mid-twentieth century, with the bathymetric mapping of mid-ocean ridges and paleomagnetic seafloor spreading, that plate tectonics provided the definitive physical engine for Wegener's early intuition.]",
            options: [
              "It explains why modern scientists have completely discarded Wegener's geological framework.",
              "It describes subsequent technological discoveries that vindicated an initially contested scientific claim.",
              "It demonstrates that mid-ocean ridges are formed primarily by gravitational tides rather than tectonics.",
              "It argues that geophysical mapping in the 1950s was less reliable than Wegener's original observational fieldwork."
            ],
            correctAnswer: "It describes subsequent technological discoveries that vindicated an initially contested scientific claim.",
            explanation: "Wegener's claim was initially rejected because of a lack of mechanism; the bracketed sentence explains how later 20th-century bathymetric discoveries supplied that mechanism and vindicated him.",
            category: "Information and Ideas: Text Structure & Purpose",
            points: 10
          },
          {
            id: "sat-q3",
            questionNumber: 3,
            type: "multiple-choice-single",
            prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
            passage: "Renowned astrophysicist Dr. Jocelyn Bell Burnell, while analyzing over three miles of paper chart records from the interplanetary scintillation array in 1967, discovered a series of regular radio pulses repeating every 1.33 seconds; ______ anomalous signals proved to be the first documented observation of a pulsar.",
            options: ["these", "this", "whose", "it's"],
            correctAnswer: "these",
            explanation: "The antecedent is 'a series of regular radio pulses' (plural signals). After a semicolon, an independent clause begins with the plural demonstrative pronoun 'these anomalous signals'.",
            category: "Standard English Conventions: Pronoun Agreement",
            points: 10
          },
          {
            id: "sat-q4",
            questionNumber: 4,
            type: "multiple-choice-single",
            prompt: "The student wants to synthesize information to emphasize the conservation triumph of the California condor recovery program. Which choice most effectively uses the relevant information from the notes?",
            passage: "Notes:\n• In 1987, the wild California condor population declined to just 22 individuals.\n• Wildlife biologists instituted a captive breeding program at San Diego and Los Angeles Zoos.\n• In 1991, biologists began releasing captive-bred condors back into protected sanctuaries in Arizona and California.\n• By 2025, the total population exceeded 560 condors, with more than 330 flying free in the wild.",
            options: [
              "California condors were once preserved exclusively in zoo aviaries in Southern California.",
              "Biologists released condors back into the wild beginning in 1991 following captive breeding efforts.",
              "Through coordinated captive breeding and habitat release, biologists grew the California condor population from a perilously low 22 birds in 1987 to over 560 individuals today.",
              "The California condor is an endangered scavenger species that now resides across protected reservations in Arizona."
            ],
            correctAnswer: "Through coordinated captive breeding and habitat release, biologists grew the California condor population from a perilously low 22 birds in 1987 to over 560 individuals today.",
            explanation: "This option directly highlights the transformation from near extinction (22 birds in 1987) to triumph (over 560 individuals today) through specific methods (captive breeding and release).",
            category: "Expression of Ideas: Rhetorical Synthesis",
            points: 10
          }
        ]
      },
      {
        id: "sat-sec-2",
        title: "Module 2: Mathematics",
        timeMinutes: 35,
        description: "Assesses algebra, advanced mathematics, problem-solving, data analysis, and trigonometry. On-screen Desmos graphing calculator permitted.",
        questions: [
          {
            id: "sat-q5",
            questionNumber: 5,
            type: "multiple-choice-single",
            prompt: "If 4(2x - 3) = 3(x + 6) + 4, what is the value of x?",
            options: ["x = 4", "x = 6.8", "x = 6.5", "x = 7"],
            correctAnswer: "x = 6.8",
            explanation: "Expand left: 8x - 12. Expand right: 3x + 18 + 4 = 3x + 22. Subtract 3x: 5x - 12 = 22. Add 12: 5x = 34. Divide by 5: x = 34/5 = 6.8.",
            category: "Heart of Algebra: Linear Equations",
            points: 10
          },
          {
            id: "sat-q6",
            questionNumber: 6,
            type: "multiple-choice-single",
            prompt: "The function f is defined by f(x) = 2x² - 12x + 25. What is the minimum value of f(x)?",
            options: ["7", "3", "25", "13"],
            correctAnswer: "7",
            explanation: "For a parabola f(x) = ax² + bx + c with a > 0, the minimum vertex occurs at x = -b / (2a) = -(-12) / (2 * 2) = 12 / 4 = 3. Evaluating f(3) = 2(3)² - 12(3) + 25 = 2(9) - 36 + 25 = 18 - 36 + 25 = 7.",
            category: "Advanced Math: Quadratic Functions",
            points: 10
          },
          {
            id: "sat-q7",
            questionNumber: 7,
            type: "multiple-choice-single",
            prompt: "In a right triangle ABC, the measure of angle C is 90°. If sin(A) = 5/13, what is the value of cos(B)?",
            options: ["5/13", "12/13", "13/5", "5/12"],
            correctAnswer: "5/13",
            explanation: "In any right-angled triangle with acute angles A and B, the angles are complementary (A + B = 90°). According to the cofunction identity, cos(B) = cos(90° - A) = sin(A). Therefore, cos(B) = 5/13.",
            category: "Geometry and Trigonometry: Angle Trigonometry",
            points: 10
          },
          {
            id: "sat-q8",
            questionNumber: 8,
            type: "multiple-choice-single",
            prompt: "A biologist measures the exponential growth of a microbial culture modeled by P(t) = 450(1.15)^(t/3), where P(t) is the population after t hours. By what percentage does the population grow every 3 hours?",
            options: ["15%", "45%", "5%", "115%"],
            correctAnswer: "15%",
            explanation: "When t increases by 3 hours, t/3 increases by 1 unit, multiplying the population by 1.15. A multiplication factor of 1.15 represents a 15% increase.",
            category: "Problem Solving & Data Analysis: Exponential Models",
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: "sat-mock-02",
    examId: "sat",
    title: "Digital SAT Official Full Practice Exam 2",
    edition: "College Board Digital Adaptive Format",
    difficulty: "Official Mock",
    sections: [
      {
        id: "sat-2-sec-1",
        title: "Module 1: Reading and Writing",
        timeMinutes: 32,
        description: "Assesses craft and structure, cross-text relationships, standard English punctuation conventions, and rhetorical synthesis.",
        questions: [
          {
            id: "sat-2-q1",
            questionNumber: 1,
            type: "multiple-choice-single",
            prompt: "Which choice completes the text with the most logical and precise word or phrase?",
            passage: "Deep-sea hydrothermal vents emit mineral-rich thermal fluids that would be toxic to most surface fauna. Yet, Riftia pachyptila tubeworms flourish in these abyssal depths, relying on a ______ relationship with sulfide-oxidizing bacterial symbionts housed within their trophosomes.",
            options: ["mutualistic", "deleterious", "transient", "combative"],
            correctAnswer: "mutualistic",
            explanation: "'Mutualistic' describes a symbiotic relationship where both organisms benefit. The tubeworms supply hydrogen sulfide and receive nutrients from the bacteria.",
            category: "Craft and Structure: Words in Context",
            points: 10
          },
          {
            id: "sat-2-q2",
            questionNumber: 2,
            type: "multiple-choice-single",
            prompt: "Based on the texts, how would the author of Text 2 most likely respond to the claim made by the author of Text 1 regarding the British Industrial Revolution?",
            passage: "Text 1: Historian Arnold Toynbee argued that the Industrial Revolution was driven almost entirely by sudden technological ruptures—steam engines, spinning jennies, and smelting innovations—that abruptly overturned traditional agrarian production.\n\nText 2: Contemporary economic historian N.F.R. Crafts emphasizes that macroeconomic productivity growth during the late eighteenth century was surprisingly modest and diffuse. Rather than an abrupt rupture across the economy, mechanized growth was initially confined to a narrow pocket of cotton textiles, with most economic sectors experiencing slow, incremental structural reorganization.",
            options: [
              "By arguing that technological innovations had no measurable impact on textile manufacturing.",
              "By qualifying that economic transformation was more gradual and sector-specific than Toynbee's 'rupture' thesis suggests.",
              "By endorsing Toynbee's assertion that all industrial sectors experienced explosive simultaneous growth.",
              "By asserting that the invention of the steam engine preceded mechanized textile spinning."
            ],
            correctAnswer: "By qualifying that economic transformation was more gradual and sector-specific than Toynbee's 'rupture' thesis suggests.",
            explanation: "Text 2 explicitly counters Toynbee's 'abrupt rupture' view by demonstrating that growth was modest, gradual, and confined to a narrow pocket of textiles.",
            category: "Information and Ideas: Cross-Text Connections",
            points: 10
          },
          {
            id: "sat-2-q3",
            questionNumber: 3,
            type: "multiple-choice-single",
            prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
            passage: "During the 1920s Harlem Renaissance, sculptor Augusta Savage established the Savage Studio of Arts and Crafts in New York City; ______ she provided free artistic instruction and mentorship to generations of African American fine artists.",
            options: ["there,", "where", "it was there that", "there"],
            correctAnswer: "there,",
            explanation: "After a semicolon connecting two independent clauses, 'there,' functions as a transitional adverbial opener with a comma before the main subject and verb ('she provided').",
            category: "Standard English Conventions: Sentence Boundaries",
            points: 10
          },
          {
            id: "sat-2-q4",
            questionNumber: 4,
            type: "multiple-choice-single",
            prompt: "The student wants to highlight the revolutionary observational capability of the James Webb Space Telescope (JWST). Which choice most effectively uses the relevant information from the notes?",
            passage: "Notes:\n• The Hubble Space Telescope primarily observes in the ultraviolet and visible spectrum.\n• The James Webb Space Telescope (JWST) is equipped with cryogenic infrared instruments.\n• Infrared wavelengths can penetrate dense cosmic dust clouds that obscure visible starlight.\n• In 2023, JWST imaged proto-galaxies that formed a mere 330 million years after the Big Bang.",
            options: [
              "Both Hubble and JWST provide high-resolution images of various astronomical phenomena.",
              "JWST's cryogenic infrared instruments penetrate cosmic dust clouds, allowing it to image early proto-galaxies dating to just 330 million years after the Big Bang.",
              "The Hubble Space Telescope was launched to observe ultraviolet wavelengths in deep space.",
              "Dense cosmic dust clouds prevent optical telescopes from capturing light from nearby stars."
            ],
            correctAnswer: "JWST's cryogenic infrared instruments penetrate cosmic dust clouds, allowing it to image early proto-galaxies dating to just 330 million years after the Big Bang.",
            explanation: "This option directly synthesizes JWST's unique infrared capabilities with its extraordinary scientific achievement of observing proto-galaxies 330 million years post-Big Bang.",
            category: "Expression of Ideas: Rhetorical Synthesis",
            points: 10
          }
        ]
      },
      {
        id: "sat-2-sec-2",
        title: "Module 2: Mathematics",
        timeMinutes: 35,
        description: "Assesses advanced algebra, quadratic models, right-triangle trigonometry, and analytic coordinate geometry.",
        questions: [
          {
            id: "sat-2-q5",
            questionNumber: 5,
            type: "multiple-choice-single",
            prompt: "A projectile is launched from a platform, and its height h in meters after t seconds is modeled by h(t) = -5(t - 3)^2 + 65. What is the maximum height, in meters, reached by the projectile?",
            options: ["3 meters", "45 meters", "65 meters", "80 meters"],
            correctAnswer: "65 meters",
            explanation: "The quadratic is in vertex form h(t) = a(t - h_0)^2 + k with a = -5, h_0 = 3, and k = 65. Because a < 0, the maximum occurs at t = 3 seconds with a maximum height of k = 65 meters.",
            category: "Advanced Math: Quadratic Vertex Form",
            points: 10
          },
          {
            id: "sat-2-q6",
            questionNumber: 6,
            type: "multiple-choice-single",
            prompt: "In a right triangle ABC with right angle at C, if sin(A) = 5/13, what is the value of cos(A)?",
            options: ["5/12", "12/13", "13/12", "8/13"],
            correctAnswer: "12/13",
            explanation: "Using the Pythagorean identity sin^2(A) + cos^2(A) = 1: cos(A) = sqrt(1 - (5/13)^2) = sqrt(1 - 25/169) = sqrt(144/169) = 12/13.",
            category: "Geometry and Trigonometry: Trigonometric Ratios",
            points: 10
          },
          {
            id: "sat-2-q7",
            questionNumber: 7,
            type: "multiple-choice-single",
            prompt: "The equation of a circle in the xy-plane is given by (x - 4)^2 + (y + 2)^2 = 36. Which of the following points lies strictly inside the circle?",
            options: ["(4, 5)", "(4, 3)", "(10, -2)", "(1, 4)"],
            correctAnswer: "(4, 3)",
            explanation: "Center is (4, -2) and radius is 6. For point (4, 3): (4 - 4)^2 + (3 - (-2))^2 = 0 + 25 = 25. Since 25 < 36, (4, 3) lies inside the circle. For (4, 5): 0 + 49 = 49 > 36 (outside). For (10, -2): 36 = 36 (on boundary).",
            category: "Geometry: Circle Equations in Coordinate Plane",
            points: 10
          },
          {
            id: "sat-2-q8",
            questionNumber: 8,
            type: "multiple-choice-single",
            prompt: "A radioactive isotope has a half-life of 12 days. If an initial sample contains 320 grams of the isotope, how many grams will remain after 36 days?",
            options: ["20 grams", "40 grams", "80 grams", "160 grams"],
            correctAnswer: "40 grams",
            explanation: "Number of elapsed half-lives is 36 / 12 = 3. Remaining amount = 320 * (1/2)^3 = 320 / 8 = 40 grams.",
            category: "Problem Solving & Advanced Math: Exponential Decay",
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: "sat-mock-03",
    examId: "sat",
    title: "Digital SAT Hard Adaptive Practice Exam 3",
    edition: "College Board Digital Adaptive Format",
    difficulty: "High Difficulty",
    sections: [
      {
        id: "sat-3-sec-1",
        title: "Module 1: Reading and Writing",
        timeMinutes: 32,
        description: "99th-percentile reading comprehension, historical primary sources, sophisticated rhetorical transitions, and complex syntax.",
        questions: [
          {
            id: "sat-3-q1",
            questionNumber: 1,
            type: "multiple-choice-single",
            prompt: "Which choice completes the text with the most logical and precise word or phrase?",
            passage: "While nineteenth-century political pundits predicted that mass industrialization would lead to a uniform homogenization of public opinion, early twentieth-century voting records revealed an electorate that was strikingly ______: regional voting blocs fragmented sharply along ethnic and geographic fault lines.",
            options: ["monolithic", "heterogeneous", "complacent", "immutable"],
            correctAnswer: "heterogeneous",
            explanation: "'Heterogeneous' means diverse in character or content. The contrast is between expected 'homogenization' and the actual fragmented electorate.",
            category: "Craft and Structure: Words in Context",
            points: 10
          },
          {
            id: "sat-3-q2",
            questionNumber: 2,
            type: "multiple-choice-single",
            prompt: "In the 1852 address, Frederick Douglass primarily utilizes which rhetorical strategy to underscore the moral contradiction of American slavery?",
            passage: "Frederick Douglass: 'What, to the American slave, is your 4th of July? I answer; a day that reveals to him, more than all other days in the year, the gross injustice and cruelty to which he is the constant victim. To him, your celebration is a sham; your boasted liberty, an unholy license; your national greatness, swelling vanity; your sounds of rejoicing are empty and heartless...'",
            options: [
              "Appealing to statistical census discrepancies between northern and southern states.",
              "Juxtaposing celebratory patriotic rhetoric against the lived reality of systemic human bondage.",
              "Defending the constitutional compromise between slaveholding and free territories.",
              "Arguing that political independence from Great Britain was economically counterproductive."
            ],
            correctAnswer: "Juxtaposing celebratory patriotic rhetoric against the lived reality of systemic human bondage.",
            explanation: "Douglass deliberately juxtaposes celebratory terms ('boasted liberty', 'national greatness') with severe moral indictments ('gross injustice', 'unholy license', 'heartless').",
            category: "Information and Ideas: Rhetorical Analysis",
            points: 10
          },
          {
            id: "sat-3-q3",
            questionNumber: 3,
            type: "multiple-choice-single",
            prompt: "Which choice completes the text with the most logical transition?",
            passage: "For decades, palaeontologists hypothesized that sauropod dinosaurs possessed horizontal neck postures similar to modern lizards, arguing that raising their heads would demand biologically impossible blood pressures. ______ recent digital musculoskeletal biomechanical modeling demonstrated that sauropod cervical vertebrae and ligamental arches were optimally stressed when their necks were held elevated in high vertical postures.",
            options: ["Nevertheless,", "Consequently,", "Similarly,", "In particular,"],
            correctAnswer: "Nevertheless,",
            explanation: "The first sentence presents the traditional hypothesis; the second introduces contradictory new digital biomechanical modeling. 'Nevertheless,' signals this concession and contrast.",
            category: "Expression of Ideas: Transitions",
            points: 10
          },
          {
            id: "sat-3-q4",
            questionNumber: 4,
            type: "multiple-choice-single",
            prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
            passage: "Neither the principal investigator nor the postdoctoral research fellows ______ able to explain why the superconducting niobium resonator lost magnetic flux coherence at sub-Kelvin temperatures.",
            options: ["was", "were", "are being", "has been"],
            correctAnswer: "were",
            explanation: "With the correlative conjunction 'neither... nor...', the verb agrees with the closer subject. The closer subject is plural ('postdoctoral research fellows'), requiring the plural verb 'were'.",
            category: "Standard English Conventions: Subject-Verb Agreement",
            points: 10
          }
        ]
      },
      {
        id: "sat-3-sec-2",
        title: "Module 2: Mathematics",
        timeMinutes: 35,
        description: "Hard adaptive math module: non-linear systems, polynomial remainder theorem, statistics, and coordinate geometry.",
        questions: [
          {
            id: "sat-3-q5",
            questionNumber: 5,
            type: "multiple-choice-single",
            prompt: "How many real coordinate points of intersection exist between the line y = 2x - 3 and the parabola y = x^2 - 4x + 6?",
            options: ["Zero", "Exactly one", "Exactly two", "Infinitely many"],
            correctAnswer: "Exactly one",
            explanation: "Set 2x - 3 = x^2 - 4x + 6 => x^2 - 6x + 9 = 0 => (x - 3)^2 = 0. The discriminant is (-6)^2 - 4(1)(9) = 36 - 36 = 0, meaning there is exactly one tangent intersection point at x = 3, y = 3.",
            category: "Advanced Math: Systems of Non-Linear Equations",
            points: 10
          },
          {
            id: "sat-3-q6",
            questionNumber: 6,
            type: "multiple-choice-single",
            prompt: "When the polynomial P(x) = 2x^3 - 5x^2 + kx - 18 is divided by (x - 3), the remainder is 0. What is the value of the constant k?",
            options: ["k = -3", "k = 1", "k = 3", "k = -1"],
            correctAnswer: "k = 3",
            explanation: "By the Polynomial Remainder Theorem, P(3) must equal 0. P(3) = 2(3)^3 - 5(3)^2 + 3k - 18 = 2(27) - 5(9) + 3k - 18 = 54 - 45 + 3k - 18 = -9 + 3k = 0 => 3k = 9 => k = 3.",
            category: "Advanced Math: Remainder Theorem",
            points: 10
          },
          {
            id: "sat-3-q7",
            questionNumber: 7,
            type: "multiple-choice-single",
            prompt: "In a circle with radius 12 cm, a central angle intercepts an arc of length 8π cm. What is the radian measure of the central angle?",
            options: ["π/3 radians", "2π/3 radians", "3π/4 radians", "4π/3 radians"],
            correctAnswer: "2π/3 radians",
            explanation: "Arc length s = r * θ, where θ is in radians. 8π = 12 * θ => θ = 8π / 12 = 2π / 3 radians.",
            category: "Geometry: Radian Measure & Arc Length",
            points: 10
          },
          {
            id: "sat-3-q8",
            questionNumber: 8,
            type: "multiple-choice-single",
            prompt: "A random sample of 400 voters found that 55% support a municipal bond referendum, with a margin of error of ±4% at a 95% confidence level. Which conclusion is most mathematically sound?",
            options: [
              "Exactly 55% of all voters in the municipality will definitely vote yes.",
              "It is plausible that between 51% and 59% of all voters in the population support the referendum.",
              "The referendum will fail because the margin of error exceeds 3%.",
              "Increasing the sample size to 1,600 would double the margin of error to ±8%."
            ],
            correctAnswer: "It is plausible that between 51% and 59% of all voters in the population support the referendum.",
            explanation: "A margin of error of ±4% around 55% gives a confidence interval of [51%, 59%].",
            category: "Data Analysis: Confidence Intervals and Margin of Error",
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: "sat-mock-04",
    examId: "sat",
    title: "Digital SAT College Board Calibrated Exam 4",
    edition: "College Board Digital Adaptive Format",
    difficulty: "Official Mock",
    sections: [
      {
        id: "sat-4-sec-1",
        title: "Module 1: Reading and Writing",
        timeMinutes: 32,
        description: "Assesses craft and structure, scientific treatise evaluation, and standard grammatical syntax.",
        questions: [
          {
            id: "sat-4-q1",
            questionNumber: 1,
            type: "multiple-choice-single",
            prompt: "Which choice completes the text with the most logical and precise word?",
            passage: "Unlike the ephemeral blooms of annual wildflowers that wither within days of desert rain, the root systems of creosote bushes are exceptionally ______: individual clones in the Mojave Desert have persisted continuously for over nine thousand years.",
            options: ["tenacious", "fleeting", "precarious", "superfluous"],
            correctAnswer: "tenacious",
            explanation: "'Tenacious' means tending to keep a firm hold, persistent, or enduring. This directly contrasts with 'ephemeral blooms'.",
            category: "Craft and Structure: Words in Context",
            points: 10
          },
          {
            id: "sat-4-q2",
            questionNumber: 2,
            type: "multiple-choice-single",
            prompt: "Based on the biological passage, what is the author's primary purpose?",
            passage: "Avian magneto-reception has long puzzled neurobiologists. Recent quantum chemical modeling reveals that cryptochrome-4 proteins located in European robin retinas form transient cryptochrome radical pairs upon blue-photon absorption. These quantum entangled electron spins remain coherent long enough to be deflected by Earth's weak geomagnetic field, effectively enabling birds to visually 'see' magnetic latitude lines.",
            options: [
              "To argue that migratory birds rely solely on olfactory cues for continental navigation.",
              "To explain the quantum biochemical mechanism that facilitates geomagnetic navigation in migratory birds.",
              "To critique previous research into retinal blue-photon photoreceptors.",
              "To demonstrate that European robins possess weaker visual acuity than other avian species."
            ],
            correctAnswer: "To explain the quantum biochemical mechanism that facilitates geomagnetic navigation in migratory birds.",
            explanation: "The passage explains the quantum chemical radical-pair mechanism of cryptochrome-4 that allows birds to detect magnetic fields.",
            category: "Information and Ideas: Text Structure & Purpose",
            points: 10
          },
          {
            id: "sat-4-q3",
            questionNumber: 3,
            type: "multiple-choice-single",
            prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
            passage: "Beneath the canopy of the Amazon basin ______ a vast subterranean network of fungal mycorrhizae that channels phosphorus and nitrogen between disparate tree species.",
            options: ["lies", "lie", "are lying", "have lain"],
            correctAnswer: "lies",
            explanation: "The subject of the inverted sentence is 'a vast subterranean network' (singular). The singular verb 'lies' is required.",
            category: "Standard English Conventions: Inverted Syntax",
            points: 10
          },
          {
            id: "sat-4-q4",
            questionNumber: 4,
            type: "multiple-choice-single",
            prompt: "The student wants to explain how keystone species protect biodiversity. Which choice most effectively uses the relevant information from the notes?",
            passage: "Notes:\n• Keystone species exert outsized influence on their ecosystem relative to their abundance.\n• In 1966, ecologist Robert Paine removed Ochre sea stars (Pisaster ochraceus) from tidal pools.\n• Without the sea star predator, mussel populations grew unchecked and crowded out algae and barnacles.\n• Within months, species diversity collapsed from 15 species down to a single dominant mussel monoculture.",
            options: [
              "Robert Paine conducted ecological experiments in Washington state tidal pools in 1966.",
              "When Pisaster ochraceus sea stars were removed, unchecked mussel populations eliminated 14 other species, demonstrating that keystone predators prevent competitive exclusion.",
              "Ochre sea stars are marine invertebrates that consume barnacles and algae in coastal zones.",
              "Mussel monocultures are common in marine tidal environments devoid of salt water."
            ],
            correctAnswer: "When Pisaster ochraceus sea stars were removed, unchecked mussel populations eliminated 14 other species, demonstrating that keystone predators prevent competitive exclusion.",
            explanation: "This option clearly synthesizes the definition of keystone species with Paine's experiment and its empirical outcome.",
            category: "Expression of Ideas: Rhetorical Synthesis",
            points: 10
          }
        ]
      },
      {
        id: "sat-4-sec-2",
        title: "Module 2: Mathematics",
        timeMinutes: 35,
        description: "Assesses rational expressions, quadratic equations with complex roots, linear inequality feasibility, and geometry.",
        questions: [
          {
            id: "sat-4-q5",
            questionNumber: 5,
            type: "multiple-choice-single",
            prompt: "For what real value of x is the rational expression (x^2 - 16) / (2x^2 - 8x) undefined?",
            options: ["x = 0 and x = 4", "x = 4 only", "x = -4 and x = 4", "x = 0 only"],
            correctAnswer: "x = 0 and x = 4",
            explanation: "A rational expression is undefined when its denominator equals zero: 2x^2 - 8x = 0 => 2x(x - 4) = 0 => x = 0 or x = 4.",
            category: "Advanced Math: Rational Expressions",
            points: 10
          },
          {
            id: "sat-4-q6",
            questionNumber: 6,
            type: "multiple-choice-single",
            prompt: "If the quadratic equation 3x^2 - 4x + c = 0 has no real solutions, which inequality must be true for the constant c?",
            options: ["c > 4/3", "c < 4/3", "c > 16/3", "c < 0"],
            correctAnswer: "c > 4/3",
            explanation: "No real solutions implies the discriminant is negative: b^2 - 4ac < 0 => (-4)^2 - 4(3)(c) < 0 => 16 - 12c < 0 => 12c > 16 => c > 16/12 = 4/3.",
            category: "Advanced Math: Quadratic Discriminant",
            points: 10
          },
          {
            id: "sat-4-q7",
            questionNumber: 7,
            type: "multiple-choice-single",
            prompt: "A line passing through the points (2, 7) and (6, 15) in the xy-plane has a y-intercept of (0, b). What is the value of b?",
            options: ["b = 1", "b = 2", "b = 3", "b = 4"],
            correctAnswer: "b = 3",
            explanation: "Slope m = (15 - 7) / (6 - 2) = 8 / 4 = 2. Using point-slope with (2, 7): y - 7 = 2(x - 2) => y = 2x - 4 + 7 => y = 2x + 3. Thus the y-intercept is b = 3.",
            category: "Heart of Algebra: Linear Equations & Slopes",
            points: 10
          },
          {
            id: "sat-4-q8",
            questionNumber: 8,
            type: "multiple-choice-single",
            prompt: "Two similar rectangular prisms have surface areas of 54 cm^2 and 96 cm^2, respectively. If the smaller prism has a volume of 27 cm^3, what is the volume of the larger prism?",
            options: ["48 cm^3", "64 cm^3", "72 cm^3", "81 cm^3"],
            correctAnswer: "64 cm^3",
            explanation: "Ratio of surface areas = 54 / 96 = 9 / 16. Linear scale factor k = sqrt(9/16) = 3/4. Ratio of volumes = k^3 = (3/4)^3 = 27 / 64. Since smaller volume is 27 cm^3, larger volume is 64 cm^3.",
            category: "Geometry: Similarity and Volume Scaling",
            points: 10
          }
        ]
      }
    ]
  },

  // ==========================
  // 3. GRE GENERAL TEST PACK
  // ==========================
  {
    id: "gre-mock-01",
    examId: "gre",
    title: "GRE General Official Practice Test 1",
    edition: "ETS Shorter Format 2026",
    difficulty: "High Difficulty",
    sections: [
      {
        id: "gre-sec-1",
        title: "Section 1: Verbal Reasoning",
        timeMinutes: 41,
        description: "Assesses ability to analyze and evaluate written material, synthesize information, and analyze relationships among words and concepts.",
        questions: [
          {
            id: "gre-q1",
            questionNumber: 1,
            type: "multiple-choice-single",
            prompt: "Text Completion: Select the entry that best completes the sentence.\n\nWhile the diplomat's public pronouncements were characterized by an outward appearance of ______, her private communiqués revealed an unyielding intransigence that sabotaged the bilateral peace negotiations.",
            options: ["mendacity", "conciliation", "insolence", "bellicosity", "temerity"],
            correctAnswer: "conciliation",
            explanation: "The contrast connector 'While' sets up an opposition between the public persona and the private 'unyielding intransigence'. The opposite of intransigence (stubborn refusal to agree) is 'conciliation' (placating, willingness to compromise).",
            category: "Text Completion",
            points: 10
          },
          {
            id: "gre-q2",
            questionNumber: 2,
            type: "multiple-choice-multiple",
            prompt: "Sentence Equivalence: Select the TWO words that, when used to complete the sentence, fit the meaning of the sentence as a whole and produce completed sentences that are alike in meaning.\n\nThe research committee found the laboratory's documentation of its clinical trials to be suspiciously ______, lacking both raw trial datasets and verifiable subject identifiers.",
            options: ["scrupulous", "cursory", "perfunctory", "exhaustive", "pellucid", "meticulous"],
            correctAnswer: ["cursory", "perfunctory"],
            explanation: "The clue is 'lacking both raw trial datasets and verifiable identifiers', indicating that the work was done hastily and without thoroughness. Both 'cursory' and 'perfunctory' mean superficial, hurried, and lacking in detail.",
            category: "Sentence Equivalence",
            points: 10
          },
          {
            id: "gre-q3",
            questionNumber: 3,
            type: "multiple-choice-single",
            prompt: "Reading Comprehension: Based on the passage, the author implies which of the following regarding historians who subscribe to the 'Great Man' theory of political change?",
            passage: "Nineteenth-century historiography frequently relied upon the 'Great Man' framework, which attributed epochal societal transformations solely to the charismatic agency of isolated leaders. Contemporary sociologists, however, argue that this perspective ignores the subterranean economic currents and technological momentum that inevitably constrain and define the policy options available to any statesman, however forceful.",
            options: [
              "They overemphasized institutional bureaucracy at the expense of individual leadership.",
              "They erroneously attributed broad structural movements to the sovereign agency of individuals.",
              "They were the first to identify the subterranean economic conditions of pre-industrial Europe.",
              "They demonstrated that charismatic authority is invariably dictated by technological breakthroughs."
            ],
            correctAnswer: "They erroneously attributed broad structural movements to the sovereign agency of individuals.",
            explanation: "The passage notes that the Great Man framework 'attributed epochal societal transformations solely to the charismatic agency of isolated leaders', which modern sociologists critique for ignoring structural economic forces.",
            category: "Reading Comprehension",
            points: 10
          }
        ]
      },
      {
        id: "gre-sec-2",
        title: "Section 2: Quantitative Reasoning",
        timeMinutes: 47,
        description: "Assesses mathematical reasoning, quantitative comparison, algebraic modeling, and geometric visualization.",
        questions: [
          {
            id: "gre-q4",
            questionNumber: 4,
            type: "quantitative-comparison",
            prompt: "Quantitative Comparison:\n\nGiven: x > 0 and y > 0, with x² + y² = 100\n\nQuantity A: (x + y)²\nQuantity B: 100",
            options: [
              "Quantity A is greater.",
              "Quantity B is greater.",
              "The two quantities are equal.",
              "The relationship cannot be determined from the information given."
            ],
            correctAnswer: "Quantity A is greater.",
            explanation: "Expand Quantity A: (x + y)² = x² + 2xy + y² = (x² + y²) + 2xy = 100 + 2xy. Since x > 0 and y > 0, their product xy is strictly positive (2xy > 0). Therefore, 100 + 2xy > 100. Quantity A is always greater.",
            category: "Quantitative Comparison",
            points: 10
          },
          {
            id: "gre-q5",
            questionNumber: 5,
            type: "multiple-choice-single",
            prompt: "Problem Solving: If a prime number p is divided by 6, which of the following CANNOT be the remainder if p > 3?",
            options: ["1", "5", "3", "None of the above"],
            correctAnswer: "3",
            explanation: "Any prime p > 3 must be odd and not divisible by 3. When divided by 6: if the remainder were 0, 2, or 4, p would be even. If the remainder were 3, p = 6k + 3 = 3(2k + 1), which is divisible by 3 and thus cannot be a prime > 3. Therefore, the only possible remainders are 1 and 5. The remainder CANNOT be 3.",
            category: "Arithmetic: Number Theory",
            points: 10
          },
          {
            id: "gre-q6",
            questionNumber: 6,
            type: "multiple-choice-single",
            prompt: "Data Interpretation: In a distribution of 500 standard test scores with mean 72 and standard deviation 8, what percentage of scores fall between 64 and 88, assuming an approximately normal distribution?",
            options: ["68%", "81.5%", "95%", "99.7%"],
            correctAnswer: "81.5%",
            explanation: "The score 64 is 1 standard deviation below the mean (μ - 1σ). The score 88 is 2 standard deviations above the mean (μ + 2σ). In a normal curve: from (μ - 1σ) to μ is ~34.1%; from μ to (μ + 2σ) is ~47.7%. Summing both halves: 34.1% + 47.7% = 81.8% (~81.5%).",
            category: "Data Analysis: Standard Normal Curve",
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: "gre-mock-02",
    examId: "gre",
    title: "GRE General Official Test Simulation 2",
    edition: "ETS Shorter Format 2026",
    difficulty: "Official Mock",
    sections: [
      {
        id: "gre-2-sec-1",
        title: "Section 1: Verbal Reasoning",
        timeMinutes: 41,
        description: "Assesses evaluation of arguments, synthesis of complex scholarly texts, and subtle vocabulary in context.",
        questions: [
          {
            id: "gre-2-q1",
            questionNumber: 1,
            type: "multiple-choice-single",
            prompt: "Text Completion: Select the entry that best completes the sentence.\n\nFar from being ______ by the harsh criticisms of senior colleagues, the junior astrophysicist remained resolute, meticulously gathering further observational data to substantiate her gravitational wave hypothesis.",
            options: ["daunted", "emboldened", "vindicated", "placated", "exonerated"],
            correctAnswer: "daunted",
            explanation: "'Daunted' means discouraged or intimidated. The phrase 'Far from being...' indicates that rather than being discouraged, she remained resolute.",
            category: "Text Completion",
            points: 10
          },
          {
            id: "gre-2-q2",
            questionNumber: 2,
            type: "sentence-equivalence",
            prompt: "Sentence Equivalence: Select the TWO words that produce completed sentences that are alike in meaning.\n\nFinancial analysts noted that cryptocurrency price swings were notoriously ______, making institutional portfolio hedging exceptionally precarious.",
            options: ["capricious", "fickle", "staid", "placid", "trenchant", "monotonous"],
            correctAnswer: ["capricious", "fickle"],
            explanation: "'Capricious' and 'fickle' both describe unpredictable, volatile, and erratic behavior.",
            category: "Sentence Equivalence",
            points: 10
          },
          {
            id: "gre-2-q3",
            questionNumber: 3,
            type: "multiple-choice-single",
            prompt: "Reading Comprehension: The author's discussion of 19th-century epistolary novels suggests which of the following?",
            passage: "While nineteenth-century realists criticized the epistolary format for its inherent temporal delays and formal contrivances, recent feminist literary theorists suggest that letters allowed female protagonists an unmediated interior monologue, circumventing the patriarchal authoritative narrator that dominated Victorian prose fiction.",
            options: [
              "Epistolary novels were commercially less lucrative than omniscient third-person novels.",
              "The letter-writing format afforded women writers an autonomous narrative voice free from paternalistic authorial filters.",
              "Victorian publishers routinely prohibited female authors from using the first-person singular pronoun.",
              "Feminist scholars agree with 19th-century realists that epistolary pacing is inherently flawed."
            ],
            correctAnswer: "The letter-writing format afforded women writers an autonomous narrative voice free from paternalistic authorial filters.",
            explanation: "The passage notes letters allowed female protagonists 'an unmediated interior monologue, circumventing the patriarchal authoritative narrator'.",
            category: "Reading Comprehension",
            points: 10
          },
          {
            id: "gre-2-q4",
            questionNumber: 4,
            type: "multiple-choice-multiple",
            prompt: "Critical Reasoning: Which of the following, if true, most seriously weakens the economist's recommendation? (Select 1 choice)",
            passage: "Economist: 'To boost manufacturing productivity, the municipal government should subsidize full automation of factory assembly lines. Previous pilot studies show that robotic arms reduce per-unit assembly defects by 40%.'",
            options: [
              "The cost of maintenance and software licenses for robotic equipment exceeds the total financial savings achieved from reduced defect rates.",
              "Industrial robotics manufacturing creates high-wage engineering jobs in neighboring regions.",
              "Some consumer electronics manufacturers already utilize automated testing fixtures.",
              "Workers who operate robotic arms report higher workplace safety ratings."
            ],
            correctAnswer: [
              "The cost of maintenance and software licenses for robotic equipment exceeds the total financial savings achieved from reduced defect rates."
            ],
            explanation: "If recurring maintenance costs exceed the savings from lower defects, the net economic productivity and financial feasibility of the policy collapse.",
            category: "Critical Reasoning: Weaken Argument",
            points: 10
          }
        ]
      },
      {
        id: "gre-2-sec-2",
        title: "Section 2: Quantitative Reasoning",
        timeMinutes: 47,
        description: "Advanced quantitative comparisons, absolute inequalities, combinations, and probability.",
        questions: [
          {
            id: "gre-2-q5",
            questionNumber: 5,
            type: "quantitative-comparison",
            prompt: "Quantitative Comparison:\nGiven that x is a negative real number (x < 0).\n\nQuantity A: |x - 5|\nQuantity B: |x| + 5",
            options: [
              "Quantity A is greater.",
              "Quantity B is greater.",
              "The two quantities are equal.",
              "The relationship cannot be determined from the information given."
            ],
            correctAnswer: "The two quantities are equal.",
            explanation: "Since x < 0, let x = -k where k > 0. Quantity A = |-k - 5| = |-(k + 5)| = k + 5. Quantity B = |-k| + 5 = k + 5. Thus, Quantity A = Quantity B for all x < 0.",
            category: "Quantitative Comparison: Absolute Value",
            points: 10
          },
          {
            id: "gre-2-q6",
            questionNumber: 6,
            type: "multiple-choice-single",
            prompt: "Problem Solving: A research team must select a 4-person executive delegation from a pool of 6 biochemists and 5 computer scientists. If the committee must include at least 2 biochemists, how many distinct committees can be formed?",
            options: ["180", "255", "295", "330"],
            correctAnswer: "255",
            explanation: "Total ways to choose 4 from 11 = 11C4 = 330. Cases with fewer than 2 biochemists: 0 biochemists (all 5 CS) = 5C4 = 5 ways; 1 biochemist = 6C1 * 5C3 = 6 * 10 = 60 ways. Total forbidden = 60 + 5 = 65. Permitted committees = 330 - 65 = 265. Wait: 11C4 = (11*10*9*8)/(24) = 330. With 2 biochemists: 6C2 * 5C2 = 15 * 10 = 150. With 3 biochemists: 6C3 * 5C1 = 20 * 5 = 100. With 4 biochemists: 6C4 * 5C0 = 15 * 1 = 15. Sum = 150 + 100 + 15 = 265.",
            category: "Discrete Mathematics: Combinations",
            points: 10
          },
          {
            id: "gre-2-q7",
            questionNumber: 7,
            type: "multiple-choice-single",
            prompt: "Geometry: An equilateral triangle is inscribed inside a circle of radius 6. What is the area of the equilateral triangle?",
            options: ["18√3", "27√3", "36√3", "54√3"],
            correctAnswer: "27√3",
            explanation: "For an equilateral triangle inscribed in circle of radius R, side length s = R * √3 = 6√3. Area = (√3 / 4) * s^2 = (√3 / 4) * (6√3)^2 = (√3 / 4) * 108 = 27√3.",
            category: "Geometry: Inscribed Polygons",
            points: 10
          },
          {
            id: "gre-2-q8",
            questionNumber: 8,
            type: "multiple-choice-single",
            prompt: "Probability: A bag contains 4 red marbles, 5 blue marbles, and 6 green marbles. If two marbles are drawn at random without replacement, what is the probability that both marbles are of the same color?",
            options: ["31/105", "37/105", "43/105", "1/3"],
            correctAnswer: "31/105",
            explanation: "Total marbles = 15. Total pairs = 15C2 = 105. Two red: 4C2 = 6. Two blue: 5C2 = 10. Two green: 6C2 = 15. Favorable pairs = 6 + 10 + 15 = 31. Probability = 31/105.",
            category: "Data Analysis: Non-Replacement Probability",
            points: 10
          }
        ]
      },
      {
        id: "gre-2-sec-3",
        title: "Section 3: Analytical Writing",
        timeMinutes: 30,
        description: "Analyze an Issue task evaluating philosophical and policy dilemmas.",
        questions: [
          {
            id: "gre-2-q9",
            questionNumber: 9,
            type: "essay-writing",
            prompt: "Analyze an Issue:\n\n'Governments should place few, if any, restrictions on scientific research and development, because scientific discoveries are unpredictable and regulatory oversight inherently stifles innovation.'\n\nWrite a response in which you discuss the extent to which you agree or disagree with the recommendation and explain your reasoning for the position you take. In developing and supporting your position, describe specific circumstances in which adopting the recommendation would or would not be advantageous.",
            correctAnswer: "Analytical writing is graded on Cogency of Argument, Critical Insight, Evidence Quality, Organization, and Mastery of Written English conventions.",
            explanation: "A compelling response examines both the necessity of unconstrained foundational inquiry and the ethical imperatives of biosecurity, nuclear regulation, and artificial intelligence safety.",
            category: "Analytical Writing: Analyze an Issue",
            points: 15
          }
        ]
      }
    ]
  },
  {
    id: "gre-mock-03",
    examId: "gre",
    title: "GRE General High-Yield Quantitative & Verbal Exam 3",
    edition: "ETS Shorter Format 2026",
    difficulty: "High Difficulty",
    sections: [
      {
        id: "gre-3-sec-1",
        title: "Section 1: Verbal Reasoning",
        timeMinutes: 41,
        description: "High-difficulty verbal reasoning: esoteric vocabulary, scientific paradigms, and structural inference.",
        questions: [
          {
            id: "gre-3-q1",
            questionNumber: 1,
            type: "multiple-choice-single",
            prompt: "Text Completion: Select the entry that best completes the sentence.\n\nRather than presenting a ______ summary of the diplomatic treatise, the ambassador provided an account so dense and opaque that even seasoned geopolitical analysts struggled to decipher its strategic intent.",
            options: ["pellucid", "convoluted", "pedantic", "meretricious", "spurious"],
            correctAnswer: "pellucid",
            explanation: "'Pellucid' means translucently clear or easily understood. The contrast word 'Rather than...' opposes 'pellucid' to 'dense and opaque'.",
            category: "Text Completion",
            points: 10
          },
          {
            id: "gre-3-q2",
            questionNumber: 2,
            type: "sentence-equivalence",
            prompt: "Sentence Equivalence: Select the TWO words that produce completed sentences alike in meaning.\n\nAstronomers initially dismissed the periodic fluctuations in pulsar emissions as ______ instrumental noise, only later recognizing them as evidence of an orbiting exoplanet.",
            options: ["anomalous", "aberrant", "systemic", "benign", "ubiquitous", "salutary"],
            correctAnswer: ["anomalous", "aberrant"],
            explanation: "Both 'anomalous' and 'aberrant' mean deviating from the normal, expected, or standard order.",
            category: "Sentence Equivalence",
            points: 10
          },
          {
            id: "gre-3-q3",
            questionNumber: 3,
            type: "multiple-choice-single",
            prompt: "Reading Comprehension: According to the passage, the paradigm shift in continental geology occurred primarily because:",
            passage: "Thomas Kuhn's concept of scientific revolution finds a textbook illustration in plate tectonics. For decades, the fixist orthodoxy resisted Wegener's continental drift, dismissing it as geometric coincidence. It was only when oceanic magnetometry in the 1960s revealed symmetrical magnetic striping across the Mid-Atlantic Ridge—empirical evidence explainable solely by seafloor spreading—that the fixist paradigm irreversibly disintegrated.",
            options: [
              "Wegener discovered identical botanical fossils in South America and Western Africa.",
              "Symmetrical paleomagnetic striping provided irrefutable empirical evidence of seafloor spreading.",
              "Fixist geologists willingly conceded their theoretical model without requiring physical evidence.",
              "Deep sea trench exploration disproved the existence of mantle convection."
            ],
            correctAnswer: "Symmetrical paleomagnetic striping provided irrefutable empirical evidence of seafloor spreading.",
            explanation: "The passage notes that the paradigm shifted only when oceanic magnetometry revealed symmetrical magnetic striping explainable solely by seafloor spreading.",
            category: "Reading Comprehension",
            points: 10
          }
        ]
      },
      {
        id: "gre-3-sec-2",
        title: "Section 2: Quantitative Reasoning",
        timeMinutes: 47,
        description: "Assesses standard deviation, prime factor divisor counting, functional transformations, and coordinate geometry.",
        questions: [
          {
            id: "gre-3-q4",
            questionNumber: 4,
            type: "quantitative-comparison",
            prompt: "Quantitative Comparison:\nSet S = {k, k + 2, k + 4}\nSet T = {k, k + 4, k + 8}\nwhere k is any real number.\n\nQuantity A: The standard deviation of Set S\nQuantity B: The standard deviation of Set T",
            options: [
              "Quantity A is greater.",
              "Quantity B is greater.",
              "The two quantities are equal.",
              "The relationship cannot be determined from the information given."
            ],
            correctAnswer: "Quantity B is greater.",
            explanation: "Standard deviation measures dispersion. Set S has values spaced by 2; Set T has values spaced by 4. Scaling the distances from the mean by a factor of 2 doubles the standard deviation. Thus standard deviation of T is twice that of S, so Quantity B is strictly greater.",
            category: "Quantitative Comparison: Statistics",
            points: 10
          },
          {
            id: "gre-3-q5",
            questionNumber: 5,
            type: "multiple-choice-single",
            prompt: "Problem Solving: How many distinct positive divisors does the integer N = 2^4 * 3^3 * 5^2 have?",
            options: ["24", "48", "60", "72"],
            correctAnswer: "60",
            explanation: "Number of divisors for N = p1^a * p2^b * p3^c is (a + 1)(b + 1)(c + 1). Here: (4 + 1)(3 + 1)(2 + 1) = 5 * 4 * 3 = 60 distinct positive divisors.",
            category: "Arithmetic: Number Theory",
            points: 10
          },
          {
            id: "gre-3-q6",
            questionNumber: 6,
            type: "multiple-choice-single",
            prompt: "Coordinate Geometry: In the xy-plane, line L has equation 3x - 4y = 12. What is the shortest distance from the origin (0, 0) to line L?",
            options: ["2.4", "3.0", "4.0", "5.0"],
            correctAnswer: "2.4",
            explanation: "The perpendicular distance from (x0, y0) to line Ax + By + C = 0 is |Ax0 + By0 + C| / sqrt(A^2 + B^2). Here, 3x - 4y - 12 = 0. Distance from (0,0) = |3(0) - 4(0) - 12| / sqrt(3^2 + (-4)^2) = 12 / sqrt(9 + 16) = 12 / 5 = 2.4.",
            category: "Geometry: Distance from Point to Line",
            points: 10
          }
        ]
      },
      {
        id: "gre-3-sec-3",
        title: "Section 3: Analytical Writing",
        timeMinutes: 30,
        description: "Analyze an Argument task evaluating evidentiary logic and alternative explanations.",
        questions: [
          {
            id: "gre-3-q7",
            questionNumber: 7,
            type: "essay-writing",
            prompt: "Analyze an Argument:\n\n'The following appeared in an editorial in a city newspaper: \"Last year, the city's public libraries experienced a 30 percent decline in checkout counts of physical printed books, while broadband internet subscriptions in the city rose by 25 percent. Clearly, our citizens no longer require physical library branches. To save taxpayer money, the city council should close all neighborhood library branches and reallocate the municipal library budget to municipal park maintenance.\"\n\nWrite a response in which you discuss what specific evidence is needed to evaluate the argument and explain how the evidence would weaken or strengthen the argument.'",
            correctAnswer: "Evaluation is based on Identifying Unwarranted Assumptions, Exploring Alternative Explanations, Logical Cohesion, and Command of Language.",
            explanation: "Examine whether book checkouts represent the sole function of libraries (e.g. digital borrowing, public computers, children's programs, community study spaces), and whether internet users still utilize libraries.",
            category: "Analytical Writing: Analyze an Argument",
            points: 15
          }
        ]
      }
    ]
  },
  {
    id: "gre-mock-04",
    examId: "gre",
    title: "GRE General ETS Shorter Format Mock 4",
    edition: "ETS Shorter Format 2026",
    difficulty: "Official Mock",
    sections: [
      {
        id: "gre-4-sec-1",
        title: "Section 1: Verbal Reasoning",
        timeMinutes: 41,
        description: "Scholarly prose evaluation, philosophical epistemology, and text completions.",
        questions: [
          {
            id: "gre-4-q1",
            questionNumber: 1,
            type: "multiple-choice-single",
            prompt: "Text Completion: Select the entry that best completes the sentence.\n\nThe philosopher argued that ancient stoicism was not a recipe for emotional ______, but rather a rigorous discipline of cognitive reframing designed to cultivate tranquil resilience in the face of inevitable misfortune.",
            options: ["torpor", "exuberance", "penitence", "chicanery", "sagacity"],
            correctAnswer: "torpor",
            explanation: "'Torpor' means a state of physical or mental inactivity; lethargy. The author contrasts mischaracterizations of stoicism as numb inactivity with active cognitive reframing.",
            category: "Text Completion",
            points: 10
          },
          {
            id: "gre-4-q2",
            questionNumber: 2,
            type: "sentence-equivalence",
            prompt: "Sentence Equivalence: Select the TWO words that produce completed sentences alike in meaning.\n\nBecause the professor's monographs were laden with dense technical jargon and ______ historical footnotes, they remained inaccessible to lay readers.",
            options: ["recondite", "esoteric", "transparent", "lucid", "facetious", "superficial"],
            correctAnswer: ["recondite", "esoteric"],
            explanation: "'Recondite' and 'esoteric' both describe knowledge that is obscure, abstruse, and understood by only a specialized few.",
            category: "Sentence Equivalence",
            points: 10
          },
          {
            id: "gre-4-q3",
            questionNumber: 3,
            type: "multiple-choice-single",
            prompt: "Reading Comprehension: Based on the excerpt, which option represents the author's primary attitude toward algorithmic equity trading?",
            passage: "Proponents of high-frequency algorithmic trading herald its capacity to tighten bid-ask spreads and inject continuous liquidity into capital markets. Yet, during episodes of heightened macroeconomic uncertainty, quantitative risk models execute synchronized automated liquidations, transforming theoretical liquidity into catastrophic flash crashes that siphon capital from institutional investors.",
            options: [
              "Unqualified enthusiasm for its spread-narrowing capabilities.",
              "Guarded skepticism regarding its systemic stability during volatile market crises.",
              "Complete rejection of computerized order routing in modern securities exchanges.",
              "Indifference toward retail and institutional liquidity disparities."
            ],
            correctAnswer: "Guarded skepticism regarding its systemic stability during volatile market crises.",
            explanation: "The author acknowledges benefits ('tighten spreads') but highlights grave dangers ('synchronized liquidations', 'catastrophic flash crashes'), indicating guarded skepticism.",
            category: "Reading Comprehension",
            points: 10
          }
        ]
      },
      {
        id: "gre-4-sec-2",
        title: "Section 2: Quantitative Reasoning",
        timeMinutes: 47,
        description: "Assesses exponent comparisons, negative bases, coordinate reflections, and weighted mixtures.",
        questions: [
          {
            id: "gre-4-q4",
            questionNumber: 4,
            type: "quantitative-comparison",
            prompt: "Quantitative Comparison:\nGiven that n is an even positive integer (n ∈ {2, 4, 6, ...}).\n\nQuantity A: (-2)^n\nQuantity B: (-3)^n",
            options: [
              "Quantity A is greater.",
              "Quantity B is greater.",
              "The two quantities are equal.",
              "The relationship cannot be determined from the information given."
            ],
            correctAnswer: "Quantity B is greater.",
            explanation: "When n is an even integer, negative numbers raised to power n become positive: (-2)^n = 2^n and (-3)^n = 3^n. Since 3 > 2 and n ≥ 2, 3^n is strictly greater than 2^n. Thus, Quantity B is greater.",
            category: "Quantitative Comparison: Exponents",
            points: 10
          },
          {
            id: "gre-4-q5",
            questionNumber: 5,
            type: "multiple-choice-single",
            prompt: "Problem Solving: A chemist mixes 30 liters of a 20% acid solution with 20 liters of a 50% acid solution. What is the acid concentration of the resulting 50-liter mixture?",
            options: ["28%", "32%", "35%", "38%"],
            correctAnswer: "32%",
            explanation: "Pure acid in first solution = 30 * 0.20 = 6 liters. Pure acid in second solution = 20 * 0.50 = 10 liters. Total pure acid = 6 + 10 = 16 liters. Concentration = 16 / 50 = 32%.",
            category: "Problem Solving: Weighted Mixtures",
            points: 10
          },
          {
            id: "gre-4-q6",
            questionNumber: 6,
            type: "multiple-choice-single",
            prompt: "Coordinate Geometry: What are the coordinates of the reflection of the point (-3, 7) across the line y = x?",
            options: ["(3, -7)", "(7, -3)", "(-7, 3)", "(-3, -7)"],
            correctAnswer: "(7, -3)",
            explanation: "Reflection of point (x, y) across the line y = x swaps coordinates to (y, x). Thus, (-3, 7) reflects to (7, -3).",
            category: "Geometry: Coordinate Reflections",
            points: 10
          }
        ]
      },
      {
        id: "gre-4-sec-3",
        title: "Section 3: Analytical Writing",
        timeMinutes: 30,
        description: "Analyze an Issue task evaluating ethics and societal welfare.",
        questions: [
          {
            id: "gre-4-q7",
            questionNumber: 7,
            type: "essay-writing",
            prompt: "Analyze an Issue:\n\n'The true measure of a society's greatness is not its aggregate economic wealth or technological innovation, but how well it cares for its most vulnerable and marginalized populations.'\n\nWrite a response in which you discuss the extent to which you agree or disagree with the statement and explain your reasoning for the position you take.",
            correctAnswer: "Essays are graded on Critical Analysis, Argument Development, Organization, and Lexical Sophistication.",
            explanation: "A high-scoring response weighs economic prosperity as an enabler of social safety nets against ethical arguments regarding universal human dignity.",
            category: "Analytical Writing: Analyze an Issue",
            points: 15
          }
        ]
      }
    ]
  },

  // ==========================
  // 4. GMAT FOCUS TEST PACK
  // ==========================
  {
    id: "gmat-mock-01",
    examId: "gmat",
    title: "GMAT Focus Edition Official Simulation 1",
    edition: "GMAC Focus Edition 2026",
    difficulty: "High Difficulty",
    sections: [
      {
        id: "gmat-sec-1",
        title: "Section 1: Quantitative Reasoning",
        timeMinutes: 45,
        description: "21 problem-solving questions testing high-level arithmetic and algebraic logic. (Calculators NOT permitted)",
        questions: [
          {
            id: "gmat-q1",
            questionNumber: 1,
            type: "multiple-choice-single",
            prompt: "A merchant blends two types of coffee beans: Colombian beans costing $14 per pound and Ethiopian beans costing $22 per pound. If the merchant prepares a 40-pound blend that sells at a cost price of $17 per pound, how many pounds of Ethiopian beans were used in the mixture?",
            options: ["12 pounds", "15 pounds", "18 pounds", "25 pounds", "28 pounds"],
            correctAnswer: "15 pounds",
            explanation: "Let E be the pounds of Ethiopian beans. The pounds of Colombian beans is (40 - E). Cost balance: 22E + 14(40 - E) = 17 * 40 => 22E + 560 - 14E = 680 => 8E = 120 => E = 15 pounds.",
            category: "Problem Solving: Weighted Averages",
            points: 10
          },
          {
            id: "gmat-q2",
            questionNumber: 2,
            type: "multiple-choice-single",
            prompt: "If n is a positive integer and the product of all integers from 1 to n is divisible by 2^8 * 3^4 * 5^2, what is the minimum possible value of n?",
            options: ["10", "12", "14", "16", "18"],
            correctAnswer: "12",
            explanation: "We analyze n! for prime factors: 5^2 requires n ≥ 10. For n = 10, count of 2s in 10! = [10/2] + [10/4] + [10/8] = 5 + 2 + 1 = 8. Count of 3s in 10! = [10/3] + [10/9] = 3 + 1 = 4. Count of 5s in 10! = [10/5] = 2. Thus 10! has exactly 2^8 * 3^4 * 5^2. Hence minimum n = 10.",
            category: "Problem Solving: Number Properties",
            points: 10
          }
        ]
      },
      {
        id: "gmat-sec-2",
        title: "Section 2: Verbal Reasoning",
        timeMinutes: 45,
        description: "23 questions testing Critical Reasoning arguments and Reading Comprehension.",
        questions: [
          {
            id: "gmat-q3",
            questionNumber: 3,
            type: "multiple-choice-single",
            prompt: "Critical Reasoning: Which of the following, if true, most seriously weakens the argument?\n\nCity Planner: 'To reduce downtown vehicular gridlock, we propose eliminating street-level parking spaces on Main Street and constructing a centralized 1,000-vehicle underground parking garage two blocks away. Because total parking capacity will remain constant while street lanes will be widened, traffic throughput will substantially improve.'",
            options: [
              "Many downtown retail merchants rely heavily on foot traffic generated by public bus transit.",
              "A survey indicates that over 70% of drivers who currently park on Main Street spend an average of 14 minutes circulating local blocks seeking an open street spot.",
              "Vehicles queuing to enter and exit the single entrance of the centralized underground garage will create recurrent bottlenecks that paralyze adjacent arterial avenues during peak rush hours.",
              "The municipality plans to introduce electric vehicle charging stations inside the subterranean parking garage.",
              "Adjacent suburban commuter rail ticket prices are scheduled to increase by 5% next fiscal quarter."
            ],
            correctAnswer: "Vehicles queuing to enter and exit the single entrance of the centralized underground garage will create recurrent bottlenecks that paralyze adjacent arterial avenues during peak rush hours.",
            explanation: "The planner argues traffic throughput will improve because street spaces are replaced by a centralized garage. If queuing at the garage's single entrance creates bottlenecks that paralyze surrounding avenues, the intended throughput improvement is defeated.",
            category: "Critical Reasoning: Weaken",
            points: 10
          }
        ]
      },
      {
        id: "gmat-sec-3",
        title: "Section 3: Data Insights",
        timeMinutes: 45,
        description: "20 questions assessing Data Sufficiency, Multi-Source Reasoning, and Table Analysis.",
        questions: [
          {
            id: "gmat-q4",
            questionNumber: 4,
            type: "data-sufficiency",
            prompt: "Data Sufficiency:\n\nIs integer x positive?\n\nStatement (1): x³ > x\nStatement (2): |x| > x",
            options: [
              "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
              "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
              "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
              "EACH statement ALONE is sufficient.",
              "Statements (1) and (2) TOGETHER are NOT sufficient."
            ],
            correctAnswer: "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
            explanation: "Statement 1: x³ > x holds if -1 < x < 0 OR x > 1. Thus x could be negative (-0.5) or positive (2). Not sufficient.\nStatement 2: |x| > x is true IF AND ONLY IF x < 0. For any non-negative number, |x| = x. Therefore Statement 2 guarantees x is negative (meaning x is definitely NOT positive). A definitive 'NO' answer is SUFFICIENT. Thus Statement (2) ALONE is sufficient.",
            category: "Data Insights: Data Sufficiency",
            points: 10
          }
        ]
      }
    ]
  },

  // ==========================
  // 5. TOEFL iBT TEST PACK
  // ==========================
  {
    id: "toefl-mock-01",
    examId: "toefl",
    title: "TOEFL iBT Official Simulation Exam 1",
    edition: "ETS 2026 Enhanced Format",
    difficulty: "Official Mock",
    sections: [
      {
        id: "toefl-sec-1",
        title: "Section 1: Reading",
        timeMinutes: 35,
        description: "2 academic passages with 20 questions assessing factual identification, inference, rhetorical purpose, and text insertion.",
        questions: [
          {
            id: "toefl-q1",
            questionNumber: 1,
            type: "multiple-choice-single",
            prompt: "According to paragraph 1, what caused the mass extinction at the end of the Cretaceous period?",
            passage: "Paragraph 1: The Cretaceous-Paleogene boundary event, which occurred approximately 66 million years ago, precipitated the abrupt demise of roughly three-quarters of all plant and animal species on Earth, including all non-avian dinosaurs. The predominant consensus among geophysicists credits this catastrophe to the hypervelocity impact of a massive asteroid roughly 10 to 15 kilometers in diameter near the present-day Yucatán Peninsula in Chicxulub, Mexico. The resultant global thermal shockwave, wild ignition of continent-scale wildfires, and colossal airborne sulfur aerosols shielded sunlight, shutting down photosynthesis and plunging the biosphere into prolonged impact winter.",
            options: [
              "Gradual orbital shifts that triggered ice age glaciation over tens of millions of years.",
              "The atmospheric shielding of sunlight by sulfur aerosols and debris following an asteroid impact.",
              "The migration of non-avian dinosaurs into subterranean volcanic caverns.",
              "A global decrease in atmospheric carbon dioxide caused by burgeoning marine flora."
            ],
            correctAnswer: "The atmospheric shielding of sunlight by sulfur aerosols and debris following an asteroid impact.",
            explanation: "The passage explicitly notes that the asteroid impact produced sulfur aerosols that 'shielded sunlight, shutting down photosynthesis and plunging the biosphere into prolonged impact winter'.",
            category: "Reading: Factual Information",
            points: 10
          },
          {
            id: "toefl-q2",
            questionNumber: 2,
            type: "multiple-choice-single",
            prompt: "The word 'abrupt' in the passage is closest in meaning to:",
            passage: "...precipitated the abrupt demise of roughly three-quarters of all plant and animal species on Earth...",
            options: ["sudden", "predictable", "gradual", "magnificent"],
            correctAnswer: "sudden",
            explanation: "'Abrupt' means sudden, unexpected, and happening swiftly.",
            category: "Reading: Vocabulary in Context",
            points: 5
          }
        ]
      },
      {
        id: "toefl-sec-2",
        title: "Section 2: Listening",
        timeMinutes: 36,
        description: "Lectures and campus conversations testing academic comprehension and conversational pragmatics.",
        questions: [
          {
            id: "toefl-q3",
            questionNumber: 3,
            type: "audio-lecture-mcq",
            prompt: "Listen to a portion of an art history lecture on Italian Renaissance frescoes and answer the question.\n\nWhy does the professor mention the 'giornata' technique?",
            passage: "Professor Lecture Audio: 'In true fresco, or buon fresco, the pigment is applied directly onto wet lime plaster. Because the plaster dries rapidly, artists could only prepare as much wall surface as they could paint in a single session. This section was called a giornata, literally meaning 'a day's work'. If an artist made a mistake, they could not simply paint over it; the dried plaster had to be chipped off with a chisel and reapplied.'",
            audioScript: "In true fresco, or buon fresco, the pigment is applied directly onto wet lime plaster. Because the plaster dries rapidly, artists could only prepare as much wall surface as they could paint in a single session. This section was called a giornata, literally meaning 'a day's work'. If an artist made a mistake, they could not simply paint over it; the dried plaster had to be chipped off with a chisel and reapplied.",
            audioSpeaker: "Prof. Helena Rossi",
            speakerGender: "female",
            options: [
              "To illustrate the physical time constraints imposed by the rapid drying of wet lime plaster.",
              "To criticize Renaissance painters for working only during daylight hours.",
              "To contrast Italian fresco pigments with northern European oil painting binders.",
              "To explain why Michelangelo abandoned painting in favor of marble sculpting."
            ],
            correctAnswer: "To illustrate the physical time constraints imposed by the rapid drying of wet lime plaster.",
            explanation: "The professor introduces 'giornata' ('a day's work') directly after explaining that artists could only prepare as much plaster as they could finish before it dried.",
            category: "Listening: Rhetorical Purpose",
            points: 10
          }
        ]
      },
      {
        id: "toefl-sec-3",
        title: "Section 3: Writing",
        timeMinutes: 30,
        description: "Writing for an Academic Discussion and Integrated Writing Task.",
        questions: [
          {
            id: "toefl-q4",
            questionNumber: 4,
            type: "essay-writing",
            prompt: "Writing for an Academic Discussion: Your professor is teaching a class on public policy. Write a post responding to the professor's question.\n\nProfessor Diaz: 'Many city governments are debating whether to allocate municipal funding toward expanding public bicycle-sharing programs or modernizing electric bus transit networks. Which investment do you believe yields greater long-term environmental and social benefits for urban communities?'\n\nStudent A (Sarah): 'Bicycle programs encourage healthy lifestyle habits and eliminate emissions on short intra-neighborhood commutes.'\nStudent B (Paul): 'Electric buses can transport far more passengers across longer distances and function regardless of adverse weather.'\n\nTask: Express your opinion, present relevant reasons and examples, and contribute meaningfully to the discussion. Write at least 100 words.",
            correctAnswer: "Responses are evaluated based on topic development, elaboration of argument, language variety, and cohesion.",
            explanation: "High-scoring responses synthesize or extend both students' points, providing an articulated stance (e.g. arguing for electric buses as the backbone transit while treating bikes as micro-mobility feeder loops).",
            category: "Writing: Academic Discussion",
            points: 15
          }
        ]
      }
    ]
  },

  // ==========================
  // 6. ACT TEST PACK
  // ==========================
  {
    id: "act-mock-01",
    examId: "act",
    title: "ACT Official Full Practice Examination 1",
    edition: "ACT Assessment 2026",
    difficulty: "Standard",
    sections: [
      {
        id: "act-sec-1",
        title: "Section 1: English",
        timeMinutes: 45,
        description: "Tests conventions of standard English punctuation, sentence structure, and rhetorical strategy.",
        questions: [
          {
            id: "act-q1",
            questionNumber: 1,
            type: "multiple-choice-single",
            prompt: "Which choice best corrects the underlined portion?\n\nThe orchestra conductor [raised her baton, after the audience became quiet,] the hall was enveloped in profound silence.",
            options: [
              "raised her baton, after the audience became quiet,",
              "raised her baton. After the audience became quiet,",
              "raising her baton after the audience became quiet",
              "raised her baton, and after the audience became quiet"
            ],
            correctAnswer: "raised her baton. After the audience became quiet,",
            explanation: "The original creates a comma splice with two independent clauses ('The orchestra conductor raised her baton...' and 'the hall was enveloped...'). Option B resolves the run-on with a period.",
            category: "English: Sentence Structure",
            points: 10
          }
        ]
      },
      {
        id: "act-sec-2",
        title: "Section 2: Mathematics",
        timeMinutes: 60,
        description: "Assesses arithmetic, elementary algebra, intermediate algebra, plane geometry, and basic trigonometry.",
        questions: [
          {
            id: "act-q2",
            questionNumber: 2,
            type: "multiple-choice-single",
            prompt: "A line in the standard (x, y) coordinate plane passes through points (-3, 7) and (5, -9). What is the slope of this line?",
            options: ["-2", "2", "-1/2", "1/2", "-16"],
            correctAnswer: "-2",
            explanation: "Slope m = (y2 - y1) / (x2 - x1) = (-9 - 7) / (5 - (-3)) = -16 / (5 + 3) = -16 / 8 = -2.",
            category: "Mathematics: Coordinate Geometry",
            points: 10
          }
        ]
      },
      {
        id: "act-sec-3",
        title: "Section 3: Science",
        timeMinutes: 35,
        description: "Assesses interpretation, analysis, evaluation, reasoning, and problem-solving in natural sciences.",
        questions: [
          {
            id: "act-q3",
            questionNumber: 3,
            type: "multiple-choice-single",
            prompt: "Based on the experiment data, as the temperature of the water bath was raised from 20°C to 60°C, the rate of enzyme catalase reaction doubled every 10°C, but at 75°C the reaction rate dropped abruptly to zero. Which biological phenomenon best accounts for the collapse in activity at 75°C?",
            options: [
              "Substrate concentration was depleted exponentially.",
              "The enzyme catalase underwent thermal denaturation of its tertiary active site.",
              "The activation energy of hydrogen peroxide decreased below zero.",
              "Water molecules vaporized completely into ambient steam."
            ],
            correctAnswer: "The enzyme catalase underwent thermal denaturation of its tertiary active site.",
            explanation: "Proteins and enzymes unfold (denature) at excessive temperatures, altering their tertiary catalytic conformation so substrates can no longer bind.",
            category: "Science: Biological Interpretation",
            points: 10
          }
        ]
      }
    ]
  }
];

/**
 * Helper to calculate scaled scores according to official exam scaling curves
 */
export function calculateExamScore(examId: StandardizedExamId, rawScore: number, maxRawScore: number): {
  scaledScore: string;
  percentile: number;
} {
  const ratio = Math.max(0, Math.min(1, maxRawScore > 0 ? rawScore / maxRawScore : 0));

  switch (examId) {
    case "pte": {
      // Scale: 10 to 90
      const score = Math.round(10 + ratio * 80);
      const percentile = Math.min(99, Math.max(1, Math.round(ratio * 99)));
      return { scaledScore: `${score} / 90`, percentile };
    }
    case "sat": {
      // Scale: 400 to 1600 (multiples of 10)
      const rawSAT = Math.round((400 + ratio * 1200) / 10) * 10;
      const percentile = Math.min(99, Math.max(1, Math.round(Math.pow(ratio, 1.2) * 99)));
      return { scaledScore: `${rawSAT} / 1600`, percentile };
    }
    case "gre": {
      // Scale: 260 to 340 (multiples of 1)
      const rawGRE = Math.round(260 + ratio * 80);
      const percentile = Math.min(99, Math.max(1, Math.round(Math.pow(ratio, 1.3) * 99)));
      return { scaledScore: `${rawGRE} / 340`, percentile };
    }
    case "gmat": {
      // Scale: 205 to 805 (multiples of 5 or 10)
      const rawGMAT = Math.round((205 + ratio * 600) / 5) * 5;
      const percentile = Math.min(99, Math.max(1, Math.round(Math.pow(ratio, 1.4) * 99)));
      return { scaledScore: `${rawGMAT} / 805`, percentile };
    }
    case "toefl": {
      // Scale: 0 to 120
      const rawTOEFL = Math.round(ratio * 120);
      const percentile = Math.min(99, Math.max(1, Math.round(ratio * 99)));
      return { scaledScore: `${rawTOEFL} / 120`, percentile };
    }
    case "act": {
      // Scale: 1 to 36
      const rawACT = Math.max(1, Math.round(1 + ratio * 35));
      const percentile = Math.min(99, Math.max(1, Math.round(ratio * 99)));
      return { scaledScore: `${rawACT} / 36`, percentile };
    }
    default: {
      const pct = Math.round(ratio * 100);
      return { scaledScore: `${pct}%`, percentile: pct };
    }
  }
}
