import {
  AppWindow,
  CheckCircle2,
  Cpu,
  History,
  LayoutDashboard,
  MessageSquare,
  PenTool,
  Rocket,
  Share2,
  ShieldCheck,
  Video,
} from "lucide-react";

export const navItems = [
  { label: "Solutions", href: "#solutions" },
  { label: "Workflow", href: "#workflow" },
  { label: "Agents", href: "#agents" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const imageTiles = [
  {
    src: "/img/glow-glitter-portrait-beautiful-woman.jpg",
    alt: "AI-generated social media content - Lifestyle",
    label: "Instagram",
  },
  {
    src: "/img/modern-architectural-marvel-futuristic-building.jpg",
    alt: "AI-generated social media content - Architecture",
    label: "Pinterest",
  },
  {
    src: "/img/model-translucent-fabric-with-floral-accent.jpg",
    alt: "AI-generated social media content - Fashion",
    label: "TikTok",
  },
  {
    src: "/img/portrait-woman-with-clear-bubble.jpg",
    alt: "AI-generated social media content - Campaign",
    label: "LinkedIn",
  },
  {
    src: "/img/model-posing-with-colorful-smoke.jpg",
    alt: "AI-generated social media content - Abstract",
    label: "X",
  },
  {
    src: "/img/portrait-fantasy-sea-creature.jpg",
    alt: "AI-generated social media content - Fantasy",
    label: "YouTube",
  },
];

export const workflowSteps = [
  {
    icon: PenTool,
    title: "Draft the concept",
    body: "Input your core idea, target audience, and desired tone. Our agents brainstorm scripts and hooks in seconds.",
  },
  {
    icon: Cpu,
    title: "Orchestrate agents",
    body: "Assign specialized AI agents to handle scriptwriting, image generation, video editing, and captioning.",
  },
  {
    icon: LayoutDashboard,
    title: "Multi-format render",
    body: "Automatically transform your idea into optimized formats for Reels, TikToks, Carousel posts, and Threads.",
  },
  {
    icon: Share2,
    title: "Sync & Schedule",
    body: "Review the production-ready content and schedule across all your socials with brand-consistent voice.",
  },
];

export const featureBlocks = [
  {
    icon: MessageSquare,
    title: "Brand Voice Memory",
    body: "Staria learns your unique brand personality, ensuring every generated post feels authentically yours across all channels.",
  },
  {
    icon: Rocket,
    title: "Agentic Swarms",
    body: "Multiple AI agents work in parallel to research trends, write copy, and design visuals in a synchronized creative flow.",
  },
  {
    icon: AppWindow,
    title: "Native Layouts",
    body: "Content is generated directly into native platform layouts, allowing you to preview exactly how it looks before publishing.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Shield",
    body: "Staria automatically checks content against platform guidelines and brand safety standards before every export.",
  },
];

export const proofPoints = [
  "Viral Reels scripts",
  "High-conversion Carousels",
  "Automated Threads",
  "Pinterest aesthetics",
  "TikTok trend analysis",
  "Brand voice profiles",
];

export const plans = [
  {
    name: "Individual",
    price: "$29",
    description: "For creators scaling their personal brand across three platforms.",
    features: [
      "100 content sets / month",
      "2 brand voice profiles",
      "HD image generation",
      "Basic scheduling",
    ],
  },
  {
    name: "Team",
    price: "$99",
    description: "For small agencies managing multiple client social ecosystems.",
    features: [
      "500 content sets / month",
      "10 brand voice profiles",
      "Video agent access",
      "Collaborative workspace",
      "Priority rendering",
    ],
    featured: true,
  },
  {
    name: "Agency",
    price: "Custom",
    description: "For large organizations requiring high-volume output and SSO.",
    features: [
      "Unlimited content",
      "Custom agent training",
      "API access",
      "Dedicated account manager",
    ],
  },
];

export const faqs = [
  {
    question: "Is Staria a real product?",
    answer:
      "This is a conceptual landing page for Day 7 of a daily landing page challenge. The page is structured as if Staria were a production-grade AI content factory.",
  },
  {
    question: "How does Staria maintain my brand voice?",
    answer:
      "Staria uses a specialized 'Brand Memory' agent that analyzes your past successful content to replicate your unique tone, vocabulary, and style.",
  },
  {
    question: "Which platforms does it support?",
    answer:
      "Staria is built to support all major visual and text-based platforms, including Instagram, TikTok, LinkedIn, X, Pinterest, and YouTube Shorts.",
  },
];

export const stats = [
  { label: "Content velocity", value: "10x" },
  { label: "Voice consistency", value: "99%" },
  { label: "Platforms", value: "8" },
];

export const agentControls = [
  { icon: PenTool, label: "Script" },
  { icon: Video, label: "Edit" },
  { icon: History, label: "Log" },
];
