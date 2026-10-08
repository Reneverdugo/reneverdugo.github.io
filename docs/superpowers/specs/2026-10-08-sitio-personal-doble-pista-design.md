# Del titular al relato: sitio personal de doble pista

Spec de diseño · 8 de octubre de 2026 · René Verdugo + Claude
**Estado: aprobado en conversación, pendiente de implementar.**

## Problema

El sitio se reposicionó el 6 de octubre como **Web Designer & WordPress Developer**
(commits `15e32f2`, `1fe3cdf`). Dos días después aparecieron dos problemas con eso:

1. **La búsqueda laboral es de doble pista.** René aplica mitad a puestos de diseño
   web/WordPress y mitad a producto/UX. Un titular WordPress-forward hace rebotar al
   reclutador de producto antes de que llegue al portafolio, donde sí hay casos de
   producto.
2. **El sitio tiene que ser su sitio personal**, con la trayectoria completa, no un
   folleto de un cargo. Hay material de diseño web y gráfico en Behance sin usar.

## Decisión de fondo

El titular de cargo se reemplaza por un **relato**, no por un titular más ancho.

Un título obliga a elegir entre web y producto. Un relato no: la trayectoria de René
pasó por los dos, y contada en orden deja de ser una contradicción y pasa a ser un
recorrido. El mecanismo que se copia de los bios de referencia (Pablo Stanley, Pablo
Artee, Axel Valdez) es **sustituir el título por datos más específicos que el título**
— no "suavizar" el tono. Sin los específicos, quitar el título produce vaguedad.

Los específicos de René que hacen ese trabajo: ITSON Ciudad Obregón, imprenta y
periódico antes de lo digital, cinco años en una agencia especializada en WordPress,
y el hecho de que diseña y construye él mismo.

### El hilo del relato: nunca hubo handoff

En Click Impresión Digital (2012–2014) diseñaba la pieza y después operaba la máquina
que la imprimía. Hoy diseña en Figma y construye en WordPress. Cambió el material de
salida, de papel a pantalla, no el modo de trabajar. No es "diseñador gráfico que se
pasó a lo digital": es alguien que nunca entregó un archivo para que otro lo ejecutara.
Ese es el argumento que sirve a las dos pistas de puestos a la vez, y es verificable.

### Keywords: superficies distintas, trabajos distintos

El relato es para quien lee. Los reclutadores que filtran en volumen no leen, y los ATS
tampoco. Las keywords (`Web Designer`, `WordPress`, `UX/UI`, `Product Designer`) viven
en el CV, el titular de LinkedIn, el `<title>` y la meta descripción. El bio no cede
para servirles.

## Alcance

| # | Entregable | Superficie |
| --- | --- | --- |
| 1 | Bio nuevo de tres tiempos | home EN + ES |
| 2 | Página About con el arco completo | `/about` + `/es/about` (nuevas) |
| 3 | Portafolio en dos bloques, producto primero | `/portfolio` + `/es/portfolio` |
| 4 | Archivo "More work" con Behance | al final de `/portfolio` |
| 5 | Nav con About | `Nav.astro` |
| 6 | Limpieza del CV | `/cv` + `/es/cv` |

## 1. Bio de la home

Cierra la estructura: sustantivos (Stanley) + *estuve / actualmente* (Artee). Sin cifra
de años — "cinco años en Bits Kingdom" es verificable contra 2020–2025 y reemplaza al
`8+ years` que estaba en el hero.

**ES**

> **René Verdugo**
> Diseñador y desarrollador. Productos digitales, sitios web, diseño gráfico.
>
> Estuve cinco años en Bits Kingdom, una agencia especializada en WordPress y productos
> digitales, diseñando y construyendo.
>
> Actualmente: experimentando, construyendo productos por mi cuenta, abierto a nuevas
> oportunidades.

**EN**

> **René Verdugo**
> Designer and developer. Digital products, websites, graphic design.
>
> I spent five years at Bits Kingdom, an agency specialized in WordPress and digital
> products, designing and building.
>
> Currently: experimenting, building products on my own, open to new opportunities.

Decisiones de redacción, para no volver a discutirlas:

- Punto (no coma) entre "Diseñador y desarrollador" y la lista de territorios: uno es
  quién sos, los otros son en qué trabajás.
- "diseñando y construyendo" aparece **una sola vez**, en el párrafo de Bits Kingdom.
- Minúscula en la lista de territorios, como manda el español.
- `Actualmente:` con dos puntos, no coma.
- Al final del bio va un enlace **"más sobre mí →"** / **"more about me →"** al About.

