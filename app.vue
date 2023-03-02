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
<script  setup >

import {Canvas} from "~/utils/canvas";

const canvas = ref("canvas");
const scrollableContent = ref("scrollableContent");

onMounted( () => {
  Canvas.init(canvas.value, scrollableContent.value);
});

</script>

<style lang="scss" >


body{
  background: #C0C0B7;
  color: #151412;
  font-family: sans-serif;
}

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


