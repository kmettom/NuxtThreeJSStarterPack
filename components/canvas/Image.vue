<template>
  <img @load="imageLoaded" ref="img" alt="picture" :src="srcLink" />
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

const imageLoaded = () => {
    imageId = `meshImage${props.shader}_${Canvas.imageStore.length}`;
    Canvas.addImage( img.value, props.shader, imageId );
};

watch(() => props.imageHover, (_status) => {
  Canvas.hoverImage(imageId, _status);
});

</script>

<style lang="scss" >

img{
  opacity: 0;
}

</style>