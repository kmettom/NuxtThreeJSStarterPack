<template>
  <div class="icon icon-insights">
    <svg :class="size ? size : '' " viewBox="0 -30 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- <path ref="square" fill="#FFE34E" d="M2 0h24.2353s2 0 2 2v24.2353s0 2 -2 2h-24.2353s-2 0 -2 -2v-24.2353s0 -2 2 -2" /> -->
      <rect ref="square" width="35.7089" height="35.7089" rx="2" fill="#FFE34E" />
    </svg>
  </div>
</template>
<script>
import gsap from 'gsap';

export default {
  props: ["initAnimation", "colorTheme", "size"],
  methods: {
    animate() {
      if (!this.$refs.square) return // development break fix      
      const tl = gsap.timeline({ repeat: -1, yoyo: true, ease: 'linear', repeatDelay: 0.4 });

      tl.to(this.$refs.square, { duration: 0.6, rotate: 90, x: 50, fill: this.colorTheme == 'blue' ? '#679ecb' : 'white', transformOrigin: 'center center' })
        .to(this.$refs.square, { duration: 0.6, scale: 2, fill: "#FFE34E" })
        .to(this.$refs.square, { duration: 0.6, rotate: 180, x: 100 })
    },
  },
  mounted() {
    if (this.initAnimation === true) {
      this.animate()
    }
  },
  watch: {
    initAnimation(newValue, oldValue) {
      if (newValue === true) {
        this.animate()
      }
    }
  }
}

</script>
<style lang="scss" scoped>

</style>
