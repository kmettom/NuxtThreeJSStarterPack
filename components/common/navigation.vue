<template>
  <div class="ovp-navigation" ref="ovpnav">

    <NuxtLink aria-label="" to="/">
      home page
    </NuxtLink>

        <NuxtLink aria-label="" to="/second">
         second page
        </NuxtLink>

  </div>
</template>
<script setup>
import { onMounted } from "vue";

const props = defineProps({
  pageActive: Boolean
});


const ovpnav = ref(null);

onMounted(() => {
  // Canvas.navigation = ovpnav.value;
});

</script>
<style lang="scss">

.ovp-navigation {

}

</style>
