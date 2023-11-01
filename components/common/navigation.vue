<template>
  <div class="ovp-navigation" ref="ovpnav">
    <div class="desktop-nav" >
      <NuxtLink aria-label="Home page" @click="mobileMenuOpen(true)"  to="/" v-set-data-attrs="{ cursorsize: 50, cursoropacity: 0.3 }">
      <div class="logo">

        <svg ref="logo" class="svg-logo-color" width="300" height="14" viewBox="0 0 300 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_445_115)">
            <path class="svg-letter let-1" ref="letter1" d="M10.4991 0C16.1675 0 20.7221 2.57487 20.7221 6.84288C20.7221 11.1109 16.4245 13.9953 10.2183 13.9953C4.55468 14 0 11.4251 0 7.10084C0 2.77655 4.27864 0 10.4991 0ZM2.46534 6.95544C2.46534 10.8623 5.80163 13.1792 10.4134 13.1792C14.7492 13.1792 18.2663 11.064 18.2663 7.04456C18.2663 3.02513 14.911 0.820771 10.2992 0.820771C5.96345 0.820771 2.46534 2.92194 2.46534 6.95544Z"  />
            <path class="svg-letter let-2" ref="letter2" d="M49.4543 0.421875C49.6209 0.459396 49.9159 0.459396 50.211 0.459396C50.5061 0.459396 50.8202 0.459396 50.9868 0.421875C47.7266 4.91032 44.5807 9.51132 41.4681 13.9998H41.2444C38.6125 9.67548 35.3714 4.70864 32.2969 0.421875C32.8537 0.459396 33.2583 0.478156 33.6676 0.478156C34.0769 0.478156 34.5004 0.459396 35.0573 0.421875C37.1704 4.23494 39.612 8.16057 41.9821 11.7016C44.3713 8.24968 47.0746 4.14583 49.4448 0.421875H49.4543Z"  />
            <path class="svg-letter let-3" ref="letter3" d="M79.79 13.5075C79.3998 13.5075 78.9762 13.5638 78.5859 13.5825C78.6621 12.3584 78.7906 10.4964 78.7906 6.92257C78.7906 2.50448 78.6811 1.62743 78.5859 0.426758C79.2903 0.445518 80.1042 0.5018 80.8085 0.5018C81.4368 0.5018 85.9772 0.426758 86.9576 0.426758C91.5123 0.426758 93.8301 1.37416 93.8301 4.37115C93.8301 7.36813 91.5171 8.31554 86.9576 8.31554H80.7895C80.8085 10.9983 80.918 12.5695 80.9942 13.5919C80.5849 13.5732 80.1803 13.5169 79.79 13.5169V13.5075ZM80.8847 1.38823C80.8276 2.37316 80.7895 3.59728 80.7895 7.32123H86.9576C89.8465 7.32123 91.5504 6.57081 91.5504 4.36646C91.5504 2.1621 89.8465 1.39292 86.9576 1.39292H80.8847V1.38823Z"  />
            <path class="svg-letter let-4" ref="letter4" d="M116.613 1.00326C119.188 5.36507 121.52 9.08902 124.556 13.5775C123.98 13.5399 123.595 13.5212 123.224 13.5212C122.852 13.5212 122.467 13.5399 121.891 13.5775C121.149 12.2455 120.411 10.9135 119.649 9.58148H109.721C108.85 10.951 107.999 12.3205 107.237 13.5775C107.051 13.5399 106.737 13.5212 106.404 13.5212C106.071 13.5212 105.738 13.5399 105.571 13.5775C108.332 9.74564 111.663 4.96172 114.295 0.984496C114.019 0.73123 113.629 0.637428 113.034 0.599907V0.416992C113.424 0.416992 114.071 0.473274 114.462 0.473274C114.885 0.473274 115.371 0.416992 115.609 0.416992C116.127 0.416992 116.37 0.473274 116.608 1.00326H116.613ZM114.852 1.78651C113.424 3.90175 111.868 6.25619 110.35 8.59656H119.074C117.741 6.34999 116.351 4.08935 114.852 1.78651Z"  />
            <path class="svg-letter let-5" ref="letter5" d="M139.063 13.5075C138.673 13.5075 138.25 13.5638 137.859 13.5825C137.936 12.3584 138.064 10.4964 138.064 6.92257C138.064 2.50448 137.955 1.62743 137.859 0.426758C138.545 0.445518 139.378 0.5018 140.082 0.5018C140.71 0.5018 144.656 0.426758 146.084 0.426758C150.676 0.426758 152.956 1.32257 152.956 4.2961C152.956 6.63178 151.547 7.69175 148.734 8.03882C149.363 8.475 149.772 9.0425 150.143 9.6616C151.143 11.3407 151.847 13.3105 153.717 13.3293C154.46 13.3293 155.126 13.1464 155.793 12.7289L155.902 12.9118C155.145 13.4231 154.179 13.7701 152.904 13.7701C147.345 13.7701 149.106 8.16545 145.141 8.16545H140.068C140.087 10.942 140.196 12.4569 140.272 13.5872C139.863 13.5685 139.459 13.5122 139.068 13.5122L139.063 13.5075ZM140.158 1.38823C140.101 2.33564 140.068 3.541 140.068 7.1946H146.088C149.772 7.1946 150.829 6.08304 150.829 4.29141C150.829 2.49979 149.772 1.38823 146.088 1.38823H140.163H140.158Z"  />
            <path class="svg-letter let-6" ref="letter6" d="M174.863 13.5077C174.473 13.5077 174.049 13.564 173.659 13.5828C173.735 12.3586 173.883 10.4967 173.883 6.92279C173.883 3.62095 173.807 2.30302 173.735 1.33686H168.624C167.957 1.33686 167.401 1.48225 167.029 1.99348L166.844 1.95595L167.139 0.384766H167.343C167.772 0.384766 168.195 0.422287 168.79 0.422287H180.941C181.55 0.422287 182.235 0.422287 182.388 0.384766H182.611L182.907 1.95595L182.721 1.99348C182.331 1.48225 181.793 1.33686 181.127 1.33686H175.996C175.92 2.30302 175.867 3.61626 175.867 6.92279C175.867 10.5013 175.996 12.3633 176.072 13.5828C175.682 13.564 175.258 13.5077 174.868 13.5077H174.863Z"  />
            <path class="svg-letter let-7" ref="letter7" d="M196.518 0.0377136C197.498 0.820963 201.686 4.1275 205.332 6.69768C207.516 8.19383 209.592 9.76502 211 10.7499C211.019 8.98177 211.057 7.37306 211.057 5.73152C211.057 4.08997 211.019 2.39215 210.929 0.422303C211.115 0.459824 211.372 0.478585 211.633 0.478585C211.895 0.478585 212.152 0.459824 212.338 0.422303C212.19 2.66887 212.133 4.96703 212.133 7.41058C212.133 9.47423 212.171 11.6645 212.262 14.0002H212.038C211.057 13.2498 207.407 10.3841 204.499 8.30639C201.758 6.42565 199.202 4.49332 197.574 3.32549C197.536 4.47456 197.517 5.62364 197.517 6.77272C197.517 9.01929 197.593 11.2612 197.722 13.5828C197.517 13.5453 197.279 13.5265 197.017 13.5265C196.756 13.5265 196.499 13.5453 196.313 13.5828C196.389 12.0679 196.422 10.2997 196.422 8.41895C196.422 5.66116 196.346 2.70639 196.256 0.00488281H196.513V0.0424038L196.518 0.0377136Z"  />
            <path class="svg-letter let-8" ref="letter8" d="M241.246 0.599907L241.503 1.87562L241.336 1.91314C241.041 1.47696 239.689 1.38316 238.742 1.38316H229.666C229.647 2.98718 229.557 4.65217 229.557 6.25619H235.449C236.262 6.25619 238.447 6.21867 239.132 6.05451C239.075 6.30778 239.075 6.50945 239.075 6.74865C239.075 6.96909 239.075 7.152 239.132 7.42403C238.447 7.24111 236.262 7.22235 235.449 7.22235H229.557C229.557 9.00929 229.652 10.8197 229.666 12.5878H238.166C239.999 12.5878 241.055 12.5128 241.798 11.7483L241.964 11.8234L241.26 13.282C241.131 13.554 241.055 13.5728 240.741 13.5728C237.409 13.5728 234.963 13.4977 233.093 13.4977C231.332 13.4977 229.057 13.554 227.296 13.5728C227.372 12.3486 227.501 10.4867 227.501 6.9128C227.501 2.49471 227.391 1.61766 227.296 0.416992C229.109 0.435753 231.427 0.492034 233.24 0.492034C234.906 0.492034 237.371 0.416992 240.984 0.416992C241.131 0.416992 241.207 0.473274 241.241 0.599907H241.246Z"  />
            <path class="svg-letter let-9" ref="letter9" d="M256.971 13.5075C256.58 13.5075 256.157 13.5638 255.767 13.5825C255.843 12.3584 255.971 10.4964 255.971 6.92257C255.971 2.50448 255.862 1.62743 255.767 0.426758C256.452 0.445518 257.285 0.5018 257.989 0.5018C258.617 0.5018 262.563 0.426758 263.991 0.426758C268.583 0.426758 270.863 1.32257 270.863 4.2961C270.863 6.63178 269.454 7.69175 266.642 8.03882C267.27 8.475 267.679 9.0425 268.05 9.6616C269.05 11.3407 269.754 13.3105 271.625 13.3293C272.367 13.3293 273.033 13.1464 273.7 12.7289L273.809 12.9118C273.052 13.4231 272.086 13.7701 270.811 13.7701C265.252 13.7701 267.013 8.16545 263.048 8.16545H257.975C257.994 10.942 258.103 12.4569 258.18 13.5872C257.77 13.5685 257.366 13.5122 256.975 13.5122L256.971 13.5075ZM258.065 1.38823C258.008 2.33564 257.975 3.541 257.975 7.1946H263.995C267.679 7.1946 268.736 6.08304 268.736 4.29141C268.736 2.49979 267.679 1.38823 263.995 1.38823H258.07H258.065Z"  />
            <path class="svg-letter let-10" ref="letter10" d="M299.367 2.62627L299.181 2.66379C298.106 1.49595 295.921 0.858099 293.09 0.858099C288.997 0.858099 287.921 2.26513 287.921 3.32041C287.921 7.11472 299.995 4.03331 299.995 9.78339C299.995 13.4135 295.236 13.981 292.438 13.981C289.639 13.981 287.602 13.5073 285.917 12.7944L285.398 11.0075L285.584 10.9512C286.564 12.3583 289.787 13.1228 292.495 13.1228C295.203 13.1228 298.311 12.4661 298.311 10.2008C298.311 6.00316 286.236 9.15961 286.236 3.73783C286.236 0.379707 290.757 -0.00488281 292.866 -0.00488281C295.588 -0.00488281 297.773 0.5251 299.053 1.16296L299.367 2.62158V2.62627Z"  />
          </g>
          <defs>
            <clipPath id="clip0_445_115">
              <rect width="300" height="14"  />
            </clipPath>
          </defs>
        </svg>

      </div>
      </NuxtLink>

      <div class="menu">
        <div class="services nav-item">
          <RotatingLink aria-label="Services"  text="services" link="/services" />
        </div>
        <div class="our-purpose nav-item">
          <RotatingLink aria-label="Our Purpose" text="our purpose" link="/our-purpose" />
        </div>
        <div class="services nav-item">
          <RotatingLink aria-label="Client hub" text="client hub" link="/client-hub" />
        </div>
        <div class="contact-us nav-item">
          <RotatingLink aria-label="Contact" text="contact" link="/contact" />
        </div>
      </div>
      <span class="navigation-border" ref="navLine"></span>
    </div>
    <div class="mobile-nav">
      <div class="mobile-nav-top">

        <NuxtLink aria-label="Home page" to="/">
          <svg class="logo-short" width="90" height="18" viewBox="0 0 90 18" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd"
              d="M13.1075 0C20.1826 0 25.8693 3.30838 25.8693 8.80108C25.8693 14.2938 20.5061 18 12.7618 18C5.6867 17.9981 0 14.6897 0 9.12948C0 3.56922 5.34099 0 13.1075 0ZM3.07444 8.93994C3.07444 13.9616 7.23594 16.9416 12.9929 16.9416C18.4023 16.9416 22.7949 14.2206 22.7949 9.05629C22.7949 3.89199 18.6093 1.0565 12.8524 1.0565C7.443 1.0565 3.07259 3.755 3.07259 8.94182L3.07444 8.93994ZM57.1037 0.54045L57.1053 0.540816C54.1455 5.32783 50.7698 10.6083 47.7879 15.0425C44.8281 10.49 41.7777 5.44391 39.1414 0.54045C38.4481 0.585488 37.9157 0.609883 37.4073 0.609883C36.8989 0.609883 36.3905 0.587364 35.6972 0.54045C39.5352 6.05567 43.5802 12.4379 46.8635 18H47.1409C47.8091 17.0066 48.4786 16.0091 49.1499 15.009L49.1506 15.008L49.1508 15.0077C52.3815 10.1946 55.6539 5.3193 59.0227 0.54045C58.8156 0.587364 58.4218 0.587364 58.0521 0.587364C57.6833 0.587364 57.3127 0.587364 57.1053 0.540816L57.1055 0.54045H57.1037ZM71.5739 17.4168C71.8784 17.3914 72.1861 17.3657 72.4777 17.3657C72.7633 17.3657 73.0565 17.3903 73.3529 17.4152C73.5612 17.4326 73.771 17.4502 73.9808 17.4595C73.8883 16.1459 73.7497 14.1268 73.7256 10.6776H81.4238C87.1105 10.6776 90 9.45788 90 5.60905C90 1.76022 87.1105 0.54045 81.4238 0.54045C80.743 0.54045 78.6933 0.569389 76.8705 0.595123C75.4111 0.615728 74.0972 0.634278 73.7478 0.634278C73.2169 0.634278 72.6353 0.608214 72.0643 0.582625C71.6909 0.565888 71.322 0.549355 70.9747 0.54045C70.9864 0.696322 70.9984 0.847904 71.0104 1.00026C71.1177 2.36297 71.2298 3.78745 71.2298 8.89491C71.2298 13.1841 71.0884 15.5541 70.9943 17.1297C70.9875 17.2436 70.9809 17.3535 70.9747 17.4595C71.1693 17.4505 71.3709 17.4337 71.5739 17.4168ZM73.7256 9.41096C73.7256 4.62385 73.7737 3.05129 73.8421 1.78461H81.4238C85.0306 1.78461 87.1567 2.76981 87.1567 5.60905C87.1567 8.44829 85.0306 9.41096 81.4238 9.41096H73.7256Z" />
          </svg>
        </NuxtLink>

        <span class="icon-frame" @click="mobileMenuOpen()">

            <svg ref="ham" class="hamburger-icon" width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path ref="ham1" d="M0 1H30" stroke-linejoin="round" />
              <path ref="ham2" d="M0 10H30" stroke-linejoin="round" />
              <path ref="ham3" d="M0 19H30" stroke-linejoin="round" />
            </svg>
            <svg ref="closeham" class="close-icon" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path ref="closeham1" d="M1 22.2132L22.2132 0.999994" stroke-linejoin="round" />
              <path ref="closeham2" d="M1 1.2132L22.2132 22.4264" stroke-linejoin="round" />
            </svg>

        </span>
      </div>
      <div ref="mobileNav" class="mobile-nav-list">
        <div class="mobile-nav-list-wrapper">

        <div class="services nav-item">
          <NuxtLink aria-label="Services" @click="mobileMenuOpen(true)" to="/services">
            <RotatingText text="services" />
          </NuxtLink>
        </div>
        <div class="our-purpose nav-item">
          <NuxtLink aria-label="Our purpose" @click="mobileMenuOpen(true)"  to="/our-purpose">
            <RotatingText text="our purpose" />
          </NuxtLink>
        </div>
        <div class="services nav-item">
          <NuxtLink aria-label="Client hub" @click="mobileMenuOpen(true)"  to="/client-hub">
            <RotatingText text="client hub" />
          </NuxtLink>
        </div>
        <div class="contact-us nav-item">
          <NuxtLink aria-label="Contact" @click="mobileMenuOpen(true)"  to="/contact">
            <RotatingText text="contact us" />
          </NuxtLink>
        </div>

        </div>

      </div>
    </div>
  </div>
