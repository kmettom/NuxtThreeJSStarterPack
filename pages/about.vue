<template>
  <div class="page-container">
    <NuxtLink aria-label="showcase" to="/">
      Showcase
    </NuxtLink>
    <h1 class="headline">About</h1>
    <div>
      <p>
        Author: <a target="_blank" href="https://tomaskmet.com">Tomas Kmet</a>
        <br/>
        GitHub: <a target="_blank"  href="https://github.com/kmettom/NuxtThreeJSStarterPack" >NuxtThreeJSStarterPack</a>
      </p>
    </div>
  </div>
</template>
<script setup>
import { onMounted, watch } from "vue";

const props = defineProps({
  pageActive: Boolean
});

const pageAnimateIn = () => {
};

onMounted(() => {
  if (props.pageActive) {
    pageAnimateIn();
  }
});

watch(
  () => props.pageActive,
  (newValue, oldValue) => {
    if (newValue) {
      pageAnimateIn();
    }
  }
);


</script>
<style lang="scss" scoped>

</style>
