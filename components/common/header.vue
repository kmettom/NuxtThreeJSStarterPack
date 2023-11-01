<template>
  <h2 class="section-title" :class=" { 'light' : theme === 'light' , 'dark' : theme === 'dark' , 'break-line' : breakLine }" v-scrollActive:top:once:header="0.85">
    <span  class="section-title-txt">
        <span class="section-title-wrapper">
          <span class="ani-section-title h2-regular" > {{ text1 }}</span>
        </span>
        <span class="section-title-wrapper txt-2-wrapper ">
          <span class="ani-section-title h2-italic">
            <span class="ovp-break-line" v-if="!breakLine" >&nbsp;</span>
            {{ text2 }}
          </span>
        </span>
      </span>
  </h2>
</template>
<script setup>

const props = defineProps({
  text1: String,
  text2: String,
  breakLine: Boolean,
  theme: String,
});

</script>

<style lang="scss" scoped>
@import "assets/scss/_media_queries";

.section-title-wrapper{
  overflow: hidden;
  display: inline-block;
  margin-top: 0%
}
.section-title-txt{
  position: relative;
  display: block;
}
.break-line{
  .section-title-wrapper{
    display: block;
  }
  .txt-2-wrapper{
    margin-top: -2%;
  }
  .h2-italic{
    position: relative;
    display: inline-block;
    top: 0px;
  }
}

.h2-italic,
.h2-regular {
  @include respond-width($w-s) {
    font-size: 40px;
  }
}

.h2-italic{
  position: relative;
  display: inline-block;
  top: 5px;
}

.dark{
  .h2-italic {
    color: var(--ovp-secondary-yellow);
  }
}
.light {
  .h2-italic {
    color: var(--ovp-primary-blue-01);
  }
}

</style>