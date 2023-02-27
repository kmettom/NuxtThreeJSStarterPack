<template>
  <img style="" ref="img" alt="picture" :src="srcLink" />
</template>

<script>

import {Canvas} from "~/utils/canvas";

export default {
  props: {
    srcLink: {
      type: String,
      required: true
    },
    typeOfMesh: {
      type: String,
      required: true
    }
  },
  data() {
    return {

    }
  },
  methods: {
  },
  mounted() {
    setTimeout( () => {
      Canvas.addImage(this.$refs.img, this.typeOfMesh);
    } , 1000);
  },

}
</script>

<style lang="scss" >

img{
  opacity: 0;
}

</style>