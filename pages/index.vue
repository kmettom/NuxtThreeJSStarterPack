<template>
  <div class="page-container">
    <NuxtLink aria-label="Go To About" to="/about">
      Go To About
    </NuxtLink>
    <h1 class="headline">
      <CanvasText :meshId="'headline-1'" :shader="'example1'">
        Showcase
      </CanvasText>
    </h1>

    <div class="section">
      <h2>Easily add images to Scene Mesh</h2>
      <p>Use CanvasImage component to add images to Scene as Mesh, specify which predefined shader you want to use and
        add a trigger variable.</p>
      <div class="image-hover-block inline-example img-l-wrapper"
           @mouseover="hoverImage1 = true"
           @mouseleave="hoverImage1 = false"
      >
        <h3>Shader 1</h3>
        <CanvasImage :width="'550'" :height="'365'" :meshId="'ex1a'" :shader="'example1'" :imageHover="hoverImage1" :srcLink="'imgs/01l.webp'"/>
      </div>

      <div class="image-hover-block inline-example img-l-wrapper"
           @mouseover="hoverImage2 = true"
           @mouseleave="hoverImage2 = false"
      >
        <h3>Shader 2</h3>
        <CanvasImage :width="'550'" :height="'365'" :meshId="'ex1b'" :shader="'example2'" :imageHover="hoverImage2" :srcLink="'imgs/02l.webp'"/>
      </div>

    </div>

    <div class="section">
      <h2>Set scroll speed of elements by directive</h2>
      <p>v-scrollspeed directive can be used to scroll the element faster or slower. Use v-scrollSpeed directive to
        create fixed elements within parents height</p>
      <div class="section" id="fixedElContainer">

        <div class="inline-example from-top" v-scrollSpeed:fixed="'fixedElContainer'">
          <div>
            <h3>Fixed element</h3>
            <CanvasImage :width="'375'" :height="'250'" :meshId="'ex6'" :srcLink="'imgs/03s.webp'"/>
          </div>
        </div>
        <div class="inline-example from-bottom " v-scrollSpeed="-0.1">
          <h3>Scroll speed -10%</h3>
          <CanvasImage :width="'375'" :height="'250'"  :meshId="'ex5a'" :srcLink="'imgs/01s.webp'"/>
        </div>
        <div class="inline-example from-bottom " v-scrollSpeed="-0.15">
          <h3>Scroll speed -15%</h3>
          <CanvasImage :width="'375'" :height="'250'"   :meshId="'ex5b'" :srcLink="'imgs/02s.webp'"/>
        </div>
      </div>

    </div>

    <div class="section">
      <h2>Show on scroll elements by directive</h2>
      <p>v-scrollActive directive will animate in and out the element it is used on. Define the percentage of active
        screen.</p>
      <div class="inline-example from-left img-l-wrapper" v-scrollActive:examplecallback="0.85">
        <h3>Active 85% of screen</h3>
        <CanvasImage :width="'550'" :height="'365'" :meshId="'ex2a'" :shader="'example2'" :srcLink="'imgs/03l.webp'"/>
      </div>
      <div class="inline-example from-right img-l-wrapper" v-scrollActive="0.5">
        <h3>Active 50% of screen</h3>
        <CanvasImage :width="'550'" :height="'365'" :meshId="'ex2c'" :shader="'example1'" :srcLink="'imgs/05l.webp'"/>
      </div>
    </div>

    <div class="section">
      <p>Define the scroll to animate the element only from top and/or only once</p>
      <div class="inline-example from-top img-l-wrapper" v-scrollActive:top:once="0.7">
        <h3>Active 70% of screen, only from top and once</h3>
        <CanvasImage :width="'550'" :height="'365'" :meshId="'ex4a'" :shader="'example1'" :srcLink="'imgs/05l.webp'"/>
      </div>
      <div class="inline-example from-bottom " v-scrollActive:top:once="0.7">
        <h3>Active 70% of screen, only from top and once</h3>
        <CanvasImage :width="'375'" :height="'250'"  :meshId="'ex4b'" :srcLink="'imgs/07s.webp'"/>
      </div>
    </div>

    <div class="">
      <div class="scroll-top-btn" @click="Canvas.scroll.render(0, true)">Scroll To Top</div>
    </div>

  </div>

</template>
<script setup>
import {onMounted, watch} from "vue";

useSeoMeta({
  title: 'Showcase Nuxt ThreeJS Starter Pack - Tomas Kmet - Web developer',
  ogTitle: 'Showcase Nuxt ThreeJS Starter Pack - Tomas Kmet - Web developer',
  description: 'Showcase Nuxt ThreeJS Starter Pack - Tomas Kmet - Web developer',
  ogDescription: 'Showcase Nuxt ThreeJS Starter Pack - Tomas Kmet - Web developer',
})

const hoverImage1 = ref(false);
const hoverImage2 = ref(false);

const props = defineProps({
  pageActive: Boolean
});

const pageAniIn = () => {
  console.log('Example method - animate page transition')
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

<style lang="scss">

@font-face {
  font-family: 'PP Formula Black';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url('public/font/PPFormula-CondensedBlack.ttf') format('truetype');
}

.inline-example {
  vertical-align: top;
  display: inline-block;
  padding-right: 20px;
}

#fixedElContainer {
  height: 1250px;
  position: relative;
  margin-top: 75px;

  &:before {
    left: -20px;
    content: '';
    position: absolute;
    height: 100%;
    width: 2px;
    background: #1B1818;
  }
}

.scroll-top-btn{
  text-align: center;
  margin-top: 70px;
  cursor: pointer;
  padding: 35px 0px;
  text-decoration: underline;
}

</style>
