// https://nuxt.com/docs/api/configuration/nuxt-config

import glsl from 'vite-plugin-glsl';
export default defineNuxtConfig({
    build: {
        transpile: ['gsap'],
    },
    vite: {
        plugins: [glsl()],
    },
    // modules: [
    //     '@pinia/nuxt',
    // ],
})
