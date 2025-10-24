// Tab configuration
export const TABS = [
  { id: 1, label: "About Me" },
  { id: 2, label: "Experiences" },
  { id: 3, label: "Recommended" }, // Fixed typo
];

// Tab content data
export const TAB_CONTENT = {
  1: {
    title: "About Me",
    content: [
      "Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.",
      "I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...",
    ],
  },
  2: {
    title: "Experiences",
    content: [
      "I have extensive experience in sales and customer relationship management.",
      "Over the years, I've worked with various clients and helped them achieve their business goals through innovative solutions.",
    ],
  },
  3: {
    title: "Recommended",
    content: [
      "Here are some recommendations and testimonials from my clients.",
      "I've been consistently rated 5 stars by my clients for my dedication and results-driven approach.",
    ],
  },
};

// Animation configuration
export const ANIMATION_CONFIG = {
  spring: {
    type: "spring",
    bounce: 0.2,
    duration: 0.6,
  },
};
