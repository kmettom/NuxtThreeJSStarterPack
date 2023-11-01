<template>
  <div>
    <h1 class="header" v-scrollActive:navigationbgdark="1">
      <div class="word-wrapper">
        <div class="h1-regular word">{{ data.header.txt1 }}</div>
      </div>
      <div class="word-wrapper">
        <div class="h1-italic word">{{ data.header.txt2 }}</div>
      </div>
    </h1>

    <div class="main">
      <div class="section">
        <div class="p-body1" >
          Last Updated: {{data.date}} <br/> <br/>
        </div>
        <div class="p-body1" v-html="data.content"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { gsap } from "gsap";
const { data } = await useAsyncData('privacy-policy', () => queryContent('/privacy-policy').findOne())

useSeoMeta({
  title: data._rawValue?.seo.title,
  ogTitle: data._rawValue?.seo.ogTitle,
  description: data._rawValue?.seo.description,
  ogDescription: data._rawValue?.seo.ogDescription,
  ogImage: data._rawValue?.seo.ogImage,
  twitterCard: data._rawValue?.seo.twitterCard,
})

const props = defineProps({
  pageActive: Boolean
});

const animate = () => {
  gsap.to(".header  .word", {
    y: 0,
    duration: 0.5,
    stagger: 0.15,
    delay: 0.75,
  });
};

const headerAniIn = () => {
  animate();
};

onMounted(() => {
  if (props.pageActive) {
    headerAniIn();
  }
});

watch(
  () => props.pageActive,
  (newValue, oldValue) => {
    if (newValue) {
      headerAniIn();
    }
  }
);

</script>
<style lang="scss" scoped>
@import "assets/scss/_typography.scss";

.header {
  @include page-header;
  @include page-header-w-s;
}

.main {
  @include page-main(840px);
  @include page-main-sm;

  .section .h3-regular {
    color: var(--blue-primary);
  }
}
</style>
