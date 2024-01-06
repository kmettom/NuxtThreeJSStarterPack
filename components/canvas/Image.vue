<template>
  <span ref="img" class="webgl-img">
      <NuxtImg @load="imageLoaded" :width="width" :height="height" alt="picture" :src="srcLink"/>
  </span>
</template>

<script setup>

import {Canvas} from "~/utils/canvas";

let props = defineProps([
  'srcLink',
  'shader',
  'imageHover',
  'meshId',
  'width',
  'height',
]);

const img = ref("img");
const imgLoaded = ref(false);

onMounted(async () => {
  addImageToCanvas(false)
})

const addImageToCanvas = (_timeout) => {
  setTimeout(() => {
    if (!img.value || img.value.children[0].getBoundingClientRect()?.width === 0) {
      addImageToCanvas(true)
      return
    }
    Canvas.addImageAsMesh(img.value.children[0], props.shader, props.meshId, false)
  }, _timeout ? 200 : 0)

};

const imageLoaded = () => {
  imgLoaded.value = true
};

watch(() => props.imageHover, (_status) => {
  Canvas.hoverMesh(props.meshId, _status);
});

onBeforeUnmount(() => {
  Canvas.removeMesh(props.meshId);
});

</script>

<style lang="scss" scoped>

img {

}

</style>