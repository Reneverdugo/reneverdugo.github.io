import type { Project, ProjectStep } from "./projects";

interface ProjectTranslationES {
  description: string;
  subtitle: string;
  challenge: string;
  approach: string;
  metrics: { value: string; label: string }[];
  steps: ProjectStep[];
  /** Optional header fields; omitted keys keep the English value. */
  type?: string;
  title?: string;
  role?: string;
  tools?: string;
  note?: string;
}

export const projectTranslationsES: Record<string, ProjectTranslationES> = {
  "eyelecture-app": {
    description:
      "Eyelecture es una solución de gestión de aprendizaje en la nube para la formación en oftalmología.",
    subtitle: "",
    challenge:
      "Eyelecture es una plataforma de gestión de aprendizaje en la nube para formación en oftalmología. El reto fue diseñar una experiencia móvil que ayudara a los estudiantes de medicina a continuar sus cursos de forma más fácil y efectiva — haciendo que lecturas, quizzes y el seguimiento de rendimiento se sintieran intuitivos, no clínicos.\n\nLa plataforma necesitaba soportar contenido educativo complejo manteniéndose accesible para estudiantes que ya gestionan una carga académica exigente.",
    approach:
      "Trabajando con una metodología de Diseño Centrado en el Usuario, lideré el UX/UI con foco en los usuarios finales (estudiantes), asegurando que cada decisión reflejara sus necesidades y contexto reales.\n\nEl proceso incluyó investigación de usuarios, wireframing, prototipado interactivo en Figma y pruebas de usabilidad para validar y refinar la experiencia antes de la entrega final.",
    metrics: [
      { value: "30%", label: "Aumento en la actividad de usuarios" },
      { value: "12%", label: "Crecimiento en nuevos usuarios" },
    ],
    steps: [
      {
        num: "01",
        title: "Investigación de Usuarios",
        body: "Realicé sesiones de investigación para entender cómo los estudiantes de oftalmología interactúan con los materiales de aprendizaje — mapeando puntos de dolor, comportamientos y objetivos para informar cada decisión de diseño.",
        imageLabel: "",
      },
      {
        num: "02",
        title: "Wireframing y Diseño",
        body: "Traduje los hallazgos de investigación en wireframes y diseños en alta fidelidad en Figma. Definí los flujos principales: lecturas, quizzes y dashboard de rendimiento. Construí un sistema de diseño para garantizar consistencia visual.",
        imageLabel: "",
      },
      {
        num: "03",
        title: "Prototipado y Testing",
        body: "Creé prototipos interactivos y realicé sesiones de pruebas de usabilidad para validar la experiencia. Iteré a partir del feedback antes de la entrega final.",
        imageLabel: "",
      },
    ],
  },

  "bkations": {
    description:
      "BKations es una herramienta de gestión de personal para startups que centraliza solicitudes de vacaciones y datos de empleados.",
    subtitle:
      "Una plataforma de RR.HH. unificada que reemplazó dos herramientas separadas para startups remotas",
    challenge:
      "Los equipos de RR.HH. en startups remotas dependían de dos herramientas de terceros para gestionar lo que debería ser un único flujo de trabajo: aprobaciones de solicitudes de vacaciones y gestión de datos de empleados. El cambio constante entre sistemas, los registros duplicados y la falta de un historial de aprobaciones unificado generaban fricción continua para los managers de RR.HH.\n\nEl objetivo era reemplazar ambas herramientas con una plataforma propia que unificara el flujo de solicitudes y centralizara toda la información de empleados en un solo lugar.",
    approach:
      "Lideré el proceso de diseño UX/UI de extremo a extremo usando una metodología de Diseño Centrado en el Usuario. A partir de entrevistas con managers de RR.HH., mapeé sus flujos de trabajo existentes e identifiqué los puntos de dolor clave: entrada duplicada de datos, cadenas de aprobación fragmentadas y sin historial claro.\n\nCon esos insights, construí diagramas de arquitectura de información, wireframes de baja fidelidad y un prototipo interactivo en Figma — testeando cada iteración con usuarios de RR.HH. antes de avanzar. El entregable final fue un diseño completo en alta fidelidad con un sistema de diseño que incluye tipografía, paleta de colores y componentes reutilizables.",
    metrics: [
      { value: "1 plataforma", label: "reemplazando 2 herramientas separadas" },
      { value: "2 meses", label: "duración del proyecto" },
      { value: "100%", label: "flujo de RR.HH. cubierto de extremo a extremo" },
      { value: "Diseño Centrado en el Usuario", label: "metodología aplicada" },
    ],
    steps: [
      {
        num: "01",
        title: "Investigación y Descubrimiento",
        body: "Realicé entrevistas con managers de RR.HH. para mapear flujos de trabajo existentes. Identifiqué los puntos de dolor centrales: entrada duplicada de datos en dos plataformas y un proceso de aprobación fragmentado sin historial claro.",
        imageLabel: "",
      },
      {
        num: "02",
        title: "Arquitectura de Información",
        body: "Definí los módulos principales de la plataforma — directorio de empleados, flujo de solicitudes de vacaciones, pipeline de aprobaciones y reportes — y estructuré la navegación para adaptarse a los modelos mentales de los managers de RR.HH.",
        imageLabel: "",
      },
      {
        num: "03",
        title: "Wireframes y Prototipado",
        body: "Construí wireframes de baja fidelidad en Figma, realicé dos rondas de pruebas de usabilidad e iteré a partir del feedback. Entregué un prototipo en alta fidelidad completo con un sistema de diseño: escala tipográfica, tokens de color y biblioteca de componentes reutilizables.",
        imageLabel: "",
      },
      {
        num: "04",
        title: "Handoff e Iteración",
        body: "Entregué especificaciones de diseño anotadas al equipo de desarrollo, apoyé la implementación con revisiones de diseño semanales y refiné la UI a partir del feedback de las sesiones de testing interno.",
        imageLabel: "",
      },
    ],
  },

  "ileana-schinder-website-redesign": {
    type: "DISEÑO WEB · TEMA WORDPRESS A MEDIDA",
    title: "Ileana Schinder: rediseño y tema WordPress a medida",
    role: "Diseñador web y desarrollador WordPress, en Bits Kingdom",
    tools: "Figma, WordPress (tema a medida), HTML, CSS, JavaScript, PHP",
    note: "Este sitio fue reconstruido con otra tecnología después de mi salida de Bits Kingdom en 2025. Las pantallas de abajo muestran el tema WordPress a medida que diseñé y construí en 2023.",
    description:
      "Rediseño para una arquitecta de Washington DC. Diseñado en Figma y construido como tema WordPress a medida, escrito a mano y sin constructor visual.",
    subtitle:
      "Rediseño web completo para una arquitecta de Washington DC — de Figma a WordPress",
    challenge:
      "Ileana Schinder, arquitecta residencial con sede en Washington DC, tenía un sitio web desactualizado que no comunicaba la calidad ni la sofisticación de su trabajo. El sitio no reflejaba su marca, dificultaba que los clientes potenciales evaluaran su portafolio y no generaba los leads que su reputación merecía.\n\nEl proyecto requería un rediseño completo — desde la identidad visual y la experiencia de usuario hasta la implementación en código personalizado en WordPress — para crear un sitio que estuviera a la altura de la precisión y elegancia de su arquitectura.",
    approach:
      "Fui diseñador y desarrollador del proyecto, como parte del equipo de Bits Kingdom. Después de una fase de descubrimiento sobre sus clientes, su competencia y su marca, diseñé en Figma una interfaz centrada en la fotografía. Luego la construí como tema WordPress a medida desde cero, sin constructor visual.",
    metrics: [
      { value: "12", label: "plantillas del tema" },
    ],
    steps: [
      {
        num: "01",
        title: "Descubrimiento",
        body: "Analicé el portafolio existente de Ileana, investigué a su competencia e identifiqué el perfil de su cliente objetivo. Definí una dirección de diseño con protagonismo de la fotografía y tipografía arquitectónica que reflejara la precisión de su trabajo.",
        imageLabel: "",
      },
      {
        num: "02",
        title: "Diseño UI",
        body: "Creé wireframes y mockups en alta fidelidad en Figma. Construí un sistema de diseño refinado con paleta de colores minimalista, espaciado cuidadoso y jerarquía tipográfica que guía naturalmente a los visitantes a través del portafolio.",
        imageLabel: "",
      },
      {
        num: "03",
        title: "Desarrollo",
        body: "Construí un tema WordPress a medida desde cero, sin constructor visual. Plantillas en PHP, estilos e interacciones en CSS y JavaScript escritos a mano. Los proyectos del portafolio son un tipo de contenido propio con sus campos, así agregar un proyecto es llenar un formulario. Responsivo desde la primera plantilla y estructurado para actualizar contenido sin depender de un desarrollador.",
        imageLabel: "",
      },
      {
        num: "04",
        title: "Lanzamiento y QA",
        body: "Realicé pruebas cross-browser y cross-device. Colaboré con Ileana en el contenido final, la selección de imágenes y el copy — luego lancé el sitio en ileanaschinder.com.",
        imageLabel: "",
      },
    ],
  },

  "mostro-website": {
    type: "DISEÑO WEB · WORDPRESS + DIVI",
    title: "Mostro Cine Coop: diseño del sitio y desarrollo en WordPress",
    role: "Diseñador web y desarrollador WordPress, en Bits Kingdom",
    tools: "Figma, WordPress, Divi Builder, CSS a medida",
    note: "Este sitio fue reconstruido con otra tecnología después de mi salida de Bits Kingdom en 2025. Las pantallas de abajo muestran la versión en WordPress + Divi que diseñé y construí.",
    description:
      "Diseñado en Figma y construido en WordPress con Divi para una cooperativa audiovisual de Montevideo.",
    subtitle:
      "Sitio web audaz para un colectivo audiovisual alternativo de Montevideo, Uruguay",
    challenge:
      "Mostro Cine Coop, un colectivo audiovisual alternativo de Montevideo, Uruguay, tenía una identidad visual fuerte pero ningún sitio web que pudiera estar a su altura. Su presencia en línea era inconsistente, lo que dificultaba mostrar su trabajo creativo, atraer colaboradores y comunicar su espíritu independiente a nuevas audiencias.\n\nEl reto era diseñar y construir un sitio web audaz y auténtico que capturara el carácter irreverente del colectivo — sin sacrificar la usabilidad ni la claridad para los visitantes que descubren su trabajo por primera vez.",
    approach:
      "Diseñé el sitio completo en Figma y lo construí yo mismo en WordPress con Divi Builder, como parte del equipo de Bits Kingdom. Llevé el proyecto del primer moodboard al lanzamiento: investigación visual, mapa del sitio, wireframes, diseño en alta fidelidad, desarrollo e integración de contenido con el colectivo.",
    metrics: [
      { value: "13", label: "plantillas construidas" },
      { value: "5", label: "proyectos publicados por el cliente" },
    ],
    steps: [
      {
        num: "01",
        title: "Investigación y Moodboard",
        body: "Estudié la obra cinematográfica e identidad visual del colectivo. Construí un moodboard de referencias del cine alternativo para alinear la dirección estética — audaz, cruda y distintivamente Mostro — antes de comenzar el diseño.",
        imageLabel: "",
      },
      {
        num: "02",
        title: "Sitemap y Arquitectura",
        body: "Definí la estructura del sitio: Home, Films, Colectivo y Contacto. Prioricé una navegación simple e impactante para que los visitantes pudieran descubrir el trabajo sin fricciones.",
        imageLabel: "",
      },
      {
        num: "03",
        title: "Wireframes y Diseño",
        body: "Creé wireframes de baja fidelidad para validar los conceptos de layout con el equipo, luego pasé a diseños en alta fidelidad en Figma — usando visuales de alto contraste, tipografía expresiva e imágenes a pantalla completa para encarnar la identidad creativa del colectivo.",
        imageLabel: "",
      },
      {
        num: "04",
        title: "Desarrollo",
        body: "Construí cada plantilla en Divi Builder siguiendo los diseños de Figma sección por sección. Los proyectos tienen su propio tipo de contenido, así el colectivo publica trabajo nuevo sin tocar el diseño. CSS a medida donde los módulos de Divi no alcanzaban. Integré el contenido con el colectivo, ajusté con su retroalimentación y lanzamos en mostro.uy.",
        imageLabel: "",
      },
    ],
  },
};

/** Applies the Spanish copy for a project; untranslated fields keep English. */
export function translateES(project: Project): Project {
  const tr = projectTranslationsES[project.slug];
  return tr ? { ...project, ...tr } : project;
}
