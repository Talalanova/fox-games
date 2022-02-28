<template>
  <div class="wrapper">
    <sidemenu></sidemenu>
    <div class="overlay"></div>
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
  width: 100%;
}

body {
  box-sizing: border-box;
  margin: 0;
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
  height: auto;
}

.wrapper {
  display: grid;
  grid-template-columns: 240px auto;
  /* grid-template-columns: 1fr auto; */
  max-width: 1500px;
  min-width: 350px;
  margin: 0 auto;
  /* column-gap: 110px; */
  column-gap: 5%;
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
  /* width: 1145px; */
  /* margin-left: 350px; */
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

.overlay {
  position: fixed; 
  display: none; 
  width: 100%; 
  height: 100%; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5); 
  z-index: 2; 
  cursor: pointer; 
}

@media (max-width: 1080px) {
  footer {
    min-height: 600px;
    background-image: url("~@/assets/footer-mobile.svg");
  }
  .wrapper {
    display: block;
  }

  .main-content {

  }

  h1 {
    font-size: 24px;
    line-height: 28px;
  }
}
</style>
