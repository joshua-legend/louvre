import { generatePosition } from "./library/utils.js";

const imageConfigurationList = [
  {
    selector: ".image__positive__moderate",
    positionFunc: (e) => generatePosition(0.03, true, e.clientX, e.clientY),
  },
  { selector: ".image__positive__slow", positionFunc: (e) => generatePosition(0.02, true, e.clientX, e.clientY) },
  { selector: ".image__negative__moderate", positionFunc: (e) => generatePosition(0.06, false, e.clientX, e.clientY) },
];

export const initializeExhibitionSection = () => {
  gsap.set(".exhibition__imageBoard > img", { opacity: 0 }); // 초기 상태 설정
  gsap.to(".exhibition__imageBoard > img", {
    opacity: 1,
    duration: 1,
    ease: "power2.inOut",
  });
};
export const smoothImageMotion = (event) => {
  imageConfigurationList.forEach(({ selector, positionFunc }) => {
    const elements = document.querySelectorAll(selector);
    gsap.to(elements, {
      ...positionFunc(event),
      duration: 1,
      ease: "power4.out",
    });
  });
};

// 이벤트 등록
export const setupExhibitionSection = () => {
  initializeExhibitionSection(); // 초기화 실행
  window.addEventListener("mousemove", smoothImageMotion); // 마우스 이벤트 등록
};
