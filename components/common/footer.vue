<template>
  <footer class="ovp-scooter" v-scrollActive:top:scroll:footer="1" >
   <div class="main footer-ani-wrapper">
    <div class="section left">
      <div class="txt-l h2-regular">
        {{data.team.title1}}
      </div>
      <div class="txt-l h2-italic">
        &nbsp;{{data.team.title2}}
      </div>
      <div class="p-body1" v-html="data.team.txt"></div>
    </div>
    <div class="section right" v-set-data-attrs="{ cursorcolor:'light' }">
      <div class="txt-l h2-regular">
        {{data.business.title1}}
      </div>
      <div class="txt-l h2-italic">
        &nbsp;{{data.business.title2}}
      </div>
      <div class="p-body1" >
        <span v-html="data.business.txt" ></span>
        <br/>
        <NuxtLink aria-label="Contact"  class="" to="/contact" v-set-data-attrs="{cursorsize: 50, cursoropacity: 0.3 }">
          {{data.business.contact}}
        </NuxtLink>
      </div>
    </div>
    <div class="heel p-subtitle">
      <span class="ovp-footer-copyright">© {{dateYear}} OVP LTD. All Rights Reserved.</span>
      <span class="ovp-footer-links" v-set-data-attrs="{ cursorcolor:'light' }" >
        <span  v-for="(item, index) in data.links" :key="item.url" >
          <span v-if="item.target == '_self'" >
            <NuxtLink :aria-label="item.title"  class="ovp-footer-link" :to="item.url" v-set-data-attrs="{cursorsize: 50, cursoropacity: 0.3 }">
              {{item.title}}
            </NuxtLink>
          </span>
          <span v-else>
            <a :aria-label="item.title" v-set-data-attrs="{cursorsize: 50, cursoropacity: 0.3 }" class="ovp-footer-link" :href="item.url" target="_blank" rel="noopener noreferrer" >{{item.title}}</a><span v-if="Number(index) !== Number(data.links.length) - 1 " > | </span>
          </span>
        </span>
      </span>
    </div>
   </div>
  </footer>
</template>
<script setup>

const { data } = await useAsyncData('', () => queryContent('/footer').findOne())

const dateYear = new Date().getFullYear();

</script>
<style lang="scss" scoped>
@import "assets/scss/_media_queries";

.main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: var(--white);

  // we need this because of the body blue bg style
  background-color: white;
  border: none;
  position: relative;

  @include respond-width($w-s) {
    flex-direction: column;

  }

  .section {
    width: 50vw;
    height: 410px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    @include respond-width($w-s) {
      display: block;
      padding: 25px 0px;
      height: initial;
      width: 100%;
    }

    &.left {
      background-color: var(--blue-primary);
      border-radius: 20px 0px 0px 0px;
      @include respond-width($w-s) {
        border-radius: 20px 20px 0px 0px;
      }
    }

    &.right {
      background-color: var(--blue-secondary);
      border-radius: 0px 20px 0px 0px;
      @include respond-width($w-s) {
        border-radius: 0px 0px 0px 0px;
        padding-bottom: 50px;
      }
    }

    .txt-l{
      @include respond-width($w-s) {
        display: inline-block;
        padding-bottom: 5px;
      }
      &:first-child {
        position: relative;
        top: 30px;
        @include respond-width($w-s) {
          top: initial;
        }
      }
    }

  }

}

.heel {
  position: absolute;
  bottom: 0;
  width: 100vw;
  padding: 0 84px 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;

  .ovp-footer-link{
    color: var(--white);
    text-decoration: none;
  }

  @include respond-width($w-xs) {
    padding:  0 14px 10px;

    .ovp-footer-copyright{
      text-align: left;
    }

    .ovp-footer-links{
      white-space: nowrap;
    }
  }

}
</style>
