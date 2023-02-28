<template>
  <section class="">

    <div class="examples-wrapper">

      <div class="example"  >
        <h2>Example 1</h2>
        <CanvasImage :typeOfMesh="'example1'" :srcLink="'img/01.jpg'" />
      </div>

      <div class="example" data-scroll-speed="0.1" >
        <h2>Example 2</h2>
        <CanvasImage :typeOfMesh="'example2'" :srcLink="'img/02.jpg'" />
      </div>

      <div class="example" data-scroll-active="0.8" data-scroll-speed="0" >
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

      <div class="example"  >
        <h2>Example 6</h2>
        <CanvasImage :typeOfMesh="'example1'" :srcLink="'img/01.jpg'" />
      </div>

      <div class="example"  >
        <h2>Example 7</h2>
        <CanvasImage :typeOfMesh="'example1'" :srcLink="'img/01.jpg'" />
      </div>

      <div class="example"  >
        <h2>Example 8</h2>
        <CanvasImage :typeOfMesh="'example2'" :srcLink="'img/02.jpg'" />
      </div>

      <div class="example" data-scroll-active="0.8" >
        <h2>Example 9</h2>
        <CanvasImage :srcLink="'img/03.jpg'" />
      </div>

    </div>

  </section>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {

  },
  mounted() {

    console.log(this.$nuxt);

    // this.$nuxt.$once('active-scroll', (e) => {
    //   console.log(e);
    // });

  },

}
</script>

<style lang="scss" >

$examplesize: 450px;

.examples-wrapper{
  margin-left: 50px;
  padding-bottom: 800px;
}
.example{
  //margin: 0 20px;
  &:nth-child(3n + 2){
    margin-left: $examplesize;
  }
  &:nth-child(3n){
    margin-left: calc(#{$examplesize} * 2);
  }
  img{
    max-width: $examplesize;
  }
}


</style>