<template>
<div>
  home page
<!--  <SectionExamples />-->

<!--  <CanvasImage :imageHover="imageHover" :shader="shader" :srcLink="imgLink" />-->

<!--  <CanvasImage :meshId="'estate'" :imageHover="focusImageShow['estate']" :srcLink="img_estate" />-->


  <SectionExampleBlock
      v-scrollSpeed="0.2"
      :text="'Fast scroll speed | shader 1'"
      :imgLink="'imgs/01.jpg'"
      :shader="'example2'"
  />

  <SectionExampleBlock
      v-scrollActive="0.5"
      :text="'Slow scroll speed | shader default'"
      :imgLink="'imgs/03.jpg'"
  />

  <SectionExampleBlock
      v-scrollSpeed="0.2"
      :text="'Slow scroll speed | shader default'"
      :imgLink="'imgs/04.jpg'"
  />

  <SectionExampleBlock
      v-scrollSpeed="0.4"
      :text="'Faster scroll speed | shader 1'"
      :imgLink="'imgs/05.jpg'"
      :shader="'example1'"
  />



</div>

</template>
<script setup>
import { onMounted, watch } from "vue";

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

const pageAniIn = () => {
  console.log('animate page in')
};

onMounted(() => {
  if (props.pageActive) {
    pageAniIn();
  }
});

watch(
  () => props.pageActive,
  (newValue, oldValue) => {
    if (newValue) {
      pageAniIn();
    }
  }
);


</script>

<style lang="scss" scoped>

</style>
