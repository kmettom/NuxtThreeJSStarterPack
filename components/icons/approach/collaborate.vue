<template>
  <div class="icon">
    <svg width="110" height="48" viewBox="0 0 110 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect  ref="left"  width="48" height="48" rx="24" fill="#FFE34E"/>
      <rect ref="center" x="31" width="48" height="48" rx="24" fill="white"/>
      <rect ref="right" x="62" width="48" height="48" rx="24" fill="#FFE34E"/>
    </svg>
  </div>
</template>
<script>
import gsap from 'gsap';

export default {
  props: ["initAnimation"],
  methods: {
    animate() {
      if (!this.$refs.left) return // development break fix      
      const tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 0.35, ease: 'linear' });
      tl.addLabel('start')
      tl.to(this.$refs.right, { duration: 0.6, x: -60, ease: 'linear' } , '=+0.2');
      tl.to(this.$refs.center, { duration: 0.6, x: -30, ease: 'linear'  }, 'start');
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
<style lang="scss" scoped></style>
