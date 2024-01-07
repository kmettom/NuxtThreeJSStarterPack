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
  //remove nuxt slot comment from innerHTML, only once
  if(innerHTML.includes('<!--]-->')) innerHTML = innerHTML.slice(0, innerHTML.indexOf('<!--]-->')).slice(innerHTML.indexOf('<!--[-->') + 9);
  // delay canvas initialization to wait for font loaded
  setTimeout(() => {
    Canvas.addTextAsMSDF( props.shader, props.meshId, html.value, innerHTML )
  },50)
})

watch(() => props.textHover, (_status) => {
  Canvas.hoverMesh(props.meshId, _status);
});

onBeforeUnmount(() => {
  Canvas.removeMesh(props.meshId);
});

</script>

<style lang="scss" scoped>

span{
  opacity: 0;
}

img {

}

</style>