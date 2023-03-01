<template>

  <div class="example-container">
    <div class="example"
         @mouseover="exampleHover( true)"
         @mouseleave="exampleHover( false)"
    >
      <h3 ref="textToAnimate">{{text}}</h3>
      <CanvasImage v-scrollActive="scrollActiveImage"  :imageHover="imageHover" :shader="shader" :srcLink="imgLink" />
    </div>
  </div>

</template>

<script setup >

import gsap from 'gsap';
import { SplitText } from "gsap/SplitText"
gsap.registerPlugin(SplitText);

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
  if(_status){
    textAnimate();
  }
};
const textAnimate = () => {

  let mySplitText = new SplitText(textToAnimate.value, { type: "words,chars" });
  let chars = mySplitText.chars;

  gsap.set(textToAnimate.value, { perspective: 400 });

  let duration  = 0.25;

  for (var i = 0; i < chars.length; i++) {

    let tl = gsap.timeline();
    tl.to(  chars[i] , {
      delay: i*0.005,
      duration: duration,
      opacity: 0,
      y: 10,
      ease: "power3.out",
    }).to(  chars[i] , {
      duration: 0,
      opacity: 0,
      y: -10,
    }).to(  chars[i] , {
      duration: duration,
      opacity: 1,
      y: 0,
      ease: "power3.out",
    });

  }
};


</script>

<style lang="scss" >

</style>