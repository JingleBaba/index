


<script>
import { gsap } from "gsap";
import { ref } from "vue";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin);

export default {
  setup() {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = new Date().getDay();
    const today = ref(weekday[day]);

    return {
      today,
    };
  },


  mounted() {

    //cursor animation
    gsap.to("#cursor", { opacity: 0, repeat: -1 });
    const masterTl = gsap.timeline({ repeat: -1 });
    const greetingArr = ["amazing", "superb", "Fantastic", "Bravo"];
    greetingArr.forEach((greeting) => {
      const tl = gsap.timeline({ yoyo: true, repeat: 1 });
      tl.to("#greet", { duration: 1, text: greeting });
      masterTl.add(tl);
    });

    //create timeline
    const textTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#first",
        pin: true,
        scrub: 1,
      },
    });

        //paper plane animation
    textTimeline.to(".paper-plane", {
      duration: 4,
      motionPath: {
        path: [
          { x: (window.innerWidth / 8) * 3, y: 100 },
          { x: (window.innerWidth / 8) * 4, y: -100 },
        ],
        curviness: 2,
        autoRotate: true,
      },
    });

  //       //blur container
  // textTimeline.to(".text-banner", {
  //     filter: "blur(10px)",
  //     duration: 2,
  //     delay: -3.5,
  //   });




  },
};
</script>


<template>
  <div
    className="text-banner font-poppins bg-red-200 min-h-screen grid place-items-center min-w-full content-center z-10"
    id="first"
  >
    <h2
      class="
        font-medium
        leading-tight
        text-5xl
        mt-0
        mb-5
        relative
        inline-block
        w-96
        text-center
      "
    >
      <img
        src="../../assets/paper-plane.png"
        class="paper-plane w-20 absolute top-16 -left-26"
      />
      <span id="welcome-text" class="text-content">Hi, Welcome</span>
    </h2>
    <h1
      class="
        headingText
        font-medium
        leading-tight
        text-8xl
        mt-0
        mb-5
        w-96
        text-center
        text-content
      "
    >
      Stay Bold!!
      <span class="block">Have a </span>
      <span id="cursor">_</span>
      <span id="greet" class="text-9xl"></span>
      {{ today }}
    </h1>
  </div>
</template>