// ── Mentor ──────────────────────────────────────────────────────────────────
export const mentor = {
  name: "Dr. Aditi Goyal",
  title: "Research Scientist & Mentor",
  institution: "RUHS",
  bio: "With over 8 years of research experience spanning machine learning and cognitive science, I've guided 50+ students into top global programs. My sessions are practical, personalised, and genuinely useful — whether you're just starting out or refining your research proposal.",
  stats: [
    { value: "50+", label: "Students Mentored" },
    { value: "12",  label: "Publications" },
    { value: "8+",  label: "Years of Research" },
    { value: "95%", label: "Admit Rate" },
  ],
};

// ── Achievements ─────────────────────────────────────────────────────────────
export const achievements = [
  {
    icon: "📄",
    title: "12 Peer-Reviewed Publications",
    description: "Published in top journals including Nature, NeurIPS, and ICML.",
  },
  {
    icon: "🏆",
    title: "Best Paper Award — ICML 2022",
    description: "Recognised for groundbreaking work in reinforcement learning.",
  },
  {
    icon: "🎓",
    title: "PhD, IIT Delhi",
    description: "Doctoral research in machine learning and cognitive systems.",
  },
  {
    icon: "🌍",
    title: "International Collaborations",
    description: "Worked with researchers at MIT, Oxford, and ETH Zurich.",
  },
];

// ── Programs ─────────────────────────────────────────────────────────────────
export const programs = [
  {
    id: "discovery",
    name: "Discovery Session",
    price: "₹999",
    duration: "30 minutes",
    description:
      "A focused intro to your research goals and the best paths to pursue them.",
    features: [
      "Career path guidance",
      "Research area scoping",
      "Top program recommendations",
      "Live Q&A",
    ],
    cta: "Book Now",
    popular: false,
  },
  {
    id: "deepdive",
    name: "Deep Dive",
    price: "₹2,999",
    duration: "60 minutes",
    description:
      "An in-depth session covering your profile, SOP, and application strategy.",
    features: [
      "Everything in Discovery",
      "SOP / research statement review",
      "Professor outreach strategy",
      "University shortlisting",
      "Email follow-up support",
    ],
    cta: "Book Now",
    popular: true,
  },
  {
    id: "program",
    name: "Full Program",
    price: "₹7,999",
    duration: "4 sessions",
    description:
      "End-to-end mentorship from profile building all the way to final applications.",
    features: [
      "Everything in Deep Dive",
      "4 × 60-min sessions",
      "Complete SOP drafting",
      "Application review",
      "Mock interviews",
      "Ongoing WhatsApp support",
    ],
    cta: "Apply Now",
    popular: false,
  },
];

// ── Testimonials ─────────────────────────────────────────────────────────────
export const testimonials = [
  {
    quote:
      "Dr. Sharma's guidance completely changed my approach to research applications. I got into 3 of my top 5 programs!",
    name: "Arjun Mehta",
    role: "MS CS, Stanford University",
    rating: 5,
  },
  {
    quote:
      "The SOP review session was incredible. She pointed out things I'd missed after months of drafting on my own.",
    name: "Sneha Patel",
    role: "PhD, University of Cambridge",
    rating: 5,
  },
  {
    quote:
      "I had no idea how to reach out to professors. After one session, I had a framework and even got a positive reply!",
    name: "Rohan Gupta",
    role: "Research Intern, MIT CSAIL",
    rating: 5,
  },
  {
    quote:
      "Very practical advice — not just 'work hard' but actual strategies that worked for my specific situation.",
    name: "Divya Krishnan",
    role: "PhD, ETH Zurich",
    rating: 5,
  },
];

// ── Config ───────────────────────────────────────────────────────────────────
export const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeUYXl4wA8cPgKyev2gqYpevJdISsf-I3KRMsIUE3qNdWqeYA/viewform?usp=publish-editor";
