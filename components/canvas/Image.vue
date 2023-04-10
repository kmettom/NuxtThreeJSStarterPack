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

onMounted(async() => {
    imageId = await Canvas.addImageAsMesh( img.value, props.shader ).then( (_id) => { return _id});
    console.log("imageId" , imageId);
})

// const imageLoaded = async () => {
//     imageId = await Canvas.addImageAsMesh( img.value, props.shader ).then( (_id) => { return _id});
//     console.log("imageId ON LOAD" , imageId);
// };

// watch(() => props.imageHover, (_status) => {
//   Canvas.hoverImage(imageId, _status);
// });

</script>

<style lang="scss" >

img{
  opacity: 0;
}

</style>