<template>
<div>
    <div class="home-header" v-scrollActive:navigationbgdark="1">

      <h1 class="text-frame" ref="textFrame">
        <div class="first-row text-row">
          <div class="word-wrapper">
            <div class="h1-regular word">{{ data.header.txt1 }}&nbsp;</div>
            <div class="h1-regular word">{{ data.header.txt2 }}</div>
          </div>
        </div>
        <div class="second-row text-row">
          <div class="word-wrapper ">
            <div class="h1-regular word">{{ data.header.txt3 }}</div>
          </div>
          <div class="element-animation-placeholder">
            <IconsHeader :initAnimation="iconAnimate" />
          </div>
        </div>
        <div class="third-row text-row">
          <NuxtLink :aria-label="data.header.btnText + ' ' + data.header.btnTextHover" to="/contact">
          <PillButton class="header-button"
                      :primaryText='data.header.btnText'
                      :secondaryText="data.header.btnTextHover"
                      color="var(--blue-primary)"
                      bgColor="var(--white)"
                      hoverColor="var(--blue-secondary)"
                      hoverBgColor="var(--yellow)"
                      :onClick="redirectToContact"
          />
          </NuxtLink>

          <div class="word-wrapper ">
            <div class="h1-italic word">&nbsp;{{ data.header.txt4 }}</div>
          </div>
        </div>
      </h1>

      <div class="scroll-down-frame" v-scrollActive:scroll:rotate="1">
        <img alt="scroll down image" width="110" height="110" src="@/assets/imgs/scroll-down.svg" />
      </div>

      <div class="header-sub-section pill-text-regular ">
        <span class="ovp-line top"></span>
        <p class="sub-txt">
          {{ data.header.subtext }}
        </p>
      </div>
    </div>

    <div class="section-about-us ">
        <h2 class="p-body2" v-scrollActive:top:once:header="0.85" >
          <span class="ani-section-title">
            {{ data.about.title }}
          </span>
        </h2>
        <p class="h3-regular" v-scrollActive:top:once:content="0.85">
          <span class="ani-content-in">
            {{ data.about.text }}
          </span>
        </p>
    </div>

    <div class="section-our-approach">
        <span class="ovp-line dark top" v-scrollActive:top:once:line="0.85"></span>

      <div class="section-approach-header">
        <CommonHeader :text1='data.approach.sectionTitle1' :text2='data.approach.sectionTitle2' :breakLine="true" :theme="'light'" />
      </div>

      <div class="card-holder">
        <div class="card-content-wrapper">
          <div class="card-content" v-scrollSpeed="approachSectioScrollSpeed">
            <div class="card-icon">
              <IconsApproachDefine :initAnimation="iconAnimate" />
            </div>
            <div class="h5-regular">{{ data.approach.title1 }}</div>
            <div class="p-body2">{{ data.approach.text1 }}</div>
          </div>
        </div>
        <div class="card-content-wrapper" >
          <div class="card-content" v-scrollSpeed="-approachSectioScrollSpeed">
            <div class="card-icon" >
              <IconsApproachCollaborate :initAnimation="iconAnimate" />
            </div>
            <div class="h5-regular">{{ data.approach.title2 }}</div>
            <div class="p-body2">{{ data.approach.text2 }}</div>
          </div>
        </div>
        <div class="card-content-wrapper" >
          <div class="card-content" v-scrollSpeed="approachSectioScrollSpeed">
            <div class="card-icon" >
              <IconsApproachDive :initAnimation="iconAnimate" />
            </div>
            <div class="h5-regular">{{ data.approach.title3 }}</div>
            <div class="p-body2">{{ data.approach.text3 }}</div>
          </div>
        </div>
        <div class="card-content-wrapper" >
          <div class="card-content" v-scrollSpeed="-approachSectioScrollSpeed">
            <div class="card-icon" >
              <IconsApproachInnovate :initAnimation="iconAnimate" />
            </div>
            <div class="h5-regular">{{ data.approach.title4 }}</div>
            <div class="p-body2">{{ data.approach.text4 }}</div>
          </div>
        </div>
      </div>
    </div>

  <div class="section-expertise" id="fixedHeadlineExpertise" v-scrollActive:navigationbgdark:appbgdark="1">
    <div class="section-expertise-wrapper">

      <div class="section-expertise-header" v-scrollSpeed:fixed="'fixedHeadlineExpertise'" >
        <CommonHeader :text1='data.expertise.sectionTitle1' :text2='data.expertise.sectionTitle2' :breakLine="true"  :theme="'dark'" />
      </div>

      <div class="merits-wrapper" >
        <div class="merit">
          <div class="animation-frame">
            <IconsExpertiseTech :initAnimation="iconAnimate" />
          </div>
          <div class="content">
            <h3 class="h3-regular light" v-scrollActive:top:once:header="0.85" >
               <span class="ani-section-title">
                  {{ data.expertise.title1 }}
               </span>
            </h3>
            <div class="p-body2" v-scrollActive:top:once:content="0.85">
               <span class="ani-content-in">
                  {{ data.expertise.text1 }}
               </span>
            </div>
          </div>
          <span class="ovp-line" v-scrollActive:top:once:line="0.85" ></span>
        </div>
        <div class="merit">
          <div class="animation-frame">
            <IconsExpertiseChange :initAnimation="iconAnimate" />
          </div>
          <div class="content">
            <h3 class="h3-regular light" v-scrollActive:top:once:header="0.85" >
               <span class="ani-section-title">
                  {{ data.expertise.title2 }}
               </span>
            </h3>
            <div class="p-body2" v-scrollActive:top:once:content="0.85">
               <span class="ani-content-in">
                  {{ data.expertise.text2 }}
               </span>
            </div>
          </div>
          <span class="ovp-line" v-scrollActive:top:once:line="0.85"></span>
        </div>
        <div class="merit" >
          <div class="animation-frame">
            <IconsExpertiseInsights :initAnimation="iconAnimate" />
          </div>
          <div class="content ">
            <h3 class="h3-regular light" v-scrollActive:top:once:header="0.85" >
               <span class="ani-section-title">
                  {{ data.expertise.title3}}
               </span>
            </h3>
            <div class="p-body2" v-scrollActive:top:once:content="0.85">
               <span class="ani-content-in">
                  {{ data.expertise.text3 }}
               </span>
            </div>
          </div>
          <span class="ovp-line" v-scrollActive:top:once:line="0.85"></span>
        </div>
        <div class="merit">
          <div class="animation-frame not-scale">
            <IconsExpertiseProject :initAnimation="iconAnimate" />
          </div>
          <div class="content">
            <h3 class="h3-regular light" v-scrollActive:top:once:header="0.85" >
               <span class="ani-section-title">
                  {{ data.expertise.title4 }}
               </span>
            </h3>
            <div class="p-body2" v-scrollActive:top:once:content="0.85">
               <span class="ani-content-in">
                  {{ data.expertise.text4 }}
               </span>
            </div>
          </div>
          <span class="ovp-line" v-scrollActive:top:once:line="0.85"></span>
        </div>
        <div class="read-more-btn">
          <NuxtLink :aria-label="data.expertise.btnText +' '+ data.expertise.btnHoverText" to="/services">
            <PillButton :primaryText='data.expertise.btnText' :secondaryText='data.expertise.btnHoverText' color="var(--white)" bgColor="var(--blue-secondary)"
              hoverColor="var(--blue-secondary)" hoverBgColor="var(--white)" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>

  <div class="section-focus">
    <div class="section-focus-header">
      <CommonHeader :text1='data.focus.sectionTitle1' :text2='data.focus.sectionTitle2' :breakLine="false"  :theme="'light'" />
    </div>
    <div class="focus-cards-wrapper">
      <div class="focus-card">
        <div class="content" @mouseenter="focusSectioHover(true, 'estate')"
          @mouseleave="focusSectioHover(false, 'estate')">
          <div class="h3-regular">
            <span class="ovp-focus-number" v-scrollActive:top:once:header="0.95">
              <span class="ani-section-title">
                01
              </span>
            </span>
          </div>
          <div class="text">
            <div class="h3-regular" v-scrollActive:top:once:header="0.85">
              <span class="ani-section-title">
              {{ data.focus.title1 }}
              </span>
            </div>
            <div class="p-body2" v-scrollActive:top:once:content="0.85">
              <span class="ani-content-in">
                {{ data.focus.text1 }}
              </span>
            </div>
          </div>
        </div>
        <div class="image-wrapper">
          <CanvasImage :meshId="'estate'" :imageHover="focusImageShow['estate']" :srcLink="img_estate" />
        </div>
      </div>
      <div class="focus-card">
        <div class="content" @mouseenter="focusSectioHover(true, 'basket')"
          @mouseleave="focusSectioHover(false, 'basket')">
          <div class="h3-regular " >
            <span class="ovp-focus-number" v-scrollActive:top:once:header="0.95">
              <span class="ani-section-title">
                02
              </span>
            </span>
          </div>
          <div class="text">
            <div class="h3-regular" v-scrollActive:top:once:header="0.85">
              <span class="ani-section-title">
              {{ data.focus.title2 }}
              </span>
            </div>
            <div class="p-body2" v-scrollActive:top:once:content="0.85">
              <span class="ani-content-in">
                {{ data.focus.text2 }}
              </span>
            </div>
          </div>
        </div>
        <div class="image-wrapper">
          <CanvasImage :meshId="'basket'" :imageHover="focusImageShow['basket']" :srcLink="img_basket" />
        </div>
      </div>
      <div class="focus-card">
        <div class="content" @mouseenter="focusSectioHover(true, 'tech')" @mouseleave="focusSectioHover(false, 'tech')">
          <div class="h3-regular" >
            <span class="ovp-focus-number" v-scrollActive:top:once:header="0.95">
              <span class="ani-section-title">
                03
              </span>
            </span>
          </div>
          <div class="text">
            <div class="h3-regular" v-scrollActive:top:once:header="0.85">
              <span class="ani-section-title">
              {{ data.focus.title3 }}
              </span>
            </div>
            <div class="p-body2" v-scrollActive:top:once:content="0.85">
              <span class="ani-content-in">
                {{ data.focus.text3 }}
              </span>
            </div>
          </div>
        </div>
        <div class="image-wrapper">
          <CanvasImage :meshId="'tech'" :imageHover="focusImageShow['tech']" :srcLink="img_tech" />
        </div>
      </div>
    </div>
  </div>
