<template>
  <div class="sidemenu">
    <div class="sidebar__logo">
      <router-link to="/">
        <img src="../assets/logo.svg">
      </router-link>
    </div>
    
    <router-link to="/about">About</router-link>
    <router-link to="/cart">cart</router-link>
    <router-link to="/news">news</router-link>
    <router-link to="/contacts">contacts</router-link>
    <router-link to="/games">games</router-link>
    <router-link to="/item-full">item-full</router-link> 
    <router-link to="/noveltys">noveltys</router-link>
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
}

.sidemenu a {
  margin: 0 10px;
}
</style>