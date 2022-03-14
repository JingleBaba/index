


<script>

import { gsap } from "gsap";
import {ref} from 'vue';
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

export default {

setup () {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const day = new Date().getDay();
    const today = ref(weekday[day]);
   return {
      today
    }
},
 mounted() {
   gsap.to('#cursor', {opacity:0, repeat:-1});
   const masterTl = gsap.timeline({repeat: -1});
   const greetingArr = ['amazing', 'superb', 'Fantastic', 'Bravo'];
   greetingArr.forEach(greeting => {
     const tl = gsap.timeline({yoyo:true, repeat:1});
     tl.to('#greet', { duration: 1, text: greeting});
     masterTl.add(tl);
   })
 }
}
</script>


<template>
  <div className="font-poppins bg-red-200 w-full text-banner h-screen grid place-items-center content-center" id="first">

   <h2 class="font-medium leading-tight text-5xl mt-0 mb-5 relative inline-block w-96 text-center">
      <img src="../../assets/paper-plane.png" class="paper-plane w-20 absolute top-16 -left-26" />
     <span id="welcome-text">Hi, Welcome</span></h2>

   <h1  class="headingText font-medium leading-tight text-8xl mt-0 mb-5 w-96 text-center" >Stay Bold!!
      <span class="block">Have a </span>
     <span id="cursor">_</span>
     <span id="greet" class="text-9xl"></span>
     {{today}}
   </h1>
  </div>
</template>