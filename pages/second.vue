<template>
  <div>
  second page
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
