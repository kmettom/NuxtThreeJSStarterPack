<template>
  <div class="examples">

    <h1>Showcase</h1>

    <ul>
      <li>web gl image</li>
      <li>web gl hover</li>
      <li>scroll active</li>
      <li>scroll active - top</li>
      <li>scroll active - once</li>
      <li>scroll speed</li>
      <li>responsive</li>
    </ul>

    <div class="" >

      <CanvasImage :meshId="'ex3'" :shader="'example1'" :srcLink="'imgs/01.jpg'" />

    </div>

    <div class="" v-scrollActive="0.8">

      <CanvasImage :meshId="'ex5'" :shader="'example1'" :srcLink="'imgs/02.jpg'" />

    </div>

    <div class="padding-bottom">

    </div>


  </div>

</template>
<script setup>
import { onMounted, watch } from "vue";

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

<style lang="scss" >
.padding-bottom{
  padding-bottom: 1500px;
}

</style>
