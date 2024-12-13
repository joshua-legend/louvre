import { animation } from "./library/animation.js";
import { createSimpleTimeline } from "./library/helper.js";

export const createExhibitionAnimation = () => {
  const targets = [
    {
      selector: ".exhibition__imageBoard > img",
      animations: [{ settings: animation.fadeIn, position: "+=0.5" }],
    },
  ];

  return createSimpleTimeline(targets);
};
