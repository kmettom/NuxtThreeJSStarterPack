<template>
  <div class="icon">
    <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect ref="bigCircle"  width="90" height="90" rx="45" fill="#FFE34E"/>
      <rect ref="middleCircle" x="10" y="10" width="70" height="70" rx="35" fill="white"/>
      <rect  ref="smallCircle" x="21" y="21" width="48" height="48" rx="24" fill="#FFE34E"/>
    </svg>
  </div>
</template>
<script>
import gsap from 'gsap';

export default {
  props: ["initAnimation"],
  methods: {
    animate() {
      if(!this.$refs.middleCircle) return // development break fix
      gsap.set([this.$refs.middleCircle, this.$refs.bigCircle, this.$refs.smallCircle], { transformOrigin: 'center center' });
      const tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 0.1 });
      tl.addLabel('start')
      tl.from(this.$refs.middleCircle, { duration: 1, scale: 0 }, "start");
      tl.from(this.$refs.bigCircle, { duration: 1, scale: 0, delay: 0.35 },  "start");
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
