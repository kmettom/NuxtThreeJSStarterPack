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
      <div class="form-wrapper">
        <div class="client-hub-form">
            <h3 class="h3-regular">{{ data.form.headline }}</h3>
            <p class="p-body1" v-html="data.form.text" ></p>
          <PillButton class="header-button"
                      :primaryText='data.form.btn'
                      :secondaryText="data.form.btnHover"
                      color="var(--blue-primary)"
                      bgColor="var(--white)"
                      hoverColor="var(--blue-secondary)"
                      hoverBgColor="var(--yellow)"
                      :onClick="redirectToContact"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { gsap } from "gsap";
import { useRouter } from 'vue-router';
import PillButton from "~/components/common/pillButton.vue";
const { data } = await useAsyncData('client-hub', () => queryContent('/client-hub').findOne())

useSeoMeta({
  title: data._rawValue?.seo.title,
  ogTitle: data._rawValue?.seo.ogTitle,
  description: data._rawValue?.seo.description,
  ogDescription: data._rawValue?.seo.ogDescription,
  ogImage: data._rawValue?.seo.ogImage,
  twitterCard: data._rawValue?.seo.twitterCard,
})

const router = useRouter();

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

const redirectToContact = () => {
  return router.push('/contact');
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
  position: relative;
  padding-bottom: 125px;
  max-width: none;
  @include respond-width($w-m-s){
    padding-bottom: 0px;
  }

  .section .h3-regular {
    color: var(--blue-primary);
  }
}

.form-wrapper{
  top: -275%;
  right: 10%;
  position: absolute;
  background: var(--white);
  border-radius: 4px;
  background: var(--ovp-neutral-white, #FFF);
  box-shadow: 0px 0px 50px 0px rgba(59, 66, 247, 0.20);
  @include respond-width($w-m){
    right: 5%;
    //top: 25%;
  }
  @include respond-width($w-m-s){
    position: relative;
    top: initial;
    right: initial;
    margin: 35px auto 0px;
  }
  .client-hub-form{
    max-width: 316px;
    padding: 100px;
    @include respond-width($w-m){
      padding: 55px;
      max-width: 256px;
    }
    @include respond-width($w-m-s){
      width: 90%;
      padding: 20px;
      max-width: 316px;
    }
  }
  .h3-regular{
    padding: 0px;
    margin: 0px;
  }
}

</style>
