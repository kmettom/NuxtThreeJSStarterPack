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
  let innerHTML = html.value?.innerHTML;
  //remove slot related characters in innerHTML string
  let text = innerHTML.replace('<!--]-->', '').replace('<!--[-->','');
  // Canvas.addTextAsMesh( props.shader, props.meshId, html.value, text )
  await Canvas.addTextAsMSDF( props.shader, props.meshId, html.value, text )
})

watch(() => props.textHover, (_status) => {
  Canvas.hoverMesh(props.meshId, _status);
});

onBeforeUnmount(() => {
  Canvas.removeImageMesh(props.meshId);
});

</script>

<style lang="scss" scoped>

span{
  opacity: 0.1;
}

img {

}

</style>