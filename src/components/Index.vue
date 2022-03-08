
<script>
import Sidebar from "./Sidebar/Sidebar.vue";
import Content from "./Content/Content.vue";
export default {
  setup () {
  },
  components: {
    Content,
    Sidebar,
  },
};
</script>


<template>
  <div className="grid grid-cols-12 gap-x-10 font-poppins">
    <Sidebar />
    <Content />
  </div>
</template>