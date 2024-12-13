import { createTimeline } from "./library/helper.js";

export const createTwistAnimation = () => {
  const scrollTrigger = {
    trigger: ".twist",
    pin: true,
    scrub: 1,
    start: "top top",
    end: "bottom top",
    stagger: 1,
  };
  const targets = [
    {
      selector: ".twist",
      animations: [
        {
          settings: {
            background: "rgb(255,255,255)",
            background: "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(0,0,0,0) 100%)",
          },
        },
      ],
    },
    {
      selector: ".twist__text",
      animations: [{ settings: { filter: "invert(1)" }, position: "<" }],
    },
    {
      selector: "#card1",
      animations: [{ settings: { top: 0 } }],
    },
    {
      selector: "#card2",
      animations: [{ settings: { top: 0 } }],
    },
    {
      selector: "#card3",
      animations: [{ settings: { top: 0 } }],
    },
    {
      selector: "#card4",
      animations: [{ settings: { top: 0 } }],
    },
  ];

  return createTimeline(scrollTrigger, targets);
};
