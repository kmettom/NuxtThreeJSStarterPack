<template>
  <section class="examples">

    <SectionExampleBlock
        data-scroll-speed="-0.4"
        :header="'Example 1'"
        :imgLink="'img/01.jpg'"
        :shader="'example1'"
    />

    <SectionExampleBlock
        data-scroll-speed="0.2"
        :header="'Example 2'"
        :imgLink="'img/02.jpg'"
        :shader="'example2'"
    />

    <SectionExampleBlock
        data-scroll-speed="0.4"
        data-scroll-active="0.8"
        :header="'Example 3'"
        :imgLink="'img/03.jpg'"
        :shader="'example1'"
    />

    <SectionExampleBlock
        data-scroll-speed="0.4"
        :header="'Example 4'"
        :imgLink="'img/04.jpg'"
        :shader="'example1'"
    />

    <SectionExampleBlock
        data-scroll-speed="0.4"
        :header="'Example 5'"
        :imgLink="'img/05.jpg'"
        :shader="'example1'"
    />

    <SectionExampleBlock
        data-scroll-speed="0.4"
        :header="'Example 6'"
        :imgLink="'img/01.jpg'"
        :shader="'example1'"
    />

  </section>
</template>

<script>

import gsap from 'gsap';
export default {
  data() {
    return {
    }
  },
  methods: {
    testEmit() {
      console.log('test emit');
    },
  },
  mounted() {

  },

}
</script>

<style lang="scss" >

$examplesize: 450px;

.examples-wrapper{
  margin-left: 50px;
  padding-bottom: 800px;
}

.example-container{
  &.active{
    border: 2px solid purple;
  }
  &:nth-child(3n + 2){
    .example{
      margin-left: $examplesize;
    }
  }
  &:nth-child(3n){
    .example{
      margin-left: calc(#{$examplesize} * 2);
    }
  }
  img{
    max-width: $examplesize;
  }
}
.example{
  display: inline-block;
}


</style>