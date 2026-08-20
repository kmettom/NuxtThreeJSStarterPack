<template>
  <div class="page-container">
    <div v-for="slide in slides" :key="slide.title" class="slide">
      <img :src="slide.image" alt="" />
    </div>
  </div>
</template>
<script setup lang="ts">
const slides = ref([
  { title: "Slide 1", image: "/images/01.webp" },
  { title: "Slide 2", image: "/images/02.webp" },
  { title: "Slide 3", image: "/images/03.webp" },
  { title: "Slide 4", image: "/images/04.webp" },
  { title: "Slide 5", image: "/images/05.webp" },
  { title: "Slide 6", image: "/images/07.jpg" },
]);

useSeoMeta({
  title: "Canvas3 - Playground - Tomas Kmet - Creative web developer",
  ogTitle: "Canvas3 - Playground - Tomas Kmet - Creative web developer",
  description: "Canvas3 - Playground - Tomas Kmet - Creative web developer",
  ogDescription: "Canvas3 - Playground - Tomas Kmet - Creative web developer",
});
</script>
<style lang="scss" scoped></style>
