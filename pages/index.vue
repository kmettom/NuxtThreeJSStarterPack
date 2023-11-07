<template>
  <div class="page-container">
    <NuxtLink aria-label="about" to="/about">
      About
    </NuxtLink>
    <div class="section">
      <h1 class="headline">Showcase</h1>
      <p class="description">
        This is a showcase of examples and usage of NuxtThreeJSStarterPack developed by <a href="https://tomaskmet.com/"
                                                                                           target="_blank" class="">tomaskmet.com</a>
        <br/>
        <br/>
        The Starter pack is build for developers who wish to use Nuxt framework to build smooth creative websites with
        integrated Smooth scroll and WebGl.
        <br/>
        <br/>
        Feel free to download and use from <a target="_blank"  href="https://github.com/kmettom/NuxtThreeJSStarterPack">GitHub
        repository</a>
      </p>
    </div>

    <div class="section">
      <h2>WebGl image, hover trigger and scroll shader</h2>
      <p>Specify which predefined shader and use it as a property on CanvasImage component. Easily trigger
        hover effect from any element by a property on the CanvasImage component</p>
      <p>
        &lt;CanvasImage :meshId="'ex1a'" :shader="'example1'" :imageHover="hoverImage1" :srcLink="'imgs/01s.jpg'"&gt;
        <br/>
        &lt;CanvasImage :meshId="'ex1b'" :shader="'example2'" :imageHover="hoverImage2" :srcLink="'imgs/02l.jpg'"&gt;
      </p>
      <div class="image-hover-block inline-example"
           @mouseover="hoverImage1 = true"
           @mouseleave="hoverImage1 = false"
      >
        <h3>Shader 1</h3>
        <CanvasImage :meshId="'ex1a'" :shader="'example1'" :imageHover="hoverImage1" :srcLink="'imgs/01s.jpg'"/>
      </div>

      <div class="image-hover-block inline-example img-l-wrapper"
           @mouseover="hoverImage2 = true"
           @mouseleave="hoverImage2 = false"
      >
        <h3>Shader 2</h3>
        <CanvasImage :meshId="'ex1b'" :shader="'example2'" :imageHover="hoverImage2" :srcLink="'imgs/02l.jpg'"/>
      </div>

    </div>

    <div class="section">
      <h2>Show on scroll elements by directive</h2>
      <p>v-scrollActive directive will animate in and out the element it is used on. Define the percentage of active screen.</p>
      <p> &lt;div v-scrollActive="0.85"&gt; </p>
      <div class="inline-example from-left img-l-wrapper" v-scrollActive:examplecallback="0.85">
        <h3>Active 85% of screen</h3>
        <CanvasImage :meshId="'ex2'" :shader="'example2'"  :srcLink="'imgs/03l.jpg'"/>
      </div>
      <div class="inline-example from-right" v-scrollActive="0.55">
        <h3>Active 55% of screen</h3>
        <CanvasImage :meshId="'ex3'" :shader="'example2'"  :srcLink="'imgs/04s.jpg'"/>
      </div>
    </div>

    <div>
      <p>Define the scroll to animate the element only from top and/or only once</p>
      <p> &lt;div v-scrollActive:top:once="0.8"&gt; </p>
      <div class="inline-example from-top img-l-wrapper" v-scrollActive:top:once="0.8">
        <h3>Active 80% of screen, only from top and once</h3>
        <CanvasImage :meshId="'ex4a'" :srcLink="'imgs/05l.jpg'"/>
      </div>
      <div class="inline-example from-bottom " v-scrollActive:top:once="0.8">
        <h3>Active 80% of screen, only from top and once</h3>
        <CanvasImage :meshId="'ex4b'" :srcLink="'imgs/07s.jpg'"/>
      </div>
    </div>

<!--    v-scrollSpeed="0.2"-->
    <div class="section" id="fixedElContainer">
      <h2>Set scroll speed of elements by directive</h2>
      <p>v-scrollspeed directive can be used to scroll the element faster or slower. Use v-scrollSpeed directive to create fixed elements within parents height</p>
      <p>
        &lt;div v-scrollSpeed:fixed="'fixedElContainer'"&gt;
      <br/>
        &lt;div v-scrollSpeed:fixed="'fixedElContainer'"&gt;
      </p>
      <div class="inline-example from-top" v-scrollSpeed:fixed="'fixedElContainer'" >
        <div>
          <h3>Fixed element</h3>
          <CanvasImage :meshId="'ex6'" :srcLink="'imgs/03s.jpg'"/>
        </div>
      </div>
      <div class="inline-example from-bottom " v-scrollSpeed="-0.1" >
        <h3>Scroll speed -10%</h3>
        <CanvasImage :meshId="'ex5a'" :srcLink="'imgs/01s.jpg'"/>
      </div>
      <div class="inline-example from-bottom " v-scrollSpeed="-0.2" >
        <h3>Scroll speed -20%</h3>
        <CanvasImage :meshId="'ex5b'" :srcLink="'imgs/02s.jpg'"/>
      </div>
    </div>


    <div class="padding-bottom">

    </div>


  </div>

</template>
<script setup>
import {onMounted, watch} from "vue";

const hoverImage1 = ref(false);
const hoverImage2 = ref(false);

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

<style lang="scss">

.headline {
  margin-bottom: 50px;
}

.image-hover-block {
  display: inline-block;
  cursor: pointer;
}

.inline-example {
  vertical-align: top;
  display: inline-block;
  padding-right: 20px;
}

img {
  max-width: 100%;
  height: auto;
  position: relative;

}

.img-l-wrapper {
  position: relative;
  width: 550px;
  max-width: 100%;
}
.img-xl-wrapper {
  position: relative;
  width: 750px;
  max-width: 100%;
}

.padding-bottom {
  padding-bottom: 1500px;
}

#fixedElContainer{
  height: 1250px;
  position: relative;
  &:before{
    left: -20px;
    content: '';
    position: absolute;
    height: 100%;
    width: 2px;
    background: #1B1818;
  }
}

</style>
