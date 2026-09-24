"use strict";

// Bloques de conversión: "Elige rápido" (arriba de cada guía) y "Sigue con la
// guía" (al final de cada artículo). Todo sale de data.js, nada se escribe a mano.

const { GUIDES } = require("./data");
const { escapeHtml, amazonProductUrl, productUrl, ratingNumber, icon, priceTier, altOf, priceNum } = require("./lib");

const fmtPrice = (p) => `${String(p.price).replace(".", ",")} €`;

// Devuelve { choice, value, cheap } con productos distintos de la guía.
function pickWinners(products) {
  const list = (products || []).filter((p) => ratingNumber(p.rating) !== null && !isNaN(priceNum(p)));
  if (list.length < 3) return null;
  const prices = list.map((p) => priceNum(p)).sort((a, b) => a - b);
  const median = prices[Math.floor(prices.length / 2)];
  const used = new Set();
  const take = (arr, key) => {
    const c = arr.filter((p) => !used.has(p.asin)).sort(key)[0];
    if (c) used.add(c.asin);
    return c;
  };
  // Nuestra elección: la mejor valoración; si empatan, la más cercana a la gama media.
  const choice = take(
    list,
    (a, b) =>
      ratingNumber(b.rating) - ratingNumber(a.rating) ||
      Math.abs(priceNum(a) - median) - Math.abs(priceNum(b) - median)
  );
  // Mejor calidad-precio: más valoración por euro (con raíz para no premiar solo lo barato).
  const good = list.filter((p) => ratingNumber(p.rating) >= 4.2);
  const value = take(
    good.length ? good : list,
    (a, b) =>
      (ratingNumber(b.rating) - 3.5) / Math.sqrt(priceNum(b)) -
      (ratingNumber(a.rating) - 3.5) / Math.sqrt(priceNum(a))
  );
  // Más económico: el más barato con valoración decente.
  const okCheap = list.filter((p) => ratingNumber(p.rating) >= 4.0);
  const cheap = take(okCheap.length ? okCheap : list, (a, b) => priceNum(a) - priceNum(b));
  return choice && value && cheap ? { choice, value, cheap } : null;
}

function quickPicks(g) {
  const w = pickWinners(g.products);
  if (!w) return "";
  const rows = [
    ["Nuestra elección", w.choice],
    ["Mejor calidad-precio", w.value],
    ["Más económico", w.cheap],
  ]
    .map(
      ([label, p]) => `<tr>
          <td data-label="Elección"><span class="quickpick-badge">${label}</span></td>
          <td data-label="Producto"><a class="quickpick-product" href="${productUrl(p)}"><img src="${p.img}" alt="${escapeHtml(altOf(p.title))}" loading="lazy" width="56" height="56"><span>${escapeHtml(p.title)}</span></a></td>
          <td data-label="Valoración">${escapeHtml(p.rating)}</td>
          <td data-label="Gama">${escapeHtml(priceTier(p, g.products) || "—")}</td>
          <td class="quickpick-cta"><a class="btn btn-accent" href="${amazonProductUrl(p.asin)}" target="_blank" rel="nofollow sponsored noopener">Ver en Amazon ${icon("arrow")}</a></td>
        </tr>`
    )
    .join("\n");
  return `<div class="content-section quickpicks">
        <h2>Elige rápido</h2>
        <p class="quickpicks-note">Si tienes prisa: estas son las tres opciones que mejor se defienden en esta guía según su valoración en Amazon y su gama de precio. El precio actual, en Amazon.</p>
        <div class="quickpicks-scroll"><table class="quickpicks-table">
          <thead><tr><th>Elección</th><th>Producto</th><th>Valoración</th><th>Gama</th><th></th></tr></thead>
          <tbody>
        ${rows}
          </tbody>
        </table></div>
      </div>`;
}

