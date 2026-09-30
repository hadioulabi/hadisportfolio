(function () {
  const ui = window.PortfolioUI;
  const caseId = document.body.dataset.case;
  const mount = document.querySelector("[data-case-render-root]");
  if (!mount) return;

  function paragraph(text) {
    return ui.el("p", "", text);
  }

  function renderHero(data, labels) {
    const section = ui.el("section", "case-hero");
    const container = ui.el("div", "container");

    const back = ui.el("a", "breadcrumb", labels.back);
    back.href = ui.pathTo("index.html#cases");

    const grid = ui.el("div", "case-hero-grid");
    const copy = ui.el("div");
    copy.append(ui.el("h1", "", data.title));

    const summary = ui.el("aside", "case-summary");
    summary.append(ui.el("strong", "", labels.summary));
    summary.append(paragraph(data.summary));

    const meta = ui.el("div", "meta-grid");
    const card = ui.el("article", "meta-card");
    card.append(ui.el("span", "", labels.period));
    card.append(ui.el("p", "", data.period));
    meta.append(card);
    summary.append(meta);

    grid.append(copy, summary);
    container.append(back, grid);
    section.append(container);
    return section;
  }

  function renderNarrative(data, labels) {
    const section = ui.el("section", "case-section");
    const container = ui.el("div", "container");
    const grid = ui.el("div", "narrative-grid");

    [
      [labels.problem, data.problem],
      [labels.approach, data.approach],
      [labels.result, data.result],
      [labels.impact, data.impact]
    ].forEach(([title, text]) => {
      if (!text) return;
      const card = ui.el("article", "detail-card");
      card.append(ui.el("h3", "", title));
      card.append(paragraph(text));
      grid.append(card);
    });

    container.append(grid);
    section.append(container);
    return section;
  }

  function renderSections(data, labels) {
    if (!data.sections || !data.sections.length) return null;

    const section = ui.el("section", "case-section band-section");
    const container = ui.el("div", "container");

    const heading = ui.el("div", "section-heading");
    heading.append(ui.el("p", "eyebrow", labels.processEyebrow));
    heading.append(ui.el("h2", "", labels.processHeading));

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

  function renderEvidence(data) {
    if (!data.image) return null;

    const section = ui.el("section", "case-section");
    const container = ui.el("div", "container");
    const wrap = ui.el("div", "evidence-visual");
    const img = document.createElement("img");
    img.src = ui.pathTo(data.image);
    img.alt = data.imageAlt || data.shortTitle;
    img.loading = "lazy";
    wrap.append(img);
    container.append(wrap);
    section.append(container);
    return section;
  }

  ui.onRender(function () {
    const data = ui.caseById(caseId);
    ui.clear(mount);
    if (!data) return;

    const labels = ui.site.ui.caseLabels;
    document.title = `${data.shortTitle} | ${ui.site.meta.title}`;

    mount.append(
      renderHero(data, labels),
      renderNarrative(data, labels),
      ...[renderSections(data, labels), renderEvidence(data)].filter(Boolean)
    );
  });
})();
