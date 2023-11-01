<template>
  <div class="icon icon-project">
    <svg :class="size ? size : '' " viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect ref="first" width="32" height="32" rx="16" fill="#FFE34E" />
      <rect ref="third" y="36" width="32" height="32" rx="16" fill="#FFE34E" />
      <rect ref="second" x="36" width="32" height="32" rx="16" fill="#FFE34E" />
      <rect :class="colorTheme ? colorTheme : 'white'" ref="forth" x="36" y="36" width="32" height="32" rx="16"
        fill="white" />
    </svg>
  </div>
</template>
<script>
import gsap from 'gsap';

export default {
  props: ["initAnimation", "colorTheme", "size"],
  methods: {
    animate() {
      if (!this.$refs.first) return // development break fix      
      const tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 0.5 });
      tl.addLabel('start')

      tl.to(this.$refs.first, { duration: 0.6, x: 17, y: 17 }, "start");
      tl.to(this.$refs.second, { duration: 0.6, x: -17, y: 17 }, "start");
      tl.to(this.$refs.third, { duration: 0.6, x: 17, y: -17 }, "start");
      tl.to(this.$refs.forth, { duration: 0.6, x: -17, y: -17 }, "start");
      tl.to(this.$refs.forth, { duration: 0.6, scale: 1.5, transformOrigin: 'center center' })
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

