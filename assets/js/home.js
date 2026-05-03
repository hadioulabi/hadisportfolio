(function () {
  const ui = window.PortfolioUI;
  const site = window.PORTFOLIO_SITE;

  function renderProfileCard() {
    const mount = document.getElementById("profileCard");
    if (!mount) return;

    const portrait = ui.el("div", "portrait-slot");
    const fallback = ui.el("span", "", site.profile.initials);
    portrait.append(fallback);

    if (site.contact?.photoPath) {
      const img = new Image();
      img.alt = `Profilfoto von ${site.profile.name}`;
      img.onload = () => {
        portrait.replaceChildren(img);
        portrait.classList.add("has-photo");
      };
      img.src = ui.pathTo(site.contact.photoPath);
    }

    const copy = ui.el("div", "profile-card-copy");
    copy.append(ui.el("p", "eyebrow", "Profil"));
    copy.append(ui.el("h2", "", site.profile.name));
    copy.append(ui.el("p", "", site.profile.headline));

    const stats = ui.el("div", "stat-row");
    site.profile.quickStats.forEach((item) => {
      const stat = ui.el("div", "stat-item");
      stat.append(ui.el("span", "", item.label));
      stat.append(ui.el("strong", "", item.value));
      stats.append(stat);
    });
    copy.append(stats);

    mount.append(portrait, copy);
  }

  function renderFacts() {
    const mount = document.getElementById("factGrid");
    if (!mount) return;

    const intro = ui.el("article", "profile-text");
    intro.append(ui.el("h3", "", "Kurzprofil"));
    intro.append(ui.el("p", "", site.profile.intro));
    intro.append(ui.el("p", "", site.profile.focus));
    mount.append(intro);

    site.profile.facts.forEach((item) => {
      const fact = ui.el("article", "fact-item");
      fact.append(ui.el("span", "", item.label));
      fact.append(ui.el("strong", "", item.value));
      mount.append(fact);
    });
  }

  function renderTimeline() {
    const mount = document.getElementById("timeline");
    if (!mount) return;

    site.timeline.forEach((item) => {
      const row = ui.el("article", "timeline-item");
      row.append(ui.el("div", "timeline-period", item.period));
      const copy = ui.el("div", "timeline-copy");
      copy.append(ui.el("h3", "", item.title));
      copy.append(ui.el("p", "", item.text));
      row.append(copy);
      mount.append(row);
    });
  }

  function renderSkills() {
    const mount = document.getElementById("skillGrid");
    if (!mount) return;

    site.skillGroups.forEach((item) => {
      const card = ui.el("article", "skill-card");
      const marker = ui.el("div", "marker");
      card.append(marker);
      card.append(ui.el("h3", "", item.title));
      if (item.desc) card.append(ui.el("p", "", item.desc));
      const chips = ui.el("div", "chip-row");
      item.skills.forEach((skill) => chips.append(ui.el("span", "chip", skill)));
      card.append(chips);
      mount.append(card);
    });
  }

  function renderContact() {
    const mount = document.getElementById("contactList");
    if (!mount || !site.contact) return;

    [
      ["Privat", `mailto:${site.contact.primaryEmail}`, site.contact.primaryEmail],
      ["Geschäftlich", `mailto:${site.contact.businessEmail}`, site.contact.businessEmail],
      ...site.contact.links.map((item) => [item.label, item.href, item.display || item.label])
    ].forEach(([label, href, value]) => {
      const link = ui.el("a", "contact-item");
      link.href = href;
      if (href.startsWith("http")) {
        link.target = "_blank";
        link.rel = "noreferrer";
      }
      link.append(ui.el("span", "", label));
      link.append(ui.el("strong", "", value));
      mount.append(link);
    });
  }

  function renderCard(item) {
    const card = ui.el("a", `case-card ${item.priority === "support" ? "compact" : ""}`);
    card.href = ui.pathTo(`cases/${item.slug}`);

    card.append(ui.el("h3", "", item.title));
    card.append(ui.el("p", "", item.subtitle));

    const footer = ui.el("div", "card-footer");
    footer.append(ui.el("span", ui.statusChipClass(item.status), item.status));
    footer.append(ui.el("span", "", "Ansehen →"));
    card.append(footer);
    return card;
  }

  function renderCases() {
    const flagshipMount = document.getElementById("flagshipCases");
    const supportMount = document.getElementById("supportCases");
    if (!flagshipMount || !supportMount) return;

    ui.cases.forEach((item) => {
      const target = item.priority === "flagship" ? flagshipMount : supportMount;
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
      const href = a.getAttribute("href") || "";
      const match = href.match(/#([\w-]+)/);
      if (match && match[1] !== "start") {
        const el = document.getElementById(match[1]);
        if (el) sections.push({ el, link: a });
      }
    });

    function setActive(link) {
      navLinks.forEach((a) => a.classList.remove("is-active"));
      if (link) link.classList.add("is-active");
    }

    function visiblePixels(el) {
      const rect = el.getBoundingClientRect();
      const headerH = 72;
      const top = Math.max(rect.top, headerH);
      const bottom = Math.min(rect.bottom, window.innerHeight);
      return Math.max(0, bottom - top);
    }

    function update() {
      let maxPx = 0;
      let activeLink = startLink;

      for (const { el, link } of sections) {
        const px = visiblePixels(el);
        if (px > maxPx) {
          maxPx = px;
          activeLink = link;
        }
      }

      setActive(activeLink);
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

  renderProfileCard();
  renderFacts();
  renderTimeline();
  renderSkills();
  renderCases();
  renderContact();
  initScrollSpy();
  initScrollAnimations();
})();
