
<script>
import TextBanner from "./Text-Banner/TextBanner.vue";
import homepage from "./Homepage.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
export default {
  components: {
    TextBanner,
    homepage,
  },

  mounted() {
    const homepageTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".animation-container",
        pin: true,
        scrub: 1,
        pinSpacing: true,
      },
    });
    homepageTimeline.to(".paper-plane", {
      duration: 2,
        motionPath: {
        path: [
          {x: (window.innerWidth/8)*3, y: 100},
          {x: (window.innerWidth/8)*4, y: -100},
        ], 
      curviness: 2,
      autoRotate: true
    }
    });
    let container = document.getElementById('homepage');
    console.log(container);
      homepageTimeline.fromTo(container, {
        x: '100vw',
        ease: "none", duration: 2
      }, {x: -'200vw', duration: 4})

      homepageTimeline.to('.text-banner', {
        "filter": "blur(5px)"
      , duration: 2,
      delay: -3.25
      })

  },
};
</script>

<template>
  <div className="font-poppins animation-container relative" id="animation-container">
    <text-banner />
    <homepage />
  </div>
</template>