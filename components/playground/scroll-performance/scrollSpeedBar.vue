<script setup lang="ts">
import gsap from "gsap";

const scrollSpeedAniEl = ref<HTMLElement | null>(null);
const scrollSpeedCoef = ref(0);

const scrollSpeedCallback = (_item: any, speed: number) => {
  const newSpeedCoef = speed < 0.03 ? 0 : speed;
  scrollSpeedCoef.value = Number(newSpeedCoef.toFixed(2));
  gsap.set(scrollSpeedAniEl.value, {
    width: `${newSpeedCoef * 100}%`,
  });
};

const scrollSpeedBarOptions = computed(() => ({
  activeRange: 1,
  fixToParent: {
    containerId: "scrollSpeedBar",
    fixPosition: 0,
    margin: 0,
  },
  onScrollCallback: scrollSpeedCallback,
}));

const fps = ref<number | null>(null);
let fpsInterval = null;

onMounted(() => {
  fpsInterval = setInterval(() => {
    fps.value = Canvas3.getFPS();
  }, 500);
});
onBeforeUnmount(() => {
  fpsInterval = null;
});
</script>

<template>
  <div
    id="scrollSpeedBar"
    v-canvas3-scroll-action="scrollSpeedBarOptions"
    class="scroll-speed-container"
  >
    <div class="scroll-speed-status-bar">
      <span v-if="fps" class="fps">
        {{ fps }}
      </span>
      <span class="scroll-speed-text">
        Scroll speed: {{ scrollSpeedCoef }}
      </span>
      <span ref="scrollSpeedAniEl" class="scroll-speed-ani" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.scroll-speed-container {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  pointer-events: none;
}

.scroll-speed-status-bar {
  padding: 0;
}

.scroll-speed-ani {
  position: absolute;
  height: 15px;
  top: 0px;
  left: 0;
  background: var(--light-color);
  z-index: 1;
}

.scroll-speed-text {
  font-size: 12px;
  z-index: 2;
  position: absolute;
  left: 0px;
  display: block;
  color: var(--dark-color);
}
</style>
