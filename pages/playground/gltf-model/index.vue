<template>
  <div class="page-container">
    <div
      v-for="(frame, index) in gltfPositioning.keyframes"
      :key="index"
      :style="`height:${frame.end - frame.start}vh`"
      class="frame-section"
    >
      {{ frame }}
    </div>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: "Canvas3 - Playground - Tomas Kmet - Creative web developer",
  ogTitle: "Canvas3 - Playground - Tomas Kmet - Creative web developer",
  description: "Canvas3 - Playground - Tomas Kmet - Creative web developer",
  ogDescription: "Canvas3 - Playground - Tomas Kmet - Creative web developer",
});

const gltfPositioning = ref({
  keyframes: [
    {
      start: 0,
      end: 0.5,
      from: {
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        scale: { x: 1, y: 1, z: 1 },
      },
      to: {
        position: { x: 0.2, y: -0.5, z: 0 },
        rotation: { x: 0, y: Math.PI, z: Math.PI / 4 },
        scale: { x: 0.1, y: 0.1, z: 0.1 },
      },
    },
    {
      start: 0.5,
      end: 1,
      from: {
        position: { x: 0.2, y: -0.5, z: 0 },
        rotation: { x: 0, y: Math.PI, z: Math.PI / 4 },
        scale: { x: 0.1, y: 0.1, z: 0.1 },
      },
      to: {
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        scale: { x: 1, y: 1, z: 1 },
      },
    },
  ],
  mouseParallax: {
    x: 0.1,
    y: 0.1,
    z: 0.1,
  },
});
</script>
<style lang="scss" scoped>
.frame-section {
  border: 1px solid red;
}
</style>
