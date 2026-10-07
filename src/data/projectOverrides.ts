import type { Project, ProjectStep } from "./projects";

/**
 * English copy owned by the repo rather than Notion.
 *
 * Notion remains the source for everything not listed here. These fields win
 * over it so the repositioned copy stays versioned in git. `steps` are patched
 * by `num`, so a step absent from an override keeps its Notion text.
 */
export interface ProjectOverride
  extends Partial<Omit<Project, "slug" | "steps">> {
  steps?: ProjectStep[];
}

export const projectOverrides: Record<string, ProjectOverride> = {
  // Not publicly launched, so the case page shows no link to a live site.
  "eyelecture-app": {
    link: "",
  },

  "mostro-website": {
    type: "WEB DESIGN · WORDPRESS + DIVI",
    title: "Mostro Cine Coop: website design and WordPress build",
    description:
      "Designed in Figma and built in WordPress with Divi for an audiovisual cooperative in Montevideo.",
    role: "Web Designer & WordPress Developer, at Bits Kingdom",
    tools: "Figma, WordPress, Divi Builder, custom CSS",
    note: "This site was rebuilt on a different stack after I left Bits Kingdom in 2025. The screens below show the WordPress + Divi version I designed and built.",
    approach:
      "I designed the full site in Figma and built it myself in WordPress with Divi Builder, as part of the Bits Kingdom team. I carried the project from the first moodboard to launch: visual research, sitemap, wireframes, high-fidelity design, build and content integration with the collective.",
    metrics: [
      { value: "13", label: "templates built" },
      { value: "5", label: "projects published by the client" },
    ],
    steps: [
      {
        num: "04",
        title: "Build",
        body: "Built every template in Divi Builder to match the Figma designs section by section. Projects set up as their own content type, so the collective publishes new work without touching layouts. Custom CSS where Divi's modules fell short. Integrated the content with the collective, refined from their feedback and launched at mostro.uy.",
        imageLabel: "",
      },
    ],
  },

  "ileana-schinder-website-redesign": {
    type: "WEB DESIGN · CUSTOM WORDPRESS THEME",
    title: "Ileana Schinder: redesign and custom WordPress theme",
    description:
      "Redesign for a Washington DC architect. Designed in Figma, built as a custom WordPress theme coded by hand, no page builder.",
    role: "Web Designer & WordPress Developer, at Bits Kingdom",
    tools: "Figma, WordPress (custom theme), HTML, CSS, JavaScript, PHP",
    note: "This site was rebuilt on a different stack after I left Bits Kingdom in 2025. The screens below show the custom WordPress theme I designed and built in 2023.",
    approach:
      "I was both designer and developer on this project, as part of the Bits Kingdom team. After a discovery phase on her clients, competitors and brand, I designed a photography-first interface in Figma. Then I built it as a custom WordPress theme from scratch, with no page builder.",
    metrics: [{ value: "12", label: "theme templates" }],
    steps: [
      {
        num: "03",
        title: "Development",
        body: "Built a custom WordPress theme from scratch, with no page builder. Templates in PHP, styles and interactions in hand-written CSS and JavaScript. Portfolio projects as a custom content type with their own fields, so adding a project is filling out a form. Responsive from the first template, and structured so content updates need no developer.",
        imageLabel: "",
      },
    ],
  },
};

/** Applies the repo-owned English copy on top of a project from Notion. */
export function applyOverride(project: Project): Project {
  const o = projectOverrides[project.slug];
  if (!o) return project;

  const { steps: stepOverrides, ...fields } = o;
  const merged: Project = { ...project, ...fields };

  if (stepOverrides?.length) {
    const matched = new Set<string>();
    const patched = project.steps.map((step) => {
      const patch = stepOverrides.find((s) => s.num === step.num);
      if (!patch) return step;
      matched.add(patch.num);
      return { ...step, ...patch };
    });
    // A step the source does not have yet is appended rather than dropped.
    const extra = stepOverrides.filter((s) => !matched.has(s.num));
    merged.steps = [...patched, ...extra].sort((a, b) => a.num.localeCompare(b.num));
  }

  return merged;
}
