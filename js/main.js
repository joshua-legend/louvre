import { setupExhibitionSection } from "./exhibition.js";
import { createCurationAnimation } from "./curation.js";

setupExhibitionSection();
createCurationAnimation();

//사이트 부드럽게하기
// const lenis = new Lenis({
//   smooth: true,
//   wheelMultiplier: 3, // 기본값보다 크게 해서 휠 반응 속도 향상
// });

// lenis.on("scroll", ScrollTrigger.update);

// gsap.ticker.add((time) => {
//   lenis.raf(time * 40000);
// });

// gsap.ticker.lagSmoothing(0);
