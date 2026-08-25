<template>
  <div class="page-container">
    <div
      id="fixedParent"
      v-canvas3-scroll-action="example3ScrollOptions"
      class="scroll-speed-container"
    >
      <div class="scroll-speed-status-bar">
        Scroll speed: {{ scrollSpeedCoef }}
        <span ref="scrollSpeedAniEl" class="scroll-speed-ani" />
      </div>
    </div>
    <div v-for="(slide, index) in slides" :key="slide.title" class="slide">
      <div
        v-canvas3-scroll-action="{
          activeRange: 0.85,
          activateOnce: true,
          activateCallback: () => {
            blocksActivatedMap[index] = true;
          },
          deactivateCallback: () => {
            blocksActivatedMap[index] = false;
          },
        }"
      >
        <img
          v-if="slide.image"
          v-canvas3-image="{
            shaderName: 'playScrollPerformance',
            uniforms: {
              uAniIn: {
                value: blocksActivatedMap[index] ? 1 : 0,
                duration: 0.7,
                ease: 'linear',
              },
            },
          }"
          :src="slide.image"
          class="slide-image"
          alt=""
        />
        <div v-if="slide.text" class="slide-text">{{ slide.text }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// TODO:
// add appear animation with shader
// add appear animation for text fields
// adjust scroll shader
// add appear animation for first blocks - text performance

// adjust style? - take Jagoda's layout from a post
// layout update
// assets update

import gsap from "gsap";

const blocksActivatedMap = ref<boolean[]>([]);

const scrollSpeedAniEl = ref<HTMLElement | null>(null);

const scrollSpeedCoef = ref(0);
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
  scrollSpeedCoef.value = speed;
  gsap.to(scrollSpeedAniEl.value, {
    width: `${speed * 100}%`,
    duration: 0.1,
  });
};

const slides = ref([
  {
    title: "Slide 1",
    image: "/playground/images/01.webp",
    text: "Slide 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Slide 2",
    image: "/playground/images/02.webp",
    text: "Slide 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Slide 3",
    image: "/playground/images/03.webp",
    text: "Slide 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Slide 4",
    image: "/playground/images/04.webp",
    text: "Slide 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Slide 5",
    image: "/playground/images/05.webp",
    text: "Slide 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Slide 6",
    image: "/playground/images/06.webp",
    text: "Slide 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Slide 6",
    image: "/playground/images/07.webp",
    text: "Slide 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Slide 6",
    image: "/playground/images/08.webp",
    text: "Slide 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Slide 6",
    image: "/playground/images/09.webp",
    text: "Slide 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Slide 6",
    image: "/playground/images/10.webp",
    text: "Slide 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Slide 6",
    image: "/playground/images/11.webp",
    text: "Slide 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Slide 6",
    image: "/playground/images/12.webp",
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
.slide {
  img {
    width: 400px;
  }
}
</style>