### Cómo cae en los slots del hero

El hero hoy tiene cuatro elementos de texto. El bio nuevo se mapea así:

| Slot actual | Qué pasa |
| --- | --- |
| `Welcome` (etiqueta en mayúsculas) | Se queda. Decorativo, fuera de alcance. |
| `h1` — "Hi, I'm René." | Se queda. |
| Línea de rol, 24–32px — "Web Designer & WordPress Developer" | **Se reemplaza** por "Designer and developer. Digital products, websites, graphic design." Es el mismo slot y el mismo peso visual: ahí vivía el título y ahí va lo que lo sustituye. |
| Párrafo de bio (con `8+ years`) | **Se reemplaza** por los dos párrafos: *I spent five years…* y *Currently:…* |

Es decir: el hero pasa de una línea de bio larga a dos párrafos cortos, y el cargo deja
de existir como cargo.

### Metas: acá sí van las keywords de las dos pistas

Las metas actuales son de una sola pista cada una, y la del portafolio quedó al revés
de lo que dice el resto del sitio:

| Página | Hoy | Problema |
| --- | --- | --- |
| `index.astro` | "web designer and WordPress developer. Designed in Figma, built in WordPress with Divi or custom themes." | Sin señal de producto ni UX/UI. |
| `portfolio.astro` | "UX/UI design work across web, mobile, and product." | Sin señal de WordPress; además es copy viejo de la plantilla. |

Propuesta (EN; la ES es la traducción directa):

- **index:** "René Verdugo — designer and developer. Digital product UX/UI, websites
  designed in Figma and built in WordPress with Divi or custom themes, graphic design."
- **portfolio:** "René Verdugo's portfolio — product UX/UI case studies and client
  websites designed in Figma and built in WordPress."

Cubren `designer`, `developer`, `UX/UI`, `product`, `websites`, `WordPress`, `Divi`,
`Figma` y `graphic design` sin que el bio visible tenga que cargar con ninguna.

## 2. Página About

Sin cifras de años: las fechas cuentan el recorrido solas y así no hay número que
contradecir. Reemplaza al `8+` como forma de comunicar experiencia.

**ES**

> **Diseño cosas y las construyo yo mismo.** Llevo haciendo las dos a la vez desde antes
> de que fueran pantallas.
>
> Estudié diseño gráfico en ITSON, en Ciudad Obregón, Sonora. Después entré a Click
> Impresión Digital: diseñaba la pieza y después operaba la máquina que la imprimía.
> También atendía a los clientes, armaba presupuestos y vendía. Nunca hubo un "se lo paso
> a producción" — producción era yo.
>
> De ahí pasé a La Crónica, el periódico de Grupo Healy, como diseñador publicitario:
> creación y corrección de piezas, planeación de las publicaciones diarias.
>
> En 2016 me mudé a lo digital. En Emcor Software diseñé interfaces para web y móvil,
> sistemas visuales y sets de iconos. En Crol trabajé en producto, sobre plataformas de
> viajes y automotriz. Y en 2020 entré a Bits Kingdom, una agencia especializada en
> WordPress, donde pasé cinco años llevando sitios de clientes de Figma al lanzamiento —
> diseñándolos y construyéndolos yo, con Divi o con temas escritos a mano.
>
> Actualmente: experimentando, construyendo productos por mi cuenta, abierto a nuevas
> oportunidades.
>
> Este sitio es mi lugar en la web: el trabajo, los proyectos paralelos y todo lo que hay
> en medio.

**EN**

> **I design things and build them myself.** I've been doing both at once since before
> they were screens.
>
> I studied graphic design at ITSON, in Ciudad Obregón, Sonora. Then I joined Click
> Impresión Digital: I designed the piece and then ran the machine that printed it. I also
> handled clients, put together quotes and sold. There was never a "hand it off to
> production" — production was me.
>
> From there I moved to La Crónica, Grupo Healy's newspaper, as an advertising designer:
> creating and correcting ad pieces, planning the daily runs.
>
> In 2016 I moved to digital. At Emcor Software I designed web and mobile interfaces,
> visual systems and icon sets. At Crol I worked on product, on travel and automotive
> platforms. And in 2020 I joined Bits Kingdom, an agency specialized in WordPress, where
> I spent five years taking client sites from Figma to launch — designing and building
> them myself, with Divi or with custom themes coded by hand.
>
> Currently: experimenting, building products on my own, open to new opportunities.
>
> This website is my place on the web: the work, the side projects and everything in
> between.

