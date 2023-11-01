<template>
  <div class="icon">

    <svg width="130" height="49" viewBox="0 0 130 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path ref="out" d="M130 3.00006C130 1.89549 129.103 0.991402 128.002 1.08334C125.535 1.28943 123.11 1.87642 120.816 2.82695C117.904 4.03306 115.258 5.80089 113.029 8.0295C110.801 10.2581 109.033 12.9038 107.827 15.8157C106.621 18.7275 106 21.8483 106 25.0001C106 28.1518 106.621 31.2726 107.827 34.1845C109.033 37.0963 110.801 39.742 113.029 41.9706C115.258 44.1992 117.904 45.9671 120.816 47.1732C123.11 48.1237 125.535 48.7107 128.002 48.9168C129.103 49.0087 130 48.1046 130 47.0001L130 25.0001L130 3.00006Z" fill="#FFE34E"/>
      <rect ref="mid" x="53" width="48" height="48" rx="24" fill="white"/>
      <rect ref="center" width="48" height="48" rx="24" fill="white"/>
    </svg>

  </div>
</template>
<script>
import gsap from 'gsap';

export default {
  props: ["initAnimation"],
  methods: {
    animate() {
      if (!this.$refs.mid) return // development break fix
      const tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 0.35 });
      tl.addLabel('start')
      tl.from(this.$refs.mid, { duration: 0.7, x: -50, ease: "ease" , scale:0.95 }, "start");
      tl.from(this.$refs.out, { duration: 0.7, x: -100, ease: "ease", scale: 0.85 }, "start");
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
