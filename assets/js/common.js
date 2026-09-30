(function () {
  const STORAGE_KEY = "portfolio-lang";
  const DEFAULT_LANG = "en";
  const ORDER = ["en", "de", "ar"];

  const root = document.body.dataset.root || ".";
  const page = document.body.dataset.page || "";
  const content = window.PORTFOLIO_CONTENT || {};

  const listeners = [];
  let current = null;

  function available() {
    return ORDER.filter((code) => content[code]);
  }

  function readStored() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (err) {
      return null;
    }
  }

  function writeStored(code) {
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch (err) {
      /* storage blocked – the choice simply does not persist */
    }
  }

  function initialLang() {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (fromUrl && content[fromUrl]) return fromUrl;
    const stored = readStored();
    if (stored && content[stored]) return stored;
    return content[DEFAULT_LANG] ? DEFAULT_LANG : available()[0];
  }

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

  function clear(node) {
    if (node) node.replaceChildren();
  }

  function lookup(path) {
    return path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), content[current]);
  }

  function t(path, fallback) {
    const value = lookup(path);
    return typeof value === "string" ? value : (fallback || "");
  }

  function statusChipClass(statusKey) {
    const known = ["active", "dev", "planned", "done", "pending"];
    return known.indexOf(statusKey) >= 0
      ? `chip status-chip chip--${statusKey}`
      : "chip status-chip";
  }

  /* ── Static text marked up with data-i18n ─────── */

  function applyStaticText() {
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const value = lookup(node.dataset.i18n);
      if (typeof value === "string") node.textContent = value;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
      const value = lookup(node.dataset.i18nAria);
      if (typeof value === "string") node.setAttribute("aria-label", value);
    });
  }

  function applyDocumentMeta() {
    const meta = content[current].meta;
    document.documentElement.lang = meta.lang;
    document.documentElement.dir = meta.dir;
    if (page === "home") {
      document.title = meta.title;
      const description = document.querySelector('meta[name="description"]');
      if (description) description.setAttribute("content", meta.description);
    }
  }

  /* ── Language switcher ────────────────────────── */

  function renderLangBar() {
    const existing = document.querySelector(".lang-switch-bar");
    if (existing) existing.remove();

    const codes = available();
    if (codes.length < 2) return;

    const bar = el("div", "lang-switch-bar");
    const group = el("div", "lang-switch");
    group.setAttribute("role", "group");
    group.setAttribute("aria-label", t("ui.langLabel", "Language"));

    codes.forEach((code) => {
      const meta = content[code].meta;
      const button = el("button", code === current ? "is-active" : "", meta.short);
      button.type = "button";
      button.lang = meta.lang;
      button.title = meta.label;
      button.setAttribute("aria-label", meta.label);
      if (code === current) button.setAttribute("aria-current", "true");
      button.addEventListener("click", () => setLang(code));
      group.append(button);
    });

    bar.append(group);
    document.body.prepend(bar);
  }

  /* ── Public API ───────────────────────────────── */

  function apply() {
    applyDocumentMeta();
    applyStaticText();
    renderLangBar();
    listeners.forEach((fn) => fn());
  }

  function setLang(code) {
    if (!content[code] || code === current) return;
    current = code;
    writeStored(code);
    apply();
  }

  current = initialLang();

  window.PortfolioUI = {
    el,
    clear,
    pathTo,
    statusChipClass,
    t,
    get lang() {
      return current;
    },
    get site() {
      return content[current];
    },
    get cases() {
      return content[current].cases;
    },
    caseById(id) {
      return content[current].cases.find((item) => item.id === id);
    },
    setLang,
    onRender(fn) {
      listeners.push(fn);
      fn();
    }
  };

  apply();
})();
