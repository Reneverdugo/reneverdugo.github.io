import type { PostBodyBlock, RelatedPost } from "./posts";

interface PostTranslationES {
  title: string;
  excerpt: string;
  readTime: string;
  leadParagraph: string;
  body: PostBodyBlock[];
  tags: string[];
  toc: string[];
  related: RelatedPost[];
}

export const postTranslationsES: Record<string, PostTranslationES> = {
  "welcome-to-the-blog": {
    title: "Hola — Bienvenido al Blog",
    excerpt:
      "Primer post en este nuevo rincón de internet. Un breve saludo y qué esperar de este espacio.",
    readTime: "2 min de lectura",
    leadParagraph:
      "Este es el primer post en este nuevo rincón de internet — y si lo estás leyendo, me alegra mucho que lo hayas encontrado.",
    body: [
      {
        type: "paragraph",
        content:
          "Quería que este sitio fuera más que un portafolio. Más allá de mostrar el trabajo que he hecho, quiero que sea una presencia real en internet — un lugar donde puedas hacerte una idea de quién soy, cómo pienso y en qué estoy invirtiendo mi tiempo.",
      },
      {
        type: "paragraph",
        content:
          "Este blog es donde eso sucede. Voy a escribir sobre diseño, desarrollo, IA y todo lo que está en la intersección entre tecnología y creatividad que vale la pena compartir. Sin un calendario de publicación rígido, nada demasiado formal — solo cosas que encuentro lo suficientemente interesantes como para ponerlas en palabras.",
      },
      {
        type: "paragraph",
        content:
          "Si te interesa el diseño, la tecnología, o simplemente tienes curiosidad por lo que está pasando en este espacio, espero que encuentres algo útil aquí. Más posts próximamente. Nos vemos — René.",
      },
    ],
    tags: ["Personal", "Bienvenida"],
    toc: [],
    related: [],
  },
};
