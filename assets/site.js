// Cuadrik site — language toggle, mobile nav, light reveal, contact form.
(function () {
  const root = document.documentElement;

  // ---------- Language ----------
  const STORAGE_KEY = "cuadrik.lang";
  function setLang(lang) {
    root.setAttribute("lang", lang);
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    document.querySelectorAll(".lang button").forEach(b => {
      b.classList.toggle("is-active", b.dataset.lang === lang);
    });
  }
  const stored = (() => { try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; } })();
  setLang(stored === "es" ? "es" : "en");

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".lang button");
    if (btn) setLang(btn.dataset.lang);
  });

  // ---------- Mobile nav ----------
  document.addEventListener("click", (e) => {
    const t = e.target.closest(".nav-toggle");
    if (t) document.querySelector(".nav").classList.toggle("is-open");
  });

  // ---------- Reveal on scroll ----------
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add("is-in");
        io.unobserve(en.target);
      }
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  // ---------- Contact form ----------
  const pathCards = document.querySelectorAll(".path-card");
  const pathInput = document.querySelector('[name="path"]');
  pathCards.forEach(card => {
    card.addEventListener("click", () => {
      pathCards.forEach(c => c.classList.remove("is-active"));
      card.classList.add("is-active");
      if (pathInput) pathInput.value = card.dataset.path;
      const orgField = document.querySelector('[data-org-label]');
      if (orgField) {
        const labels = JSON.parse(orgField.dataset.orgLabel || "{}");
        const map = {
          investor: { en: "Fund / Firm", es: "Fondo / Firma" },
          partner:  { en: "Company / Vertical", es: "Empresa / Vertical" },
          talent:   { en: "Current role", es: "Rol actual" }
        };
        const lang = root.getAttribute("lang") || "en";
        const which = card.dataset.path;
        const lbl = map[which] && map[which][lang];
        if (lbl) {
          const enSpan = orgField.querySelector('[data-i18n="en"]');
          const esSpan = orgField.querySelector('[data-i18n="es"]');
          if (enSpan) enSpan.textContent = map[which].en;
          if (esSpan) esSpan.textContent = map[which].es;
        }
      }
    });
  });
  const form = document.querySelector(".form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const ok = document.querySelector(".success");
      if (ok) ok.classList.add("is-on");
      form.querySelectorAll("input:not([type=hidden]), textarea").forEach(i => { i.value = ""; });
    });
  }
})();
