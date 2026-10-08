// Copy del About, los dos idiomas juntos a propósito.
//
// El resto del sitio tiene el inglés hardcodeado en el markup y el español en
// src/i18n/ui.ts, lo que obliga a tocar dos lugares por cada cambio. Este módulo lo
// importan las dos homes, así que un cambio de texto se hace una sola vez.
//
// Nota: la versión de la home omite el párrafo de "Actualmente" a propósito — el hero
// ya lo dice dos pantallas más arriba. Si algún día existe una página /about propia,
// ese párrafo entra ahí.

export interface AboutCopy {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
}

export const about: Record<"en" | "es", AboutCopy> = {
  en: {
    eyebrow: "About",
    heading: "I design things and build them myself.",
    paragraphs: [
      "I've been doing both at once since before they were screens.",
      "I studied graphic design at ITSON, in Ciudad Obregón, Sonora. Then I joined Click Impresión Digital: I designed the piece and then ran the machine that printed it. I also handled clients, put together quotes and sold. There was never a “hand it off to production” — production was me.",
      "From there I moved to La Crónica, Grupo Healy's newspaper, as an advertising designer: creating and correcting ad pieces, planning the daily runs.",
      "In 2016 I moved to digital. At Emcor Software I designed web and mobile interfaces, visual systems and icon sets. At Crol I worked on product, on travel and automotive platforms. And in 2020 I joined Bits Kingdom, an agency specialized in WordPress, where I spent five years taking client sites from Figma to launch — designing and building them myself, with Divi or with custom themes coded by hand.",
      "This website is my place on the web: the work, the side projects and everything in between.",
    ],
  },
  es: {
    eyebrow: "Acerca de",
    heading: "Diseño cosas y las construyo yo mismo.",
    paragraphs: [
      "Llevo haciendo las dos a la vez desde antes de que fueran pantallas.",
      "Estudié diseño gráfico en ITSON, en Ciudad Obregón, Sonora. Después entré a Click Impresión Digital: diseñaba la pieza y después operaba la máquina que la imprimía. También atendía a los clientes, armaba presupuestos y vendía. Nunca hubo un “se lo paso a producción” — producción era yo.",
      "De ahí pasé a La Crónica, el periódico de Grupo Healy, como diseñador publicitario: creación y corrección de piezas, planeación de las publicaciones diarias.",
      "En 2016 me mudé a lo digital. En Emcor Software diseñé interfaces para web y móvil, sistemas visuales y sets de iconos. En Crol trabajé en producto, sobre plataformas de viajes y automotriz. Y en 2020 entré a Bits Kingdom, una agencia especializada en WordPress, donde pasé cinco años llevando sitios de clientes de Figma al lanzamiento — diseñándolos y construyéndolos yo, con Divi o con temas a medida escritos a mano.",
      "Este sitio es mi lugar en la web: el trabajo, los proyectos paralelos y todo lo que hay en medio.",
    ],
  },
};
