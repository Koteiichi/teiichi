export interface UserProfile {
  name: string;
  nativeName: string;
  nativeLanguage: string; // e.g. "Arabic", "Chinese", "Japanese"
  title: string;
  bio: string;
  location: string;
  timezone: string;
  email: string;
  resumeUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  aboutParagraphs: string[];
  accentColor: string; // Tailwind-friendly or Hex string
  theme: "dark" | "light";
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  category: string;
  year: string;
  tags: string[];
  projectUrl?: string;
  visualType: "dashboard" | "mesh" | "data-flow" | "architecture" | "organic";
  visualColor: string; // e.g., "#8B5CF6", "#10B981" etc.
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
}

export interface StrengthCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string; // Lucide icon key
}
