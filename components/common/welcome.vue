<template>

  <div class="welcome">

  </div>

</template>
<script>
import gsap from 'gsap'
import {Canvas} from "~/utils/canvas";

export default {
  props: ['welcomeInit'],
  data() {
    return {
      show: false,
      curtainUpDuration: 500, //2250
    }
  },
  methods: {
    welcomeAnimation() {
     Canvas.curtainAnimation(this.curtainUpDuration)

      setTimeout(() => {
        // gsap.to('.welcome' , {duration: 0 ,  display: 'none', ease: 'linear'})
      }, this.curtainUpDuration * 0.3 )

      setTimeout(() => {
        this.welcomeComplete()
      }, this.curtainUpDuration * 0.5 )

    },

    welcomeComplete() {
      this.$emit('welcomeComplete')
    }
  },
  mounted() {

  },
  watch: {
    welcomeInit(newValue, oldValue) {
      if(newValue){
        this.welcomeAnimation()
      }
    }
  }

}


</script>
<style lang="scss" scoped>

</style>
