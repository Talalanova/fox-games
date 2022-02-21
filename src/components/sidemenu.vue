<template>
  <div class="sidemenu">
    <div class="sidemenu__logo">
      <a href="/">
        <img src="@/assets/logo.svg">
      </a>
    </div>
    <span class="sidemenu__item sidemenu__item--catalog">
      <router-link class="sidemenu__link" to="/Catalog">Каталог</router-link>
      <button class="sidemenu__button" @click="openCutCatalog"></button>
      </span>
    <span class="sidemenu__item"><router-link class="sidemenu__link" to="/about">О нас</router-link></span>
    <span class="sidemenu__item"><router-link class="sidemenu__link" to="/news">Новости</router-link></span>
    <span class="sidemenu__item"><router-link class="sidemenu__link" to="/games">Игротеки</router-link></span>
    <span class="sidemenu__item"><router-link class="sidemenu__link" to="/contacts">Контакты</router-link></span>
    <div ref="cutCatalog" class="sidemenu__cut-catalog cut-catalog" @mouseleave="openCutCatalog()">
      <vue-collapsible-panel-group accordion>
        <vue-collapsible-panel :expanded="false">
          <template #title>
            Настольные игры
          </template>
          <template #content>
            <div class="cut-catalog__list">
              <router-link to="/Category" v-for="category in categorys" v-bind:key="category.index">
                {{category.name}}
              </router-link>
            </div>
          </template>
        </vue-collapsible-panel>
        <vue-collapsible-panel :expanded="false">
          <template #title>
            Аксессуары
          </template>
          <template #content>
            <div class="cut-catalog__list">
              <router-link to="/Category" v-for="item in accessories" v-bind:key="item.index">
                {{item}}
              </router-link>
            </div>
          </template>
        </vue-collapsible-panel>
        <vue-collapsible-panel :expanded="false">
          <template #title>
            Книги и журналы
          </template>
          <template #content>
            <div class="cut-catalog__list">
              <router-link to="/Category" v-for="item in accessories" v-bind:key="item.index">
                {{item}}
              </router-link>
            </div>
          </template>
        </vue-collapsible-panel>
        <vue-collapsible-panel :expanded="false">
          <template #title>
            Мерч и сувениры
          </template>
          <template #content>
            <div class="cut-catalog__list">
              <router-link to="/Category" v-for="item in accessories" v-bind:key="item.index">
                {{item}}
              </router-link>
            </div>
          </template>
        </vue-collapsible-panel>
        <vue-collapsible-panel :expanded="false">
          <template #title>
            Миниатюрки
          </template>
          <template #content>
            <div class="cut-catalog__list">
              <router-link to="/Category" v-for="item in accessories" v-bind:key="item.index">
                {{item}}
              </router-link>
            </div>
          </template>
        </vue-collapsible-panel>
      </vue-collapsible-panel-group>
    </div>
  </div>
</template>

<script>
import { accessories, categorys } from '@/data.js'

import  { VueCollapsiblePanelGroup, VueCollapsiblePanel } from '@dafcoe/vue-collapsible-panel'
import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css'

export default {
  name: 'sidemenu',
  data() {
    return {
      accessories,
      categorys,
    }
  },
  methods: {
    openCutCatalog() {
      document.querySelector('.main').classList.toggle('index')
      this.$refs.cutCatalog.classList.toggle('sidemenu__cut-catalog--opened');
    }
  },components: {
    VueCollapsiblePanelGroup,
    VueCollapsiblePanel,
  } 
}
</script>

<style scoped>

.sidemenu {
  background: -webkit-linear-gradient(180deg, rgb(255, 175, 102) 1%, rgb(75, 1, 1) 95%);
  background: -moz-linear-gradient(180deg, rgb(255, 175, 102) 1%, rgb(75, 1, 1) 95%);
  background: linear-gradient(180deg, rgb(255, 175, 102) 1%, rgb(75, 1, 1) 95%);
  display: flex;
  flex-direction: column;
  border-radius: 0 40px 30px 0;
  position: relative;
  padding: 40px 0 0;
  width: 240px;
  position: fixed;
  top: 0;
  bottom: 0;
}

.sidemenu::after {
  position: absolute;
  bottom: 10px;
  width: 240px;
  height: 47px;
  content: "";
  background-image: url('~@/assets/sidemenu_bottom-green.svg');
  background-repeat: no-repeat;
  bottom: 0;
  left: 0;
}

.sidemenu::before {
  position: absolute;
  top: 0;
  width: 274px;
  height: 75px;
  content: "";
  background-image: url('~@/assets/sidemenu_leafs.svg');
  background-repeat: no-repeat;
  left: 0;
  z-index: 10;
}

.sidemenu__logo {
  margin-bottom: 40px;
}

.sidemenu__logo img {
  margin: 0 auto;
}

.sidemenu__button {
  width: 28px;
  height: 28px;
  background-image: url('~@/assets/catalog_icon_arrow.svg');
  background-repeat: no-repeat;
  transition: 0.5s;
  border: none;
  border-radius: 5px;
  background-color: white;
  margin: auto;
  cursor: pointer;
  margin-left: -35px;
  z-index: 2;
  transform: rotate(-90deg);
}

.sidemenu__button:hover {
  background-image: url('~@/assets/catalog_icon_arrow-down.svg')
}

.sidemenu__link {
  text-decoration: none;
  font-size: 24px;
  line-height: 35px;
  font-weight: 700;
  color: white;
  padding: 15px 0;
}

.sidemenu__item {
  padding: 0 0 0 40px;
}

.sidemenu__item--catalog {
  display: grid;
  grid-template-columns: 200px 30px;
}

.sidemenu__item .router-link-exact-active {
  position: relative;
  z-index: 2;
  color: #4B0101;
  background-color: white;
  border-radius: 35px 0 0 35px;
  transition: animation 1s;
  cursor: pointer;
  animation-duration: 1s;
  animation-name: slideUp;
}

.sidemenu__item .router-link-exact-active::after {
  position: absolute;
  content: "";
  width: 30px;
  height: 140px;
  right: -1px;
  bottom: -39px;
  background-image: url('~@/assets/sidemenu_background.svg');
  z-index: -1;
  background-repeat: no-repeat;
}

.sidemenu__item .router-link-exact-active::before {
  position: absolute;
  content: "";
  width: 90px;
  height: 21px;
  left: 6px;
  bottom: -1px;
  background-image: url('~@/assets/sidemenu_green.svg');
  z-index: -1;
  background-repeat: no-repeat;
}

@keyframes slideUp {
  from {
  transform: translate(0,50px);
  }

  to {
    transform: translate(0,0);
  }
}

@keyframes slideDown {
  from {
  transform: translate(0,-50px);
  }

  to {
    transform: translate(0,0);
  }
}

.sidemenu__cut-catalog {
  background-color: white;
  border-radius: 20px;
  border: 1px solid #CB7D49;
  padding: 25px 0;
  position: absolute;
  left: 105%;
  top: 90px;
  z-index: 100;
  min-width: 240px;
  font-size: 18px;
  line-height: 25px;
  display: none;
  overflow: hidden;
}

.sidemenu__cut-catalog--opened {
  display: block;
}

.cut-catalog__list  {
  list-style: none;
  padding: 0;
  margin: 0;
}

.cut-catalog__list a {
  color: #4B0101;
}
.cut-catalog__list a:hover {
  color: #6A1F12;
}
</style>