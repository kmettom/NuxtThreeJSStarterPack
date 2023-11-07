<template>
  <div class="page-container">
    <NuxtLink aria-label="about" to="/about">
      Go To About
    </NuxtLink>
    <h1 class="headline">Showcase</h1>

    <div class="section">
      <h2>Easily add images to Scene Mesh</h2>
      <p>Use CanvasImage component to add images to Scene as Mesh, specify which predefined shader you want to use and
        add a trigger variable.</p>
      <div class="image-hover-block inline-example img-l-wrapper"
           @mouseover="hoverImage1 = true"
           @mouseleave="hoverImage1 = false"
      >
        <h3>Shader 1</h3>
        <CanvasImage :meshId="'ex1a'" :shader="'example1'" :imageHover="hoverImage1" :srcLink="'imgs/01l.jpg'"/>
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
      <h2>Set scroll speed of elements by directive</h2>
      <p>v-scrollspeed directive can be used to scroll the element faster or slower. Use v-scrollSpeed directive to
        create fixed elements within parents height</p>
      <div class="section" id="fixedElContainer">

        <div class="inline-example from-top" v-scrollSpeed:fixed="'fixedElContainer'">
          <div>
            <h3>Fixed element</h3>
            <CanvasImage :meshId="'ex6'" :srcLink="'imgs/03s.jpg'"/>
          </div>
        </div>
        <div class="inline-example from-bottom " v-scrollSpeed="-0.1">
          <h3>Scroll speed -10%</h3>
          <CanvasImage :meshId="'ex5a'" :srcLink="'imgs/01s.jpg'"/>
        </div>
        <div class="inline-example from-bottom " v-scrollSpeed="-0.15">
          <h3>Scroll speed -15%</h3>
          <CanvasImage :meshId="'ex5b'" :srcLink="'imgs/02s.jpg'"/>
        </div>
      </div>

    </div>

    <div class="section">
      <h2>Show on scroll elements by directive</h2>
      <p>v-scrollActive directive will animate in and out the element it is used on. Define the percentage of active
        screen.</p>
      <div class="inline-example from-left img-l-wrapper" v-scrollActive:examplecallback="0.8">
        <h3>Active 80% of screen</h3>
        <CanvasImage :meshId="'ex2a'" :shader="'example2'" :srcLink="'imgs/03l.jpg'"/>
      </div>
      <div class="inline-example from-right img-l-wrapper" v-scrollActive="0.45">
        <h3>Active 45% of screen</h3>
        <CanvasImage :meshId="'ex2c'" :shader="'example1'" :srcLink="'imgs/05l.jpg'"/>
      </div>
    </div>

    <div>
      <p>Define the scroll to animate the element only from top and/or only once</p>
      <div class="inline-example from-top img-l-wrapper" v-scrollActive:top:once="0.7">
        <h3>Active 70% of screen, only from top and once</h3>
        <CanvasImage :meshId="'ex4a'" :shader="'example1'" :srcLink="'imgs/05l.jpg'"/>
      </div>
      <div class="inline-example from-bottom " v-scrollActive:top:once="0.7">
        <h3>Active 70% of screen, only from top and once</h3>
        <CanvasImage :meshId="'ex4b'" :srcLink="'imgs/07s.jpg'"/>
      </div>
    </div>

    <div class="section">
      <h2>Lets mix it up</h2>

      <div class="inline-example" v-scrollActive="0.8">
        <div v-scrollSpeed="-0.05">
          <CanvasImage :meshId="'exmix1'" :shader="'example1'" :srcLink="'imgs/01s.jpg'"/>
        </div>
      </div>
      <div class="inline-example" v-scrollActive="0.5">
        <div v-scrollSpeed="0">
          <CanvasImage :meshId="'exmix2'" :srcLink="'imgs/02s.jpg'"/>
        </div>
      </div>
      <div class="inline-example" v-scrollActive:once="0.8">
        <div v-scrollSpeed="-0.1">
          <CanvasImage :meshId="'exmix3'" :shader="'example2'" :srcLink="'imgs/03s.jpg'"/>
        </div>
      </div>


      <div class="inline-example" v-scrollActive="0.8">
        <div v-scrollSpeed="0.1">
          <CanvasImage :meshId="'exmix4'" :shader="'example1'" :srcLink="'imgs/04s.jpg'"/>
        </div>
      </div>
      <div class="inline-example" v-scrollActive="0.5">
        <div v-scrollSpeed="0.05">
          <CanvasImage :meshId="'exmix5'" :srcLink="'imgs/05s.jpg'"/>
        </div>
      </div>
      <div class="inline-example" v-scrollActive:once="0.8">
        <div v-scrollSpeed="-0.05">
          <CanvasImage :meshId="'exmix6'" :shader="'example2'" :srcLink="'imgs/07s.jpg'"/>
        </div>
      </div>


      <!--      <CanvasImage v-scrollActive="0.7"class="inline-example" :meshId="'exmix2'" :shader="'example2'" :srcLink="'imgs/02s.jpg'"/>-->
      <!--      <CanvasImage v-scrollActive="0.7" v-scrollSpeed="-0.05" class="inline-example" :meshId="'exmix3'" :srcLink="'imgs/03s.jpg'"/>-->
      <!--      <CanvasImage v-scrollActive="0.7" v-scrollSpeed="0.1" class="inline-example" :meshId="'exmix4'" :shader="'example1'" :srcLink="'imgs/04s.jpg'"/>-->
      <!--      <CanvasImage v-scrollActive="0.7" v-scrollSpeed="0.15" class="inline-example" :meshId="'exmix5'" :shader="'example2'" :srcLink="'imgs/05s.jpg'"/>-->
      <!--      <CanvasImage v-scrollActive="0.7" v-scrollSpeed="-0.05" class="inline-example" :meshId="'exmix6'" :srcLink="'imgs/06s.jpg'"/>-->
      <!--      <CanvasImage v-scrollActive="0.7" v-scrollSpeed="0" class="inline-example" :meshId="'exmix7'" :shader="'example1'" :srcLink="'imgs/07s.jpg'"/>-->
      <!--      <CanvasImage v-scrollActive="0.7" v-scrollSpeed="0.2" class="inline-example" :meshId="'exmix8'" :shader="'example2'" :srcLink="'imgs/01s.jpg'"/>-->

      <!--      <div-->
      <!--          v-scrollActive="0.7"-->
      <!--          v-scrollSpeed="0.2"-->
      <!--          :text="'Fast scroll speed | shader 1'"-->
      <!--      >-->

      <!--        <p>Fast scroll speed | shader 1</p>-->
      <!--        <CanvasImage  class="inline-example" :meshId="'exmix1'" :shader="'example1'" :srcLink="'imgs/01s.jpg'"/>-->

      <!--        </div>-->

      <!--      <SectionExampleBlock-->
      <!--          v-scrollSpeed="0"-->
      <!--          :text="'Normal scroll speed | shader 2'"-->
      <!--          :imgLink="'img/02.jpg'"-->
      <!--          :shader="'example2'"-->
      <!--      />-->

      <!--      <SectionExampleBlock-->
      <!--          v-scrollActive="0.5"-->
      <!--          :text="'Slow scroll speed | shader default'"-->
      <!--          :imgLink="'img/03.jpg'"-->
      <!--      />-->

      <!--      <SectionExampleBlock-->
      <!--          v-scrollSpeed="-0.2"-->
      <!--          :text="'Slow scroll speed | shader default'"-->
      <!--          :imgLink="'img/04.jpg'"-->
      <!--      />-->

      <!--      <SectionExampleBlock-->
      <!--          v-scrollSpeed="0.4"-->
      <!--          :text="'Faster scroll speed | shader 1'"-->
      <!--          :imgLink="'img/05.jpg'"-->
      <!--          :shader="'example1'"-->
      <!--      />-->

      <!--      <SectionExampleBlock-->
      <!--          v-scrollSpeed="0"-->
      <!--          :text="'Normal scroll speed | shader 2'"-->
      <!--          :imgLink="'img/01.jpg'"-->
      <!--          :shader="'example2'"-->
      <!--      />-->

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

#fixedElContainer {
  height: 850px;
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

</style>
