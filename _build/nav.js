"use strict";

// Datos del negocio y estructura de navegación. Todo lo que cambie de marca
// (nombre, dominio, tag de afiliado, datos fiscales) se toca aquí, no en las páginas.

const SITE = {
  name: "MascotaIdeal",
  claim: "Guías y comparativas para elegir los accesorios que tu perro o gato necesita de verdad",
  description:
    "Guías de compra y comparativas independientes de arneses, correas, comederos, camas, transportines y otros accesorios para perros y gatos, sin recomendaciones pagadas por ninguna marca.",
  // Dominio provisional: no hay dominio propio comprado todavía.
  domain: "https://mascotaideal.vercel.app",
  locale: "es_ES",
  lang: "es",
  email: "hola@mascotaideal.es", // PENDIENTE: crear buzón real, ver PENDIENTE.md
  // Store ID real, ya creado en el panel de afiliados.
  amazonTag: "mascotaideal0b-21",
  amazonDisclaimer:
    "Como Afiliado de Amazon, MascotaIdeal obtiene ingresos por las compras adscritas que cumplen los requisitos aplicables.",
  social: {
    instagram: null,
    pinterest: null,
  },
  // Datos fiscales del titular: pendientes, ver PENDIENTE.md.
  legal: {
    titular: "[PENDIENTE: nombre y apellidos o razón social]",
    nif: "[PENDIENTE: NIF/NIE]",
    domicilio: "[PENDIENTE: domicilio fiscal completo]",
    registro: null,
  },
};

// Menú principal. Cada guía y artículo real vive en _build/data.js; aquí solo
// se listan los grupos y los enlaces fijos.
const NAV = [
  { label: "Guías de compra", href: "/guias/" },
  { label: "Blog", href: "/blog/" },
];

const FOOT = {
  columnas: [
    {
      titulo: "Guías de compra",
      enlaces: [], // se rellena en build.js a partir de DATA.guides
    },
    {
      titulo: "Blog",
      enlaces: [], // se rellena en build.js a partir de DATA.articles
    },
    {
      titulo: "Legal",
      enlaces: [
        { label: "Aviso legal", href: "/legal/aviso-legal.html" },
        { label: "Política de privacidad", href: "/legal/politica-privacidad.html" },
        { label: "Política de cookies", href: "/legal/politica-cookies.html" },
      ],
    },
  ],
};

module.exports = { SITE, NAV, FOOT };
