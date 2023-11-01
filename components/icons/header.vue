<template>
  <div class="icon">
    <svg class="icon-svg" ref="icon" viewBox="0 0 86 86" fill="none" >
      <path class="start" ref="start" fill="#FFE34E" d="M10 0h66s10 0 10 10v66s0 10 -10 10h-66s-10 0 -10 -10v-66s0 -10 10 -10"/>
      <path class="end" ref="end"  d="M43 0h0s43 0 43 43v0s0 43 -43 43h0s-43 0 -43 -43v0s0 -43 43 -43"/>
    </svg>
  </div>
</template>
<script>
import gsap from 'gsap'
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
gsap.registerPlugin( MorphSVGPlugin);

export default {
  props: ["initAnimation"],
  methods: {
    animate() {
      gsap.to('.icon-svg' , {duration: 4 , rotate: 360, ease: 'linear', repeat: -1, yoyo: false, transformOrigin: 'center center' })
      gsap.to('.start', {duration: 1, morphSVG: '.end', repeat: -1, yoyo: true, ease: 'linear'});
    },
  },
  mounted() {
    if(this.initAnimation === true){
      this.animate()
    }
  },
  watch: {
    initAnimation(newValue, oldValue) {
      if(newValue === true){
        this.animate()
      }
    }
  }
}

</script>
<style lang="scss" scoped>

@import "assets/scss/_media_queries";

svg{
    width:86px;
    height:86px;
  @include respond-width($w-m-xs){
  width:66px;
  height:66px;
}
  @include respond-width($w-s){
    width:46px;
    height:46px;
  }
}

</style>
