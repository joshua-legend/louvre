import { createTimeline } from "./library/helper.js";

export const createGalleryAnimation = () => {
  const scrollTrigger = {
    trigger: ".gallery",
    pin: true,
    scrub: 1,
    start: "top top",
    end: "400% top",
  };
  const targets = [
    {
      selector: ".gallery__photo",
      animations: [{ settings: { yPercent: -300 } }],
    },
    {
      selector: ".gallery__hero--paragraph",
      animations: [{ settings: { y: 0 }, position: "-=0.5" }],
    },
  ];

  return createTimeline(scrollTrigger, targets);
};
