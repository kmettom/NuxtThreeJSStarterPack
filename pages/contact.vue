<template>
  <div class="ovp-page contact-page">
    <div class="wrapper" >
      <header class="ovp-page-header">
        <h1>
          <div class="word-wrapper">
            <div class=" h1-regular dark word">{{ data.header.txt1 }}</div>
          </div>
          <div class="word-wrapper">
            <div class=" h1-italic dark word">{{ data.header.txt2 }}</div>
          </div>
        </h1>
      </header>
      <main>
        <section class="direct">
          <h3 class="h3-regular">{{ data.direct.title }}</h3>
          <p class="p-body2">
            {{ data.direct.tex1 }}<br />
            {{ data.direct.tex2 }}<br />
            {{ data.direct.tex3 }}<br />
            {{ data.direct.tex4 }}
          </p>
        </section>
        <section class="form-section">
          <h3 class="h3-regular">{{data.form.title}}</h3>
          <div class="ovp-form-wrapper">
            <form @submit.prevent="handleSubmit">
              <input v-set-data-attrs="{ cursorsize: 50, cursoropacity: 0.3 }" type="text" v-model="formData.fullName" class="full" placeholder="Full name" required />
              <input v-set-data-attrs="{ cursorsize: 50, cursoropacity: 0.3 }" type="text" v-model="formData.companyName" class="left" placeholder="Company name" />
              <input v-set-data-attrs="{ cursorsize: 50, cursoropacity: 0.3 }" type="email" v-model="formData.emailAddress" class="right" placeholder="E-mail address" required />
              <input v-set-data-attrs="{ cursorsize: 50, cursoropacity: 0.3 }" type="text" v-model="formData.industry" class="left" placeholder="Industry" />
              <input v-set-data-attrs="{ cursorsize: 50, cursoropacity: 0.3 }" type="text" v-model="formData.number" class="right" placeholder="Number (optional)" />
              <textarea v-set-data-attrs="{ cursorsize: 50, cursoropacity: 0.3 }" v-model="formData.message" class="full" placeholder="Message (optional)" />
              <PillButton class="submitBtn" :primaryText='data.form.btnText' :secondaryText='data.form.btnTextHover'
                          color="var(--blue-secondary)" bgColor="var(--white)"
                          hoverColor="var(--white)" hoverBgColor="var(--blue-secondary)"
              />
            </form>

            <div class="ovp-form-sent-message" :class="{'active' : formSent }" >
              <p class="ovp-message-wrapper sending h5-regular">
                <span>Sending &nbsp;</span>
                <span>message...</span>
              </p>
              <p class="ovp-message-wrapper success h5-regular">
                <span>Form &nbsp;</span>
                <span>sent &nbsp;</span>
                <span>successfully!   </span>
              </p>
            </div>
          </div>

        </section>
        <section class="market">
          <h3 class="h3-regular">{{ data.market.title }}</h3>
          <p class="p-body2">{{ data.market.tex1 }} <br />{{ data.market.tex2 }}</p>
        </section>
      </main>
    </div>
  </div>

</template>

<script setup>
import PillButton from "@/components/common/pillButton.vue";
import { gsap } from "gsap";
import {Canvas} from "~/utils/canvas";

const { data } = await useAsyncData('contact', () => queryContent('/contact').findOne())

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
const animatePage = () => {
  gsap.to(".ovp-page-header .word", {
    y: 0,
    duration: 0.5,
    stagger: 0.15,
    delay: 0.75,
  });

  gsap.to(".direct", {
    y: 0,
    opacity: 1,
    delay: 0.75,
  });

  gsap.to(".form-section", {
    y: 0,
    opacity: 1,
    delay: 0.95,
  });

  gsap.to(".market", {
    y: 0,
    opacity: 1,
    delay: 1.25,
  });



};
const headerAniIn = () => {
  animatePage();
};

const formSent = ref(false);

