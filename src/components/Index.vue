
<script>
import TextBanner from "./Text-Banner/TextBanner.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
export default {
  components: {
    TextBanner,
  },

  mounted() {
    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".text-banner", //trigger when this is in viewport
        pin: true, // pin the trigger element while active
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar,
        pinSpacer: false,
        pinSpacing: false,
        snap: true //disable this for auto animation completion
      },
    });
    mainTimeline.fromTo(".headingText", {opacity:1, delay: -3 },{duration:4, opacity:0})
    mainTimeline.fromTo(".welcome-text", {opacity:1 , delay: -1},{duration:2, opacity:0})
    mainTimeline.to("#welcome-text", {duration:1.5 ,opacity:1, text:"Take care !!"})
    mainTimeline.to(".paper-plane", {
      duration: 18,
      delay: -8,
        motionPath: {
        path: [
          {x: (window.innerWidth/8)*3, y: 100},
          {x: (window.innerWidth/8)*4, y: -100},
          {x: (window.innerWidth/8)*3, y: -50},
          {x: (window.innerWidth/8)*5, y: -800},
        ], 
      curviness: 2,
      autoRotate: true
    }
    });
    mainTimeline.to("#first", {duration:8, y: (document.getElementById('first')).offsetHeight + 650, delay: -9});
   
  },
};
</script>

<template>
  <div className="font-poppins animation-container bg-red-100" style="min-height: 160vh">
    <text-banner />
  </div>
</template>