/* =========================================================
   SHAILENDER RAJAN K — PORTFOLIO SCRIPT
   Handles: scroll-reveal animation, mobile nav toggle.
   No frameworks, no build step — plain JS on purpose so it's
   easy to read and edit later.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* ---- Scroll reveal ---- */
  const revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach((el) => observer.observe(el));
  } else {
    // Fallback: no IntersectionObserver support — just show everything
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---- Mobile nav toggle ---- */
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      navToggle.textContent = isOpen ? "x" : "=";
    });
  }
});
