const animationSettings = {
  x: 0,
  duration: 1.5,
  opacity: 1,
  ease: "power4.inOut",
};

const scrollTriggerSettings = {
  trigger: ".info",
  toggleActions: "restart none none none",
};

export const createCurationAnimation = () => {
  const timeline = gsap
    .timeline({
      scrollTrigger: scrollTriggerSettings,
    })
    .to(".curation__artBox__right > .info > .button > p", animationSettings);
  return timeline;
};
