<template>
  <div class="page-container">
    <div v-for="(slide, index) in slides" :key="slide.title" class="slide">
      <img
        :src="slide.image"
        alt=""
        v-canvas3-image="{ shaderName: 'example1' }"
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
</script>
<style lang="scss" scoped></style>
