<template>
  <div class="">

    <NuxtLink aria-label="" to="/">
      home page
    </NuxtLink>

    <NuxtLink aria-label="" to="/second">
      second page
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
  top: 0px;
  left: 0px;
}

</style>
