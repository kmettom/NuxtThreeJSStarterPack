<template>
  <img @load="imageLoaded" ref="img" alt="picture" :src="srcLink" />
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
    if( !img.value || img.value.getBoundingClientRect()?.width === 0){
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

img{
  opacity: 0;
}

</style>