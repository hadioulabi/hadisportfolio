(function () {
  const site = window.PORTFOLIO_SITE;
  const root = document.body.dataset.root || ".";
  const page = document.body.dataset.page || "";

  function pathTo(href) {
    if (href.startsWith("http")) return href;
    return `${root}/${href}`.replace(/\/\.\//g, "/");
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function renderHeader() {
    const mount = document.querySelector("[data-site-header]");
    if (!mount) return;

    const header = el("header", "site-header");
    const nav = el("nav", "container nav-shell");
    nav.setAttribute("aria-label", "Hauptnavigation");

    const brand = el("a", "brand");
    brand.href = pathTo("index.html");
    const label = el("span", "", site.profile?.name || "Hadi Oulabi");
    brand.append(label);

    const links = el("div", "nav-links");
    site.nav.forEach((item) => {
      const isActive = item.match === page || (page === "case" && item.match === "cases");
      const link = el("a", isActive ? "is-active" : "", item.label);
      // On homepage, convert "index.html#section" to just "#section" to avoid reload
      if (page === "home" && item.href.includes("#")) {
        link.href = "#" + item.href.split("#")[1];
      } else {
        link.href = pathTo(item.href);
      }
      links.append(link);
    });

    nav.append(brand, links);
    header.append(nav);
    mount.replaceWith(header);
  }

  function renderFooter() {
    const mount = document.querySelector("[data-site-footer]");
    if (!mount) return;

    const footer = el("footer", "site-footer");
    const grid = el("div", "container footer-grid");
    const copy = el("div");
    const strong = el("strong", "", site.profile?.name || "Hadi Oulabi");
    const text = el("p", "", "Fashion Management · Business Operations · Outatex GmbH");
    copy.append(strong, text);

    grid.append(copy);
    footer.append(grid);
    mount.replaceWith(footer);
  }

  function statusChipClass(status) {
    if (status === "aktiv") return "chip status-chip chip--active";
    if (status === "in Entwicklung") return "chip status-chip chip--dev";
    if (status && status.toLowerCase().includes("geplant")) return "chip status-chip chip--planned";
    if (status && (status.toLowerCase().includes("update") || status.toLowerCase().includes("juli"))) return "chip status-chip chip--planned";
    return "chip status-chip";
  }

  window.PortfolioUI = {
    el,
    pathTo,
    statusChipClass,
    cases: site.cases,
    caseById(id) {
      return site.cases.find((item) => item.id === id);
    }
  };

  renderHeader();
  renderFooter();
})();
