<template>
  <div class="wrapper">
    <sidemenu></sidemenu>
    <div class="overlay--white" @click.self="closeSidemenu"></div>
    <div class="main-content">
      <header>
        <MyHeader></MyHeader>
      </header>
      <main class="main">
        <!-- <img class="trail" v-for="step in genSteps" :key="step.index" src="@/assets/fox-trail.svg" width="40" height="22px" :style="{ top: step.x + 'px' , right: step.y + 'px', transform: 'rotate(' + step.r + 'deg)' }"> -->
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
import {tableGames} from '@/data.js'
//import {router} from '@/router/index.js'

export default {
  name: 'App',
  components: {
    sidemenu,
    MyHeader,
    MyFooter,
  },
  data() {
    return {
      // step: Object,
      steps: [
        { x : 217, y: 19, r: 18 },
        { x : 217, y: 19, r: 18 },
        { x : 200, y: 78, r: 11 },
        { x : 160, y: 130, r: 18 },
        { x : 97, y: 161, r: 28 },
        { x : 65, y: 213, r: 30 },
        { x : 14, y: 236, r: 30 },
        { x : 0, y: 287, r: 27 },
        { x : -30, y: 328, r: 39},        
      ],
      genSteps : [],
      tableGames,
      categoryTree:[],
      categorySlug: false

    }
  },
  methods: {
    closeSidemenu() {
      document.querySelector('.sidemenu').classList.toggle('sidemenu--opened')
      document.querySelector('.overlay--white').classList.toggle('overlay--white--show')
    },
    processStep()  {
      setTimeout(() => {
        const newStep = this.steps.shift()
        this.genSteps = [...this.genSteps, newStep]
        if (this.steps.length <= 0) {
          this.steps = this.genSteps.splice(0,10)
        }
        this.processStep();
      }, 1000)
    },
    loadCategories() {
      fetch('http://127.0.0.1:8000/api/categories')
        .then((response) => {
          if(response.ok) {
            return response.json();
          }
        
          throw new Error('Network response was not ok');
        })
        .then((json) => {

          json.forEach(element => {
            
            let _children = [];
            if (typeof element.childs !== 'undefined') {
              
              element.childs.forEach(_child => {

                let __children = [];
                  if (typeof _child.childs !== 'undefined') {
                    
                    _child.childs.forEach(__child => {
                          this.categoryTree[__child.id] =  __child.slug;
                          __children.push({
                            name: __child.name,
                            id: __child.id,
                            slug: __child.slug,
                          })
                      })
                  }

                  this.categoryTree[_child.id] =  _child.slug;
                  _children.push({
                    name: _child.name,
                    id: _child.id,
                    slug: _child.slug,
                    subcategorys: __children,
                  })
              })
            }

            this.categoryTree[element.id] =  element.slug;
            this.tableGames.push({
                name: element.name,
                id: element.id,
                icon: require('@/assets/catalog_icon_party.png'),
                subcategorys: _children,
                slug: element.slug
            });
          });
          this.$store.commit('SET_TREE', this.categoryTree);
        })
        .catch((error) => {
          console.log(error);
        });
    },

  },
  mounted() {
    this.processStep();
    
    // let foxTrail = () => {
    //   for (let i = 0; i <= 11; i++) {
    //     let trail = document.createElement('div');
    //     trail.className = "trail"
    //     trail.style.right = Math.round(i/2) + 4*i + `9px`
    //     trail.style.top = 10 - i + `4px`
        
    //     setTimeout(() => {
    //       document.querySelector('.header').append(trail)
    //     },1100*(i + 1))

    //     setTimeout(() => {
    //       let trail = document.querySelector('.trail')
    //       trail.style.opacity = 0

    //       setTimeout(() => {
    //         trail.parentNode.removeChild(trail)
    //       },700)
          
    //     },1300*(i + 3))
    //   }
    // };

    // let foxTrailSideMenu = () => {
    //   for (let i = 0; i <= 4; i++) {
    //     let trail = document.createElement('div');
    //     trail.className = "trail--sidemenu"
    //     trail.style.left = Math.round(i/2) + 5*i + `7px`
    //     trail.style.bottom = 1 + i + `9px`
    //     //  trail.style.top = 10 + Math.round(i/2) + 2*i + `4`

    //     setTimeout(() => {
    //       document.querySelector('.sidemenu').append(trail)
    //     },1100*(i + 1))

    //     setTimeout(() => {
    //       let trail = document.querySelector('.trail--sidemenu')
    //       trail.style.opacity = 0

    //       setTimeout(() => {
    //         trail.parentNode.removeChild(trail)
    //       },600)
          
    //     },1300*(i + 2))
    //   }
    // };

    // setInterval(() => {
    //   foxTrail();
    // },120000)

    // setInterval(() => {
    //   foxTrailSideMenu();
    // },60000)
  },
  beforeMount() {
    this.loadCategories()
  }
}
</script>

<style>
/* .trail {
  position: absolute;
  height: 29px; width: 42px;
  background-image: url('~@/assets/fox-trail.svg');
  background-repeat: no-repeat;
  transform: rotate(15deg);
  transition: 1.5s;
}

.trail--sidemenu {
  position: absolute;
  height: 29px; width: 42px;
  background-image: url('~@/assets/fox-trail-sidemenu.svg');
  background-repeat: no-repeat;
  transform: rotate(-252deg);
  transition: 1.5s;
} */

.trail {
  position: absolute;
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
  position: relative;
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
  overflow: auto;
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

.error {
  color: white;
}

.error img{
  margin: auto auto;
}

.error h1{
  text-align: center;
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

