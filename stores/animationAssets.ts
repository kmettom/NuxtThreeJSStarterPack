import { defineStore } from "pinia";
import * as THREE from "three";

export const useAnimationAssets = defineStore("animationAssets", {
  state: (): {
    textureMaskNoise: null | THREE.Texture;
  } => ({
    textureMaskNoise: null,
  }),
  actions: {
    async init() {
      const loader = new THREE.TextureLoader();
      const texture = await loader.loadAsync(`images/textureMaskNoise.png`);
      if (texture) {
        this.textureMaskNoise = texture;
      }
    },
    getTextureMaskNoise() {
      if (this.textureMaskNoise !== null) {
        return this.textureMaskNoise;
      }
    },
  },
});
