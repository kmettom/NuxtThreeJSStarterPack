<template>
  <section class="">

    <h1>Projects</h1>

    <div class="projects-wrapper">

      <div class="project"  >
        <h2>Project 1</h2>
        <p>Project description</p>
        <CanvasImage class="project-img" :typeOfMesh="'project'" :srcLink="'img/screen_2.png'" />
      </div>

      <div class="project"  >
        <h2>Project 2</h2>
        <p>Project description</p>
        <CanvasImage class="project-img" :typeOfMesh="'project'" :srcLink="'img/screen_2.png'" />
      </div>

      <div class="project" data-scroll-active="0.8" >
        <h2>Project 3</h2>
        <p>Project description</p>
        <CanvasImage class="project-img" :typeOfMesh="'project'" :srcLink="'img/screen_2.png'" />
      </div>

      <div class="project" data-scroll-active="" >
        <h2>Project 4</h2>
        <p>Project description</p>
        <CanvasImage class="project-img" :typeOfMesh="'project'" :srcLink="'img/screen_2.png'" />
      </div>

    </div>

  </section>
</template>

<script>
export default {
  // components: {
  //   image: () => import('~/components/common/Image.vue')
  // },
  // page properties go here
  //data
  data() {
    return {
      // canvas: null,
    }
  },
  methods: {

  },
  mounted() {

  },

}
</script>

<style lang="scss" >

.project{
  max-width: 250px;
  .project-img{
    max-width: 100%;
  }
}


</style>