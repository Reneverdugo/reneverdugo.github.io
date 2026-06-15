import { Client } from "@notionhq/client";
import type { Project, ProjectStep } from "../data/projects";
import { projects as staticProjects } from "../data/projects";

const NOTION_TOKEN = import.meta.env.NOTION_TOKEN;
// "My projects" data source inside Design Portfolio
const DS_ID = "69ddc7b0-5479-4482-9a7a-902e5e0fc4a1";

function isConfigured(): boolean {
  return !!(NOTION_TOKEN && !NOTION_TOKEN.startsWith("secret_XXX"));
}

const notion = isConfigured() ? new Client({ auth: NOTION_TOKEN }) : null;

// ── Property helpers ──────────────────────────────────────────────────────────

function titleProp(prop: any): string {
  return prop?.title?.map((t: any) => t.plain_text).join("") ?? "";
}

function textProp(prop: any): string {
  return prop?.rich_text?.map((t: any) => t.plain_text).join("") ?? "";
}

function firstTag(prop: any): string {
  const first = prop?.multi_select?.[0]?.name ?? "";
  return first.toUpperCase();
}

function richTextContent(rt: any[]): string {
  return rt?.map((t: any) => t.plain_text).join("") ?? "";
}

// ── Block parser ──────────────────────────────────────────────────────────────

interface ParsedContent {
  challenge: string;
  approach: string;
  metrics: { value: string; label: string }[];
  steps: ProjectStep[];
}

function parseBlocks(blocks: any[]): ParsedContent {
  let section = "";
  const challengeLines: string[] = [];
  const approachLines: string[] = [];
  const metrics: { value: string; label: string }[] = [];
  const steps: ProjectStep[] = [];
  let currentStep: ProjectStep | null = null;

  for (const block of blocks) {
    const type: string = block.type;

    if (type === "heading_2") {
      if (currentStep) { steps.push(currentStep); currentStep = null; }
      section = richTextContent(block.heading_2.rich_text).toLowerCase().trim();
      continue;
    }

    if (type === "heading_3" && section === "process") {
      if (currentStep) steps.push(currentStep);
      const text = richTextContent(block.heading_3.rich_text);
      // Supports "01 — Title", "01. Title", "01 Title"
      const match = text.match(/^(\d+)[^\w]*(.+)$/);
      currentStep = {
        num: match ? match[1].padStart(2, "0") : String(steps.length + 1).padStart(2, "0"),
        title: match ? match[2].trim() : text,
        body: "",
        imageLabel: "",
      };
      continue;
    }

    if (type === "paragraph") {
      const text = richTextContent(block.paragraph.rich_text);
      if (!text) continue;
      if (section === "challenge") challengeLines.push(text);
      else if (section === "approach") approachLines.push(text);
      else if (section === "process" && currentStep) {
        currentStep.body += (currentStep.body ? "\n\n" : "") + text;
      }
      continue;
    }

    if (type === "bulleted_list_item" && section === "metrics") {
      const text = richTextContent(block.bulleted_list_item.rich_text);
      const parts = text.split("|");
      if (parts.length >= 2) {
        metrics.push({ value: parts[0].trim(), label: parts[1].trim() });
      }
      continue;
    }
  }

  if (currentStep) steps.push(currentStep);

  return {
    challenge: challengeLines.join("\n\n"),
    approach: approachLines.join("\n\n"),
    metrics,
    steps,
  };
}

async function fetchBlockContent(pageId: string): Promise<ParsedContent | null> {
  if (!notion) return null;
  try {
    const res = await notion.blocks.children.list({ block_id: pageId, page_size: 100 });
    return parseBlocks(res.results);
  } catch (err) {
    console.warn(`[Notion] Could not fetch blocks for page ${pageId}:`, err);
    return null;
  }
}

// ── Notion page → Project ─────────────────────────────────────────────────────

function urlProp(prop: any): string {
  return prop?.url ?? "";
}

function pageToProject(page: any, content?: ParsedContent | null): Project {
  const p = page.properties;
  const slug = slugify(textProp(p.Slug) || titleProp(p.Name));
  const fallback = staticProjects.find((s) => s.slug === slug);

  return {
    title:       titleProp(p.Name),
    type:        firstTag(p.Tags) || fallback?.type || "PROJECT",
    description: textProp(p.Description) || fallback?.description || "",
    color:       textProp(p.Color) || fallback?.color || "#162d5a",
    slug,
    year:        textProp(p.Year) || fallback?.year || "",
    role:        textProp(p.Role) || fallback?.role || "",
    duration:    textProp(p.Duration) || fallback?.duration || "",
    tools:       textProp(p.Tools) || fallback?.tools || "",
    subtitle:    textProp(p.Subtitle) || fallback?.subtitle || "",
    challenge:   content?.challenge || fallback?.challenge || "",
    approach:    content?.approach  || fallback?.approach  || "",
    metrics:     (content?.metrics?.length  ? content.metrics  : null) ?? fallback?.metrics ?? [],
    steps:       (content?.steps?.length    ? content.steps    : null) ?? fallback?.steps   ?? [],
    link:        urlProp(p.Link) || fallback?.link,
    demo:        urlProp(p.Demo) || fallback?.demo,
    nextProject: fallback?.nextProject,
  };
}

// ── Public API ────────────────────────────────────────────────────────────────

export async function getProjects(): Promise<Project[]> {
  if (!isConfigured() || !notion) {
    console.log("[Notion] Token not set — using static data.");
    return staticProjects;
  }

  try {
    const response = await notion.dataSources.query({
      data_source_id: DS_ID,
      filter: { property: "Published", checkbox: { equals: true } },
      sorts: [{ property: "Order", direction: "ascending" }],
    });

    if (response.results.length === 0) {
      console.warn("[Notion] 0 published projects — falling back to static data.");
      return staticProjects;
    }

    return response.results.map((page: any) => pageToProject(page));
  } catch (err) {
    console.warn("[Notion] Query failed — falling back to static data.", err);
    return staticProjects;
  }
}

// Used by [slug].astro getStaticPaths — fetches blocks for each project
export async function getProjectsWithContent(): Promise<Project[]> {
  if (!isConfigured() || !notion) {
    console.log("[Notion] Token not set — using static data.");
    return staticProjects;
  }

  try {
    const response = await notion.dataSources.query({
      data_source_id: DS_ID,
      filter: { property: "Published", checkbox: { equals: true } },
      sorts: [{ property: "Order", direction: "ascending" }],
    });

    if (response.results.length === 0) {
      console.warn("[Notion] 0 published projects — falling back to static data.");
      return staticProjects;
    }

    const projects = await Promise.all(
      response.results.map(async (page: any) => {
        const content = await fetchBlockContent(page.id);
        return pageToProject(page, content);
      })
    );

    return projects;
  } catch (err) {
    console.warn("[Notion] Query failed — falling back to static data.", err);
    return staticProjects;
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const projects = await getProjectsWithContent();
  return projects.find((p) => p.slug === slug);
}

// ── Utils ─────────────────────────────────────────────────────────────────────

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