</template>
<script setup>
import RotatingText from "@/components/common/rotatingText.vue";
import RotatingLink from "@/components/common/rotatingLink.vue";
import gsap from "gsap";
import { onMounted, watch } from "vue";
import { Canvas } from "~/utils/canvas";

const props = defineProps({
  pageActive: Boolean
});

const openMobileNav = ref(false)

const mobileMenuOpen = (_routeChange) => {
  openMobileNav.value = _routeChange ? false : !openMobileNav.value

  if(openMobileNav.value){
    gsap.to('.mobile-nav-list' , {duration: 0.3 , height: 245, ease:'linear' })
    gsap.to('.hamburger-icon path' , {duration: 0.3 , opacity: 0, stagger: 0.1})
    gsap.to('.close-icon path' , {duration: 0.4 , opacity: 1, stagger: 0.15, delay: 0.45})
  }else{
    gsap.to('.mobile-nav-list' , {duration: 0.25 , height: 0 , ease:'linear'})
    gsap.to('.close-icon path' , {duration: 0.2 , opacity: 0, stagger: 0.10})
    gsap.to('.hamburger-icon path' , {duration: 0.3 , opacity: 1, stagger: 0.1, delay: 0.25})
  }
}

const ovpnav = ref(null);

const logoAnimateIn = () => {
  const logoAniDuration= 1;
  let tl = gsap.timeline({
    delay: 0,
  });
  const letterY = 30;
  tl.fromTo( '.svg-letter', { y:letterY } , {duration: logoAniDuration/10, y:0 , ease: 'linear', stagger: 0.05 } );
}

