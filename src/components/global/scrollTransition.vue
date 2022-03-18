<script>
import { toRefs } from 'vue'
import gsap from 'gsap';


export default {
  props: {
    element: String,
    timeline: Object,
  },

  setup (props) {
   const {element , timeline} = toRefs(props);
   return (element, timeline);
  },
  mounted() {
    if(timeline == '') {
      gsap.fromTo(element, {
        x: '100vw',
        ease: "none", duration: 2
      }, {x: -'200vw', duration: 4})
    }
    else {
      timeline.fromTo(element, {
        x: '100vw',
        ease: "none", duration: 2
      }, {x: -'200vw', duration: 4})
    }
  }

}
</script>