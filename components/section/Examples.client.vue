<template>
  <section class="examples">

    <SectionExampleBlock
        v-scrollSpeed="0.2"
        :text="'Fast scroll speed | shader 1'"
        :imgLink="'img/01.jpg'"
        :shader="'example1'"
    />

    <SectionExampleBlock
        v-scrollSpeed="0"
        :text="'Normal scroll speed | shader 2'"
        :imgLink="'img/02.jpg'"
        :shader="'example2'"
    />

    <SectionExampleBlock
        v-scrollSpeed="-0.3"
        :text="'Slow scroll speed | shader default'"
        :imgLink="'img/03.jpg'"
    />

    <SectionExampleBlock
        v-scrollSpeed="-0.2"
        :text="'Slow scroll speed | shader default'"
        :imgLink="'img/04.jpg'"
    />

    <SectionExampleBlock
        v-scrollSpeed="0.4"
        v-scrollActive="0.5"
        :text="'Faster scroll speed | shader 1'"
        :imgLink="'img/05.jpg'"
        :shader="'example1'"
    />

    <SectionExampleBlock
        v-scrollSpeed="0"
        :text="'Normal scroll speed | shader 2'"
        :imgLink="'img/01.jpg'"
        :shader="'example2'"
    />

  </section>
</template>

<script setup>


</script>

<style lang="scss" >

$examplesize: 400px;

.examples{
  margin-left: 20px;
  padding-top: 150px;
  padding-bottom: 300px;
}
.example-container{
  pointer-events: none;
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
  pointer-events: initial;
  display: inline-block;
}


</style>