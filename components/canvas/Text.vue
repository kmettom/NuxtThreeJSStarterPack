<template>
  <span ref="html" >
    <slot></slot>
  </span>
</template>

<script setup>

import {Canvas} from "~/utils/canvas";

let props = defineProps([
  'shader',
  'meshId',
  'textHover',
]);

const html = ref("html");

onMounted(async () => {
  const HTML = html.value;
  Canvas.addTextAsMesh( props.shader, props.meshId, HTML  )
})

watch(() => props.textHover, (_status) => {
  Canvas.hoverMesh(props.meshId, _status);
});

onBeforeUnmount(() => {
  Canvas.removeImageMesh(props.meshId);
});

</script>

<style lang="scss" scoped>

img {

}

</style>