</div>

</template>
<script setup>
import PillButton from "@/components/common/pillButton.vue";
import { gsap } from "gsap";
import { onMounted, ref, watch } from "vue";
import { useRouter } from 'vue-router';

import img_tech from '~/assets/imgs/technology.webp';
import img_basket from '~/assets/imgs/basket.webp';
import img_estate from '~/assets/imgs/real-estate.webp';

const { data } = await useAsyncData('index', () => queryContent('/').findOne())

useSeoMeta({
  title: data._rawValue?.seo.title,
  ogTitle: data._rawValue?.seo.ogTitle,
  description: data._rawValue?.seo.description,
  ogDescription: data._rawValue?.seo.ogDescription,
  ogImage: data._rawValue?.seo.ogImage,
  twitterCard: data._rawValue?.seo.twitterCard,
})

const router = useRouter();
const textFrame = ref('textFrame');

const props = defineProps({
  pageActive: Boolean
});

const approachSectioScrollSpeed = ref(0.02)
const iconAnimate = ref(false);
const focusImageShow = ref({
  estate: false,
  basket: false,
  tech: false,
});

const animateHeaderTexts = () => {

  gsap.to('.word', {
    y: 0,
    duration: 0.5,
    delay: 0.3,
    stagger: 0.075
  });

  gsap.to([".element-animation-placeholder" , ".header-button"], {
    opacity: 1,
    y: 0,
    duration: 0.35,
    delay: 0.5
  });

  gsap.to(".header-sub-section .sub-txt", {
    opacity:1,
    y: 0,
    duration: 0.5,
    delay: 0
  });

  gsap.to(".header-sub-section .ovp-line", {
    width: '100%',
    duration: 0.35,
    delay: 0.75
  });

};

