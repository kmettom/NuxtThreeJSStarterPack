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
    shader: {
      type: String,
    },
    imageHover: {
      type: Boolean,
    },
  },
  data() {
    return {
      imageId: 0,
    }
  },
  methods: {
  },
  mounted() {

    setTimeout( () => {

      let meshIndex = Canvas.imageStore.length;
      this.imageId = `meshImage${this.shader}_${meshIndex}`;
      Canvas.addImage( this.$refs.img, this.shader, this.imageId );

    } , 1000);
  },
  watch: {
    imageHover(_status) {
      Canvas.hoverImage(this.imageId, _status);
    },
  },

}
</script>

<style lang="scss" >

img{
  opacity: 0;
}

</style>