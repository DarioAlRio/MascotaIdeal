"use strict";

const { SITE } = require("./nav");

// Iconos SVG en línea y componentes reutilizables. Cero librerías de iconos.

function icon(name, cls) {
  const extra = cls ? ` ${cls}` : "";
  const icons = {
    menu: `<svg class="icon${extra}" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    close: `<svg class="icon${extra}" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    check: `<svg class="icon${extra}" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M4 12l5 5L20 6" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    arrow: `<svg class="icon${extra}" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    chevron: `<svg class="icon${extra}" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    mail: `<svg class="icon${extra}" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M4 6h16v12H4z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M4 7l8 6 8-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    paw: `<svg class="icon${extra}" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><circle cx="12" cy="15" r="5" fill="none" stroke="currentColor" stroke-width="1.7"/><ellipse cx="5.5" cy="8" rx="2.1" ry="2.6" fill="none" stroke="currentColor" stroke-width="1.6"/><ellipse cx="10.5" cy="4.8" rx="2.1" ry="2.6" fill="none" stroke="currentColor" stroke-width="1.6"/><ellipse cx="15.5" cy="4.8" rx="2.1" ry="2.6" fill="none" stroke="currentColor" stroke-width="1.6"/><ellipse cx="19.5" cy="8" rx="2.1" ry="2.6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>`,
    leash: `<svg class="icon${extra}" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><circle cx="5" cy="6" r="2.4" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M6.6 8c3 2 2 6 5 8s6 1 8 3" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><rect x="17" y="17" width="5" height="4" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>`,
    bowl: `<svg class="icon${extra}" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M3 12h18a8 8 0 0 1-8 8h-2a8 8 0 0 1-8-8Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M8 12c0-2 1.5-4 4-4s4 2 4 4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    cat: `<svg class="icon${extra}" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M6 3 5 9M18 3l1 6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="13" r="7" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M9 13.5c.5.8 1.3 1.2 3 1.2s2.5-.4 3-1.2M9.5 11.5h.01M14.5 11.5h.01" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
    house: `<svg class="icon${extra}" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M4 11 12 4l8 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 10v9h12v-9" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M10 19v-5h4v5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  };
  return icons[name] || "";
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function paragraphs(arr) {
  return arr.map((p) => `<p>${p}</p>`).join("\n");
}

function checklist(items) {
  return `<ul class="checklist">
    ${items.map((it) => `<li>${icon("check", "checklist-icon")}<span>${it}</span></li>`).join("\n")}
  </ul>`;
}

function faqBlock(items) {
  if (!items || !items.length) return "";
  return `<div class="faq">
    ${items
      .map(
        (f, i) => `<details class="faq-item"${i === 0 ? " open" : ""}>
      <summary>${f.q}${icon("chevron", "faq-chevron")}</summary>
      <p>${f.a}</p>
    </details>`
      )
      .join("\n")}
  </div>`;
}

function guideCard(g) {
  const thumb = g.products && g.products[0] ? g.products[0].img : null;
  return `<a class="card guide-card" href="/guias/${g.slug}.html">
    ${thumb ? `<img class="guide-card-img" src="${thumb}" alt="" loading="lazy" width="280" height="175">` : ""}
    <div class="guide-card-body">
      <span class="card-eyebrow">Guía de compra</span>
      <h3>${g.title}</h3>
      <p>${g.dek}</p>
      <span class="card-cta">Leer guía ${icon("arrow")}</span>
    </div>
  </a>`;
}

function articleCard(a) {
  return `<a class="card article-card" href="/blog/${a.slug}.html">
    <span class="card-eyebrow">Blog</span>
    <h3>${a.title}</h3>
    <p>${a.dek}</p>
    <span class="card-cta">Leer artículo ${icon("arrow")}</span>
  </a>`;
}

function amazonSearchBox(query, label) {
  const url = `https://www.amazon.es/s?k=${encodeURIComponent(query)}&tag=${SITE.amazonTag}`;
  return `<div class="amzbox">
    <p class="amzbox-label">${label || "Ver opciones en Amazon"}</p>
    <a class="btn btn-accent" href="${url}" target="_blank" rel="nofollow sponsored noopener">
      Buscar en Amazon ${icon("arrow")}
    </a>
  </div>`;
}

// Enlace de afiliado a partir del ASIN. Formato mínimo viable (sin PA-API):
// dominio + /dp/ASIN + tag. Ver PENDIENTE.md para el paso a PA-API.
function amazonProductUrl(asin) {
  return `https://www.amazon.es/dp/${asin}?tag=${SITE.amazonTag}`;
}

// Una tarjeta de producto individual. `p` es {asin, title, note, price, rating,
// category?, categoryTitle?}. Si trae category/categoryTitle añade un enlace a
// la guía correspondiente (se usa en el bloque de destacados fuera de guías).
function productCard(p) {
  return `<a class="product-card" href="${amazonProductUrl(p.asin)}" target="_blank" rel="nofollow sponsored noopener">
        <img class="product-card-img" src="${p.img}" alt="${escapeHtml(p.title)}" loading="lazy" width="240" height="240">
        <div class="product-card-body">
          <p class="product-card-title">${escapeHtml(p.title)}</p>
          ${p.note ? `<p class="product-card-note">${escapeHtml(p.note)}</p>` : ""}
          <div class="product-card-meta">
            ${p.rating ? `<span class="product-card-rating">${escapeHtml(p.rating)}</span>` : ""}
            ${p.price ? `<span class="product-card-price">desde ${escapeHtml(p.price)} €</span>` : ""}
          </div>
          <span class="btn btn-accent product-card-cta">Ver en Amazon ${icon("arrow")}</span>
        </div>
      </a>`;
}

// Grid de productos concretos recomendados dentro de una guía. `products` es
// [{asin, title, note, price, rating}]. El precio se muestra como orientativo
// (capturado al escribir la guía), nunca como precio en vivo: este sitio es
// estático y no consulta PA-API todavía.
function productGrid(products) {
  if (!products || !products.length) return "";
  return `<div class="content-section product-section">
    <h2>Productos que cumplen estos criterios</h2>
    <p class="product-section-note">
      Selección propia a partir de los criterios de esta guía, no un ranking pagado. Precios
      orientativos en la fecha de esta guía: compruébalo siempre en la ficha de Amazon.
    </p>
    <div class="product-grid">
      ${products.map(productCard).join("\n")}
    </div>
  </div>`;
}

// Bloque de "destacados" que se inserta en TODAS las páginas (home, guías,
// blog, legal, 404...), no solo en las guías. `excludeCategory` evita repetir
// la categoría de la guía en la que ya está este mismo bloque específico (ver
// productGrid) cuando se muestra dentro de esa guía.
function featuredProductsSection(featured, excludeCategory) {
  const list = (featured || []).filter((p) => p.category !== excludeCategory);
  if (!list.length) return "";
  return `<section class="section featured-products">
    <div class="wrap">
      <div class="section-head">
        <h2>Lo más recomendado de ${SITE.name}</h2>
        <p>Un producto destacado por categoría, sacado directamente de nuestras guías de compra.</p>
      </div>
      <div class="product-grid">
        ${list
          .map(
            (p) => `<div class="product-card-wrap">
          ${productCard(p)}
          ${p.category ? `<a class="product-card-guide-link" href="/guias/${p.category}.html">Ver guía de ${escapeHtml(p.categoryTitle)} ${icon("arrow")}</a>` : ""}
        </div>`
          )
          .join("\n")}
      </div>
    </div>
  </section>`;
}

module.exports = {
  icon,
  escapeHtml,
  paragraphs,
  checklist,
  faqBlock,
  guideCard,
  articleCard,
  amazonSearchBox,
  amazonProductUrl,
  productGrid,
  featuredProductsSection,
};
