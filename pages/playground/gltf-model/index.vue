<template>
  <div class="page-container">
    <div ref="gltfEl" v-canvas3-gltf-model="gltfBinding" class="gltf-el" />
    <div
      v-for="(frame, index) in gltfPositioning.keyframes"
      :key="index"
      class="frame-section"
    >
      <!--      {{ frame.id }}-->
      <div
        class="content-block"
        :style="`top:${keyframeSectionContent[index]?.position.top}%;left:${keyframeSectionContent[index]?.position.top}%;`"
      >
        <div class="content">
          {{ keyframeSectionContent[index]?.content }}
        </div>
      </div>
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

const gltfEl = ref(null);

const keyframeSectionContent = ref([
  {
    content: "Canvas3",
    position: { top: 25, left: 20, right: 0 },
  },
  {
    content: "Position",
    position: { top: 0, left: 0 },
  },
  {
    content: "Rotate",
    position: { top: 0, left: 0 },
  },
  {
    content: "Scale",
    position: { top: 0, left: 0 },
  },
  {
    content: "End",
    position: { top: 0, left: 0 },
  },
]);

const gltfPositioning = ref({
  keyframes: [
    {
      id: "1_start_to_right",
      start: 0,
      end: 0.2,
      from: {
        position: { x: -0.35, y: -0.15, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        scale: { x: 1, y: 1, z: 1 },
      },
      to: {
        position: { x: 0.2, y: -0.2, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        scale: { x: 1.5, y: 1.5, z: 1.5 },
      },
    },
    {
      id: "2_right_rotate",
      start: 0.2,
      end: 0.4,
      from: {
        position: { x: 0.2, y: -0.2, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        scale: { x: 1.5, y: 1.5, z: 1.5 },
      },
      to: {
        position: { x: 0.2, y: -0.2, z: 0 },
        rotation: { x: 0, y: Math.PI, z: 0 },
        scale: { x: 1.5, y: 1.5, z: 1.5 },
      },
    },
    {
      id: "3_right_scale_down",
      start: 0.4,
      end: 0.6,
      from: {
        position: { x: 0.2, y: -0.2, z: 0 },
        rotation: { x: 0, y: Math.PI, z: 0 },
        scale: { x: 1.5, y: 1.5, z: 1.5 },
      },
      to: {
        position: { x: 0.2, y: -0.2, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        scale: { x: 1, y: 1, z: 1 },
      },
    },
    {
      id: "4_right_scale_down",
      start: 0.6,
      end: 0.8,
      from: {
        position: { x: 0.2, y: -0.2, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        scale: { x: 1, y: 1, z: 1 },
      },
      to: {
        position: { x: 0.2, y: -0.2, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        scale: { x: 0.8, y: 0.8, z: 0.8 },
      },
    },
    {
      id: "5_to_left_scale_up",
      start: 0.8,
      end: 1,
      from: {
        position: { x: 0.2, y: -0.2, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        scale: { x: 0.8, y: 0.8, z: 0.8 },
      },
      to: {
        position: { x: -0.2, y: -0.2, z: 0 },
        rotation: { x: 0, y: Math.PI, z: 0 },
        scale: { x: 1.5, y: 1.5, z: 1.5 },
      },
    },
  ],
  mouseParallax: {
    x: 0.1,
    y: 0.1,
    z: 0.1,
  },
});

const gltfBinding = ref({
  url: "/gltf/five_tetrahedra/scene.gltf",
  name: "phoenix",
  container: gltfEl.value,
  positioning: gltfPositioning.value,
  lighting: {
    environment: "room",
    environmentIntensity: 0.4,
    toneMapping: "aces",
    exposure: 1,
    defaultLights: false,
    lights: [
      {
        type: "directional",
        color: 0xff0009,
        intensity: 1000,
        position: { x: 1, y: 1, z: 1000 },
      },
      //   type: "directional",
      //   color: 0x002aff,
      //   intensity: 1000,
      //   position: { x: -1, y: -1, z: 1000 },
      // },
      // {
    ],
  },
});
</script>
<style lang="scss" scoped>
.frame-section {
  border: 1px solid red;
  height: 1000px;
}
.gltf-el {
  border: 1px solid purple;
  height: 300px;
  width: 300px;
  position: absolute;
  top: 0;
  left: 0;
}
.content-block {
  position: relative;
  height: 100%;
  width: 100%;
}
.content {
  position: absolute;
  font-size: 155px;
}
</style>
