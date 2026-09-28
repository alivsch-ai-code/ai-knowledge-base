// Mobile navigation
const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav-toggle");
if (nav && toggle) {
  const close = () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  });
  nav.querySelectorAll(".nav-links a").forEach((link) => link.addEventListener("click", close));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
}

// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Week visual: manual tasks turn into automated ones
document.querySelectorAll(".week").forEach((week) => {
  const bars = week.querySelectorAll(".bar");
  new IntersectionObserver((entries, obs) => {
    if (!entries[0].isIntersecting) return;
    bars.forEach((bar, i) => {
      if (bar.dataset.auto) setTimeout(() => bar.classList.add("auto"), 400 + i * 90);
    });
    obs.disconnect();
  }, { threshold: 0.4 }).observe(week);
});

// Copy prompt
document.querySelectorAll(".prompt button").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const text = btn.previousElementSibling.textContent;
    try { await navigator.clipboard.writeText(text); } catch (_) { /* clipboard unavailable */ }
    btn.textContent = "Kopiert ✓";
    btn.classList.add("copied");
    setTimeout(() => { btn.textContent = "Kopieren"; btn.classList.remove("copied"); }, 1600);
  });
});

// Segmented control (audience tabs)
const tabs = [...document.querySelectorAll('.segmented [role="tab"]')];
const selectTab = (tab) => {
  tabs.forEach((t) => {
    const active = t === tab;
    t.setAttribute("aria-selected", String(active));
    t.tabIndex = active ? 0 : -1;
    document.getElementById(t.getAttribute("aria-controls")).hidden = !active;
  });
};
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectTab(tab));
  tab.addEventListener("keydown", (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = tabs[(index + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length];
    selectTab(next);
    next.focus();
  });
});

// Newsletter: demo mode while no provider URL is configured
document.querySelectorAll("form[data-newsletter]").forEach((form) => {
  if (form.getAttribute("action")) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const note = form.parentElement.querySelector(".form-note");
    if (note) {
      note.textContent = "Fast geschafft. Bitte bestätige deine E-Mail-Adresse.";
      note.classList.add("form-success");
    }
    form.reset();
  });
});

// Contact form error message (?fehler=1 from api/kontakt.php)
const formError = document.querySelector("[data-form-error]");
if (formError && new URLSearchParams(location.search).has("fehler")) formError.hidden = false;

// Guide filter + search
const guideList = document.querySelector("[data-guide-list]");
if (guideList) {
  const cards = [...guideList.querySelectorAll(".card")];
  const buttons = [...document.querySelectorAll("[data-filter]")];
  const search = document.querySelector("[data-guide-search]");
  const count = document.querySelector("[data-guide-count]");
  const empty = document.querySelector("[data-guide-empty]");
  const params = new URLSearchParams(location.search);
  let category = params.get("kategorie") || "alle";

  const apply = () => {
    const query = (search?.value || "").trim().toLowerCase();
    let visible = 0;
    cards.forEach((card) => {
      const matchCat = category === "alle" || card.dataset.category === category;
      const matchText = !query || card.textContent.toLowerCase().includes(query);
      card.hidden = !(matchCat && matchText);
      if (!card.hidden) visible++;
    });
    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.filter === category)));
    if (count) count.textContent = `${visible} ${visible === 1 ? "Guide" : "Guides"}`;
    if (empty) empty.hidden = visible > 0;
  };

  buttons.forEach((b) =>
    b.addEventListener("click", () => {
      category = b.dataset.filter;
      const url = new URL(location.href);
      if (category === "alle") url.searchParams.delete("kategorie");
      else url.searchParams.set("kategorie", category);
      history.replaceState(null, "", url);
      apply();
    })
  );
  search?.addEventListener("input", apply);
  apply();
}

// Table of contents: highlight current section
const tocLinks = [...document.querySelectorAll(".toc a")];
if (tocLinks.length) {
  const headings = tocLinks.map((a) => document.getElementById(decodeURIComponent(a.hash.slice(1)))).filter(Boolean);
  const tocObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        tocLinks.forEach((a) => a.classList.toggle("active", a.hash === `#${entry.target.id}`));
      });
    },
    { rootMargin: "-80px 0px -70% 0px" }
  );
  headings.forEach((h) => tocObserver.observe(h));
}
