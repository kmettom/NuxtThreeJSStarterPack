import { gsap } from "gsap";

function navigationItems(timeline: gsap.core.Timeline) {
  if (!document.querySelector(".navigation-item")) return;
  timeline.fromTo(
    ".navigation-item",
    {
      x: -10,
      opacity: 0,
    },
    {
      x: 0,
      duration: 0.3,
      opacity: 1,
      stagger: 0.1,
    },
  );
}

export function navigationFirstEnter() {
  if (!document.querySelector(".navigation-bar")) return;
  const tl = gsap.timeline({
    delay: 0.2,
  });
  tl.fromTo(
    ".navigation-bar",
    {
      y: 0,
      opacity: 0,
    },
    {
      duration: 0.2,
      y: 0,
      opacity: 1,
    },
  );
  navigationItems(tl);
}

export function navigationShow(isVisible: boolean) {
  const tl = gsap.timeline();
  tl.to(".navigation-bar", {
    duration: 0.5,
    y: 0,
    opacity: isVisible ? 1 : 0,
  });
  if (isVisible) navigationItems(tl);
}
