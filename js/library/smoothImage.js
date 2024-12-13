import { generatePosition } from "./utils.js";

const imageConfigurationList = [
  {
    selector: ".image__positive__moderate",
    multiplier: 0.03,
    isPositive: true,
  },
  {
    selector: ".image__positive__slow",
    multiplier: 0.02,
    isPositive: true,
  },
  {
    selector: ".image__negative__moderate",
    multiplier: 0.06,
    isPositive: false,
  },
];

export const smoothImageMotion = (event) => {
  imageConfigurationList.forEach(({ selector, multiplier, isPositive }) => {
    gsap.to(document.querySelectorAll(selector), {
      ...generatePosition(multiplier, isPositive, event.clientX, event.clientY),
    });
  });
};