const showSendingMessage = () => {
  formSent.value= true;
  gsap.to('.ovp-message-wrapper.sending span' , {y:0, delay: 0.3, duration: 0.2 , stagger: 0.1 })
}

const showSuccessMessage = () => {
  gsap.fromTo('.ovp-message-wrapper.sending span' , {y:0}, {y:-35, delay: 0, duration: 0.2 , stagger: 0.1 })
  gsap.to('.ovp-message-wrapper.success span' , {y:0, delay: 0.3, duration: 0.2 , stagger: 0.1 })

  setTimeout(() => {
    formSent.value= false;
    gsap.to('.ovp-message-wrapper.success span' , {y:35, duration: 0.2 , stagger: 0.1 })
  }, 4500);

}

onMounted(() => {
  if(Canvas.navigation) {
    Canvas.navigation.classList.remove('ovp-navigation-light')
  }
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

const formData = reactive({
  fullName: '',
  companyName: '',
  emailAddress: '',
  industry: '',
  number: '',
  message: '',
});

const handleSubmit = (data) => {

  console.log('handleSubmit')

  showSendingMessage();

  setTimeout(async () => {

    await $fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    showSuccessMessage();

  }, 500);

};

</script >

<style lang="scss" scoped>
@import "assets/scss/_media_queries";
@import "assets/scss/_typography";

.wrapper {
  padding-top: 160px;
  max-width: 1300px;
  width: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @include respond-width($w-l) {
    margin: 0  calc(100% / 12);
  }

  @include respond-width($w-m-s) {
    flex-direction: column;
  }

  @include respond-width($w-xs) {
    width: auto;
    padding: 150px 10px 0;
    margin: 0  0px;
  }
}

.form-section,
.market,
.direct{
  position: relative;
  opacity: 0;
  transform: translateY(10px);
}

.ovp-page-header{
  margin-bottom: 50px;

  .h1-regular {
    line-height: 100px;
    @include respond-width($w-s) {
      line-height: 50px;
    }
  }
  .word-wrapper {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  
  .word {
    transform: translateY(150px);
    @mixin page-header-w-s {
      transform: translateY(100px);
    }
  }
}


main {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-self: center;
  margin-bottom: 100px;

  @include respond-width($w-m-s) {
    width: 100%;
  }

  @include respond-width($w-s) {
    width: auto;
    gap: 30px;
    margin-bottom: 50px;
  }
}

.p-body2 {
  color: var(--grey-dark);
}

.h3-regular {
  line-height: 10px;
  color: var(--blue-primary);
  margin: 0px auto 35px;
}

.ovp-form-wrapper{
  position: relative;
}

input,
textarea {
  box-sizing: border-box;
  padding: 14px 20px;
  background-color: var(--neutral);
  @include p-type;
  font-size: 16px;
  border: 1px solid transparent;
  outline: none;
  color: var(--blue-primary);
  margin-bottom: 26px;
  display: inline-block;

  @include respond-width($w-s) {
    margin-bottom: 14px;
  }
}

input:focus,
textarea:focus {
  border-color: var(--blue-primary);
}

.left {
  width: 48%;
  margin-right: 2%;

  @include respond-width($w-s) {
    width: 100%;
    margin-right: 0;
  }
}

.right {
  width: 48%;
  margin-left: 2%;

  @include respond-width($w-s) {
    width: 100%;
    margin-left: 0;
  }
}

.full {
  width: 100% !important;
}

.submitBtn {
  text-align: right;
}

.ovp-form-sent-message{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0%;
  background-color: var(--white);
  color: var(--blue-secondary);
  transition: all 0.3s ease;
  z-index: 10;
  &.active{
    height: 100%;
  }
  .ovp-message-wrapper{
    position: absolute;
    top: 35%;
    left: 0px;
    text-align: center;
    transform: translate( 0, -50%);
    overflow: hidden;
    span{
      position: relative;
      display: inline-block;
      transform: translateY(35px);
    }
  }
}
</style>
