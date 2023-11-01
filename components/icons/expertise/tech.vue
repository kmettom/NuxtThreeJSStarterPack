<template>
  <div class="icon icon-tech">
    <svg :class="size ? size : '' " viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path ref="first" fill="#FFE34E" d="M2 0h24.2353s2 0 2 2v24.2353s0 2 -2 2h-24.2353s-2 0 -2 -2v-24.2353s0 -2 2 -2" />
      <path ref="third" fill="#FFE34E"
        d="M2 31.7646h24.2353s2 0 2 2v24.2353s0 2 -2 2h-24.2353s-2 0 -2 -2v-24.2353s0 -2 2 -2" />
        <path ref="second" fill="#FFE34E"
        d="M33.7647 0h24.2353s2 0 2 2v24.2353s0 2 -2 2h-24.2353s-2 0 -2 -2v-24.2353s0 -2 2 -2" />
        <path ref="forth" fill="#FFE34E"
        d="M33.7647 31.7646h24.2353s2 0 2 2v24.2353s0 2 -2 2h-24.2353s-2 0 -2 -2v-24.2353s0 -2 2 -2" />
        <rect ref="bigSquare" class="hidden" x="14" y="14" width="40" height="40" rx="2" fill="#FFE34E" />
      <rect :class="colorTheme ? colorTheme : 'white'" ref="circle" class="hidden" x="14" y="14" width="40" height="40" rx="20" />
    </svg>
  </div>
</template>
<script>
import gsap from 'gsap';
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
gsap.registerPlugin(MorphSVGPlugin);

export default {
  props: ["initAnimation", "colorTheme", "size"],
  methods: {
    animate() {
      if (!this.$refs.first) return // development break fix
      const tl = gsap.timeline({ repeat: -1, yoyo: true, ease: 'linear', repeatDelay: 0.5 });
      tl.addLabel('start')

      const squarePath = MorphSVGPlugin.convertToPath(this.$refs.bigSquare);
      const circlePath = MorphSVGPlugin.convertToPath(this.$refs.circle);

      tl.to([this.$refs.first, this.$refs.second, this.$refs.third, this.$refs.forth], {duration: 0.8, morphSVG: squarePath})
      tl.to([this.$refs.first, this.$refs.second, this.$refs.third, this.$refs.forth], {duration: 0.4,morphSVG: circlePath, fill: this.colorTheme == 'blue' ? '#679ecb' : 'white' })

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
