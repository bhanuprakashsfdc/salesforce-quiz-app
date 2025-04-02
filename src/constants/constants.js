export const APP_NAME = "Salesforce QuizMaster";

export const QUIZ_CATEGORIES = [
  "Admin",
  "Apex Development",
  "LWC",
  "Integration",
  "Security",
  "Architect"
];

export const DIFFICULTY_LEVELS = [
  "Beginner",
  "Intermediate",
  "Advanced"
];

export const QUIZ_TYPES = {
  FLASHCARD: "flashcard",
  MCQ: "multiple_choice",
  TRUE_FALSE: "true_false",
  SCENARIO: "scenario"
};

export const MAX_QUESTIONS_PER_QUIZ = 10;
export const QUIZ_TIME_LIMIT = 30; // Time limit per question in seconds

export const THEME = {
  light: {
    primary: "#1589EE",
    secondary: "#0070D2",
    background: "#FFFFFF",
    surface: "#F4F6F9",
    text: "#16325C",
    error: "#C23934",
    success: "#04844B"
  },
  dark: {
    primary: "#0070D2",
    secondary: "#1589EE",
    background: "#1A1B1E",
    surface: "#2A2C31",
    text: "#FFFFFF",
    error: "#FF3B30",
    success: "#4CD964"
  }
};