**Cortado a propósito:** la línea "un diario se imprime todos los días, sin excepciones"
era deducción de Claude, no dato de René. No se publica salvo que él confirme que La
Crónica era de publicación diaria.

Todo el resto del texto son los bullets del CV de René reescritos en primera persona.

### Copy del About en un solo lugar

El resto del sitio tiene las páginas EN con el copy hardcodeado en el markup y las de
`/es` leyendo de `src/i18n/ui.ts`, lo que obliga a tocar dos lugares por cada cambio.
Para el About —página nueva— **las dos versiones viven en un solo módulo** y las dos
páginas leen de ahí. No se refactoriza ninguna página existente; solo se evita crear
otra instancia del problema.

## 3. Portafolio en dos bloques

Medición de los cuatro casos reales:

| Caso | Pasos | Imágenes | Bloque |
| --- | --- | --- | --- |
| **bkations** | 8 | 7 | producto |
| mostro-website | 6 | 7 | web |
| ileana-schinder-website-redesign | 5 | 6 | web |
| eyelecture-app | 5 | 8 | producto |

**Hallazgo que define el orden:** el lado producto no es el débil. `bkations` es el caso
más profundo del sitio — entrevistas con managers de RR.HH., arquitectura de información,
prototipo en Figma, pruebas de usabilidad y un design system con tipografía, paleta y
componentes. `eyelecture-app` también tiene investigación de usuarios y testing.

### Bloques y orden

```
1.  EN  Product Design · UX/UI     ->  bkations, eyelecture-app
    ES  Diseño de producto · UX/UI

2.  EN  Websites · WordPress       ->  mostro-website, ileana-schinder-website-redesign
    ES  Sitios web · WordPress
```

**Producto primero**, por tres razones:

1. La pieza más fuerte va primero.
2. La señal web/WordPress ya vive en la meta descripción, el CV, LinkedIn y el propio
   bio; la de producto no tiene otro lugar donde aparecer.
3. El riesgo es asimétrico: un reclutador de agencia que ve producto primero lee *rango*;
   uno de producto que arriba solo ve WordPress se va.

**Dos bloques con encabezado, no un filtro.** Con cuatro proyectos un filtro agrega JS,
estados vacíos y un clic, y esconde la mitad del trabajo. Se reevalúa al pasar de ~10
casos.

### Cómo se agrupa: mapa explícito en el repo

La agrupación **no** se deriva de `project.type` (viene de un multi-select de Notion y es
frágil: cambiar un tag en Notion rompería el orden en silencio). Se usa un **mapa
explícito slug → bloque** versionado en git, igual que `projectOverrides.ts`, que ya
existe justamente porque editar Notion "no surte efecto".

Requisito: un proyecto cuyo slug no esté en el mapa **no desaparece** — cae en un bloque
por defecto. Sin esto, un build sin `NOTION_TOKEN` (que usa los 4 proyectos demo de
`projects.ts`) mostraría un portafolio vacío.

También se define el orden **dentro** de cada bloque, no se hereda el de Notion.

## 4. Archivo "More work"

Al final de `/portfolio`, no en página propia: con cuatro casos la página agradece el
volumen y se ahorra un ítem de nav.

Etiquetas: **EN** "More work" + "See everything on Behance →" · **ES** "Más trabajo" +
"Ver todo en Behance →".

- Grilla de imágenes, **6 a 9 piezas**, linkeando cada una a su proyecto en Behance.
- Filtro duro: solo lo que René firmaría hoy. El resto queda en Behance, detrás de un
  enlace "ver todo en Behance".
- **Sin case study y sin párrafo por pieza**: solo título y año. En el momento en que una
  pieza tiene un párrafo, dejó de ser archivo y compite con los casos reales.
- Datos en un módulo propio (`título`, `año`, `imagen`, `url de Behance`), con título ES
  opcional — la mayoría son nombres propios.

Depende de trabajo manual de René: elegir las piezas y exportar las imágenes a
`public/images/`.

## 5. Nav

Queda **Home · Portfolio · About · Blog · CV · Contact** — About después de Portfolio,
como se aprobó. Seis ítems con selector de idioma y de tema al lado es el techo; no se
agregan más.

(Alternativa no elegida: About justo después de Home, que es la convención más común en
sitios personales. Se dejó después de Portfolio para que el trabajo siga siendo lo
primero que se ofrece.)

Hay que sumar las etiquetas a las dos entradas `nav` de `src/i18n/ui.ts`.

