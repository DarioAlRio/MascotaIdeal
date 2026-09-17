# Pendiente antes de publicar y solicitar el alta en Amazon Afiliados

## Datos que faltan (obligatorios para legal/privacidad)

- **NIF/NIE y nombre o razón social** del titular: hoy son placeholders
  `[PENDIENTE: ...]` en `_build/nav.js` (`SITE.legal`). Se usan en
  [`legal/aviso-legal.html`](legal/aviso-legal.html) y
  [`legal/politica-privacidad.html`](legal/politica-privacidad.html).
- **Domicilio fiscal completo**: mismo sitio.
- **Correo real**: `hola@mascotaideal.es` es un placeholder — hoy ese
  dominio no existe. Cambiar `SITE.email` en `_build/nav.js` por un correo
  que sí puedas leer (puede ser un Gmail mientras no haya dominio propio).

Después de rellenar `_build/nav.js`, ejecutar `node build.js` para
regenerar las páginas con los datos correctos.

## Dominio

No hay dominio comprado. `SITE.domain` en `_build/nav.js` apunta a un
subdominio provisional de Vercel (`mascotaideal.vercel.app`) — todavía sin
desplegar. Para la solicitud de afiliados sirve un subdominio de Vercel,
pero un dominio propio (`.es` o `.com`) da más credibilidad en la revisión
manual de Amazon.

## Cuenta de Amazon Afiliados

Esta web puede usar la MISMA cuenta de Afiliados que EntrenaEnCasa y
EscritorioIdeal (Amazon permite hasta 50 sitios por cuenta), pero necesita
su propio tag para medir resultados por separado:

1. ✅ Store ID real: `mascotaideal0b-21`, confirmado directamente por el
   titular del sitio y ya en `SITE.amazonTag` (`_build/nav.js`) y en todos
   los enlaces de producto. (Nota: un agente de construcción revirtió esto
   dos veces a un placeholder por precaución, al ver el archivo cambiar en
   disco sin saber que el cambio venía de una instrucción directa del
   titular — si vuelve a pasar, el tag real es `mascotaideal0b-21`, no
   `mascotaideal-21`.)
2. **Pendiente**: publicar este sitio en Vercel (nuevo proyecto, distinto
   de los otros dos) y añadir la URL publicada en `afiliados.amazon.es` →
   "Tus páginas web o apps" (el mismo panel donde ya están los otros sitios).
3. Las 3 ventas cualificadas en 180 días son **por cuenta**, no por sitio:
   ya corre el mismo plazo que para los otros sitios, esta web solo suma
   tráfico y ventas potenciales a la misma cuenta.

## Contenido para llegar y mantener el mínimo de Amazon

Hay 22 páginas de contenido real (10 guías + 5 artículos de blog + inicio +
guías-índice + blog-índice + 3 legales + 404 sin indexar), muy por encima
del mínimo de 10. Ideas ya identificadas y no escritas todavía:
- Guía de ropa e impermeables para perros (clima frío o lluvia).
- Guía de juguetes específicos para gatos (varitas, ratones, pelotas con
  catnip) — de momento solo hay guía de juguetes interactivos para perros.
- Artículo: cómo elegir pienso o snacks según edad y tamaño — atención:
  Amazon es más estricto con contenido de alimentación/salud animal,
  revisar políticas antes de publicar.

## Enlaces de afiliado (mínimo viable, sin PA-API)

Cada guía tiene una sección "Productos que cumplen estos criterios" con
7 productos reales por guía (`products` en `_build/data.js`), enlazados
con `https://www.amazon.es/dp/<ASIN>?tag=<SITE.amazonTag>`. En total hay 70
productos repartidos en las 10 guías, todos verificados manualmente en
Amazon.es (ASIN, título, precio orientativo, valoración e imagen reales,
extraídos directamente del listado de resultados) en la fecha de creación
del sitio. Todas las páginas del sitio (no solo las guías) muestran además
un bloque "Lo más recomendado de MascotaIdeal" con un producto por
categoría.

Los precios y valoraciones mostrados son una foto fija tomada al añadir
cada producto, no datos en vivo — hay que revisarlos de vez en cuando a
mano. Siguiente paso cuando haya PA-API: sustituir esos datos estáticos por
una consulta automática en tiempo de build.

## Otras cosas menores

- `SITE.social` (Instagram/Pinterest) está vacío.
- No hay fotografías propias: el sitio usa solo iconos SVG a propósito,
  salvo las imágenes de producto que vienen directamente de Amazon.
- Analítica: no hay ningún script de analítica instalado todavía.
- No tiene páginas "Sobre mí" ni "Contacto" (misma decisión que en
  EntrenaEnCasa y EscritorioIdeal): el correo de contacto vive solo en las
  páginas legales.
