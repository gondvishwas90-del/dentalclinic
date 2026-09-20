"use client";

import { useEffect } from "react";

export function AnimationObserver() {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          
          if (target.hasAttribute("data-animate-stagger")) {
            const staggerMs = parseInt(target.dataset.animateStagger || "100", 10);
            const baseDelay = parseInt(target.dataset.animateDelay || "0", 10);
            
            target.classList.add("is-visible");
            const children = Array.from(target.children) as HTMLElement[];
            children.forEach((child, index) => {
              const delay = `${baseDelay + index * staggerMs}ms`;
              child.style.transitionDelay = delay;
              child.classList.add("is-visible");
            });
          } else {
            target.classList.add("is-visible");
          }

          if (!target.hasAttribute("data-animate-reset")) {
            observer.unobserve(target);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px 0px -60px 0px",
      threshold: 0.1,
    });

    const elements = document.querySelectorAll("[data-animate], [data-animate-stagger]");
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
