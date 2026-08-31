<template>
  <div class="page-container">
    <div
      id="fixedParent"
      v-canvas3-scroll-action="scrollSpeedBarOptions"
      class="scroll-speed-container"
    >
      <div class="scroll-speed-status-bar">
        <div class="nav-holder">
          <div v-if="layoutSmall" @click="() => layoutChange('normal')">
            normal
          </div>
          <div v-if="!layoutSmall" @click="() => layoutChange('sm')">
            one side / small
          </div>
        </div>
        <span class="scroll-speed-text">
          Scroll speed: {{ scrollSpeedCoef }}
        </span>
        <span ref="scrollSpeedAniEl" class="scroll-speed-ani" />
      </div>
    </div>
    <div
      v-for="(slide, index) in slides"
      :key="slide.title"
      :ref="slidesRefs.set"
      class="slide"
      :style="`margin-left:${slide.position * 33}%`"
      :data-item-position="slide.position"
    >
      <div
        v-canvas3-scroll-action="{
          activeRange: 0.99,
          activateOnce: true,
          scrollSpeedSetTo: {
            value: layoutSmall ? 0 : (slide.scrollSpeed ?? 0),
            duration: 0,
          },
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
                duration: 0.3,
                ease: 'linear',
              },
              uLayoutTransformAni: {
                value: 1,
                duration: 0.4,
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
// SHADER
// - appear animation
// - mouse interaction
// - scroll shader
// add appear animation for text fields

//canvas3 - fix scroll speed and jump of mesh on active

import gsap from "gsap";
import { useTemplateRefsList } from "@vueuse/core";

const slidesRefs = useTemplateRefsList();

const blocksActivatedMap = ref<boolean[]>([]);

const scrollSpeedAniEl = ref<HTMLElement | null>(null);

const layoutSmall = ref(false);
const scrollSpeedCoef = ref(0);
const scrollSpeedBarOptions = computed(() => ({
  activeRange: 1,
  fixToParent: {
    containerId: "fixedParent",
    fixPosition: 0,
    margin: 0,
  },
  onScrollCallback: scrollSpeedCallback,
}));

const layoutChange = (state: string) => {
  layoutSmall.value = state === "sm";
  Canvas3.setMeshPositionsUpdate(true);
  // const marginLeft = layoutSmall.value ? 0 : 33;
  const itemWidth = layoutSmall.value ? 25 : 33;

  const tl = gsap.timeline({
    onStart: () => {
      Canvas3.setMeshPositionsUpdate(true);
    },
    onComplete: () => {
      Canvas3.setMeshPositionsUpdate(false);
    },
  });

  for (let i = 0; i < slidesRefs.value.length; i++) {
    if (slidesRefs.value[i]) {
      const position = slidesRefs.value[i]?.dataset.itemPosition ?? 0;
      const marginLeft = layoutSmall.value ? 0 : position * 33;
      tl.to(
        slidesRefs.value[i],
        {
          marginLeft: `${marginLeft}%`,
          width: `${itemWidth}%`,
          duration: 0.5,
          ease: "power2.out",
        },
        "<",
      );
    }
  }

  setTimeout(() => {
    Canvas3.setMeshPositionsUpdate(false);
  }, 1000);
  // `margin-left:${slide.position * (layoutSmall ? 0 : 33)}%;width:${layoutSmall ? 25 : 33}%`
};

const scrollSpeedCallback = (_item: any, speed: number) => {
  const newSpeedCoef = speed < 0.03 ? 0 : speed;
  scrollSpeedCoef.value = newSpeedCoef;
  gsap.set(scrollSpeedAniEl.value, {
    width: `${newSpeedCoef * 100}%`,
  });
};

const textParagraph = "Lorem ipsum dolor sit amet.";

const slides = ref<
  {
    title: string;
    image?: string;
    text?: string;
    position: number;
    scrollSpeed?: number;
  }[]
>([
  {
    title: "Slide 1",
    image: "/playground/images/01.webp",
    position: 0,
  },
  {
    title: "Slide 2",
    image: "/playground/images/02.webp",
    position: 1,
    // scrollSpeed: -0.15,
  },
  {
    title: "Slide 3",
    image: "/playground/images/03.webp",
    text: textParagraph,
    position: 2,
    // scrollSpeed: -0.3,
  },
  {
    title: "Slide 4",
    image: "/playground/images/04.webp",
    position: 0,
    scrollSpeed: 0.3,
  },
  {
    title: "Slide 5",
    image: "/playground/images/05.webp",
    position: 1,
    scrollSpeed: 0.15,
  },
  {
    title: "Slide 6",
    image: "/playground/images/06.webp",
    text: textParagraph,
    position: 2,
  },
  {
    title: "Slide 6",
    image: "/playground/images/07.webp",
    position: 0,
  },
  {
    title: "Slide 6",
    image: "/playground/images/08.webp",
    position: 1,
  },
  {
    title: "Slide 6",
    image: "/playground/images/09.webp",
    text: textParagraph,
    position: 2,
  },
  {
    title: "Slide 6",
    image: "/playground/images/10.webp",
    position: 0,
  },
  {
    title: "Slide 6",
    image: "/playground/images/11.webp",
    position: 1,
  },
  {
    title: "Slide 6",
    image: "/playground/images/12.webp",
    text: textParagraph,
    position: 2,
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
.page-container {
  //background: black;
}
.scroll-speed-container {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
.scroll-speed-status-bar {
  padding: 0;
}
.scroll-speed-ani {
  position: absolute;
  height: 18px;
  top: 0px;
  left: 0;
  background: var(--light-color);
  z-index: 1;
}
.scroll-speed-text {
  font-size: 14px;
  z-index: 2;
  position: absolute;
  left: 0px;
  display: block;
  color: var(--dark-color);
}
.slide {
  padding: 10px;
  width: 33%;
  position: relative;
  img {
    width: 100%;
  }
  .slide-text {
    padding: 10px 0 20px;
  }
}
</style>
