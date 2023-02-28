<template>
  <div id="appContainer"  >

    <div id="scrollContainer"  >
      <div ref="scrollableContent" >

        <SectionExamples />

      </div>
    </div>

    <div ref="canvas" id="animationContainer"></div>

  </div>

</template>
<script  >

import {Canvas} from "~/utils/canvas";

export default {
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {

    this.$hello();

    // this.$on('hello', () => {
    //   console.log('hello from app.vue ONONONONON');
    // });

    Canvas.init(this.$refs.canvas, this.$refs.scrollableContent);
  },
}


</script>

<script setup>

const emit = defineEmits(['change', 'delete'])

// setup code
</script>

<style lang="scss" >

#scrollContainer{
  position: fixed;
  height: 100%;
  left: 0;
  overflow: hidden;
}

#animationContainer {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  pointer-events: none;
  z-index: -1;
}



</style>


