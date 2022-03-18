<template>
    <h1
      class="
        font-medium
        text-white
        leading-tight
        text-6xl
        mt-20
        mb-5
        text-center
        block
      "
    >
      Hi, Im <span class="text-red-200">Umesh</span>
    </h1>
    <div class="personal-info block w-100">
      <img src="../assets/profile.jpg" class="rounded-full max-w-xs shadow-2xl  shadow-white mix-blend-lighten" />
    </div>
    <h2
      class="
        headingText
        font-medium
        leading-tight
        text-8xl
        mt-0
        mb-5
        text-center text-white
      "
    >
      <span class="block">What I Do ? </span>
      <span id="stackArr" class="text-9xl text-red-200 min-h-10"></span>
      <span id="stack-cursor inline-block">_</span>
      <span class="block">Development</span>
    </h2>
</template>

<script>
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

export default {
  mounted() {
  //create timeline
    gsap.to("#stack-cursor", { opacity: 0, repeat: -1 });
    const masterTl = gsap.timeline({ repeat: -1 });
    const stackArr = [
      "Shopify",
      "Front-end",
      "Back-end",
      "App",
      "Web Animation",
    ];
    stackArr.forEach((item) => {
      const tl = gsap.timeline({ yoyo: true, repeat: 1 });
      tl.to("#stackArr", { duration: 1, text: item });
      masterTl.add(tl);
    });
  },
};
</script>