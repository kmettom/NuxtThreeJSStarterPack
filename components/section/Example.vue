<template>
  <section class="">

    <h1>Projects</h1>

    <div class="examples-wrapper">

      <div class="example"  >
        <h2>Example 1</h2>
        <CanvasImage :typeOfMesh="'example1'" :srcLink="'img/01.jpg'" />
      </div>

      <div class="example"  >
        <h2>Example 2</h2>
        <CanvasImage :typeOfMesh="'example2'" :srcLink="'img/02.jpg'" />
      </div>

      <div class="example" data-scroll-active="0.8" >
        <h2>Example 3</h2>
        <CanvasImage :srcLink="'img/03.jpg'" />
      </div>

      <div class="example" data-scroll-active="" >
        <h2>Example 4</h2>
        <CanvasImage :typeOfMesh="'example1'" :srcLink="'img/04.jpg'" />
      </div>

      <div class="example" data-scroll-active="" >
        <h2>Example 5</h2>
        <CanvasImage :typeOfMesh="'example2'" :srcLink="'img/05.jpg'" />
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

.example{
  max-width: 350px;
  img{
    max-width: 100%;
  }
}


</style>