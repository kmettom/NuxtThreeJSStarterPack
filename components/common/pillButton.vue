<template>
    <button :style="cssProps" class="customButton" @click="handleClick" v-set-data-attrs="{ cursorsize: 50, cursoropacity: 0.3 }">
            <div class="visibleField">
                <div class="normalText">
                    <span class="firstWord pill-text-regular">{{ firstWord }}&nbsp;</span>
                    <span class="secondWord pill-text-italic">{{ secondWord }}</span>
                </div>
                <div class="hoverText">
                    <span class="thirdWord pill-text-regular">{{ thirdWord }}&nbsp;</span>
                    <span class="forthWord pill-text-italic">{{ forthWord }}</span>
                </div>
            </div>
    </button>
</template>
  
<script>
export default {
    props: {
        primaryText: {
            type: String,
            required: true
        },
        secondaryText: {
            type: String,
            default: ""
        },
        color: {
            type: String,
            default: "white"
        },
        bgColor: {
            type: String,
            default: "green"
        },
        hoverColor: {
            type: String,
            default: "white"
        },
        hoverBgColor: {
            type: String,
            default: "green"
        },
        onClick: {
            type: Function,
            default: () => { }
        }
    },
    methods: {
        handleClick() {
            this.onClick();
        }
    },
    data() {
        return {
            firstWord: '',
            secondWord: '',
            thirdWord: '',
            forthWord: '',
        }
    },
    created() {
        const words = this.primaryText.split(' ');
        this.firstWord = words[0];
        this.secondWord = words.slice(1).join(' ');
        const nextWords = this.secondaryText.split(' ');
        this.thirdWord = nextWords[0];
        this.forthWord = nextWords.slice(1).join(' ');
    },
    computed: {
        cssProps() {
            return {
                '--ovp-button-color': this.color,
                '--ovp-button-bg-color': this.bgColor,
                '--ovp-button-hover-color': this.hoverColor,
                '--ovp-button-hover-bg-color': this.hoverBgColor,
            }
        }
    }
};
</script>

<style lang="scss"  scoped >
</style>
  