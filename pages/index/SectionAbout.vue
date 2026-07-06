<template>
  <Container id="about" additional-class="about-section">
    <h2 class="body-s about-headline">About</h2>
    <div
      class="body-l"
      v-canvas3-scroll-action="{
        activeRange: 0.85,
        activateOnce: true,
        activateCallback: textAniCallback,
      }"
    >
      <p class="about-txt">
        Nuxt starter pack with integrated three.js canvas.
      </p>
      <br />
      <h3 class="about-txt">Features:</h3>
      <br />
      <p class="about-txt">
        → Layout component initializing Canvas3 with smooth scroll and ThreeJS
        scene initialization
      </p>
      <p class="about-txt">
        → Single RequestAnimationFrame loop for performance
      </p>
      <p>
        → On scroll directive for scroll interactions, scroll speed change and
        set element to active state
      </p>
      <p class="about-txt">
        → Image into ThreeJS mesh directive for easy imports of images to the
        scene with scroll control and option to define uniforms
      </p>
      <p class="about-txt">
        → Canvas3 function exports for full control of ThreeJS scene and scroll
      </p>
    </div>
  </Container>
</template>

<script setup lang="ts">
import Container from "~/components/common/Container.vue";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

//TODO: proper type import export
import type { ScrollActionBinding } from "../../../canvas3-nuxt/dist/runtime/types/types";

gsap.registerPlugin(SplitText);

function textAniCallback(item: ScrollActionBinding) {
  console.log("item", item);
  const items = item.elNode.querySelectorAll(".about-txt");
  if (!items) return;
  const tl = gsap.timeline();
  const wrappedLines = new SplitText(items, { type: "lines" }).lines;
  tl.set(items, { opacity: 1, overflow: "hidden" });
  tl.set(items, { opacity: 1, overflow: "hidden" });
  tl.fromTo(
    wrappedLines,
    { y: 50, opacity: 1 },
    {
      duration: 0.3,
      opacity: 1,
      y: 0,
      stagger: 0.1,
    },
  );
}
</script>

<style lang="scss" scoped>
.about-section {
  display: grid;
  grid-template-columns: 10fr 14fr;
  text-transform: uppercase;
  padding-bottom: 125px;
  padding-top: 10vh;
  @include respond-width($w-xs) {
    grid-template-columns: 1fr;
    padding: 10vh 10px 125px 10px;
  }
}
.about-headline {
  margin-left: 20px;
  font-weight: lighter;
}
.about-txt {
  //opacity: 0;
  @include respond-width($w-m) {
    margin-bottom: 10px;
  }
  @include respond-width($w-xs) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  &.about-1 {
    margin-bottom: 30px;
  }
  div {
    opacity: 0;
  }
}
</style>
