(function () {
  const ui = window.PortfolioUI;
  const caseId = document.body.dataset.case;
  const data = ui.caseById(caseId);
  const mount = document.querySelector("[data-case-render-root]");

  if (!mount || !data) return;

  document.title = `${data.shortTitle} | Portfolio`;

  function paragraph(text) {
    return ui.el("p", "", text);
  }

  function renderMeta(label, value) {
    const card = ui.el("article", "meta-card");
    card.append(ui.el("span", "", label));
    card.append(ui.el("p", "", value));
    return card;
  }

  function renderHero() {
    const section = ui.el("section", "case-hero");
    const container = ui.el("div", "container");
    const back = ui.el("a", "breadcrumb", "Zurück zur Übersicht");
    back.href = ui.pathTo("index.html#cases");

    const grid = ui.el("div", "case-hero-grid");
    const copy = ui.el("div");
    copy.append(ui.el("h1", "", data.title));

    const summary = ui.el("aside", "case-summary");
    summary.append(ui.el("strong", "", "Kurzfassung"));
    summary.append(paragraph(data.summary));

    const meta = ui.el("div", "meta-grid");
    meta.append(renderMeta("Zeitraum", data.period));
    summary.append(meta);

    grid.append(copy, summary);
    container.append(back, grid);
    section.append(container);
    return section;
  }

  function renderNarrative() {
    const section = ui.el("section", "case-section");
    const container = ui.el("div", "container");
    const grid = ui.el("div", "narrative-grid");

    [
      ["Problem", data.problem],
      ["Vorgehen", data.approach],
      ["Ergebnis", data.result],
      ["Wirkung", data.impact]
    ].forEach(([title, text]) => {
      const card = ui.el("article", "detail-card");
      card.append(ui.el("h3", "", title));
      card.append(paragraph(text));
      grid.append(card);
    });

    container.append(grid);
    section.append(container);
    return section;
  }

  function renderSections() {
    const section = ui.el("section", "case-section band-section");
    const container = ui.el("div", "container");

    const heading = ui.el("div", "section-heading");
    heading.append(ui.el("p", "eyebrow", "Ablauf"));
    heading.append(ui.el("h2", "", "Vorgehen im Detail"));

    const grid = ui.el("div", "sections-grid");
    data.sections.forEach((item) => {
      const block = ui.el("article", "content-section");
      block.append(ui.el("h3", "", item.title));
      item.body.forEach((text) => block.append(paragraph(text)));
      grid.append(block);
    });

    container.append(heading, grid);
    section.append(container);
    return section;
  }

  function renderEvidence() {
    const firstWithImage = data.evidence.find((e) => e.image);
    if (!firstWithImage) return null;

    const section = ui.el("section", "case-section");
    const container = ui.el("div", "container");
    const imgWrap = ui.el("div", "evidence-visual");
    const img = document.createElement("img");
    img.src = ui.pathTo(firstWithImage.image);
    img.alt = firstWithImage.title;
    img.loading = "lazy";
    imgWrap.append(img);
    container.append(imgWrap);
    section.append(container);
    return section;
  }

  mount.append(
    renderHero(),
    renderNarrative(),
    renderSections(),
    ...[renderEvidence()].filter(Boolean)
  );
})();
