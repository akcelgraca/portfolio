"use client";

import { useEffect } from "react";

/* Adds .is-in to observed elements as they enter the viewport.
   The hidden state lives in CSS, gated on scripting + motion preference,
   so everything stays visible without JS or with reduced motion.

   Also wires the masthead links: clicking one cues a section-specific
   animation (.cue-<id> on the target section) once the scroll settles. */
export default function Reveal() {
  useEffect(() => {
    const targets = document.querySelectorAll(".reveal, .reveal-wipe, .slab-head");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    targets.forEach((el) => io.observe(el));

    const cue = (section: HTMLElement, id: string) => {
      section.classList.remove(`cue-${id}`);
      void section.offsetWidth; // reinicia as animações do cue
      section.classList.add(`cue-${id}`);
    };

    const onNavClick = (event: Event) => {
      const href = (event.currentTarget as HTMLAnchorElement).getAttribute("href");
      if (!href?.startsWith("#")) return;
      const section = document.querySelector<HTMLElement>(href);
      if (!section) return;
      const id = href.slice(1);

      // só depois de o scroll assentar; fallback por tempo onde
      // scrollend não existe ou quando já estamos na secção
      let fired = false;
      const run = () => {
        if (fired) return;
        fired = true;
        cue(section, id);
      };
      if ("onscrollend" in window) {
        window.addEventListener("scrollend", run, { once: true });
        setTimeout(run, 900);
      } else {
        setTimeout(run, 450);
      }
    };

    const links = document.querySelectorAll<HTMLAnchorElement>(".masthead-link");
    links.forEach((link) => link.addEventListener("click", onNavClick));

    return () => {
      io.disconnect();
      links.forEach((link) => link.removeEventListener("click", onNavClick));
    };
  }, []);

  return null;
}