// ---- Guías relacionadas con cada artículo (asignadas a mano por slug) ----
const ARTICLE_GUIDES = {
  "como-montar-el-rincon-perfecto-para-tu-mascota-en-casa": [
    "camas-para-perros",
    "comederos-automaticos-para-mascotas"
  ],
  "5-errores-comunes-al-elegir-arnes-o-correa": [
    "arneses-para-perros",
    "correas-para-perros"
  ],
  "cuanto-merece-la-pena-gastar-en-accesorios-para-tu-mascota": [
    "arneses-para-perros",
    "camas-para-perros"
  ],
  "como-preparar-a-tu-mascota-para-viajar-en-coche-o-avion": [
    "transportines-para-mascotas"
  ],
  "que-necesita-realmente-un-gatito-o-cachorro-el-primer-mes": [
    "camas-para-perros",
    "rascadores-para-gatos"
  ],
  "como-elegir-arnes-para-perro-que-tira-de-la-correa": [
    "arneses-para-perros"
  ],
  "arenero-autolimpiable-para-gatos-ventajas-y-cuando-no-compensa": [
    "areneros-autolimpiables-para-gatos"
  ],
  "collar-gps-para-mascotas-que-esperar-de-la-cobertura": [
    "collares-gps-para-mascotas"
  ],
  "como-transportar-a-tu-mascota-en-coche-de-forma-segura": [
    "transportines-para-mascotas"
  ],
  "comederos-automaticos-como-evitar-que-coma-demasiado-rapido": [
    "comederos-automaticos-para-mascotas"
  ],
  "por-que-tu-gato-sigue-aranando-el-sofa-aunque-tenga-rascador": [
    "rascadores-para-gatos"
  ],
  "juguetes-interactivos-para-perros-como-elegir-sin-fallar": [
    "juguetes-interactivos-para-perros"
  ],
  "cuanta-agua-debe-beber-tu-perro-o-gato": [
    "fuentes-de-agua-para-mascotas"
  ],
  "como-preparar-a-tu-mascota-para-una-mudanza": [
    "transportines-para-mascotas",
    "camas-para-perros"
  ],
  "correa-fija-o-extensible-segun-cada-salida": [
    "correas-para-perros"
  ],
  "mejor-cama-para-perro-grande-como-elegir": [
    "camas-para-perros"
  ],
  "cama-ortopedica-para-perros-merece-la-pena": [
    "camas-para-perros"
  ],
  "talla-de-arnes-para-perro-como-medir": [
    "arneses-para-perros",
    "correas-para-perros"
  ],
  "arnes-o-collar-para-perro-cual-elegir": [
    "arneses-para-perros",
    "correas-para-perros"
  ],
  "mejor-rascador-para-gatos-grandes": [
    "rascadores-para-gatos"
  ],
  "rascador-para-pisos-pequenos-que-elegir": [
    "rascadores-para-gatos"
  ],
  "fuente-de-agua-para-gatos-como-elegir": [
    "fuentes-de-agua-para-mascotas"
  ],
  "correa-para-cachorros-tipo-y-longitud": [
    "correas-para-perros",
    "arneses-para-perros"
  ],
  "comedero-automatico-para-perros-grandes": [
    "comederos-automaticos-para-mascotas"
  ],
  "comedero-automatico-wifi-o-con-temporizador": [
    "comederos-automaticos-para-mascotas"
  ],
  "transportin-para-avion-con-gato-que-mirar": [
    "transportines-para-mascotas"
  ],
  "transportin-rigido-o-blando-cual-elegir": [
    "transportines-para-mascotas"
  ],
  "arenero-autolimpiable-para-gatos-grandes": [
    "areneros-autolimpiables-para-gatos"
  ],
  "juguetes-para-perros-que-se-quedan-solos-en-casa": [
    "juguetes-interactivos-para-perros"
  ],
  "collar-gps-para-perros-con-o-sin-suscripcion": [
    "collares-gps-para-mascotas"
  ]
};

function relatedGuides(a, n = 2) {
  return (ARTICLE_GUIDES[a.slug] || [])
    .map((slug) => GUIDES.find((g) => g.slug === slug))
    .filter(Boolean)
    .slice(0, n);
}

function relatedBlock(a) {
  const gs = relatedGuides(a);
  if (!gs.length) return "";
  const items = gs
    .map((g) => {
      const w = pickWinners(g.products);
      return `<li>
          <a class="related-guide-title" href="/guias/${g.slug}.html">${escapeHtml(g.title)}</a>
          <span class="related-guide-dek">${escapeHtml(g.dek || "")}</span>
          ${w ? `<span class="related-guide-pick">Nuestra elección: <a href="${productUrl(w.choice)}">${escapeHtml(w.choice.title)}</a> (${escapeHtml(w.choice.rating)})</span>` : ""}
        </li>`;
    })
    .join("\n");
  return `<div class="content-section related-guides">
        <h2>¿Ya sabes qué necesitas? Mira las mejores opciones</h2>
        <ul class="related-guide-list">
        ${items}
        </ul>
      </div>`;
}

module.exports = { quickPicks, relatedBlock, relatedGuides, pickWinners };
