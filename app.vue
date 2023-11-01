<template>

  <div id="appContainer" >

    <CommonWelcome :welcomeInit="welcomeInit" @welcomeComplete="welcomeFinished()"/>
    <CommonNavigation :pageActive="contentActive" />

      <div id="scrollContainer"  >
        <div id="scrollableContent"  ref="scrollableContent" >

          <NuxtPage :pageActive="contentActive"
                    :transition="{
                      name: 'curtain',
                      onBeforeEnter: (el) => {
                        Canvas.curtainAnimation(2000)
                        Canvas.scrollToTop(700)
                      },
                    }"
          />
          <CommonFooter />

        </div>
      </div>

    <div ref="canvas" id="animationContainer"></div>
    <CanvasCursor v-if="contentActive"/>

  </div>

</template>
<script setup>

import {Canvas} from "~/utils/canvas";

const canvas = ref("canvas");
const welcomeInit = ref(false);
const scrollableContent = ref("scrollableContent");

useHead({
  htmlAttrs: {
    lang: 'en',
  }
})

onMounted( () => {
  welcomeInit.value = true
  Canvas.init(canvas.value, scrollableContent.value);
  // Canvas.initScroll();

});


let contentActive = ref(false);
const welcomeFinished = () => {
  contentActive.value = true;
}

</script >

<style lang="scss" >

@import "assets/scss/style";

#appContainer{
  background-color: var(--white);
  transition: ease background-color 0.3s;
  will-change: background-color;

  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;

  .section-title.dark{
    .h2-regular {
      transition: ease color 0.3s;
      color: var(--blue-primary);
    }
  }
  .section-title.light{
    .h2-regular {
      transition: ease color 0.3s;
      color:  var(--ovp-neutral-black-80);
    }
  }
  .merits-wrapper .h3-regular.light{
    transition: ease color 0.3s;
    color: var(--blue-secondary);
  }
  .section-expertise .content{
    transition: ease color 0.3s;
    color: var(--ovp-neutral-black-80);
  }
  .section-focus .focus-cards-wrapper .focus-card .content .p-body2{
    transition: ease color 0.3s;
    color: var(--grey);
  }

  &.dark{
    background-color: var(--blue-secondary);
    .section-title.light,
    .section-title.dark{
      .h2-regular{
        color: var(--white);
      }
    }
    .merits-wrapper .h3-regular.light{
      color: var(--white);
    }
    .section-expertise .content{
      color: var(--grey-light);
    }
    .section-focus .focus-cards-wrapper .focus-card .content .p-body2{
      color: var(--grey-light);
    }
    #uniqueCursor{
      background: var(--white) !important;
    }
  }
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

.curtain-enter-active,
.curtain-leave-active {
  transition: all 0.4s;
}
.curtain-enter-from,
.curtain-leave-to {
  opacity: 0;
  filter: blur(1rem);
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
  z-index: 10; //-1
}

</style>


