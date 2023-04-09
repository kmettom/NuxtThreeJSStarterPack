import {Canvas} from '~/utils/canvas.js';
export default defineNuxtPlugin((nuxtApp) => {

    nuxtApp.vueApp.directive('scrollSpeed', {
        mounted (el, binding) {
            Canvas.addScrollSpeedElement({elNode: el , scrollSpeed: binding.value})
        },
    });

    nuxtApp.vueApp.directive('scrollActive', {
        mounted (el, binding, vnode) {
            setTimeout(() => {
                console.log("MOUNTED SCROLL ACTIVE EL");
                Canvas.addScrollActiveElement({elNode: el , scrollActive: binding.value})
            },1000)
        },
    });

})