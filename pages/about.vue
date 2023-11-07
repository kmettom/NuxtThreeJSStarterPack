<template>
  <div class="page-container">
    <NuxtLink aria-label="showcase" to="/">
      Showcase
    </NuxtLink>
    <h1 class="headline">Showcase</h1>
    <ul>
      <li>Author</li>
      <li>Performance</li>
      <li>Functionality</li>
    </ul>
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