const headerAniIn = () => {
  iconAnimate.value = true
  animateHeaderTexts();
};

const focusSectioHover = (_status, _type) => {
  if(window.innerWidth < 768) {
   return
  }
  focusImageShow.value[_type] = _status
}

const redirectToContact = () => {
  return router.push('/contact');
};

onMounted(() => {
  if (props.pageActive) {
    headerAniIn();
  }
  if(window.innerWidth < 768) {
    focusImageShow.value = {
      estate: true,
      basket: true,
      tech: true,
    }
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

// home-header

.home-header {
  padding-top: 100px;
  position: relative;
  min-height: 90vh;
  background-color: var(--blue-primary);
  width: 100%;
}

.text-frame {
  position: absolute;
  top: 50%;
  transform: translate( 0 , -50%);
  left: 0px;
  width: 780px;
  margin-left: calc(100vw / 12);

  @include respond-width($w-s) {
    position: relative;
    top: initial;
    transform: initial;
  }

  .text-row{
    @include respond-width($w-xs){
      margin-top: 10px;
    }
  }

  .first-row{

  }
  .second-row{


  }
  .third-row{
    margin-top: -15px;
    @include respond-width($w-s){
      margin-top: 0px;
    }
  }

  .word-wrapper {
    display: inline-block;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

  .word {
    display: inline-block;
    transform: translateY(150px);
  }
  .header-button{
    transform: translateY(10px);
    opacity: 0;
    height: 100%;
    position: relative;
    bottom: 20px;
    display: inline-block;
    @include respond-width($w-s){
      bottom: 0px;
    }
    @include respond-width($w-xs){
      bottom: 10px;
    }
  }
}

.element-animation-placeholder {
  opacity: 0;
  display: inline-block;
  margin-left: 25px;
  position: relative;
}

.header-sub-section {
  position: absolute;
  line-height: 30px;
  display: inline-block;
  max-width: 300px;
  color: var(--white);
  padding-top: 40px;
  margin-right:  8%;
  margin-bottom: 44px;
  bottom: 0;
  right: 0;

  @include respond-width($w-s) {
    width: 80%;
    padding-top: 0px;
    margin-bottom: 90px;
    margin-right: 15px;
    line-height: 25px;
  }

  .sub-txt{
    //opacity: 0;
    //transform: translateY(10px);
  }
}

.scroll-down-frame {
  position: absolute;
  bottom: -55px;
  transform: translate(-50%, 0%);
  left: 50%;
  height: min-content;
  line-height: 0;
}

// about us

.section-about-us {
  position: relative;
  width: 840px;
  margin: 12% auto 6%;

  @include respond-width($w-l) {
    width: 60vw;
  }

  @include respond-width($w-s) {
    width: auto;
    margin: 65px 14px 65px;
  }
  .p-body2 {
    color: var(--blue-primary);
  }

}

// OUR APPROACH

.section-our-approach {
  position: relative;
  padding: 6% 0;
  margin: 0 calc(100vw / 12);
  @include respond-width($w-xs) {
    margin: 0 10px;
  }
}

.section-approach-header {
  //width: 300px;
  //line-height: 60px;

  @include respond-width($w-xs) {
    margin: 0 16px;
  }
}

.card-holder {
  margin: 12% auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 25px;
    @include respond-width($w-s) {
      //display: block;
    }
  }

.card-content-wrapper{
  &:nth-child(2n) {
    @include respond-width($w-s) {
      margin: 0 0 0 auto;
    }
  }
  &:nth-child(2n+1) {
    @include respond-width($w-s) {
      margin: 0 auto 0 0;
    }
  }
}

  .card-content {
    width: 260px;
    padding: 20px 25px 30px;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: var(--blue-primary);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    div {
      color: var(--white);
      line-height: 26px;
    }
    .card-icon{
      min-height: 100px;
    }

  }


// EXPERTISE SECTION

.section-expertise {
  width: 100vw;
  padding-top: 100px;

  @include respond-width($w-s) {
    padding-top: 50px;
  }

  .section-expertise-wrapper {
    max-width: 1400px;
    width: auto;
    margin: 0px calc(100vw / 12) 50px;

    @include respond-width($w-l) {
      width: auto;
    }

  }

    .section-expertise-header {
      margin: 0px 0 50px ;
      @include respond-width($w-s) {
        margin-bottom: 0;
      }
    }

    .merits-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      gap: 60px;
      padding-bottom: 100px;

      @include respond-width($w-s) {
        margin-top: 50px;
        gap: 25px;
        padding-bottom: 50px;
      }

    }


      .merit {
        position: relative;
        width: 740px;
        padding-bottom: 60px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        @include respond-width($w-m) {
          width: 500px;
        }

        @include respond-width($w-m-xs) {
          flex-direction: column;
          padding-bottom: 25px;
          gap: 16px;
          width: auto;
        }

      }


        .content {
          width: 55%;
          color: var(--grey-light);
          @include respond-width($w-m) {
            width: 65%;
          }
          @include respond-width($w-s) {
            width: 70%;
          }
          @include respond-width($w-xs) {
            width: 100%;

          }
          div:nth-child(2) {
            @include respond-width($w-s) {
              font-size: 14px;
              line-height: 18px;
            }
          }
        }

          .animation-frame {
            @include respond-width($w-s) {
              width: 70%;
            }
            @include respond-width($w-xs) {
              width: 100%;

            }
          }


      .read-more-btn {
        @include respond-width($w-s) {
          align-self: flex-start;
        }
      }
}

.section-focus {
  width: 1440px;
  margin: 50px auto 100px;

  @include respond-width($w-l) {
    width: calc(1000vw / 12);
  }

  .section-focus-header {
    text-align: center;
    margin-bottom: 50px;

    * {
      margin: 0 auto;
    }
  }

  .focus-cards-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;

    @include respond-width($w-m) {
      flex-direction: column;
      gap: 40px;
    }

    .focus-card {
      display: flex;
      flex-direction: column;
      width: 380px;
      gap: 20px;

      @include respond-width($w-m) {
        flex-direction: row;
        width: min(700px, 100%);
        align-self: center;
        align-items: center;
      }

      @include respond-width($w-s) {
        flex-direction: column;
        width: min(500px, 100%);
      }

      &:nth-child(even) {
        flex-direction: column-reverse;

        @include respond-width($w-m) {
          flex-direction: row-reverse;
        }

        @include respond-width($w-s) {
          flex-direction: column;
        }
      }

      .content {
        display: flex;
        gap: 20px;

        .ovp-focus-number{
          width: 120px;
          position: relative;
        }

        .h3-regular {
          color: var(--blue-primary);
        }
        .p-body2 {
          color: var(--grey);
        }
      }
    }

    .image-wrapper {
      align-self: center;
      position: relative;
      img{
        position: relative;
        width: 100%;
        @include respond-width($w-m){
          max-height: 250px;
          max-width: 250px;
          width: initial;
        }
      }
    }
  }
}

</style>
