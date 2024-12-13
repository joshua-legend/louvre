// animations/helpers.js
const addAnimation = (timeline, selector, animationSettings, position) => {
  timeline.to(selector, animationSettings, position);
};

export const createTimeline = (scrollTriggerConfig, targets) => {
  const timeline = gsap.timeline({ scrollTrigger: scrollTriggerConfig });

  targets.forEach((target) => {
    const { selector, animations } = target;

    animations.forEach((animation) => {
      const { settings, position } = animation;
      addAnimation(timeline, selector, settings, position);
    });
  });

  return timeline;
};

export const createSimpleTimeline = (targets) => {
  const timeline = gsap.timeline();

  targets.forEach((target) => {
    const { selector, animations } = target;

    animations.forEach((animation) => {
      const { settings, position } = animation;
      addAnimation(timeline, selector, settings, position);
    });
  });

  return timeline;
};
