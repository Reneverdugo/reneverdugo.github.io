export interface ProjectStep {
  num: string;
  title: string;
  body: string;
  imageLabel: string;
}

export interface Project {
  title: string;
  type: string;
  description: string;
  color: string;
  slug: string;
  year: string;
  role: string;
  duration: string;
  tools: string;
  subtitle: string;
  challenge: string;
  approach: string;
  metrics: { value: string; label: string }[];
  steps: ProjectStep[];
  link?: string;
  demo?: string;
  nextProject?: { slug: string; title: string; type: string };
}

export const projects: Project[] = [
  {
    title: "BitForex Website",
    type: "WEB DESIGN",
    description: "Complete redesign of a crypto exchange — from IA to hi-fi prototypes.",
    color: "#162d5a",
    slug: "bitforex-website",
    year: "2024",
    role: "Lead Designer",
    duration: "3 months",
    tools: "Figma · FigJam · Maze",
    subtitle:
      "Complete redesign of a crypto exchange platform — from information architecture to high-fidelity prototypes tested with real users.",
    challenge:
      "BitForex's legacy website suffered from poor navigation, low trust signals, and a conversion rate that trailed competitors by a wide margin. Users were dropping off during onboarding and struggling to understand complex financial products.\n\nThe goal: rebuild trust, streamline user flows, and create a design system that scales across the full product suite.",
    approach:
      "Starting with a competitor audit and 12 user interviews, I mapped core user journeys and identified critical drop-off points. The redesign focused on clarity, progressive disclosure, and a component-based design system built for scale.",
    metrics: [
      { value: "34%", label: "Increase in conversion" },
      { value: "62%", label: "Reduction in drop-off" },
      { value: "4.8/5", label: "Avg. usability score" },
      { value: "2×", label: "Faster onboarding flow" },
    ],
    steps: [
      {
        num: "01",
        title: "Discovery & Research",
        body: "User interviews, heuristic evaluation of the old site, competitor benchmarking, and analytics deep-dive. I identified five major friction points that formed the basis for every design decision.",
        imageLabel: "Research artefacts",
      },
      {
        num: "02",
        title: "Ideation & Design",
        body: "From lo-fi wireframes to a full component library. I designed every state, every edge case — onboarding, trading flows, account management — building a system the dev team could own.",
        imageLabel: "Wireframes & hi-fi screens",
      },
      {
        num: "03",
        title: "Testing & Handoff",
        body: "Moderated usability sessions with 8 participants using Maze. Three rounds of iteration based on findings. Final delivery included a documented design system, annotated specs, and a handoff session with the engineering team.",
        imageLabel: "Test results & iteration notes",
      },
    ],
    nextProject: { slug: "adventura-ecom", title: "Adventura E-com", type: "UX Design" },
  },
  {
    title: "Adventura E-com",
    type: "UX DESIGN",
    description: "End-to-end UX for a travel booking platform, boosting conversion 34%.",
    color: "#0f2444",
    slug: "adventura-ecom",
    year: "2023",
    role: "UX Designer",
    duration: "4 months",
    tools: "Figma · Hotjar · Notion",
    subtitle:
      "End-to-end UX design for a travel booking platform — from research to launch, with a 34% lift in conversion.",
    challenge:
      "Adventura's booking funnel had too many steps and unclear trust signals. High-intent users were abandoning at the payment step, and the mobile experience was an afterthought.\n\nThe brief: simplify the booking flow, build trust, and make mobile-first the default — not a port.",
    approach:
      "I ran a full audit, five guerrilla usability tests, and mapped the booking journey end-to-end. Mobile-first wireframes led to a streamlined 3-step checkout. I collaborated directly with the front-end team throughout build.",
    metrics: [
      { value: "34%", label: "Conversion increase" },
      { value: "58%", label: "Fewer checkout steps" },
      { value: "4.6/5", label: "User satisfaction" },
      { value: "3×", label: "Mobile sessions" },
    ],
    steps: [
      {
        num: "01",
        title: "Audit & Research",
        body: "Heatmaps, session recordings, and user interviews revealed the exact drop-off points. Mobile was the biggest gap — 60% of sessions, 18% of completions.",
        imageLabel: "Audit findings",
      },
      {
        num: "02",
        title: "Mobile-First Design",
        body: "Rebuilt the booking flow from scratch — 3 steps instead of 8. Each screen tested individually before moving on. Interaction patterns lifted from native apps, not desktop ports.",
        imageLabel: "Mobile wireframes",
      },
      {
        num: "03",
        title: "Launch & Iteration",
        body: "Shipped with the engineering team over 6 sprints. Post-launch data informed two rounds of iteration — improving the date picker and clarifying cancellation policy copy.",
        imageLabel: "Post-launch metrics",
      },
    ],
    nextProject: { slug: "kohi-app", title: "Kohi App", type: "Product Design" },
  },
  {
    title: "Kohi App",
    type: "PRODUCT DESIGN",
    description: "Mobile productivity app for coffee enthusiasts. iOS & Android.",
    color: "#1a3466",
    slug: "kohi-app",
    year: "2021–2022",
    role: "Product Designer",
    duration: "14 months",
    tools: "Figma · Principle · Notion",
    subtitle:
      "Designed Kohi App from 0 to 1 — a mobile productivity tool for coffee enthusiasts shipping on iOS and Android.",
    challenge:
      "A two-person startup with a big idea and no design foundation. The app needed to feel premium but remain accessible, and had to ship on both platforms simultaneously with a tiny engineering team.\n\nMy challenge: move fast, establish a design system early, and make sure every interaction felt intentional.",
    approach:
      "I ran 40+ user research sessions, co-designed the brand with the founder, and built a shared component library used by both iOS and Android devs. Onboarding was the top priority — and it showed in the numbers.",
    metrics: [
      { value: "52%", label: "Faster onboarding" },
      { value: "4.8★", label: "App Store rating" },
      { value: "40+", label: "Research sessions" },
      { value: "0→1", label: "Full product design" },
    ],
    steps: [
      {
        num: "01",
        title: "Foundation",
        body: "No existing brand, no design system. I started by running user interviews to understand what coffee enthusiasts actually track, then built the design tokens and component library before touching any screens.",
        imageLabel: "Design system foundations",
      },
      {
        num: "02",
        title: "Onboarding & Core Flows",
        body: "Onboarding was the biggest risk. I designed and tested five different versions with real users before settling on a progressive disclosure model that taught the app through use, not tutorials.",
        imageLabel: "Onboarding screens",
      },
      {
        num: "03",
        title: "Cross-Platform Delivery",
        body: "Worked directly with iOS and Android engineers. Held weekly design reviews, annotated every spec, and maintained a living component library so both teams shipped consistent UI.",
        imageLabel: "Cross-platform components",
      },
    ],
    nextProject: { slug: "studio-interior", title: "Studio Interior", type: "Web Design" },
  },
  {
    title: "Studio Interior",
    type: "WEB DESIGN",
    description: "Portfolio site for a boutique interior design studio in Amsterdam.",
    color: "#142852",
    slug: "studio-interior",
    year: "2020",
    role: "UX & Visual Designer",
    duration: "6 weeks",
    tools: "Figma · Webflow",
    subtitle:
      "Portfolio website and booking flow for a boutique interior design studio in Amsterdam — brand, UX, and build included.",
    challenge:
      "Studio Interior's previous website was generic, slow, and didn't reflect the quality of their work. Clients were calling instead of booking online because the contact flow was buried.\n\nThe goal: create a site that felt as considered as their interiors, with a booking flow that actually converted.",
    approach:
      "Close collaboration with the creative director to translate their aesthetic into a digital identity. I designed the full site in Figma, built it in Webflow, and introduced user testing to a team that previously relied on intuition.",
    metrics: [
      { value: "3×", label: "Online enquiries" },
      { value: "40%", label: "Faster load time" },
      { value: "CSS", label: "Design Awards 2020" },
      { value: "6wk", label: "Design to launch" },
    ],
    steps: [
      {
        num: "01",
        title: "Brand Translation",
        body: "Extensive moodboarding sessions with the creative director. Developed typography, color, and spacing scales that matched the studio's considered, material-forward aesthetic.",
        imageLabel: "Brand moodboard & tokens",
      },
      {
        num: "02",
        title: "Site Design",
        body: "Full site designed in Figma — portfolio grid, project pages, studio story, and contact flow. Every component designed for Webflow's CMS from day one.",
        imageLabel: "Key screens",
      },
      {
        num: "03",
        title: "Build & Launch",
        body: "Built the site in Webflow, trained the team on the CMS, and set up analytics. Within 3 months the site had won a CSS Design Award and online enquiries had tripled.",
        imageLabel: "Live site & metrics",
      },
    ],
    nextProject: { slug: "bitforex-website", title: "BitForex Website", type: "Web Design" },
  },
];
