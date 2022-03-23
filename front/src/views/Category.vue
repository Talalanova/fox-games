<template>
  <div class="category">
    <SortingBar @renderFilteredProducts="renderFilteredProducts"></SortingBar>
    <h1>{{ categoryTitle }}</h1>
    <hr>
    <Breadcrumbs>
      <router-link to="/">Главная</router-link>
      <router-link to="/Catalog">Каталог</router-link>
      <router-link to="/Catalog">{{ categoryTitle }}</router-link>
    </Breadcrumbs>
    <div class="intro">
      <span class="intro__text">
        {{ categoryDescription }}
      </span>
      <span class="intro__pic">
        <img :src="categoryImg" width="" height="">
      </span>
    </div>
    <div class="section__content">
      <ItemCard :itemData ="product" v-for="product in products" :key="product"></ItemCard>
    </div>
    <Pagination v-if="paginationTotal > perPage" :perPage="15" :page="1" :totalGoods="paginationTotal" @updatePage="updatePage"></Pagination>
  </div>
</template>

<script>

import ItemCard from '@/components/item-card.vue'
import SortingBar from '@/components/sorting-bar.vue'
import Breadcrumbs from '@/components/breadcrumbs.vue'
import Pagination from '@/components/pagination.vue'
import {tableGames} from '@/data.js'

export default {
  name: 'Category',
  components: {
    ItemCard,
    SortingBar,
    Breadcrumbs,
    Pagination
  },
  data() {
    return {
      products: [],
      categories: this.categories,
      hasPagination: true,      
      paginationTotal: false,
      catalogRendered: false,
      waitForCatTree: false,
      tableGames,
      categoryDescription: '',
      categoryTitle: '',
      categoryImg: ''
    }
  },
  methods: {
    loadProducts(page = 1) {
      this.tableGames.forEach(item => {
        if (item.slug == this.$route.params.category) {
          this.categoryDescription = item.content
          this.categoryTitle = item.name
          this.categoryImg = item.img
        } else {            
            item.subcategorys.forEach(item => {

              if (item.slug == this.$route.params.category) {
                this.categoryDescription = item.content
                this.categoryTitle = item.name
                this.categoryImg = item.icon
              }

              if (this.$route.params.subcategory) {
                item.subcategorys.forEach(item => {
                  if (item.slug == this.$route.params.subcategory) {
                    this.categoryDescription = item.content
                    this.categoryTitle = item.name
                    this.categoryImg = item.img
                  }
                })
              }
            })            
          }
      })

      this.products = [];
      // eslint-disable-next-line no-unused-vars
      let catId = 0
      let app = this
      if (this.$store.getters.TREE.length) {

        let slug = this.$route.params.category
        let slug2 = this.$route.params.subcategory

        this.$store.getters.TREE.forEach((item,index) => {
          if (item == slug2) catId = index;
          if(item == slug) catId = index;
          return false;
        })

      } else {
        let self = this;
        this.waitForCatTree = setInterval(function() {
          if (typeof self.$store.getters.TREE !== "undefined") {
            clearInterval(app.waitForCatTree);
            app.loadProducts()
          }
        },1000)
        return false;
      }
      
      fetch('http://api.foxhole.club/api/categories/' + catId +'?page=' + page)
        .then((response) => {
          if(response.ok) return response.json();
        })
        .then((json) => {
          
          if(json.total) this.paginationTotal = json.total

          json.data.forEach(element => {

            let _images = []

            element.images.forEach( item => {
              _images.push('http://api.foxhole.club/files/' + item.path)
            })
            
            let product = {
              discont: element.discount,
              id: element.id,
              slug: element.slug,
              inStock: element.status,
              title: element.title,
              desc: element.description,
              price : element.price,
              age : element.age_from + '-' + element.age_to,
              time : element.game_time,
              players : element.players_from + '-' + element.players_to,                    
              pics: _images,
              description: element.description,
              amount: element.amount                
            }
            this.products.push(product);   
          })                
        })
   },
    updatePage(page) {
      this.loadProducts(page)
    },
    renderFilteredProducts(json) {
      this.products = []
      json.data.forEach(element => {

        let _images = []

        element.images.forEach( item => {
          _images.push('http://api.foxhole.club/files/' + item.path)
        })
        
        let product = {
          discont: element.discount,
          id: element.id,
          slug: element.slug,
          inStock: element.status,
          title: element.title,
          desc: element.description,
          price : element.price,
          age : element.age_from + '-' + element.age_to + ' лет',
          time : element.game_time + ' мин',
          players : element.players_from + '-' + element.players_to,                    
          pics: _images,
          description: element.description,
          amount: element.amount
        }
        this.products.push(product);   
      }) 
    }
  },
  mounted() {
    this.loadProducts();
  },
  watch:{
    $route(){
        if (typeof this.$route.params.category !== 'undefined') {
          this.categorySlug = this.$route.params.category
        }
        if (typeof this.$route.params.subcategory !== 'undefined') {
          this.subcategorySlug = this.$route.params.subcategory
        }
       this.loadProducts();
      }, 
  },
}
</script>

<style scoped>
.category {
  padding: 40px 10px;
  position: relative;
}

.intro {
  display: grid;
  grid-template-columns: auto 270px;
  column-gap: 30px;
  padding: 30px 0;
}

.intro__text {
  border: 1px solid #CB7D49;
  border-radius: 15px;
  padding: 15px;
  font-size: 24px;
  line-height: 25px;
  word-break: break-word;
  text-align: left;
}

@media (max-width: 1080px) {
  .intro {
    grid-template-rows: auto auto;
    grid-template-columns: auto;
    padding: 20px 0;
  }

  .intro__text {
    font-size: 22px;
    line-height: 22px;
  }

  .category h1 {
    margin-bottom: 31px;
  }

}
</style>
