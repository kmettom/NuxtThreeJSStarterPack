<template>
  <div>

    <div class="header" v-scrollActive:navigationbgdark="1">
      <h1>
        <div class="word-wrapper">
          <div class="h1-regular word">{{ data.header.txt1 }}</div>
        </div>
        <div class="word-wrapper">
          <div class="h1-italic word">{{ data.header.txt2 }}</div>
        </div>
      </h1>
    </div>

    <div class="main">
      <div class="section">
        <h3 class="h3-regular " v-scrollActive:top:once:header="0.85">
          <span class="ani-section-title">
            {{ data.section1.title }}
          </span>
        </h3>
        <div class="figure-frame">
          <IconsExpertiseTech :initAnimation="iconAnimate" colorTheme="blue" size="lg" />
        </div>
        <div class="text-content p-body2" v-scrollActive:top:once:content="0.85">
          <span class="ani-content-in">
            <p>
            {{ data.section1.text }}
          </p>
          <ul>
            <li>
              {{data.section1.bulletPoint1}}
            </li>
            <li>
              {{data.section1.bulletPoint2}}
            </li>
            <li>
              {{data.section1.bulletPoint3}}
            </li>
          </ul>
          </span>
        </div>
        <span class="ovp-line dark" v-scrollActive:top:once:line="0.85"></span>
      </div>
      <div class="section" >
        <h3 class="h3-regular " v-scrollActive:top:once:header="0.85">
          <span class="ani-section-title">
            {{ data.section2.title }}
          </span>
        </h3>
        <div class="figure-frame">
          <IconsExpertiseChange :initAnimation="iconAnimate" colorTheme="blue"  size="lg"  />
        </div>
        <div class="text-content p-body2" v-scrollActive:top:once:content="0.85">
          <span class="ani-content-in">
           <p>
            {{ data.section2.text }}
          </p>
          <ul>
            <li>
              {{data.section2.bulletPoint1}}
            </li>
            <li>
              {{data.section2.bulletPoint2}}
            </li>
            <li>
              {{data.section2.bulletPoint3}}
            </li>
          </ul>
          </span>
        </div>
        <span class="ovp-line dark" v-scrollActive:top:once:line="0.85"></span>
      </div>
      <div class="section" >
        <h3 class="h3-regular " v-scrollActive:top:once:header="0.85">
          <span class="ani-section-title">
            {{ data.section3.title }}
          </span>
        </h3>
        <!-- big blue rhombus -->
        <div class="figure-frame">
          <IconsExpertiseInsights :initAnimation="iconAnimate" colorTheme="blue"  size="lg"  />
        </div>
        <div class="text-content p-body2" v-scrollActive:top:once:content="0.85">
          <span class="ani-content-in">
          <p>
            {{ data.section3.text }}
          </p>
          <ul>
            <li>
              {{data.section3.bulletPoint1}}
            </li>
            <li>
              {{data.section3.bulletPoint2}}
            </li>
            <li>
              {{data.section3.bulletPoint3}}
            </li>
          </ul>
          </span>
        </div>
        <span class="ovp-line dark" v-scrollActive:top:once:line="0.85"></span>
      </div>
      <div class="section" >
        <h3 class="h3-regular " v-scrollActive:top:once:header="0.85">
          <span class="ani-section-title">
            {{ data.section4.title }}
          </span>
        </h3>
        <!-- 4 elements group -->
        <div class="figure-frame">
          <IconsExpertiseProject :initAnimation="iconAnimate" colorTheme="blue"  size="lg"  />
        </div>
        <div class="text-content p-body2" v-scrollActive:top:once:content="0.85">
          <span class="ani-content-in">
          <p>
            {{ data.section3.text }}
          </p>
          <ul>
            <li>
              {{data.section3.bulletPoint1}}
            </li>
            <li>
              {{data.section3.bulletPoint2}}
            </li>
            <li>
              {{data.section3.bulletPoint3}}
            </li>
          </ul>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { gsap } from "gsap";
import { onMounted, ref, watch } from "vue";
const { data } =  await useAsyncData('services', () => queryContent('/services').findOne())

