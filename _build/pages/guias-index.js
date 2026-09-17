"use strict";

const { GUIDES } = require("../data");
const { guideCard } = require("../lib");
const { pageHero } = require("../layout");

function guiasIndex() {
  const html = `
  ${pageHero({
    eyebrow: "Guías de compra",
    title: "Todas las guías",
    dek: "Criterios para elegir arneses, correas, comederos, camas, transportines y otros accesorios para perros y gatos, sin recomendar una marca concreta.",
  })}
  <section class="section">
    <div class="wrap">
      <div class="card-grid">
        ${GUIDES.map(guideCard).join("\n")}
      </div>
    </div>
  </section>
  `;

  return {
    route: "guias/index.html",
    path: "/guias/",
    title: "Guías de compra",
    description: "Todas las guías de compra de MascotaIdeal: arneses, correas, comederos automáticos, fuentes de agua, camas, transportines, areneros autolimpiables, rascadores, juguetes interactivos y collares GPS.",
    breadcrumbsItems: [{ label: "Inicio", href: "/" }, { label: "Guías de compra" }],
    html,
  };
}

module.exports = guiasIndex;
