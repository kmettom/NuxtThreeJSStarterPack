<template>
  <div class="">
    <NuxtLink aria-label="showcase" to="/">
      Showcase
    </NuxtLink>
    <br/>
    <NuxtLink aria-label="about" to="/about">
      About
    </NuxtLink>
  </div>
</template>
<script setup>
import { onMounted } from "vue";

const props = defineProps({
  pageActive: Boolean
});

onMounted(() => {
});

</script>
<style lang="scss">

.ovp-navigation {
  position: fixed;
  z-index: 10;
  display: block;
  top: 0px;
  left: 0px;
}

</style>
