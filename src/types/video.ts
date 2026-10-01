export type VideoCategory = 
  | "All"
  | "Speaking Band 9"
  | "Writing Task 2"
  | "Writing Task 1"
  | "Reading Techniques"
  | "Listening Strategies"
  | "Vocabulary & Grammar"
  | "Full Mock Walkthroughs"
  | "Examiner Interviews";

export interface IeltsYoutubeVideo {
  id: string;
  youtubeId: string;
  customEmbedUrl?: string;
  title: string;
  channel: string;
  channelAvatar?: string;
  category: VideoCategory;
  duration: string;
  views: string;
  uploadedDate: string;
  description: string;
  keyTimestamps: { time: string; label: string }[];
  tags: string[];
  recommendedSection?: "reading" | "listening" | "writing" | "speaking" | "fulltests";
  recommendedTestId?: number;
}
