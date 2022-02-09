<template>
  <div class="wrapper">
    <sidemenu></sidemenu>
    <div class="main-content">
      <header>
        <MyHeader></MyHeader>
      </header>
      <div class="main">
        <router-view/>
      </div>
      <footer>
        <MyFooter></MyFooter>
      </footer>
    </div>
  </div>  
</template>

<script>
// @ is an alias to /src
import sidemenu from '@/components/sidemenu.vue'
import MyHeader from '@/components/my-header.vue'
import MyFooter from '@/components/my-footer.vue'

export default {
  name: 'App',
  components: {
    sidemenu,
    MyHeader,
    MyFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.wrapper {
  display: grid;
  grid-template-columns: 240px auto;
  column-gap: 20px;
}

</style>
