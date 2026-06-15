export interface PostBodyBlock {
  type: "paragraph" | "heading" | "quote" | "numbered-item";
  content: string;
  subheading?: string;
  number?: number;
}

export interface RelatedPost {
  slug: string;
  title: string;
  category: string;
  date: string;
}

export interface Post {
  title: string;
  category: string;
  date: string;
  excerpt: string;
  slug: string;
  readTime: string;
  leadParagraph: string;
  body: PostBodyBlock[];
  tags: string[];
  toc: string[];
  related: RelatedPost[];
}

export const posts: Post[] = [
  {
    title: "Hey — Welcome to the Blog",
    category: "Personal",
    date: "Jun 14, 2026",
    excerpt:
      "First post on this new corner of the internet. A quick hello and what to expect from this space.",
    slug: "welcome-to-the-blog",
    readTime: "2 min read",
    leadParagraph:
      "This is the first post on this new corner of the internet — and if you're reading this, I'm really glad you found it.",
    body: [
      {
        type: "paragraph",
        content:
          "I wanted this site to be more than just a portfolio. Beyond showing the work I've done, I want it to be a real presence online — a place where you can get a sense of who I am, how I think, and what I'm actually spending my time on.",
      },
      {
        type: "paragraph",
        content:
          "This blog is where that happens. I'll be writing about design, development, AI, and anything at the intersection of technology and creativity that I think is worth sharing. No rigid publishing schedule, nothing too formal — just things I find interesting enough to put into words.",
      },
      {
        type: "paragraph",
        content:
          "If you're into design, tech, or just curious about what's happening in this space, I hope you find something useful here. More posts coming soon. See you around — René.",
      },
    ],
    tags: ["Personal", "Welcome"],
    toc: [],
    related: [],
  },
];