const navigationAniIn = () => {
  logoAnimateIn();

  let tl = gsap.timeline({
    delay: 0.15,
  });
  tl.to('.desktop-nav .nav-item a', { duration: 0.35, y: 0, opacity:1, ease: 'ease' , stagger: 0.05 })
  tl.fromTo('.navigation-border', { width: 0 }, { duration: 0.35, width: '84%' } , '-=0.55')

  gsap.fromTo('.mobile-nav-top', {y: -100, opacity:0 }, {duration: 0.55, opacity:1 , y: 0, ease: 'ease' , delay: 0.5})

}

onMounted(() => {
  Canvas.navigation = ovpnav.value;
});

watch(
  () => props.pageActive,
  (newValue, oldValue) => {
    if (newValue) {
      navigationAniIn();
    }
  }
);

</script>
<style lang="scss">

@import "assets/scss/_media_queries";
$padding: 8%;

.ovp-navigation {
  position: relative;
  z-index: 1;

  &.ovp-nav-small{
    .desktop-nav{
      transition: padding ease 0.3s;
      padding: 0px $padding 5px $padding;
    }
  }

  .icon-frame {
    width: 40px;
    height: 40px;
    text-align: center;
    position: relative;
    svg{
      left: 10px;
      top: 10px;
      position: absolute;
    }
    .close-icon{
      path{
        opacity: 0;
      }
    }
  }

  .mobile-nav-list {
    transition: ease all 0.3s;
    position: fixed;
    top: 65px;
    left: 0px;
    z-index: 10;
    box-sizing: border-box;
    margin: 0vw 3% 0vw 3%;
    width: 94%;
    overflow: hidden;
    height: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: var(--white);
    .nav-item{
      a {
        font-size: 20px;
        color: var(--blue-secondary);
        &.router-link-active{
          color: var(--blue-primary);
        }
      }
    }
  }

.mobile-nav-list-wrapper{
  padding: 35px 30px 35px 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;

}
  .desktop-nav {
    transition: padding ease 0.3s;
    position: fixed;
    top: 0;
    left: 0px;
    z-index: 1;
    width: calc(100% - $padding*2);
    background: transparent;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: var(--padding-5xl) $padding var(--padding-5xl) $padding;

    @include respond-width($w-m-xs){
      display: none;
    }

    &:after{
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -1;
      transition: backdrop-filter 0.3s linear;
      backdrop-filter: blur(30px);
    }

    .menu {
      position: relative;
      top: 5px;
    }

    .navigation-border {
      transition: ease all 0.3s;
      position: absolute;
      bottom: 0px;
      left: $padding;
      width: 0%;
      height: 1px;
      background-color: var(--ovp-neutral-white);
    }

    .nav-item {
      overflow: hidden;
      a{
        //opacity: 0;
        transform: translateY(35px);
        display: block;
        position: relative;
        &.router-link-active{
          font-weight: 800;
        }
      }
    }

  }

  .nav-item {
    display: inline-block;
    line-height: 18px;
    margin: 0 10px;
    @include respond-width($w-m-s){
      margin: 0 0px;
    }

    a {
      padding: 15px;
      transition: ease all 0.3s;
      font-family: var(--body-07-regular);
      color: var(--ovp-neutral-white);
      text-decoration: none;
    }
  }

  .mobile-nav{
    display: none;
    @include respond-width($w-m-xs){
      display: block;
    }
  }
  .mobile-nav-top {
    transition: ease border-color 0.3s;
    position: fixed;
    opacity: 0;
    top: 0;
    left: 0px;
    z-index: 10;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--ovp-neutral-white);
    margin: 0;
    padding: var(--padding-4) 10% var(--padding-3xs) 10%;
    width: 80%;

    &:after{
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -1;
      transition: backdrop-filter 0.3s linear;
      backdrop-filter: blur(30px);
    }

    .logo-short {
      transition: ease all 0.3s;
      fill: var(--white)
    }

    .hamburger-icon,
    .close-icon {
      transition: ease all 0.3s;
      stroke: var(--white);
    }
  }

  .logo {
    width: 300px;
    height: 14px;
    padding: 15px 0px;
    .svg-logo-color {
      transition: ease all 0.3s;
      fill: var(--white);
      path {
        transform: translate(0px, 20px);
      }
    }
  }

  &:not(.ovp-navigation-light) {

    .svg-logo-color {
      fill: var(--blue-secondary);
    }

    .mobile-nav-top {
      border-color: var(--blue-secondary);

      .logo-short {
        fill: var(--blue-secondary);
      }

      .hamburger-icon,
      .close-icon {
        stroke: var(--blue-secondary);
      }
    }

    .mobile-nav-list {
        background-color: var(--blue-primary);
      a {
        color: var(--white);
        &.router-link-active{
          color: var(--yellow);
        }
      }
      .navigation-border {
        background-color: var(--white);
      }
    }

    a {
      color: var(--blue-secondary)
    }

    .navigation-border {
      background-color: var(--blue-secondary);
    }
  }
}
</style>
