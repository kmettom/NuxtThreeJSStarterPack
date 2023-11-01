<template>
  <div>
  second page
  </div>
</template>
<script setup>
import { onMounted, watch } from "vue";
// const { data } =  await useAsyncData('services', () => queryContent('/services').findOne())

// useSeoMeta({
//   title: data._rawValue?.seo.title,
//   ogTitle: data._rawValue?.seo.ogTitle,
//   description: data._rawValue?.seo.description,
//   ogDescription: data._rawValue?.seo.ogDescription,
//   ogImage: data._rawValue?.seo.ogImage,
//   twitterCard: data._rawValue?.seo.twitterCard,
// })

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
