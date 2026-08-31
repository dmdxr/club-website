/* Mobile nav toggle + light/dark theme toggle. No dependencies. */

(function () {
  // --- Theme: restore saved choice, else follow the OS setting ---
  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  if (saved === "light" || saved === "dark") {
    document.documentElement.setAttribute("data-theme", saved);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    document.documentElement.setAttribute("data-theme", "light");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var themeBtn = document.querySelector("[data-theme-toggle]");
    var navBtn   = document.querySelector("[data-nav-toggle]");
    var links    = document.querySelector(".nav-links");

    function syncIcon() {
      if (!themeBtn) return;
      var isLight = document.documentElement.getAttribute("data-theme") === "light";
      themeBtn.textContent = isLight ? "☽" : "☀";
      themeBtn.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
    }
    syncIcon();

    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        var next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", next);
        try { localStorage.setItem("theme", next); } catch (e) {}
        syncIcon();
      });
    }

    if (navBtn && links) {
      navBtn.addEventListener("click", function () {
        var open = links.classList.toggle("open");
        navBtn.setAttribute("aria-expanded", open ? "true" : "false");
      });
      links.addEventListener("click", function (e) {
        if (e.target.tagName === "A") {
          links.classList.remove("open");
          navBtn.setAttribute("aria-expanded", "false");
        }
      });
    }

    // Highlight the nav link for the page we're on.
    var here = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach(function (a) {
      if (a.getAttribute("href") === here) a.classList.add("active");
    });

    // Keep the footer year current.
    var yr = document.querySelector("[data-year]");
    if (yr) yr.textContent = new Date().getFullYear();
  });
})();
