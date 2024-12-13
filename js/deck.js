// animations/deckAnimation.js
import { animation } from "./library/animation.js";
import { createTimeline } from "./library/helper.js";

export const createDeckAnimation = () => {
  const scrollTriggerConfig = {
    trigger: ".deck",
    pin: true,
    scrub: 2,
    start: "top top",
    end: "+=5000",
  };

  const targets = [
    {
      selector: ".first__card",
      animations: [{ settings: animation.slideToX, position: "+=0.5" }],
    },
    {
      selector: ".first__loader",
      animations: [{ settings: animation.load }],
    },
    {
      selector: ".second__card",
      animations: [{ settings: animation.slideToX, position: "+=0.5" }],
    },
    {
      selector: ".second__loader",
      animations: [{ settings: animation.load }],
    },
    {
      selector: ".third__card",
      animations: [{ settings: animation.slideToX, position: "+=0.5" }],
    },
    {
      selector: ".third__loader",
      animations: [{ settings: animation.load }],
    },
    {
      selector: ".fourth__card",
      animations: [{ settings: animation.slideToX, position: "+=0.5" }],
    },
    {
      selector: ".fourth__loader",
      animations: [{ settings: animation.load }],
    },
    {
      selector: ".fifth__card",
      animations: [{ settings: animation.slideToX, position: "+=0.5" }],
    },
    {
      selector: ".fifth__loader",
      animations: [{ settings: animation.load }],
    },
  ];

  return createTimeline(scrollTriggerConfig, targets);
};
