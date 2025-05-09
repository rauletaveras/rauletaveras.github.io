"use strict";
(function () {
  const htmlClass = document.documentElement.classList;
  const themeColorTag = document.head.querySelector('meta[name="theme-color"]');
  const darkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const colorSchemeKey = "linkita-color-scheme";

  function applyDarkMode(isDark, doDispatchEvent) {
    if (isDark) {
      htmlClass.add("dark");
    } else {
      htmlClass.remove("dark");
    }
    if (undefined != themeColorTag) {
      themeColorTag.setAttribute("content", isDark ?
        themeColorTag.dataset.dark : themeColorTag.dataset.light);
    }
    if (doDispatchEvent && undefined != document.body) {
      document.body.dispatchEvent(new CustomEvent("set-theme",
        { detail: isDark ? "dark" : "light" }));
    }
  }

  function initDarkMode() {
    const darkVal = localStorage.getItem(colorSchemeKey);
    if (darkVal) {
      applyDarkMode(darkVal === "dark", false);
    } else if (htmlClass.contains("dark")) {
      applyDarkMode(true, false);
    } else {
      applyDarkMode(darkScheme.matches, false);
    }

    darkScheme.addEventListener("change", function (event) {
      applyDarkMode(event.matches, true);
    });

    htmlClass.remove("not-ready");
  }

  function toggleDarkMode() {
    const isDark = !htmlClass.contains("dark");
    applyDarkMode(isDark, true);
    localStorage.setItem(colorSchemeKey, isDark ? "dark" : "light");
  }

  function resetDarkMode() {
    localStorage.removeItem(colorSchemeKey);
    applyDarkMode(darkScheme.matches, true);
  }

  function initTranslationsButton({ btn, rel }) {
    const pageLanguage = document.documentElement.getAttribute("lang");
    const pageTranslations = document.head.querySelectorAll('link[rel="alternate"][hreflang]');

    let userLanguages = [];
    if (pageTranslations.length < 2) return;
    else if (pageTranslations.length === 2) userLanguages = [
      pageTranslations[0].getAttribute("hreflang"), pageTranslations[1].getAttribute("hreflang")];
    else if (navigator.languages) userLanguages = navigator.languages;
    else if (navigator.language != undefined) userLanguages = [navigator.language];
    else if (navigator.userLanguage != undefined) userLanguages = [navigator.userLanguage];

    const pageTranslationsLinks = new Map();
    pageTranslations.forEach(function (el) {
      const hreflang = el.getAttribute("hreflang");
      const href = rel === "true" ? el.dataset.href : el.getAttribute("href");
      if (hreflang !== pageLanguage) {
        pageTranslationsLinks.set(hreflang, href);
        const hreflangcode = hreflang.split("-")[0];
        if (!pageTranslationsLinks.has(hreflangcode)) {
          pageTranslationsLinks.set(hreflangcode, href);
        }
      }
    });

    const pageTranslationLink = getPageTranslationLink(userLanguages, pageTranslationsLinks);
    if (undefined != pageTranslationLink) {
      btn.classList.remove("hidden");
      btn.addEventListener("click", function () {
        window.location.href = pageTranslationLink;
      });
    }
  }

  function getPageTranslationLink(userLanguages, pageTranslationsLinks) {
    for (let i = 0; i < userLanguages.length; i++) {
      const userLanguage = userLanguages[i];
      const pageTranslationLink = pageTranslationsLinks.get(userLanguage) ||
        pageTranslationsLinks.get(userLanguage.split("-")[0]);
      if (undefined != pageTranslationLink) {
        return pageTranslationLink;
      }
    }
  }

  function toggleHeaderMenu() {
    htmlClass.toggle("open");
  }

  function initKatex() {
    window.renderMathInElement(document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
      ],
      throwOnError: false,
    });
  }

  function enableAnalytics({ key }) {
    return localStorage.removeItem(key);
  }

  function disableAnalytics({ key }) {
    return localStorage.setItem(key, "t");
  }

  function isAnalyticsEnabled({ key, init }) {
    if (init) {
      if (window.location.hash === "#enable-analytics") {
        if (localStorage.getItem(key) === "t") {
          enableAnalytics({ key });
          alert("Analytics is now ENABLED in this browser. To disable analytics, load #disable-analytics.");
        }
      } else if (window.location.hash === "#disable-analytics") {
        if (localStorage.getItem(key) !== "t") {
          disableAnalytics({ key });
          alert("Analytics is now DISABLED in this browser. To enable analytics, load #enable-analytics.");
        }
      }
    }
    return localStorage.getItem(key) !== "t";
  }

  function initGoatCounterAnalytics({ src, endpoint }) {
    if (isAnalyticsEnabled({ key: "skipgc", init: true })) {
      const newScript = document.createElement("script");
      newScript.async = true;
      newScript.src = src;
      newScript.dataset.goatcounter = endpoint;
      if (undefined != document.body) {
        document.body.appendChild(newScript);
      } else if (undefined != document.head) {
        document.head.appendChild(newScript);
      }
    }
  }

  function initVercelAnalytics({ src }) {
    if (isAnalyticsEnabled({ key: "va-disable", init: true })) {
      if (undefined == window.va) {
        window.va = function () {
          (window.vaq = window.vaq || []).push(arguments);
        };
      }
      const newScript = document.createElement("script");
      newScript.async = true;
      newScript.src = src;
      if (undefined != document.body) {
        document.body.appendChild(newScript);
      } else if (undefined != document.head) {
        document.head.appendChild(newScript);
      }
    }
  }

  function main() {
    initDarkMode();

    window.linkita = {
      applyDarkMode: applyDarkMode,
      toggleDarkMode: toggleDarkMode,
      resetDarkMode: resetDarkMode,
      initTranslationsButton: initTranslationsButton,
      toggleHeaderMenu: toggleHeaderMenu,
      initKatex: initKatex,
      isAnalyticsEnabled: isAnalyticsEnabled,
      enableAnalytics: enableAnalytics,
      disableAnalytics: disableAnalytics,
      initGoatCounterAnalytics: initGoatCounterAnalytics,
      initVercelAnalytics: initVercelAnalytics,
    };
  }

  main();
})();
