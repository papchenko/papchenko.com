/*
    Animation on scroll
    v.10
*/
"use strict";

function animationScroll() {
  const items = document.querySelectorAll("[data-anim]");

  const options = {
    threshold: 0.2,
  };

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animation");
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  items.forEach((item) => {
    observer.observe(item);
  });
}

export {
  animationScroll
};
