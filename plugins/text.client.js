// import Vue from 'vue';

export default function ({app}, inject){
    const hello = function (_string) {
        console.log('emitting HELLO FUNCTION', _string);
    };

// const eventBus = new Vue();

    // this.$nuxt.$emit('hello', msg);

    inject('hello', hello);
    // inject('eventBus', eventBus);

    // app.$hello("kkt");
    console.log("app" , app );
}
