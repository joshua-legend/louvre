import { animation } from "./library/animation.js";
import { createTimeline } from "./library/helper.js";

export const createCurationAnimation = () => {
  const scrollTrigger = {
    trigger: ".info",
    toggleActions: "restart none none none",
  };

  const targets = [
    {
      selector: ".curation__artBox__right > .info > .button > p",
      animations: [
        { settings: animation.fadeIn, position: "+=0.5" },
        { settings: animation.slideToX },
        { settings: animation.defaultSettings },
      ],
    },
  ];

  return createTimeline(scrollTrigger, targets);
};
