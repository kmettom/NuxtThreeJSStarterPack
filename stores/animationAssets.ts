import { defineStore } from "pinia";
import * as THREE from "three";

export const useAnimationAssets = defineStore("animationAssets", {
  state: (): {
    textureMaskNoise: null | THREE.Texture;
    textureDefaultBlack: null | THREE.Texture;
  } => ({
    textureMaskNoise: null,
    textureDefaultBlack: null,
  }),
  actions: {
    async init() {
      const loader = new THREE.TextureLoader();
      const texture = await loader.loadAsync(`images/textureMaskNoise.png`);
      if (texture) {
        this.textureMaskNoise = texture;
      }
      this.textureDefaultBlack = new THREE.Texture();
    },
    getTextureMaskNoise() {
      if (this.textureMaskNoise !== null) {
        return this.textureMaskNoise;
      }
    },
    getTextureDefaultBlack() {
      if (this.textureDefaultBlack !== null) {
        return this.textureDefaultBlack;
      }
    },
  },
});
