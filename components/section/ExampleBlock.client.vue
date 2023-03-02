<template>

  <div class="example-container">
    <div class="example"
         @mouseover="exampleHover( true)"
         @mouseleave="exampleHover( false)"
    >
      <h3 ref="textToAnimate">{{text}}</h3>
      <CanvasImage :imageHover="imageHover" :shader="shader" :srcLink="imgLink" />
    </div>
  </div>

</template>

<script setup >

import gsap from 'gsap';

const props = defineProps([
  'text',
  'shader',
  'imgLink',
  'scrollActiveImage',
]);

let imageHover = ref(Boolean);
imageHover.value = false;
const textToAnimate = ref("textToAnimate");

const  exampleHover = ( _status) => {
  imageHover.value = _status;
};

</script>

<style lang="scss" >

</style>