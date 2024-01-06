<template>

  <div id="appContainer" >

    <CommonWelcome :welcomeInit="welcomeInit" @welcomeComplete="welcomeFinished()"/>
<!--    <CommonNavigation :pageActive="contentActive" />-->

      <div id="scrollContainer"  >
        <div id="scrollableContent"  ref="scrollableContent" >

          <NuxtPage :pageActive="contentActive"
                    :transition="{
                      name: 'pagetransition',
                      onBeforeEnter: (el) => {
                        Canvas.scrollToTop(0)
                      },
                    }"
          />

        </div>
      </div>

    <div ref="canvas" id="animationContainer"></div>

  </div>

</template>
<script setup>

import {Canvas} from "~/utils/canvas";
import {Display} from "~/utils/display";

const canvas = ref("canvas");
const welcomeInit = ref(false);
const scrollableContent = ref("scrollableContent");

useHead({
  htmlAttrs: {
    lang: 'en',
  }
})

onMounted( () => {
  Display.init();
  welcomeInit.value = true
  Canvas.init(canvas.value, scrollableContent.value);
});

let contentActive = ref(false);
const welcomeFinished = () => {
  contentActive.value = true;
}

</script >

<style lang="scss" >

@import "assets/scss/style";

.headline{
  font-size: 100px;
  font-family: 'PP Formula Black', sans-serif;
}

#scrollContainer{
  position: fixed;
  height: 100%;
  left: 0;
  width: 100%;
  overflow: hidden;
}

#scrollableContent{
  will-change: transform;
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


