"use strict";

const { SITE } = require("../nav");
const { GUIDES, ARTICLES, FEATURED } = require("../data");
const { icon, escapeHtml, guideCard, articleCard, amazonProductUrl } = require("../lib");
const { pageHero, ctaBand } = require("../layout");

// Las 4 tarjetas del hero muestran una foto real de producto (no un icono
// decorativo): las 4 guías más importantes del catálogo.
const HERO_LABELS = {
  "arneses-para-perros": "Arneses",
  "correas-para-perros": "Correas",
  "comederos-automaticos-para-mascotas": "Comederos",
  "camas-para-perros": "Camas",
};

function home() {
  const featuredGuides = GUIDES.slice(0, 4).map(guideCard).join("\n");
  const featuredArticles = ARTICLES.slice(0, 3).map(articleCard).join("\n");
  const heroProducts = Object.keys(HERO_LABELS)
    .map((slug) => FEATURED.find((p) => p.category === slug))
    .filter(Boolean);

  const html = `
  <section class="hero">
    <div class="wrap hero-inner">
      <div class="hero-copy">
        <p class="eyebrow">Guías de compra independientes</p>
        <h1>${SITE.claim}</h1>
        <p class="hero-dek">
          Comparamos criterios, no marcas: qué mirar antes de comprar un arnés, una correa, un
          comedero automático o una cama para tu perro o gato, explicado sin tecnicismos y sin
          recomendaciones pagadas por ninguna marca.
        </p>
        <div class="hero-actions">
          <a class="btn btn-accent" href="/guias/">Ver guías de compra ${icon("arrow")}</a>
          <a class="btn btn-ghost" href="/blog/">Leer el blog</a>
        </div>
      </div>
      <div class="hero-art">
        ${heroProducts
          .map(
            (p) => `<a class="hero-art-card" href="${amazonProductUrl(p.asin)}" target="_blank" rel="nofollow sponsored noopener">
          <img src="${p.img}" alt="${escapeHtml(p.title)}" loading="lazy" width="140" height="140">
          <span>${HERO_LABELS[p.category]}</span>
        </a>`
          )
          .join("\n")}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="section-head">
        <p class="eyebrow">Empieza por aquí</p>
        <h2>Guías por tipo de producto</h2>
      </div>
      <div class="card-grid">
        ${featuredGuides}
      </div>
      <a class="see-all" href="/guias/">Ver todas las guías ${icon("arrow")}</a>
    </div>
  </section>

  <section class="section section-alt">
    <div class="wrap">
      <div class="section-head">
        <p class="eyebrow">Del blog</p>
        <h2>Artículos recientes</h2>
      </div>
      <div class="card-grid">
        ${featuredArticles}
      </div>
      <a class="see-all" href="/blog/">Ver todo el blog ${icon("arrow")}</a>
    </div>
  </section>

  <section class="section trust-section">
    <div class="wrap trust-grid">
      <div>
        <h2>¿Por qué esta web?</h2>
        <p>
          Elegir accesorios para tu perro o gato implica decidir sobre cosas que tu mascota va
          a llevar puestas o va a usar todos los días: un arnés, una cama o un transportín no
          se notan de verdad hasta la tercera semana de uso, no en la ficha del producto.
          ${SITE.name} reúne los criterios que importan de cada tipo de producto para que la
          decisión no dependa de adivinar.
        </p>
        <p>
          No inventamos comparativas de modelos concretos que no hemos podido revisar con
          criterio: cada guía explica qué características buscar y por qué, de forma que sirva
          para comparar cualquier producto, lo compres donde lo compres.
        </p>
      </div>
      <div class="trust-card">
        <h3>Cómo se financia esta web</h3>
        <p>${SITE.amazonDisclaimer}</p>
        <p class="trust-note">
          Enlazar a un producto no cambia su precio para ti ni implica que sea el único
          recomendable: es una forma de sostener el tiempo que lleva escribir cada guía.
        </p>
      </div>
    </div>
  </section>

  ${ctaBand()}
  `;

  return {
    route: "index.html",
    path: "/",
    title: SITE.name,
    description: SITE.description,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE.name,
        url: SITE.domain,
        description: SITE.description,
        inLanguage: "es-ES",
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE.name,
        url: SITE.domain,
      },
    ],
    html,
  };
}

module.exports = home;
