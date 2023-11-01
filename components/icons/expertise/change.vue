<template>
  <div class="icon icon-change">
    <svg :class="size ? size : '' " viewBox="0 0 120 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path :class="colorTheme ? colorTheme : 'white'" ref="rhombus" transform="rotate(45 25.25 0)"
        d="M27.25 0h31.7089s2 0 2 2v31.7089s0 2 -2 2h-31.7089s-2 0 -2 -2v-31.7089s0 -2 2 -2" />
      <path fill="#FFE34E" d="M58 1.75h0s24 0 24 24v0s0 24 -24 24h0s-24 0 -24 -24v0s0 -24 24 -24" />
    </svg>
  </div>
</template>
<script>
import gsap from 'gsap';

export default {
  props: ["initAnimation", "colorTheme", "size"],
  methods: {
    animate() {
      if (!this.$refs.rhombus) return // development break fix
      gsap.to(this.$refs.rhombus, { duration: 1.2, x: 70, repeat: -1, yoyo: true, ease: "circ.inOut", repeatDelay: 0.2 });
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
