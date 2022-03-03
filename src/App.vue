<template>
  <div class="wrapper">
    <sidemenu></sidemenu>
    <div class="overlay--white" @click.self="closeSidemenu"></div>
    <div class="main-content">
      <header>
        <MyHeader></MyHeader>
      </header>
      <main class="main" @mouseenter="foxTrail()"> <!-- -->
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
  },
  methods: {
    closeSidemenu() {
      document.querySelector('.sidemenu').classList.toggle('sidemenu--opened')
      document.querySelector('.overlay--white').classList.toggle('overlay--white--show')
    },
    foxTrail() {
      for (let i = 0; i < 6; i++) {
        let trail = document.createElement('div');
        trail.className = "trail"
        trail.style.right = i + `9px`
        trail.style.bottom = i + `10px`   
        setTimeout(() => {
          document.querySelector('.main').append(trail)
        },1500*(i + 1))
        
      }
    }
  }
}
</script>

<style>
.trail {
  position: absolute;
  height: 27px; width: 40px;
  background-image: url('~@/assets/fox-trail.svg');
  background-repeat: no-repeat;
}

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
  max-width: 1550px;
  min-width: 350px;
  margin: 0 auto;
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
  margin-left: 350px;
  height: 100%;
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
  background-position: -30px 0px;
  min-height: 415px;
  display: flex;
  align-items: end;
}

.overlay {
  position: fixed; 
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

.overlay--white {
  position: fixed; 
  width: 100%; 
  height: 100%; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.904); 
  z-index: 2; 
  cursor: pointer;
  display: none;
}

.overlay--white--show {
  display: block;
}

.text-hidden {
  -ms-text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  -ms-line-clamp: 10;
  -webkit-line-clamp: 10;
  line-clamp: 10;
  display: -webkit-box;
  display: box;
  word-wrap: break-word;
  -webkit-box-orient: vertical;
  box-orient: vertical;
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
    margin-left: 0;
  }

  h1 {
    font-size: 24px;
    line-height: 28px;
  }
}
</style>
