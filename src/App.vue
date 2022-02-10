<template>
  <div class="wrapper">
    <sidemenu></sidemenu>
    <div class="main-content">
      <header>
        <MyHeader></MyHeader>
      </header>
      <main>
        <router-view/>
      </main>
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
    MyFooter,
  }
}
</script>

<style>
html,
body {
  height: 100%;
}

body {
  box-sizing: border-box;
  max-width: 1600px;
  min-width: 320px;
  margin: auto;
}

#app {
  font-family: "Nunito", "Arial", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333333;
  height: inherit;
}

a {
  display: block;
}
.wrapper {
  display: grid;
  grid-template-columns: 240px auto;
  column-gap: 20px;
  height: 100%;
}

header {
  display: flex;
  align-items: end;
}
.main-content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

main {
  flex: 1 0 auto
}

footer {
  flex: 0 0 auto;
  background-image: url("./assets/footer_background.svg");
  background-repeat: no-repeat;
  background-position: right 45px;
  min-height: 430px;
  display: flex;
  align-items: end;
  padding-bottom: 45px;
}
</style>
