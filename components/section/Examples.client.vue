<template>
  <section class="examples">

    <SectionExampleBlock
        v-scrollSpeed="-0.7"
        :text="'Example: Slow scroll speed, shader 1'"
        :imgLink="'img/01.jpg'"
        :shader="'example1'"
    />

    <SectionExampleBlock
        v-scrollSpeed="0"
        :text="'Example: Normal scroll speed, shader 2'"
        :imgLink="'img/02.jpg'"
        :shader="'example2'"
    />

    <SectionExampleBlock
        v-scrollSpeed="0.3"
        :text="'Example: Faster scroll speed, shader default'"
        :imgLink="'img/03.jpg'"
    />

    <SectionExampleBlock
        v-scrollSpeed=""
        :text="'Example 4'"
        :imgLink="'img/04.jpg'"
        :shader="'example1'"
    />

    <SectionExampleBlock
        v-scrollSpeed=""
        :text="'Example 5'"
        :imgLink="'img/05.jpg'"
        :shader="'example2'"
    />

    <SectionExampleBlock
        v-scrollSpeed=""
        :text="'Example 6'"
        :imgLink="'img/01.jpg'"
    />

  </section>
</template>

<script setup>


</script>

<style lang="scss" >

$examplesize: 450px;

.examples{
  margin-left: 50px;
  padding-bottom: 300px;
}

.example-container{
  //&.active{
  //  border: 2px solid purple;
  //}
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