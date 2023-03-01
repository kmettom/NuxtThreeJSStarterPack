<template>
  <img style="" ref="img" alt="picture" :src="srcLink" />
</template>

<script setup >

import {Canvas} from "~/utils/canvas";

let props = defineProps([
  'srcLink',
  'shader',
  'imageHover',
]);

let imageId = null;
const img = ref("img");

onMounted( () => {

  setTimeout( () => {

    let meshIndex = Canvas.imageStore.length;
    imageId = `meshImage${props.shader}_${meshIndex}`;
    Canvas.addImage( img.value, props.shader, imageId );

  } , 1000);

});

watch(() => props.imageHover, (_status) => {
  Canvas.hoverImage(imageId, _status);
});

</script>

<style lang="scss" >

img{
  opacity: 0;
}

</style>