## 6. Paquete de limpieza del CV

Tres datos publicados o a punto de publicarse que violan la regla de René ("dato sin
confirmar no se publica"). Los dos primeros ya se ejecutaron el 8 de octubre.

| Qué | Dónde | Acción | Estado |
| --- | --- | --- | --- |
| `awards`: "Awwwards — BitForex", "Behance Featured — Kohi App", "CSS Design Awards — Studio Interior Amsterdam" | `cv.astro` | **Borrado**, junto con el bloque Recognition comentado que los renderizaba. Eran los proyectos demo de la plantilla — los mismos fallbacks de `projects.ts` — con premios inventados. El array solo existía en el CV inglés; el español nunca lo tuvo. | ✅ hecho |
| "8+ projects", "12 repeat clients", "3 engineering teams" en la entrada Freelance | `cv.astro` + ES | **Borrados.** La entrada queda con dos bullets sin cifras: el end-to-end de proyectos de clientes, y productos propios. También se cayeron los sectores "fintech / SaaS", que no eran verificables. | ✅ hecho |
| `8+ years in digital design` en el resumen | `cv.astro` + ES + `ui.ts` | Las fechas del propio CV dan 10 años de digital (Emcor 2016) y 14 de carrera (Click, abril 2012). El 8+ subvende. Decidir: quitar la cifra o corregirla. | ⬜ pendiente |

**Queda un asterisco en los dos bullets que sobrevivieron:** son claims de René que Claude
no puede verificar contra nada del repo — se les quitaron los números inventados, pero la
afirmación de fondo ("lideré diseño end-to-end para clientes como freelance") es suya y
conviene que la relea. Y el título de la entrada sigue siendo "Lead UX/UI Designer" para
trabajo freelance, que es una combinación rara; no se tocó porque no se pidió.

Y un hueco de contenido: `eyelecture-app` tiene `subtitle: ""` en
`projectTranslationsES.ts`, a diferencia de los otros tres; se nota en la página del caso.

## Pendientes de René

Nada de esto lo puede resolver Claude:

- [ ] ¿La Crónica era de publicación diaria? (decide si vuelve la línea cortada del About)
- [ ] Qué cifra de años va en el CV, o si va ninguna
- [ ] Números reales para la entrada Freelance del CV, o se quitan
- [ ] Elegir las 6–9 piezas de Behance y exportar las imágenes
- [ ] Subtítulo para `eyelecture-app`
- [ ] Titular de LinkedIn (sigue pendiente del brief del 6 de octubre; ahora además hay
      que decidir si refleja la doble pista)

## Verificación

**`npm run dev` y `npx astro build` sin `NOTION_TOKEN` caen a los 4 proyectos demo de
`src/data/projects.ts`** (BitForex, Adventura, Kohi, Studio Interior), no a los casos
reales. Consecuencias:

- El agrupamiento en dos bloques **no se puede verificar en local** con los slugs reales.
  Hay que probar con el fallback por defecto (que los demos no desaparezcan) y confirmar
  el agrupamiento real contra el sitio deployado.
- Bio, About, nav y archivo **sí** se verifican en local: no dependen de Notion.

Checklist:

- [ ] `npx astro build` en verde
- [ ] Bio nuevo visible en `/` y en `/es`, con el enlace al About
- [ ] `/about` y `/es/about` renderizan y están en el nav en los dos idiomas
- [ ] Sin `NOTION_TOKEN`: los 4 proyectos demo siguen apareciendo (no se los come el mapa)
- [ ] Archivo renderiza con las imágenes y los enlaces a Behance abren bien
- [ ] Sin cifras de años en bio ni About
- [ ] La línea de rol del hero ya no dice un cargo, en los dos idiomas
- [ ] Metas de `index` y `portfolio` actualizadas, con las keywords de las dos pistas
- [ ] `grep` de "8+" y de los premios demo: cero ocurrencias fuera de lo decidido
- [ ] Contra el sitio deployado: dos bloques, producto primero, con los casos reales

## Fuera de alcance

- Refactorizar las páginas EN existentes para que lean de `ui.ts`. Es un problema real
  conocido, pero es su propio trabajo; acá solo se evita agrandarlo.
- Filtro de portafolio (se reevalúa a ~10 casos).
- Convertir piezas de Behance en casos completos. El archivo existe justamente para no
  hacerlo: un portafolio se juzga por su pieza más débil.
- Tocar el contenido de los cuatro casos reales, más allá del subtítulo de eyelecture.
- Página propia de archivo.
