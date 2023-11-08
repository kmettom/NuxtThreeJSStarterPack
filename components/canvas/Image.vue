<template>
<!--  <img @load="imageLoaded" ref="img" alt="picture" :src="srcLink" />-->
  <span ref="img" >
      <NuxtImg @load="imageLoaded" alt="picture" :src="srcLink" />
  </span>
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
    console.log(img)
    if( !img.value || img.value.children[0].getBoundingClientRect()?.width === 0){
      addImageToCanvas(true)
      return
    }
    Canvas.addImageAsMesh( img.value.children[0], props.shader , props.meshId, false)
  } , _timeout ? 200 : 0)

};

const imageLoaded = (_data) => {
  console.log("imageLoaded" , _data)
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

img{
  opacity: 0;
}

</style>