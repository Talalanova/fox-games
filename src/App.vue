<template>
  <div class="wrapper">
    <sidemenu></sidemenu>
    <div class="main-content">
      <header>
        <MyHeader></MyHeader>
      </header>
      <main class="main">
        <router-view/>
      </main>
      <footer>
        <MyFooter></MyFooter>
      </footer>
      <div class="fox-trail"></div>
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
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

.wrapper {
  display: grid;
  grid-template-columns: 240px auto;
  column-gap: 110px;
  height: 100%;
}

header {
  display: flex;
  align-items: end;
}

h1 {
  font-weight: 300;
  font-size: 36px;
  line-height: 49px;
  font-family: "Nunito", "Arial", sans-serif;
  grid-column: 1 / -1;
  width: 100%;
  text-align: left;
  margin: 0;
}

.main-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 350px;
  width: 1150px;
}

main {
  flex: 1 0 auto;
}

.index {
  z-index: -1;
}

footer {
  flex: 0 0 auto;
  background-image: url("~@/assets/footer_background.svg");
  background-repeat: no-repeat;
  background-position: -70px 0px;
  min-height: 360px;
  display: flex;
  align-items: end;
  padding-bottom: 45px;
}

/* .fox-trail {
  background: url('~@/assets/fox-trail.png') 0 0 no-repeat;
  position: absolute;
  top: 100px;
  width: 1100px;
  height: 120px;
  animation: slideIn 15s;
}

@keyframes slideIn {
  0%{
    transform: translate(100%, 0)
  }
  100% {
    transform: translate(-100%, 0)
  }
} */
</style>
