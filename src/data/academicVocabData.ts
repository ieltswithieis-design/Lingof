export interface AcademicVocabItem {
  id: string;
  word: string;
  phonetic: string;
  pos: string;
  cefr: "C1" | "C2";
  topic: 
    | "Academic Discourse & Evaluation"
    | "Environment, Climate & Ecology"
    | "Technology, AI & Automation"
    | "Society, Urbanization & Demographics"
    | "Education, Pedagogy & Cognitive Science"
    | "Public Health, Medicine & Bioethics"
    | "Global Economy, Trade & Governance"
    | "Culture, Arts & Linguistics";
  definition: string;
  collocations: string[];
  ieltsExample: string;
  examinerTip: string;
  antonyms?: string[];
  synonyms: string[];
}

export const ACADEMIC_VOCABULARY_TOPICS = [
  "All Domains",
  "Academic Discourse & Evaluation",
  "Environment, Climate & Ecology",
  "Technology, AI & Automation",
  "Society, Urbanization & Demographics",
  "Education, Pedagogy & Cognitive Science",
  "Public Health, Medicine & Bioethics",
  "Global Economy, Trade & Governance",
  "Culture, Arts & Linguistics"
] as const;

export const academicVocabularyBank: AcademicVocabItem[] = [
  // 1. Academic Discourse & Evaluation
  {
    id: "vocab-1",
    word: "Juxtapose",
    phonetic: "/ˌdʒʌk.stəˈpoʊz/",
    pos: "verb",
    cefr: "C2",
    topic: "Academic Discourse & Evaluation",
    definition: "To place two concepts, arguments, or phenomena side by side to highlight their contrasting features.",
    collocations: ["juxtapose two opposing theories", "starkly juxtaposed", "juxtapose tradition with modernity"],
    ieltsExample: "When examiners juxtapose candidates' lexical resource with grammatical accuracy, disparities in band attainment become conspicuously evident.",
    examinerTip: "Use in Task 2 body paragraphs when transitioning between two contrasting perspectives instead of repetitive 'On the other hand'.",
    synonyms: ["contrast", "collocate", "compare", "set against"]
  },
  {
    id: "vocab-2",
    word: "Empirical",
    phonetic: "/ɪmˈpɪr.ɪ.kəl/",
    pos: "adjective",
    cefr: "C1",
    topic: "Academic Discourse & Evaluation",
    definition: "Based on, concerned with, or verifiable by observation or experiment rather than theory or pure logic.",
    collocations: ["empirical evidence", "empirical investigation", "empirical validation", "lack of empirical backing"],
    ieltsExample: "Proponents of state-funded renewable infrastructure argue that empirical evidence from Nordic economies substantiates long-term fiscal viability.",
    examinerTip: "Pair with 'evidence', 'findings', or 'data' to elevate Task 2 reasoning from speculative to rigorous academic argumentation.",
    synonyms: ["observational", "experimental", "evidence-based", "verifiable"]
  },
  {
    id: "vocab-3",
    word: "Substantiate",
    phonetic: "/səbˈstæn.ʃi.eɪt/",
    pos: "verb",
    cefr: "C2",
    topic: "Academic Discourse & Evaluation",
    definition: "To provide evidence to support or prove the truth of an assertion or hypothesis.",
    collocations: ["substantiate an assertion", "substantiate claims with data", "fail to substantiate"],
    ieltsExample: "Without concrete case studies to substantiate this claim, the assertion remains speculative at best.",
    examinerTip: "Use in Task 2 to critique unsupported viewpoints: 'While critics maintain that automated transit causes accidents, they fail to substantiate this conjecture.'",
    synonyms: ["corroborate", "validate", "authenticate", "vindicate"]
  },
  {
    id: "vocab-4",
    word: "Dichotomy",
    phonetic: "/daɪˈkɑː.t̬ə.mi/",
    pos: "noun",
    cefr: "C2",
    topic: "Academic Discourse & Evaluation",
    definition: "A division or contrast between two things that are or are represented as being opposed or entirely different.",
    collocations: ["false dichotomy", "sharp dichotomy", "bridge the dichotomy between"],
    ieltsExample: "Presenting economic progress and environmental conservation as an irreconcilable dichotomy is a fundamental analytical fallacy.",
    examinerTip: "Outstanding for 'Discuss both views' essays where you conclude that both perspectives can coexist symbiotically.",
    synonyms: ["division", "polarity", "schism", "bifurcation"]
  },
  {
    id: "vocab-5",
    word: "Paradigm",
    phonetic: "/ˈper.ə.daɪm/",
    pos: "noun",
    cefr: "C1",
    topic: "Academic Discourse & Evaluation",
    definition: "A distinct set of concepts or thought patterns, including theories, research methods, and standards for what constitutes legitimate contributions.",
    collocations: ["paradigm shift", "prevailing paradigm", "redefine the pedagogical paradigm"],
    ieltsExample: "The advent of generative computation signifies a profound paradigm shift in contemporary university curricula.",
    examinerTip: "Use 'paradigm shift' when discussing transformative changes in technology, schooling, or governmental policies.",
    synonyms: ["framework", "archetype", "model", "benchmark"]
  },
  {
    id: "vocab-6",
    word: "Proliferation",
    phonetic: "/prəˌlɪf.əˈreɪ.ʃən/",
    pos: "noun",
    cefr: "C2",
    topic: "Academic Discourse & Evaluation",
    definition: "Rapid increase in the number or amount of something; rapid reproduction or expansion.",
    collocations: ["proliferation of digital platforms", "rapid proliferation", "halt the proliferation of misinformation"],
    ieltsExample: "The unprecedented proliferation of algorithmic newsfeeds has exacerbated social polarization across metropolitan demographics.",
    examinerTip: "Replaces mundane words like 'increase' or 'growth' when referencing rapid, widespread dissemination.",
    synonyms: ["multiplication", "escalation", "upsurge", "expansion"]
  },

  // 2. Environment, Climate & Ecology
  {
    id: "vocab-7",
    word: "Anthropogenic",
    phonetic: "/ˌæn.θrə.pəˈdʒen.ɪk/",
    pos: "adjective",
    cefr: "C2",
    topic: "Environment, Climate & Ecology",
    definition: "Originating in human activity, particularly regarding environmental pollutants and climatic disruptions.",
    collocations: ["anthropogenic climate change", "anthropogenic emissions", "anthropogenic disturbance"],
    ieltsExample: "The overwhelming scientific consensus confirms that contemporary ocean acidification is primarily an anthropogenic phenomenon.",
    examinerTip: "Use in Environmental Task 2 essays instead of generic 'pollution caused by humans'. Signals immediate C2 mastery.",
    synonyms: ["human-induced", "artificial", "man-made"]
  },
  {
    id: "vocab-8",
    word: "Mitigation",
    phonetic: "/ˌmɪt.əˈɡeɪ.ʃən/",
    pos: "noun",
    cefr: "C1",
    topic: "Environment, Climate & Ecology",
    definition: "The action of reducing the severity, seriousness, or painfulness of something negative.",
    collocations: ["mitigation strategies", "climate mitigation efforts", "risk mitigation", "environmental mitigation"],
    ieltsExample: "Effective climate governance necessitates both proactive mitigation of carbon output and adaptive infrastructure for coastal resilience.",
    examinerTip: "Crucial for 'Problem & Solution' essays regarding ecological crises or economic recession.",
    synonyms: ["alleviation", "abatement", "attenuation", "palliation"]
  },
  {
    id: "vocab-9",
    word: "Biodegradable",
    phonetic: "/ˌbaɪ.oʊ.dɪˈɡreɪ.də.bəl/",
    pos: "adjective",
    cefr: "C1",
    topic: "Environment, Climate & Ecology",
    definition: "Capable of being decomposed by bacteria or other living organisms.",
    collocations: ["biodegradable polymers", "biodegradable packaging", "biodegradable waste decomposition"],
    ieltsExample: "Enforcing statutory quotas on biodegradable packaging in commercial supply chains can drastically curb non-recyclable landfill accumulation.",
    examinerTip: "Ideal for Task 2 questions on single-use plastics, consumerism, and municipal waste management.",
    synonyms: ["compostable", "organic", "decomposable"]
  },
  {
    id: "vocab-10",
    word: "Depletion",
    phonetic: "/dɪˈpliː.ʃən/",
    pos: "noun",
    cefr: "C1",
    topic: "Environment, Climate & Ecology",
    definition: "Reduction in the number or quantity of something, especially natural reserves or vital commodities.",
    collocations: ["resource depletion", "depletion of fossil reserves", "aquifer depletion", "ozone depletion"],
    ieltsExample: "The accelerated depletion of subterranean aquifers poses an existential hazard to agricultural output in arid developing regions.",
    examinerTip: "Use 'resource depletion' instead of 'using up all our natural resources'.",
    synonyms: ["exhaustion", "diminution", "drain", "consumption"]
  },
  {
    id: "vocab-11",
    word: "Remediation",
    phonetic: "/rɪˌmiː.diˈeɪ.ʃən/",
    pos: "noun",
    cefr: "C2",
    topic: "Environment, Climate & Ecology",
    definition: "The action of remedying something, in particular of reversing or stopping environmental damage.",
    collocations: ["environmental remediation", "soil remediation", "ecological remediation projects"],
    ieltsExample: "Substantial fiscal allocations must be dedicated to the remediation of industrial brownfield sites before residential rezoning.",
    examinerTip: "Pair with 'environmental' or 'ecological' when proposing comprehensive solutions to industrial pollution.",
    synonyms: ["rectification", "rehabilitation", "restoration", "reclamation"]
  },

  // 3. Technology, AI & Automation
  {
    id: "vocab-12",
    word: "Autonomous",
    phonetic: "/ɑːˈtɑː.nə.məs/",
    pos: "adjective",
    cefr: "C1",
    topic: "Technology, AI & Automation",
    definition: "Acting independently or having the freedom to do so; capable of self-governance without human intervention.",
    collocations: ["autonomous navigation", "autonomous vehicles", "autonomous decision-making systems"],
    ieltsExample: "While autonomous freight vehicles promise substantial logistic efficiencies, they precipitate widespread displacement of manual haulage labour.",
    examinerTip: "Far superior to 'driverless' or 'automatic' when evaluating the socioeconomic ramifications of artificial intelligence.",
    synonyms: ["self-governing", "independent", "self-directed", "automated"]
  },
  {
    id: "vocab-13",
    word: "Disruptive",
    phonetic: "/dɪsˈrʌp.tɪv/",
    pos: "adjective",
    cefr: "C1",
    topic: "Technology, AI & Automation",
    definition: "Innovatively transforming a traditional market, sector, or social structure by displacing established protocols.",
    collocations: ["disruptive innovation", "disruptive potential of AI", "disruptive technologies"],
    ieltsExample: "The disruptive potential of machine learning in legal discovery challenges conventional white-collar billing frameworks.",
    examinerTip: "In IELTS essays, 'disruptive' carries positive or neutral academic weight regarding innovation, not just chaos.",
    synonyms: ["groundbreaking", "revolutionary", "transformative", "unsettling"]
  },
  {
    id: "vocab-14",
    word: "Ubiquitous",
    phonetic: "/juːˈbɪk.wə.t̬əs/",
    pos: "adjective",
    cefr: "C2",
    topic: "Technology, AI & Automation",
    definition: "Present, appearing, or found everywhere simultaneously.",
    collocations: ["ubiquitous surveillance", "ubiquitous presence of smartphones", "ubiquitous connectivity"],
    ieltsExample: "The ubiquitous presence of connected mobile screens has irrevocably altered adolescent attention spans and reading comprehension.",
    examinerTip: "Replaces overused phrases like 'everywhere in our daily life' or 'all around the world'.",
    synonyms: ["omnipresent", "pervasive", "universal", "prevalent"]
  },
  {
    id: "vocab-15",
    word: "Obsolescence",
    phonetic: "/ˌɑːb.səˈles.əns/",
    pos: "noun",
    cefr: "C2",
    topic: "Technology, AI & Automation",
    definition: "The process of becoming obsolete or outdated and no longer used.",
    collocations: ["planned obsolescence", "technological obsolescence", "rapid obsolescence"],
    ieltsExample: "Consumer electronics manufacturers frequently practice planned obsolescence to artificially stimulate consumer purchase cycles.",
    examinerTip: "Essential term for consumer culture, e-waste, and technology turnover topics.",
    synonyms: ["antiquity", "redundancy", "supersedence"]
  },

  // 4. Society, Urbanization & Demographics
  {
    id: "vocab-16",
    word: "Gentrification",
    phonetic: "/ˌdʒen.trə.fəˈkeɪ.ʃən/",
    pos: "noun",
    cefr: "C2",
    topic: "Society, Urbanization & Demographics",
    definition: "The process whereby the character of a poor urban area is changed by wealthier people moving in, improving housing, and attracting new businesses.",
    collocations: ["urban gentrification", "resist gentrification", "consequences of gentrification"],
    ieltsExample: "Although gentrification rejuvenates derelict municipal infrastructure, it frequently results in the involuntary displacement of low-income communities.",
    examinerTip: "Use when discussing modern city planning, housing affordability, and urban revitalization.",
    synonyms: ["urban renewal", "regeneration", "suburbanization"]
  },
  {
    id: "vocab-17",
    word: "Disparity",
    phonetic: "/dɪˈsper.ə.t̬i/",
    pos: "noun",
    cefr: "C1",
    topic: "Society, Urbanization & Demographics",
    definition: "A great difference, inequality, or disproportion.",
    collocations: ["socioeconomic disparity", "income disparity", "regional disparity in healthcare access"],
    ieltsExample: "Widening socioeconomic disparity within industrialized metropolises threatens social cohesion and civic trust.",
    examinerTip: "Use 'disparity' instead of repeating 'difference' or 'gap'.",
    synonyms: ["imbalance", "inequality", "incongruity", "discrepancy"]
  },
  {
    id: "vocab-18",
    word: "Cohesion",
    phonetic: "/koʊˈhiː.ʒən/",
    pos: "noun",
    cefr: "C1",
    topic: "Society, Urbanization & Demographics",
    definition: "The action or fact of forming a united whole; integration within a society or community.",
    collocations: ["social cohesion", "community cohesion", "foster social cohesion"],
    ieltsExample: "Investment in shared public spaces and community recreation facilities is paramount to nurturing intergenerational social cohesion.",
    examinerTip: "Pair with 'social', 'civic', or 'cultural' when addressing multiculturalism and municipal integration.",
    synonyms: ["unity", "solidarity", "connectedness", "harmony"]
  },
  {
    id: "vocab-19",
    word: "Influx",
    phonetic: "/ˈɪn.flʌks/",
    pos: "noun",
    cefr: "C1",
    topic: "Society, Urbanization & Demographics",
    definition: "An arrival or entry of large numbers of people or things.",
    collocations: ["influx of immigrants", "rapid influx of tourists", "seasonal influx"],
    ieltsExample: "Historic tourist enclaves frequently struggle to assimilate the seasonal influx of visitors without degrading cultural landmarks.",
    examinerTip: "Replaces 'many people coming' or 'huge arrival'.",
    synonyms: ["inflow", "inundation", "inrush", "deluge"]
  },

  // 5. Education, Pedagogy & Cognitive Science
  {
    id: "vocab-20",
    word: "Pedagogical",
    phonetic: "/ˌped.əˈɡɑː.dʒɪ.kəl/",
    pos: "adjective",
    cefr: "C2",
    topic: "Education, Pedagogy & Cognitive Science",
    definition: "Relating to the methods and principles of teaching and instruction.",
    collocations: ["pedagogical approach", "pedagogical efficacy", "pedagogical reform"],
    ieltsExample: "Modern pedagogical paradigms advocate experiential problem-solving over passive rote memorisation.",
    examinerTip: "Use 'pedagogical approach' instead of repeating 'teaching style' or 'way of teaching'.",
    synonyms: ["instructional", "educational", "didactic", "academic"]
  },
  {
    id: "vocab-21",
    word: "Holistic",
    phonetic: "/hoʊˈlɪs.tɪk/",
    pos: "adjective",
    cefr: "C1",
    topic: "Education, Pedagogy & Cognitive Science",
    definition: "Characterized by the belief that the parts of something are interconnected and can be explained only by reference to the whole.",
    collocations: ["holistic curriculum", "holistic evaluation", "holistic child development"],
    ieltsExample: "A holistic assessment framework incorporates creative thinking, collaborative aptitude, and emotional intelligence alongside standardized examinations.",
    examinerTip: "High-value adjective for educational essays calling for comprehensive reforms.",
    synonyms: ["comprehensive", "integrated", "all-encompassing", "systemic"]
  },
  {
    id: "vocab-22",
    word: "Rote",
    phonetic: "/roʊt/",
    pos: "noun",
    cefr: "C1",
    topic: "Education, Pedagogy & Cognitive Science",
    definition: "Mechanical or habitual repetition of something to be learned without understanding the underlying principles.",
    collocations: ["rote learning", "rote memorisation", "learned by rote"],
    ieltsExample: "Relying excessively on rote memorisation equips students with superficial facts but stymies lateral critical thinking.",
    examinerTip: "Key collocation to contrast with inquiry-based learning in schooling prompts.",
    synonyms: ["mechanical repetition", "memorisation", "rehearsal"]
  },
  {
    id: "vocab-23",
    word: "Cognitive",
    phonetic: "/ˈkɑːɡ.nə.tɪv/",
    pos: "adjective",
    cefr: "C1",
    topic: "Education, Pedagogy & Cognitive Science",
    definition: "Relating to cognition; the mental action or process of acquiring knowledge and understanding through thought, experience, and the senses.",
    collocations: ["cognitive development", "cognitive aptitude", "cognitive decline", "cognitive load"],
    ieltsExample: "Early childhood bilingualism has been empirically demonstrated to foster greater cognitive flexibility and problem-solving agility.",
    examinerTip: "Use 'cognitive skills' or 'cognitive load' when writing on child psychology, screen time, or linguistic acquisition.",
    synonyms: ["intellectual", "mental", "cerebral", "rational"]
  },

  // 6. Public Health, Medicine & Bioethics
  {
    id: "vocab-24",
    word: "Sedentary",
    phonetic: "/ˈsed.ən.ter.i/",
    pos: "adjective",
    cefr: "C1",
    topic: "Public Health, Medicine & Bioethics",
    definition: "Tending to spend much time seated; somewhat inactive.",
    collocations: ["sedentary lifestyle", "sedentary desk job", "combat sedentary habits"],
    ieltsExample: "The rise of automated office employment has precipitated a sedentary lifestyle that directly correlates with cardiovascular ailments.",
    examinerTip: "Collocates perfectly with 'lifestyle' in public health Task 2 essays.",
    synonyms: ["inactive", "desk-bound", "torpid", "sluggish"]
  },
  {
    id: "vocab-25",
    word: "Epidemiological",
    phonetic: "/ˌep.ə.diː.mi.əˈlɑː.dʒɪ.kəl/",
    pos: "adjective",
    cefr: "C2",
    topic: "Public Health, Medicine & Bioethics",
    definition: "Relating to the branch of medicine dealing with the incidence, distribution, and control of disease in populations.",
    collocations: ["epidemiological research", "epidemiological surveillance", "epidemiological trends"],
    ieltsExample: "Robust epidemiological data indicates that preventative dietary intervention yields far greater public health dividends than palliative medication.",
    examinerTip: "Demonstrates advanced scientific register when evaluating public health policy versus hospital treatment.",
    synonyms: ["population health", "demographic health"]
  },
  {
    id: "vocab-26",
    word: "Preventative",
    phonetic: "/prɪˈven.t̬ə.tɪv/",
    pos: "adjective",
    cefr: "C1",
    topic: "Public Health, Medicine & Bioethics",
    definition: "Designed to keep something undesirable such as illness or harm from occurring.",
    collocations: ["preventative medicine", "preventative measures", "preventative healthcare allocation"],
    ieltsExample: "Governments should channel fiscal subsidies into preventative healthcare, such as nutritional education and community athletics.",
    examinerTip: "The gold standard term for health essays advocating diet, exercise, and vaccination over hospital treatment.",
    synonyms: ["prophylactic", "precautionary", "preventive", "deterrent"]
  },

  // 7. Global Economy, Trade & Governance
  {
    id: "vocab-27",
    word: "Austerity",
    phonetic: "/ɑːˈster.ə.t̬i/",
    pos: "noun",
    cefr: "C2",
    topic: "Global Economy, Trade & Governance",
    definition: "Difficult economic conditions created by government policies aimed at reducing a budget deficit, usually through spending cuts.",
    collocations: ["fiscal austerity", "austerity measures", "prolonged period of austerity"],
    ieltsExample: "Enforcing severe fiscal austerity during economic downturns often contracts consumer demand and perpetuates youth unemployment.",
    examinerTip: "Use in government spending essays when discussing public funding vs debt reduction.",
    synonyms: ["fiscal restraint", "stringency", "frugality", "retrenchment"]
  },
  {
    id: "vocab-28",
    word: "Subsidize",
    phonetic: "/ˈsʌb.sə.daɪz/",
    pos: "verb",
    cefr: "C1",
    topic: "Global Economy, Trade & Governance",
    definition: "Support an organization or activity financially, especially by state funding.",
    collocations: ["heavily subsidized", "subsidize public transit", "subsidize tuition fees"],
    ieltsExample: "If municipal authorities subsidized electric mass transit, metropolitan carbon output and vehicular congestion would diminish substantially.",
    examinerTip: "Essential vocabulary for governmental responsibility prompts in Task 2.",
    synonyms: ["underwrite", "finance", "sponsor", "fund"]
  },
  {
    id: "vocab-29",
    word: "Equitable",
    phonetic: "/ˈek.wə.t̬ə.bəl/",
    pos: "adjective",
    cefr: "C1",
    topic: "Global Economy, Trade & Governance",
    definition: "Fair and impartial; dealing fairly and equally with all concerned.",
    collocations: ["equitable distribution of wealth", "equitable access to justice", "equitable tax framework"],
    ieltsExample: "Achieving an equitable distribution of technological resources is crucial if developing nations are to compete in globalized labor markets.",
    examinerTip: "Far more academic than 'fair' or 'equal'. Collocates with 'distribution', 'access', and 'framework'.",
    synonyms: ["fair", "just", "impartial", "even-handed"]
  },

  // 8. Culture, Arts & Linguistics
  {
    id: "vocab-30",
    word: "Homogenization",
    phonetic: "/həˌmɑː.dʒən.əˈzeɪ.ʃən/",
    pos: "noun",
    cefr: "C2",
    topic: "Culture, Arts & Linguistics",
    definition: "The process of making things uniform or similar, particularly cultural customs, traditions, or linguistic diversity.",
    collocations: ["cultural homogenization", "linguistic homogenization", "resist global homogenization"],
    ieltsExample: "Critics argue that unchecked commercial globalization fosters cultural homogenization, eroding indigenous folklore and dialectal richness.",
    examinerTip: "Crucial for globalization, international tourism, and traditional languages prompts.",
    synonyms: ["standardization", "uniformity", "assimilation"]
  },
  {
    id: "vocab-31",
    word: "Intangible",
    phonetic: "/ɪnˈtæn.dʒə.bəl/",
    pos: "adjective",
    cefr: "C1",
    topic: "Culture, Arts & Linguistics",
    definition: "Unable to be touched; not having physical presence, but holding immense cultural, sentimental, or intellectual value.",
    collocations: ["intangible cultural heritage", "intangible benefits", "intangible value of the arts"],
    ieltsExample: "Museums safeguard not merely physical artefacts, but also the intangible cultural memory of ancestral communities.",
    examinerTip: "UNESCO official terminology: 'intangible cultural heritage' (oral traditions, performing arts, rituals).",
    synonyms: ["incorporeal", "abstract", "non-material", "impalpable"]
  },
  {
    id: "vocab-32",
    word: "Provenance",
    phonetic: "/ˈprɑː.və.nəns/",
    pos: "noun",
    cefr: "C2",
    topic: "Culture, Arts & Linguistics",
    definition: "The place of origin or earliest known history of something, especially works of art, historical relics, or archaeological finds.",
    collocations: ["historical provenance", "verify the provenance of artefacts", "questionable provenance"],
    ieltsExample: "International museums face mounting diplomatic pressure to repatriate historical treasures whose colonial provenance lacks ethical consent.",
    examinerTip: "Spectacular C2 term for essays addressing museums, historic antiquities, and art heritage.",
    synonyms: ["origin", "source", "pedigree", "derivation"]
  }
];
