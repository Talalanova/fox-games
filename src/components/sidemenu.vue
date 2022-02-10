<template>
  <div class="sidemenu">
    <div class="sidemenu__logo">
      <router-link to="/">
        <img src="../assets/logo.svg">
      </router-link>
    </div>
    <span class="sidemenu__item sidemenu__item--active"><router-link to="/Catalog">Каталог</router-link></span>
    <span class="sidemenu__item"><router-link to="/about">О нас</router-link></span>
    <span class="sidemenu__item"><router-link to="/news">Новости</router-link></span>
    <span class="sidemenu__item"><router-link to="/games">Игротеки</router-link></span>
    <span class="sidemenu__item"><router-link to="/contacts">Контакты</router-link></span>
  </div>
</template>

<script>
export default {
  name: 'sidemenu',

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
}

.sidemenu__logo {
  margin-bottom: 40px;
}

.sidemenu a {
  text-decoration: none;
  font-size: 24px;
  line-height: 36px;
  font-weight: 700;
}
.sidemenu__item {
  height: 65px;
}

.router-link-exact-active {
  position: relative;
  z-index: 2;
}

.router-link-exact-active {
  color: #4B0101;
}

.router-link-exact-active::after {
  position: absolute;
  content: "";
  width: 237px;
  height: 168px;
  right: -33px;
  bottom: -49px;
  background-image: url('../assets/sidemenu_background.svg');
  z-index: -1;
  transition: 0.5s;
}
</style>