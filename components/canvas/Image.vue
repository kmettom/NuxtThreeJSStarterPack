<template>
  <img @load="imageLoaded" ref="img" alt="picture" width="380" height="380" :src="srcLink"  loading="lazy" />
<!--  <NuxtImg-->
<!--      @load="imageLoaded"-->
<!--      ref="img" alt="picture" :src="srcLink"-->
<!--      width="380" height="380"-->
<!--  />-->

</template>

<script setup >

import {Canvas} from "~/utils/canvas";

let props = defineProps([
  'srcLink',
  'shader',
  'imageHover',
  'meshId',
]);

const img = ref("img");
const imgLoaded = ref(false);

onMounted(async() => {
  addImageToCanvas(false)
})

const addImageToCanvas = (_timeout) => {
  setTimeout(() => {
    if( img.value.getBoundingClientRect()?.width === 0){
      addImageToCanvas(true)
      return
    }
    Canvas.addImageAsMesh( img.value, props.shader , props.meshId, false)
  } , _timeout ? 200 : 0)

};

const imageLoaded = async () => {
  imgLoaded.value = true
};

watch(() => props.imageHover, (_status) => {
  Canvas.hoverImage(props.meshId, _status);
});

onBeforeUnmount(() => {
  Canvas.removeImageMesh(props.meshId);
});

</script>

<style lang="scss" scoped >
@import "assets/scss/_media_queries";

img{
  opacity: 0;
  @include respond-width($w-s){
    opacity: 1;
  }
}

</style>