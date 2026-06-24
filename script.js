/* ============================================================
   APEX Training Consults Ltd — script.js
   Pure vanilla JS, all features self-contained
   ============================================================ */
(function () {
  "use strict";

  // ---- Dynamic year ----
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Blueprint mode toggle ----
  const bpToggle = document.getElementById("bpToggle");
  const bpToggleText = document.getElementById("bpToggleText");
  if (bpToggle) {
    bpToggle.addEventListener("click", function () {
      document.body.classList.toggle("bp-mode");
      if (bpToggleText) {
        bpToggleText.textContent = document.body.classList.contains("bp-mode")
          ? "Paper mode"
          : "Blueprint mode";
      }
    });
  }

  // ---- Mobile menu ----
  const navToggle = document.getElementById("navToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileOverlay = document.getElementById("mobileOverlay");
  const mobileMenuClose = document.getElementById("mobileMenuClose");

  function openMenu() {
    if (mobileMenu) mobileMenu.classList.add("open");
    if (mobileOverlay) mobileOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeMenu() {
    if (mobileMenu) mobileMenu.classList.remove("open");
    if (mobileOverlay) mobileOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }
  if (navToggle) navToggle.addEventListener("click", openMenu);
  if (mobileMenuClose) mobileMenuClose.addEventListener("click", closeMenu);
  if (mobileOverlay) mobileOverlay.addEventListener("click", closeMenu);
  document.querySelectorAll(".mobile-link").forEach(function (el) {
    el.addEventListener("click", closeMenu);
  });

  // ---- Scroll progress bar ----
  const progressBar = document.getElementById("scrollProgress");
  if (progressBar) {
    window.addEventListener("scroll", function () {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      progressBar.style.transform = "scaleX(" + progress + ")";
    });
  }

  // ---- Section spy (active nav link) ----
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = ["home", "about", "services", "expertise", "cases", "contact"];
  if (navLinks.length && "IntersectionObserver" in window) {
    const spyObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach(function (link) {
              link.classList.remove("active");
              if (link.getAttribute("href") === "#" + id) {
                link.classList.add("active");
              }
            });
          }
        });
      },
      { threshold: 0.35, rootMargin: "-80px 0px -50% 0px" }
    );
    sections.forEach(function (id) {
      const el = document.getElementById(id);
      if (el) spyObserver.observe(el);
    });
  }

  // ---- Reveal on scroll ----
  const reveals = document.querySelectorAll(".reveal");
  if (reveals.length && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.getAttribute("data-delay") || "0", 10);
            setTimeout(function () {
              entry.target.classList.add("visible");
            }, delay);
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  // ---- Service filter ----
  const filterBtns = document.querySelectorAll(".filter-btn");
  const serviceCards = document.querySelectorAll(".service-card");
  if (filterBtns.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterBtns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        const filter = btn.getAttribute("data-filter");
        const dateEl = document.querySelector(".filter-date");
        if (dateEl) dateEl.style.display = filter === "all" ? "flex" : "none";
        serviceCards.forEach(function (card) {
          if (!filter || filter === "all") {
            card.classList.remove("hidden");
          } else {
            card.classList.toggle("hidden", card.getAttribute("data-tag") !== filter);
          }
        });
      });
    });
  }

  // ---- Expertise search ----
  const expSearch = document.getElementById("expSearch");
  const expClear = document.getElementById("expClear");
  const expCards = document.querySelectorAll(".exp-card");
  const expNoResults = document.querySelector(".exp-no-results");
  if (expSearch) {
    expSearch.addEventListener("input", function () {
      const q = this.value.trim().toLowerCase();
      if (expClear) expClear.classList.toggle("show", q.length > 0);
      let visible = 0;
      expCards.forEach(function (card) {
        const data = (card.getAttribute("data-search") || "").toLowerCase();
        const match = !q || data.includes(q);
        card.classList.toggle("hidden", !match);
        if (match) visible++;
      });
      if (expNoResults) {
        expNoResults.classList.toggle("hidden", visible > 0 || !q.length);
      }
    });
  }
  if (expClear) {
    expClear.addEventListener("click", function () {
      if (expSearch) {
        expSearch.value = "";
        expSearch.dispatchEvent(new Event("input"));
        expSearch.focus();
      }
    });
  }

  // ---- Cases carousel ----
  let caseIdx = 0;
  const dots = document.querySelectorAll(".cases-dot");
  const cards = document.querySelectorAll(".case-card");
  const casePrev = document.getElementById("casePrev");
  const caseNext = document.getElementById("caseNext");
  const totalCases = cards.length;

  function showCase(idx) {
    const newIdx = ((idx % totalCases) + totalCases) % totalCases;
    caseIdx = newIdx;
    cards.forEach(function (c, i) {
      c.classList.remove("active", "fade-in", "fade-out");
    });
    cards[newIdx].classList.add("active", "fade-in");
    dots.forEach(function (d) {
      d.classList.toggle("active", parseInt(d.getAttribute("data-case") || "0", 10) === newIdx);
    });
  }
  dots.forEach(function (d) {
    d.addEventListener("click", function () {
      showCase(parseInt(d.getAttribute("data-case") || "0", 10));
    });
  });
  if (casePrev) casePrev.addEventListener("click", function () { showCase(caseIdx - 1); });
  if (caseNext) caseNext.addEventListener("click", function () { showCase(caseIdx + 1); });

  // ---- Counters (stats) ----
  const counters = document.querySelectorAll(".stat-num");
  if (counters.length && "IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach(function (c) { counterObserver.observe(c); });
  } else {
    counters.forEach(function (c) {
      const target = parseInt(c.getAttribute("data-target") || "0", 10);
      const suffix = c.getAttribute("data-suffix") || "";
      c.textContent = target + suffix;
    });
  }

  function animateCounter(el) {
    const target = parseInt(el.getAttribute("data-target") || "0", 10);
    const suffix = el.getAttribute("data-suffix") || "";
    const duration = 1800;
    let start = null;
    function tick(now) {
      if (!start) start = now;
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  // ---- Contact form ----
  const contactForm = document.getElementById("contactForm");
  const formSubmit = document.getElementById("formSubmit");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (formSubmit) {
        formSubmit.textContent = "\u2713 Request sent \u2014 we\u2019ll be in touch";
        formSubmit.classList.add("sent");
      }
      setTimeout(function () {
        if (formSubmit) {
          formSubmit.textContent = "Send enquiry";
          formSubmit.classList.remove("sent");
        }
        contactForm.reset();
      }, 3400);
    });
  }

  // ---- Live telemetry (Engineering Console) ----
  const consoleUptime = document.getElementById("consoleUptime");
  const consoleQueue = document.getElementById("consoleQueue");
  const consoleCases = document.getElementById("consoleCases");
  const consoleLatency = document.getElementById("consoleLatency");

  let telemetry = { uptime: 99.973, queue: 6, cases: 28, latency: 14 };
  setInterval(function () {
    telemetry = {
      uptime: Math.min(99.994, +(telemetry.uptime + (Math.random() - 0.47) * 0.003).toFixed(3)),
      queue: Math.max(1, Math.min(18, telemetry.queue + Math.floor((Math.random() - 0.5) * 3))),
      cases: telemetry.cases + (Math.random() > 0.92 ? 1 : 0),
      latency: Math.max(7, Math.min(27, telemetry.latency + Math.floor((Math.random() - 0.5) * 4))),
    };
    if (consoleUptime) consoleUptime.textContent = telemetry.uptime + "%";
    if (consoleQueue) consoleQueue.textContent = telemetry.queue;
    if (consoleCases) consoleCases.textContent = telemetry.cases;
    if (consoleLatency) consoleLatency.textContent = telemetry.latency + " ms";
  }, 1350);

  // ---- Marquee duplication (for seamless loop) ----
  const marqueeTrack = document.getElementById("marqueeTrack");
  if (marqueeTrack && !marqueeTrack.querySelectorAll(".marquee-clone").length) {
    const clone = marqueeTrack.cloneNode(true);
    clone.querySelectorAll("*").forEach(function (el) { el.classList.add("marquee-clone"); });
    marqueeTrack.parentNode.appendChild(clone);
  }

  // ---- About badge float animation (CSS handles it, but ensure visible) ----
  const aboutBadge = document.getElementById("aboutBadge");
  if (aboutBadge) {
    aboutBadge.style.animation = "floaty 4.3s ease-in-out infinite";
  }

  // ---- Console easter egg ----
  try {
    console.log(
      "%cAPEX Training Consults Ltd",
      "font-weight:900;font-size:18px;color:#0284c7;letter-spacing:-0.02em;"
    );
    console.log(
      "%cEmpowering Excellence \u00b7 Training \u00b7 Innovation \u00b7 Engineering",
      "color:#64748b;font-size:11px;"
    );
  } catch (e) {
    // Silent fail
  }

  // ---- Smooth anchor scroll (progressive enhancement) ----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.getElementById(href.slice(1));
      if (target) {
        e.preventDefault();
        const offset = 90;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    });
  });
})();