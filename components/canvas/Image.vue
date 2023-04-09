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

// let imageId = `meshImage${props.shader | "default" }_${Canvas.imageStore.length}`;
let imageId = null;
const img = ref("img");

onMounted(() => {
    imageId = Canvas.addImageAsMesh( img.value, props.shader );
    // Canvas.addImageAsMesh( img.value, props.shader, imageId );
})

const imageLoaded = () => {
    // Canvas.addImageAsMesh( img.value, props.shader );
    // Canvas.updateMeshTexture(imageId,  img.value, imageId );
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