<template>
  <div ref="sidemenu" class="sidemenu">
    <div class="sidemenu__logo">
      <a href="/">
        <img src="@/assets/logo.svg">
      </a>
    </div>
    <span class="sidemenu__item sidemenu__item--catalog">
      <router-link class="sidemenu__link" to="/Catalog">Каталог</router-link>
      <button ref="sidemenuButton" class="sidemenu__button" @click="openCutCatalog"></button>
    </span>
    <div ref="cutCatalog" class="sidemenu__cut-catalog cut-catalog" id="sidemenuCutCatalog">
      <vue-collapsible-panel-group v-for="item in tableGames" :key="item" accordion style="--bg-color-header:#fff;--bg-color-header-hover: #DE8F53;--bg-color-header-active: #DE8F53;--bg-color-body: #FFE5CD;--border-color:#FFE5CD">
        <vue-collapsible-panel :expanded="false">
          <template #title>
            {{ item.name }}
          </template>
          <template #content>
            <div class="cut-catalog__list" @click="closeCatalogOnMobile">
              <router-link :to="'/Category/' + item.slug + '/' + category.slug" v-for="category in item.subcategorys" v-bind:key="category.index">
                {{category.name}}
              </router-link>
            </div>
          </template>
        </vue-collapsible-panel>

      </vue-collapsible-panel-group>
    </div>
    <span class="sidemenu__item"><router-link class="sidemenu__link" to="/about">О нас</router-link></span>
    <span class="sidemenu__item"><router-link class="sidemenu__link" to="/news">Новости</router-link></span>
    <span class="sidemenu__item"><router-link class="sidemenu__link" to="/games">Игротеки</router-link></span>
    <span class="sidemenu__item"><router-link class="sidemenu__link" to="/contacts">Контакты</router-link></span>
    <div class="sidemenu__ad">
      <img :src='sidemenuAd.img' width="110" height="100">
      <span>
        <router-link to="/stocks">
          {{ sidemenuAd.text }}
        </router-link>        
        </span>
    </div>
  </div>
</template>

<script>
import { otherCategorys, tableGames, sidemenuAd } from '@/data.js'

import  { VueCollapsiblePanelGroup, VueCollapsiblePanel } from '@dafcoe/vue-collapsible-panel'
import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css'

export default {
  name: 'sidemenu',
  data() {
    return {
      otherCategorys, 
      tableGames,
      sidemenuAd
    }
  },
  methods: {
    openCutCatalog() {
      document.querySelector('.main').classList.toggle('index')
      this.$refs.cutCatalog.classList.toggle('sidemenu__cut-catalog--opened');
      this.$refs.sidemenuButton.classList.toggle('sidemenu__button--clicked');
      document.querySelector('.main-content').addEventListener('click', () => {
        if (this.$refs.cutCatalog.classList.contains('sidemenu__cut-catalog--opened')) {
          this.$refs.cutCatalog.classList.toggle('sidemenu__cut-catalog--opened');
          document.querySelector('.main').classList.toggle('index')
          this.$refs.sidemenuButton.classList.toggle('sidemenu__button--clicked');
        }
      })
    },
    closeCatalogOnMobile() {
      if (window.innerWidth <= 1080) {
        this.openCutCatalog()
        document.querySelector('.overlay--white').classList.toggle('overlay--white--show')
        this.$refs.sidemenu.classList.toggle('sidemenu--opened')
      }
    },
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
  /* padding: 40px 0 0; */
  width: 240px; 
  position: fixed;
  max-width: 240px;
  top: 0;
  bottom: 0;
  height: 100%;
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
  margin: 40px 0;
  max-width: 320px;
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
  background-color: inherit;
  margin: auto;
  cursor: pointer;
  margin-left: -35px;
  z-index: 2;
}

.sidemenu__button:hover {
  background-image: url('~@/assets/catalog_icon_arrow-fill.svg');
}

.sidemenu__button--clicked {
  transform: rotate(-90deg);
}

.sidemenu__link {
  text-decoration: none;
  font-size: 24px;
  line-height: 35px;
  font-weight: 700;
  color: white;
  padding: 15px 0 15px 20px;
}

.sidemenu__item {
  padding: 0 0 0 30px;
  text-align: left;
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

.sidemenu__item .router-link-exact-active + .sidemenu__button {
  background-image: url('~@/assets/catalog_icon_arrow-fill.svg');
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

.sidemenu__item--catalog .router-link-exact-active::after {
  right: -11px;
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
  top: 60px;
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
  text-align: left;
}

.cut-catalog__list a {
  color: #4B0101;
}
.cut-catalog__list a:hover {
  color: #6A1F12;
}

.sidemenu__ad {
  margin: auto auto 0;
  background-image: url('~@/assets/sidemenu-add.png');
  background-repeat: no-repeat;
  min-height: 210px;
  min-width: 190px;
  word-break: break-word;
  z-index: 10;
}

.sidemenu__ad a {
  color: white;
  font-size: 14px;
  line-height: 19px;
  font-weight: 600;
}

.sidemenu__ad  img {
  margin: 0 auto;
  margin-top: 55px;
}

.sidemenu__ad span {
  max-width: 110px;
  display: inline-block;
  margin-top: 8px;
}


@media (max-width: 1080px) {

  .sidemenu {
    z-index: 3;
    /* height: 100%; */
    display: none;
    border-radius: 0;
    overflow: auto;
  }

  .sidemenu--opened {
    display: flex;
  }

  .sidemenu__cut-catalog--opened {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    border-radius: 0;
    padding: 0;
    overflow: auto;
  }

  .sidemenu::after {
    background-image: none;
  }
}

</style>