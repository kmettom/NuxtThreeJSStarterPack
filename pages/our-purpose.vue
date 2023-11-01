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
<!--        <h3 class="h3-regular" v-scrollActive:top:once:header="0.85">-->
<!--          <span class="ani-section-title">-->
<!--          {{ data.section1.title }}-->
<!--          </span>-->
<!--        </h3>-->
        <p class="p-body1" v-scrollActive:top:once:content="0.85" >
          <span class="ani-content-in">
          {{ data.section0.text }}
          </span>
        </p>
      </div>
      <div class="section">
        <h3 class="h3-regular" v-scrollActive:top:once:header="0.85">
          <span class="ani-section-title">
          {{ data.section1.title }}
          </span>
        </h3>
        <p class="p-body1" v-scrollActive:top:once:content="0.85" >
          <span class="ani-content-in">
          {{ data.section1.text }}
          </span>
        </p>
      </div>
      <div class="section">
        <h3 class="h3-regular" v-scrollActive:top:once:header="0.85">
          <span class="ani-section-title">
          {{ data.section2.title }}
          </span>
        </h3>
        <p class="p-body1" v-scrollActive:top:once:content="0.85" >
          <span class="ani-content-in">
          {{ data.section2.text }}
          </span>
        </p>
      </div>
      <div class="section">
        <h3 class="h3-regular" v-scrollActive:top:once:header="0.85">
          <span class="ani-section-title">
          {{ data.section3.title }}
          </span>
        </h3>
        <p class="p-body1" v-scrollActive:top:once:content="0.85" >
          <span class="ani-content-in">
          {{ data.section3.text }}
          </span>
        </p>
      </div>
      <div class="section">
        <h3 class="h3-regular" v-scrollActive:top:once:header="0.85">
          <span class="ani-section-title">
          {{ data.section4.title }}
          </span>
        </h3>
        <p class="p-body1" v-scrollActive:top:once:content="0.85" >
          <span class="ani-content-in">
          {{ data.section4.text }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { gsap } from "gsap";
const { data } = await useAsyncData('our-purpose', () => queryContent('/our-purpose').findOne())

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
@import "assets/scss/_media_queries";

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
