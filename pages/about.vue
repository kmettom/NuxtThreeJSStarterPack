<template>
  <div class="page-container">
    <NuxtLink aria-label="showcase" to="/">
      Go To Showcase
    </NuxtLink>
    <h1 class="headline">About</h1>
    <p class="">
      This is a showcase of examples and usage of NuxtThreeJSStarterPack, Nuxt framework with implemented ThreeJS library.
    </p>
    <div class="image-hover-block img-l-wrapper"
         @mouseover="hoverImage = true"
         @mouseleave="hoverImage = false"
    >
      <CanvasImage :width="'550'" :height="'365'" :imageHover="hoverImage" :meshId="'about'" :shader="'example1'" :srcLink="'imgs/01l.webp'"/>
    </div>
    <div class="">
      <p>
        Developed by: <a target="_blank" href="https://tomaskmet.com">Tomas Kmet</a>
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

const hoverImage = ref(false);

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
