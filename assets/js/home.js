(function () {
  const ui = window.PortfolioUI;

  function renderProfileCard() {
    const mount = document.getElementById("profileCard");
    if (!mount) return;
    ui.clear(mount);

    const site = ui.site;
    const portrait = ui.el("div", "portrait-slot");
    portrait.append(ui.el("span", "", site.profile.initials));

    if (site.contact && site.contact.photoPath) {
      const img = new Image();
      img.alt = site.profile.name;
      img.onload = () => {
        portrait.replaceChildren(img);
        portrait.classList.add("has-photo");
      };
      img.src = ui.pathTo(site.contact.photoPath);
    }

    const copy = ui.el("div", "profile-card-copy");
    copy.append(ui.el("h2", "", site.profile.name));
    copy.append(ui.el("p", "profile-headline", site.ui.profileCard.role));
    copy.append(ui.el("p", "company-ref", site.ui.profileCard.company));

    mount.append(portrait, copy);
  }

  function renderFacts() {
    const mount = document.getElementById("factGrid");
    if (!mount) return;
    ui.clear(mount);

    const site = ui.site;
    const intro = ui.el("article", "profile-text");
    intro.append(ui.el("h3", "", site.ui.shortProfile));
    site.profile.introParagraphs.forEach((paragraph) => {
      intro.append(ui.el("p", "", paragraph));
    });
    mount.append(intro);

    site.profile.facts.forEach((item) => {
      const fact = ui.el("article", "fact-item");
      fact.append(ui.el("span", "", item.label));
      fact.append(ui.el("strong", "", item.value));
      mount.append(fact);
    });

    if (site.profile.languages && site.profile.languages.length) {
      const langBlock = ui.el("div", "lang-grid");
      site.profile.languages.forEach((item) => {
        const card = ui.el("div", "lang-card");
        card.append(ui.el("div", "lang-name", item.name));
        card.append(ui.el("div", "lang-level", item.level));
        const bar = ui.el("div", "lang-bar");
        const fill = ui.el("div", "lang-fill");
        fill.style.width = item.bar + "%";
        bar.append(fill);
        card.append(bar);
        langBlock.append(card);
      });
      mount.append(langBlock);
    }
  }

  function renderTimeline() {
    const mount = document.getElementById("timeline");
    if (!mount) return;
    ui.clear(mount);

    ui.site.timeline.forEach((item) => {
      const row = ui.el("article", "timeline-item");
      row.append(ui.el("div", "timeline-period", item.period));
      const copy = ui.el("div", "timeline-copy");
      copy.append(ui.el("h3", "", item.title));
      if (item.text) copy.append(ui.el("p", "", item.text));
      if (item.items && item.items.length) {
        const list = ui.el("ul");
        item.items.forEach((point) => list.append(ui.el("li", "", point)));
        copy.append(list);
      }
      row.append(copy);
      mount.append(row);
    });
  }

  function renderSkills() {
    const mount = document.getElementById("skillGrid");
    if (!mount) return;
    ui.clear(mount);

    ui.site.skillGroups.forEach((item) => {
      const card = ui.el("article", "skill-card");
      card.append(ui.el("div", "marker"));
      card.append(ui.el("h3", "", item.title));
      const chips = ui.el("div", "chip-row");
      item.skills.forEach((skill) => chips.append(ui.el("span", "chip", skill)));
      card.append(chips);
      mount.append(card);
    });
  }

  function renderContact() {
    const mount = document.getElementById("contactList");
    if (!mount) return;
    ui.clear(mount);

    (ui.site.contact.items || []).forEach((item) => {
      const entry = ui.el(item.href ? "a" : "div", "contact-item");
      if (item.href) {
        entry.href = item.href;
        if (item.href.startsWith("http")) {
          entry.target = "_blank";
          entry.rel = "noreferrer";
        }
      }
      entry.append(ui.el("span", "", item.label));
      entry.append(ui.el("strong", "", item.display || item.label));
      mount.append(entry);
    });
  }

  function renderCard(item) {
    const variants = { support: "compact", lead: "lead" };
    const variant = variants[item.priority] || "";
    const clickable = !item.pending && item.slug;

    const card = ui.el(clickable ? "a" : "div", `case-card ${variant}${item.pending ? " is-pending" : ""}`);
    if (clickable) card.href = ui.pathTo(`cases/${item.slug}`);

    card.append(ui.el("h3", "", item.title));
    card.append(ui.el("p", "", item.subtitle));

    const footer = ui.el("div", "card-footer");
    footer.append(ui.el("span", ui.statusChipClass(item.statusKey), item.status));
    footer.append(ui.el("span", "", clickable ? ui.site.ui.caseLabels.view : ui.site.ui.caseLabels.soon));
    card.append(footer);
    return card;
  }

  function renderCases() {
    const leadMount = document.getElementById("leadCases");
    const flagshipMount = document.getElementById("flagshipCases");
    const supportMount = document.getElementById("supportCases");
    if (!flagshipMount || !supportMount) return;

    [leadMount, flagshipMount, supportMount].forEach(ui.clear);

    const mounts = { lead: leadMount || flagshipMount, flagship: flagshipMount };
    ui.cases.forEach((item) => {
      const target = mounts[item.priority] || supportMount;
      target.append(renderCard(item));
    });
  }

  function initScrollSpy() {
    const navLinks = [...document.querySelectorAll(".nav-links a")];
    if (!navLinks.length) return;

    const startLink = navLinks.find((a) => !(a.getAttribute("href") || "").includes("#"));
    const sections = [];
    const startSection = document.getElementById("start");
    if (startSection && startLink) sections.push({ el: startSection, link: startLink });

    navLinks.forEach((a) => {
      const match = (a.getAttribute("href") || "").match(/#([\w-]+)/);
      if (match && match[1] !== "start") {
        const node = document.getElementById(match[1]);
        if (node) sections.push({ el: node, link: a });
      }
    });

    function visiblePixels(node) {
      const rect = node.getBoundingClientRect();
      const top = Math.max(rect.top, 72);
      const bottom = Math.min(rect.bottom, window.innerHeight);
      return Math.max(0, bottom - top);
    }

    function update() {
      let maxPx = 0;
      let activeLink = startLink;
      for (const { el: node, link } of sections) {
        const px = visiblePixels(node);
        if (px > maxPx) {
          maxPx = px;
          activeLink = link;
        }
      }
      navLinks.forEach((a) => a.classList.remove("is-active"));
      if (activeLink) activeLink.classList.add("is-active");
    }

    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  function initScrollAnimations() {
    const sections = [...document.querySelectorAll("#main > section:not(#start)")];
    sections.forEach((s) => s.classList.add("section-animate"));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    }, { threshold: 0.2 });

    sections.forEach((s) => observer.observe(s));
  }

  ui.onRender(function () {
    renderProfileCard();
    renderFacts();
    renderTimeline();
    renderSkills();
    renderCases();
    renderContact();
  });

  initScrollSpy();
  initScrollAnimations();
})();
