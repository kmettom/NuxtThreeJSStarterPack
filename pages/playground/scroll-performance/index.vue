<template>
  <div class="page-container">
    <div
      id="fixedParent"
      v-canvas3-scroll-action="example3ScrollOptions"
      class="scroll-speed-container"
    >
      <div class="scroll-speed-status-bar">
        Scroll speed: {{ example3Speed }}
        <span ref="scrollSpeedAniEl" class="scroll-speed-ani" />
      </div>
    </div>
    <div v-for="(slide, index) in slides" :key="slide.title" class="slide">
      <img
        v-canvas3-image="{ shaderName: 'example1' }"
        :src="slide.image"
        alt=""
      />
      <div>{{ index }}/{{ slide.text }}</div>
    </div>
    <!--    v-action-on-scroll="{-->
    <!--    activeRange: 0.85,-->
    <!--    activateOnce: true,-->
    <!--    activateCallback: () => console.log('activateCallback', index),-->
    <!--    deactivateCallback: () => console.log('deactivateCallback', index),-->
    <!--    }"-->
  </div>
</template>
<script setup lang="ts">
// TODO:
// add scroll speed bar component (take from main page
// adjust style? - take Jagoda's layout from a post
// layout update
// assets update
// add appear animation with shader
// add appear animation for text fields
// adjust scroll shader
// add appear animation for first blocks - text performance

import gsap from "gsap";

const scrollSpeedAniEl = ref<HTMLElement | null>(null);

const example3Speed = ref(0);
const example3ScrollOptions = computed(() => ({
  activeRange: 0.9,
  fixToParent: {
    containerId: "fixedParent",
    fixPosition: 0,
    margin: 0,
  },
  onScrollCallback: scrollSpeedCallback,
}));

const scrollSpeedCallback = (_item: any, speed: number) => {
  example3Speed.value = speed;
  gsap.to(scrollSpeedAniEl.value, {
    width: `${speed * 100}%`,
    duration: 0.1,
  });
};

const slides = ref([
  {
    title: "Slide 1",
    image: "/images/01.webp",
    text: "Slide 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Slide 2",
    image: "/images/02.webp",
    text: "Slide 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Slide 3",
    image: "/images/03.webp",
    text: "Slide 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Slide 4",
    image: "/images/04.webp",
    text: "Slide 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Slide 5",
    image: "/images/05.webp",
    text: "Slide 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Slide 6",
    image: "/images/07.jpg",
    text: "Slide 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
]);

useSeoMeta({
  title: "Canvas3 - Playground - Tomas Kmet - Creative web developer",
  ogTitle: "Canvas3 - Playground - Tomas Kmet - Creative web developer",
  description: "Canvas3 - Playground - Tomas Kmet - Creative web developer",
  ogDescription: "Canvas3 - Playground - Tomas Kmet - Creative web developer",
});

onMounted(() => {
  setTimeout(() => {
    Canvas3.setScrollShaderByName("scrollPlayground");
  }, 0);
});
onBeforeUnmount(() => {
  Canvas3.setScrollShaderByName("scrollPlayground");
});
</script>
<style lang="scss" scoped>
.scroll-speed-container {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.scroll-speed-status-bar {
  padding: 0px;
}

.scroll-speed-ani {
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  background: var(--light-color);
}
</style>
