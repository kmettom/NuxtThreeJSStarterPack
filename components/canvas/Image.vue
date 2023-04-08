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

let imageId = `meshImage${props.shader}_${Canvas.imageStore.length}`;
const img = ref("img");

onMounted(() => {
    Canvas.addImageAsMesh( img.value, props.shader, imageId );
})

const imageLoaded = () => {
    Canvas.updateMeshTexture(imageId,  img.value, imageId );
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