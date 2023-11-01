<template>
    <div class="wrapper">
        <div class="visibleField">
            <div class="normalText">
                {{ text }}
            </div>
            <div class="hoverText">
                {{ text }}
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
    },
    methods: {
        handleClick() {
            this.onClick();
        }
    },
};
</script>
  
<style lang="scss" scoped>

.wrapper {
    display: inline-block;

    .visibleField {
      height: 1.2rem;
      overflow: hidden;
    }


    &:hover {
        background-color: var(--hover-bg-color);
        color: var(--hover-color);
        border-color: var(--hover-color);

        .normalText {
            transition: transform 0.35s ease-out;
            transform: translateY(-100%);
        }

        .hoverText {
            transition: transform 0.35s ease-out;
            transform: translateY(-100%);
        }
    }

    &:not(:hover) {
        .normalText {
            transition: transform 0.35s ease-out;
            transform: translateY(0%);
        }

        .hoverText {
            transition: transform 0.35s ease-out;
            transform: translateY(0%);
        }
    }


}
</style>
  