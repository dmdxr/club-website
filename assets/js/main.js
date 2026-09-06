/* Mobile nav, light/dark theme, and Google Form embeds. No dependencies. */

/* ============================================================
   FORM SETUP — paste your two Google Form links here.
   Open your form → Send → the < > (embed) tab → copy the src URL.
   It should look like:
     https://docs.google.com/forms/d/e/XXXXXXXX/viewform?embedded=true
   Until you paste them, the pages show setup instructions instead.
   ============================================================ */
var FORMS = {
  membership: "https://docs.google.com/forms/d/e/1FAIpQLSffmlUdhx7PIn71s0joy9cJR1dQ0qhJ6ouThBSy_wmvzqZ_tA/viewform?embedded=true",   // General membership signup form
  conference: ""    // Conference 2027 registration form
};

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
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });

    // --- Google Form embeds ---
    // <div class="form-embed" data-form="membership" data-label="Membership form"></div>
    document.querySelectorAll(".form-embed").forEach(function (box) {
      var key = box.getAttribute("data-form");
      var url = FORMS[key] || "";
      var label = box.getAttribute("data-label") || "form";

      if (/^https:\/\/docs\.google\.com\/forms\//.test(url)) {
        var frame = document.createElement("iframe");
        frame.src = url;
        frame.title = label;
        frame.loading = "lazy";
        frame.setAttribute("frameborder", "0");
        frame.textContent = "Loading…";
        box.appendChild(frame);
      } else {
        box.innerHTML =
          '<div class="form-setup">' +
            '<div class="card-icon">📋</div>' +
            '<h3>' + label + ' not connected yet</h3>' +
            '<p>An exec needs to create the Google Form and paste its embed link into ' +
            '<code>assets/js/main.js</code> — look for <code>FORMS.' + key + '</code> at the top of the file. ' +
            'Step-by-step instructions are in the README.</p>' +
            '<a class="btn btn-ghost" href="mailto:utsc.naps@seds.ca">Email us instead</a>' +
          '</div>';
      }
    });
  });
})();
