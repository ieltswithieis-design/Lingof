import { FullIeltsTest } from "../types/ielts";

export const fullIeltsTests: FullIeltsTest[] = Array.from({ length: 20 }, (_, i) => {
  const id = i + 1;
  const difficulties: ("Standard Academic" | "High Stakes Academic" | "Official Cambridge Simulation")[] = [
    "Official Cambridge Simulation",
    "Standard Academic",
    "High Stakes Academic",
    "Official Cambridge Simulation",
  ];
  const difficulty = difficulties[i % difficulties.length];

  const themes = [
    "Cambridge Academic Mock Examination 1 • Science & Environment",
    "Cambridge Academic Mock Examination 2 • Society & Urban Dynamics",
    "Cambridge Academic Mock Examination 3 • Technology & Cognitive Science",
    "Cambridge Academic Mock Examination 4 • Climate, Oceans & Ecology",
    "Cambridge Academic Mock Examination 5 • Economics & Global Logistics",
    "Cambridge Academic Mock Examination 6 • Higher Education & Linguistics",
    "Cambridge Academic Mock Examination 7 • Renewable Energy & Architecture",
    "Cambridge Academic Mock Examination 8 • Healthcare Innovations & Nutrition",
    "Cambridge Academic Mock Examination 9 • Astronomy, Space & Exploration",
    "Cambridge Academic Mock Examination 10 • Psychology & Human Behavior",
    "Cambridge Academic Mock Examination 11 • Transportation & Smart Cities",
    "Cambridge Academic Mock Examination 12 • Literature, History & Archaeology",
    "Cambridge Academic Mock Examination 13 • Marine Biology & Conservation",
    "Cambridge Academic Mock Examination 14 • Artificial Intelligence & Ethics",
    "Cambridge Academic Mock Examination 15 • Global Agriculture & Food Security",
    "Cambridge Academic Mock Examination 16 • Anthropology & Cultural Heritage",
    "Cambridge Academic Mock Examination 17 • Engineering & Material Science",
    "Cambridge Academic Mock Examination 18 • Public Health & Epidemiology",
    "Cambridge Academic Mock Examination 19 • Media, Communication & Journalism",
    "Cambridge Academic Mock Examination 20 • Grand Championship Master Simulation",
  ];

  return {
    id,
    title: `Full IELTS Academic Test ${id}`,
    subTitle: themes[i] || `Full 4-Skill Standard Academic Examination ${id}`,
    readingId: id,
    listeningId: id,
    writingId: id,
    speakingId: id,
    difficulty,
    estimatedTime: "2 hrs 45 mins",
  };
});
