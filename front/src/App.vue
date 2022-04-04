<template>
  <div class="wrapper">
    <sidemenu></sidemenu>
    <div class="overlay--white" @click.self="closeSidemenu"></div>
    <div class="main-content">
      <header>
        <MyHeader></MyHeader>
      </header>
      <main class="main">
        <img
          class="trail"
          v-for="step in genSteps"
          :key="step"
          src="@/assets/fox-trail.svg"
          width="40"
          height="22px"
          :style="{
            top: step.x + 'px',
            right: step.y + 'px',
            transform: 'rotate(' + step.r + 'deg)',
          }"
        />
        <router-view />
      </main>
      <footer>
        <MyFooter></MyFooter>
      </footer>
    </div>
  </div>
</template>

<script>
import sidemenu from "@/components/sidemenu.vue";
import MyHeader from "@/components/my-header.vue";
import MyFooter from "@/components/my-footer.vue";
import { tableGames } from "@/data.js";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    sidemenu,
    MyHeader,
    MyFooter,
  },
  data() {
    return {
      step: Object,
      steps: [
        { x: 217, y: 19, r: 18 },
        { x: 200, y: 78, r: 11 },
        { x: 160, y: 130, r: 18 },
        { x: 97, y: 161, r: 28 },
        { x: 65, y: 213, r: 30 },
        { x: 14, y: 236, r: 30 },
        { x: 0, y: 287, r: 27 },
        { x: -30, y: 328, r: 39 },
      ],
      genSteps: [],
      tableGames,
      categoryTree: [],
      categorySlug: false,
    };
  },
  computed: {
    ...mapGetters(["CART"]),
  },
  methods: {
    closeSidemenu() {
      document.querySelector(".sidemenu").classList.toggle("sidemenu--opened");
      document
        .querySelector(".overlay--white")
        .classList.toggle("overlay--white--show");
    },
    processStep() {
      setTimeout(() => {
        const newStep = this.steps.shift();
        this.genSteps = [...this.genSteps, newStep];
        if (this.genSteps.length >= 5) {
          this.genSteps.shift();
        }
        this.processStep();
        if (this.steps.length <= 0) {
          this.genSteps.shift();
          this.genSteps.shift();
          this.genSteps.shift();
          this.genSteps.shift();
          clearTimeout(this.processStep);
        }
      }, 1000);
    },
    loadCategories() {
      fetch("http://api.foxhole.club/api/categories")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }

          throw new Error("Network response was not ok");
        })
        .then((json) => {
          json.forEach((element) => {
            let _children = [];
            if (typeof element.childs !== "undefined") {
              element.childs.forEach((_child) => {
                let __children = [];
                if (typeof _child.childs !== "undefined") {
                  _child.childs.forEach((__child) => {
                    this.categoryTree[__child.id] = __child.slug;

                    if (__child.image != null) {
                      __children.push({
                        name: __child.title,
                        id: __child.id,
                        slug: __child.slug,
                        content: __child.content,
                        img:
                          "http://api.foxhole.club/storage/catalog/category/source/" +
                          __child.image,
                      });
                    } else {
                      __children.push({
                        name: __child.title,
                        id: __child.id,
                        slug: __child.slug,
                        content: __child.content,
                        img: null,
                      });
                    }
                  });
                }

                this.categoryTree[_child.id] = _child.slug;
                if (_child.image != null) {
                  _children.push({
                    name: _child.title,
                    id: _child.id,
                    slug: _child.slug,
                    content: _child.content,
                    subcategorys: __children,
                    icon:
                      "http://api.foxhole.club/storage/catalog/category/source/" +
                      _child.image,
                  });
                } else {
                  _children.push({
                    name: _child.title,
                    id: _child.id,
                    slug: _child.slug,
                    content: _child.content,
                    subcategorys: __children,
                    icon: null,
                  });
                }
              });
            }

            this.categoryTree[element.id] = element.slug;

            if (element.image != null) {
              this.tableGames.push({
                name: element.title,
                id: element.id,
                subcategorys: _children,
                slug: element.slug,
                content: element.content,
                img:
                  "http://api.foxhole.club/storage/catalog/category/source/" +
                  element.image,
              });
            } else {
              this.tableGames.push({
                name: element.title,
                id: element.id,
                subcategorys: _children,
                slug: element.slug,
                content: element.content,
                img: null,
              });
            }
          });
          this.$store.commit("SET_TREE", this.categoryTree);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    ...mapActions(["ADD_TO_CART"]),
    getCookie() {
      if (this.$cookie.get("fox_cart")) {
        fetch(
          "http://api.foxhole.club/api/basket/" + this.$cookie.get("fox_cart")
        )
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok");
          })
          .then((json) => {
            json.products.forEach((item) => {
              this.ADD_TO_CART(item);
            });
          });
      } else {
        fetch("http://api.foxhole.club/api/basket")
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok");
          })
          .then((json) => {
            this.$cookie.set("fox_cart", json.token);
          });
      }
    },
  },
  mounted() {
    this.processStep();
    this.getCookie();
  },
  beforeMount() {
    this.loadCategories();
  },
  watch:{
    $route() {
      window.scrollTo(0,0)
    }
  }
};
</script>

<style>
.trail {
  position: absolute;
}

html {
  overflow-y: scroll;
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
  position: sticky;
  top: 0px;
  z-index: 99;
}

.h1,
h1 {
  color: #333333;
  font-weight: 300;
  font-size: 36px;
  line-height: 49px;
  font-family: "Nunito", "Arial", sans-serif;
  grid-column: 1 / -1;
  width: 100%;
  text-align: left;
  margin: 0;
}
.h1:hover {
  color: #de8f53;
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
  padding: 40px 0; 
}

.index {
  z-index: -1;
}

footer {
  flex: 0 0 auto;
  background-image: url("~@/assets/footer_background.svg");
  background-repeat: no-repeat;
  background-position: 0px 0px;
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
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
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
  z-index: 100;
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

.error img {
  margin: auto auto;
}

.error h1 {
  text-align: center;
}

@media (max-width: 1080px) {
  footer {
    min-height: 600px;
    background-image: url("~@/assets/footer-mobile.svg");
    background-position: -57px 0px;
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

