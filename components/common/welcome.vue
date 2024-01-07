<template>

  <div class="welcome">
    <div class="welcome-txt-wrapper">
      <div class="welcome-txt-main">
        Nuxt ThreeJS Starter Pack
      </div>
      <div class="welcome-by">
        Developed by tomaskmet.com
      </div>
    </div>

  </div>

</template>
<script>
import {gsap} from "gsap";
import {SplitText} from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default {
  props: ['welcomeInit'],
  data() {
    return {
      show: false,
      welcomeAniDuration: 0.5, //0.5
      welcomeAniDelay: 0.25, //0.25
      welcomeHideDuration: 0.5, //0.5
      welcomeHideDelay: 0.5, //0.5
    }
  },
  methods: {
    welcomeAnimation() {

      const tl = gsap.timeline();
      const chars = new SplitText(".welcome-txt-main", {type: "words,chars"}).chars;
      gsap.set(".welcome-txt-main", {perspective: 400});
      tl.fromTo(chars, {y: "10px", opacity: 0}, {
        duration: this.welcomeAniDuration,
        opacity: 1,
        y: "0px",
        stagger: 0.02
      });
      gsap.to('.welcome-txt-main', {duration: 0.3, opacity: 1})
      gsap.to('.welcome-by', {duration: 0.3, opacity: 1})

      gsap.to('.welcome', {
        duration: this.welcomeHideDuration,
        delay: this.welcomeAniDuration + this.welcomeHideDelay,
        height: 0,
        ease: 'power4.in',
        onComplete: () => {
          this.welcomeComplete()
        }
      })
    },

    welcomeComplete() {
      this.$emit('welcomeComplete')
    }
  },
  mounted() {

  },
  watch: {
    welcomeInit(newValue, oldValue) {
      if (newValue) {
        this.welcomeAnimation()
      }
    }
  }

}


</script>
<style lang="scss" scoped>

.welcome {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 99;
  background-color: #BFC0B2;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

.welcome-txt-wrapper {
  position: relative;
  text-align: center;
}

.welcome-txt-main {
  font-size: 50px;
  opacity: 0;
}

.welcome-by {
  opacity: 0;
}


</style>
