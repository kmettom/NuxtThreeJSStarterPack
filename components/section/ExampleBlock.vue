<template>

  <div class="example-container">
    <div class="example"
         @mouseover="exampleHover( $event , true)"
         @mouseleave="exampleHover( $event, false)"
    >
      <h2 ref="header">{{header}}</h2>
      <CanvasImage :imageHover="imageHover" :shaders="shader" :srcLink="imgLink" />
    </div>
  </div>

</template>

<script>

import gsap from 'gsap';
import { SplitText } from "gsap/SplitText"

export default {
  data() {
    return {
      imageHover: false,
    }
  },
  props: {
    header: {
      type: String,
    },
    shader: {
      type: String,
    },
    imgLink: {
      type: String,
    },
  },
  methods: {
    exampleHover($event , _status) {
      this.imageHover = _status;
      if(_status){
        this.textAnimate(this.$refs.header);
      }
    },
    textAnimate(_el){

      let mySplitText = new SplitText(_el, { type: "words,chars" });
      let chars = mySplitText.chars;

      gsap.set(_el, { perspective: 400 });

      let duration  = 0.15;

      for (var i = 0; i < chars.length; i++) {

        let tl = gsap.timeline();
        tl.to(  chars[i] , {
          delay: i*0.035,
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
    },
  },
  mounted() {
    gsap.registerPlugin(SplitText);
  },

}
</script>

<style lang="scss" >

//$examplesize: 450px;
//
//.example{
//  display: inline-block;
//  //margin: 0 20px;
//  &:nth-child(3n + 2){
//    margin-left: $examplesize;
//  }
//  &:nth-child(3n){
//    margin-left: calc(#{$examplesize} * 2);
//  }
//  img{
//    max-width: $examplesize;
//  }
//}


</style>