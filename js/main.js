import { createExhibitionAnimation } from "./exhibition.js";
import { createCurationAnimation } from "./curation.js";
import { createDeckAnimation } from "./deck.js";
import { createGalleryAnimation } from "./gallery.js";
import { createTwistAnimation } from "./twist.js";
import { smoothImageMotion } from "./library/smoothImage.js";
gsap.registerPlugin(ScrollTrigger);

createExhibitionAnimation();
createCurationAnimation();
createDeckAnimation();
createGalleryAnimation();
createTwistAnimation();

window.addEventListener("mousemove", smoothImageMotion);
