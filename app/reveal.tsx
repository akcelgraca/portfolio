"use client";

import { useEffect } from "react";

/* Adds .is-in to observed elements as they enter the viewport.
   The hidden state lives in CSS, gated on scripting + motion preference,
   so everything stays visible without JS or with reduced motion. */
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
    return () => io.disconnect();
  }, []);

  return null;
}