useSeoMeta({
  title: data._rawValue?.seo.title,
  ogTitle: data._rawValue?.seo.ogTitle,
  description: data._rawValue?.seo.description,
  ogDescription: data._rawValue?.seo.ogDescription,
  ogImage: data._rawValue?.seo.ogImage,
  twitterCard: data._rawValue?.seo.twitterCard,
})

const props = defineProps({
  pageActive: Boolean
});

const animate = () => {
  gsap.to(".header  .word", {
    y: 0,
    duration: 0.5,
    stagger: 0.15,
    delay: 0.75,
  });
};

const iconAnimate = ref(true);

const headerAniIn = () => {
  animate();
};

onMounted(() => {
  // iconAnimate.value = true;

  if (props.pageActive) {
    headerAniIn();
  }
});

watch(
  () => props.pageActive,
  (newValue, oldValue) => {
    if (newValue) {
      headerAniIn();
    }
  }
);


</script>
<style lang="scss" scoped>
@import "assets/scss/_media_queries";

.header {
  @include page-header;
  @include page-header-w-s;
}

.main {
  @include page-main(1050px);
  @include page-main-sm;

  @include respond-width($w-s) {
    padding-top: 50px;
  }
}

.h3-regular{
  position: relative;
  overflow: hidden;
}

.main .section h3{
  color: var(--blue-primary)
}

.figure-frame {
  position: relative;
  width: 191px;
  height: 191px;
  @include respond-width($w-s) {
    width: 100%;
    height: auto;
  }
}

.main .section {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 60px;

  @include respond-width($w-m-s) {
    width: 80%;
  }
  @include respond-width($w-s) {
    width: 100%;
    padding: 30px 0px;
  }

  @include respond-width($w-s) {
    flex-direction: column;
    align-items: center;
  }

    &:not(:first-child) {
    padding-top: 30px;
      @include respond-width($w-s) {
        padding-top: 60px;
        padding-bottom: 0px;
      }
  }

  h3 {
    width: 100%;
    @include respond-width($w-s) {
      order: 2;

    }
  }

  &>div {
    width: 49%;
  }

  .figure-frame {
    @include respond-width($w-s) {
      order: 1;
      width: 100%;
    }
  }

  .text-content {
    @include respond-width($w-s) {
      order: 3;
      width: 100%;
    }
  }

}


// Figures

// 1. Circle
.big-blue-circle {
  position: relative;
  border-radius: var(--br-81xl);
  background-color: var(--ovp-primary-blue-01);
  width: 192px;
  height: 192px;
}


// 2. Section

// .rectangle-parent {
//   position: relative;
//   width: 192px;
//   height: 118.24px;
// }

.blue-rhombus {
  position: absolute;
  top: 0px;
  left: 59.12px;
  border-radius: 2px;
  background-color: var(--ovp-primary-blue-01);
  width: 83.61px;
  height: 83.61px;
  transform: rotate(45deg);
  transform-origin: 0 0;
}

.yellow-circle {
  position: absolute;
  top: 4.1px;
  left: 79.61px;
  border-radius: var(--br-81xl);
  background-color: var(--ovp-secondary-yellow);
  width: 112.39px;
  height: 112.39px;
}

// 4. Section
.group-inner {
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-81xl);
  background-color: var(--ovp-secondary-yellow);
  width: 89.88px;
  height: 89.88px;
}

.rectangle-div {
  position: absolute;
  top: 101.12px;
  left: 0px;
  border-radius: var(--br-81xl);
  background-color: var(--ovp-secondary-yellow);
  width: 89.88px;
  height: 89.88px;
}

.group-child1 {
  position: absolute;
  top: 0px;
  left: 101.12px;
  border-radius: var(--br-81xl);
  background-color: var(--ovp-secondary-yellow);
  width: 89.88px;
  height: 89.88px;
}

.group-child2 {
  position: absolute;
  top: 101.12px;
  left: 101.12px;
  border-radius: var(--br-81xl);
  background-color: var(--ovp-primary-blue-01);
  width: 89.88px;
  height: 89.88px;
}
</style>
