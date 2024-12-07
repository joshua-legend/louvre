gsap.registerPlugin(ScrollTrigger);

const cardTimeLine = gsap.timeline({
  scrollTrigger: {
    trigger: ".deck",
    pin: true,
    markers: true,
    scrub: 2, // 스크롤과의 싱크를 느리게 설정
    start: "top top",
    end: "+=5000",
    // test
  },
});

cardTimeLine
  .to(".first__card", { x: 0, duration: 1.5 }, "0")
  .to(".second__card", { x: 0, duration: 1.5 }, "+=0.5")
  .to(".third__card", { x: 0, duration: 1.5 }, "+=0.5")
  .to(".fourth__card", { x: 0, duration: 1.5 }, "+=0.5")
  .to(".fifth__card", { x: 0, duration: 1.5 }, "+=0.5");
