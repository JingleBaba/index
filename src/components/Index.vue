
<script>
import TextBanner from "./Text-Banner/TextBanner.vue";
import { defineAsyncComponent, ref } from 'vue'
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin);

const Homepage = defineAsyncComponent(() =>
  import('./Homepage.vue')
)

export default {
  setup () {
    const isVisible = ref(false);
    const changeVisible = () => {
      isVisible.value = true;
    }
    return{
      isVisible,
      changeVisible
    }
  },
  
  components: {
    TextBanner,
    Homepage,
  },
  mounted() {
    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".animation-container",
        pin: true,
        scrub: 1,
        start: "+2"
      },
    });

    mainTimeline.add(() => {
      this.changeVisible();
   })
    mainTimeline
       .to('.text-content ',
        {filter: "blur(5px)", duration:3},
        );
        mainTimeline
       .to('.text-banner', {
        x: '-100vw', duration: 4, delay:-1});
  }

};
</script>

<template>
  <div
    className="font-poppins animation-container flex flex-nowrap"
    id="animation-container"
  >
    <text-banner />
    <div class="shadow-lg min-h-screen bg-black min-w-full border-red-200" id="homepage" style="border-left:120px solid">
       <Homepage v-if="isVisible"/>
  </div>
  </div>
</template>