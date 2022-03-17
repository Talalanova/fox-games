<template>
  <div class="category">
    <SortingBar></SortingBar>
    <h1>{{ this.$route.params.category }}</h1>
    <hr>
    <Breadcrumbs>
      <router-link to="/">Главная</router-link>
      <router-link to="/Catalog">Каталог</router-link>
      <router-link to="/Catalog">{{ this.$route.params.category }}</router-link>
    </Breadcrumbs>
    <div class="intro">
      <span class="intro__text">
        Приехав в Аркхэм и добравшись по грязным переулкам до особняков, вы сразу понимаете, что они покинуты и привычных обитателей внутри точно нет. Дома явно покидали в спешке... Вы также чувствуете напряжённость и ощущение чего-то потустороннего, опасного и необъяснимого. Сыщики без работы не останутся точно.
      </span>
      <span class="intro__pic">
        <img src="@/assets/intro.png" width="270" height="200">
      </span>
    </div>
    <div class="section__content">
      <ItemCard :itemData ="product" @addToCart="addToCart" v-for="product in products" :key="product"></ItemCard>  
    </div>
    <Pagination v-if="paginationTotal > perPage" :perPage="15" :page="1" :totalGoods="paginationTotal" @updatePage="updatePage"></Pagination>
  </div>
</template>

<script>

import ItemCard from '@/components/item-card.vue'
import SortingBar from '@/components/sorting-bar.vue'
import Breadcrumbs from '@/components/breadcrumbs.vue'
import Pagination from '@/components/pagination.vue'
import {mapActions, mapGetters} from 'vuex'

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
      
    }
  },
  methods: {
    loadProducts(page = 1) {
      
      this.products = [];
      // eslint-disable-next-line no-unused-vars
      let catId = 0
      let app = this
      if (this.$store.getters.TREE.length) {
        let slug = this.$route.params.category
        this.$store.getters.TREE.forEach((item,index) => {
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
          
          this.paginationTotal = json.total
          console.log(json.data)
          json.data.forEach(element => {

            let _images = []

            element.images.forEach( item => {
              _images.push(item.path)
            })
            
            let product = {
              discont: element.discount,
              id: element.id,
              slug: element.slug,
              inStock: element.status.id,
              title: element.title,
              desc: element.description,
              price : element.price,
              age : element.age_from + '-' + element.age_to + ' лет',
              time : element.game_time + ' мин',
              players : element.players_from + '-' + element.players_to,                    
              pics: _images,
              description: element.description,                    
            }
            this.products.push(product);
            console.log(this.products)               
          })                
        })
   },
   updatePage(page) {
    this.loadProducts(page)
   },
    addToCart(data) {
      this.ADD_TO_CART(data)
    },
    ...mapActions([
      'ADD_TO_CART'
    ])
  },
  mounted() {
    this.loadProducts();
  },
  watch:{    
    $route (){
        if (typeof this.$route.params.category !== 'undefined') {
          this.categorySlug = this.$route.params.category
        }
        if (typeof this.$route.params.subcategory !== 'undefined') {
          this.subcategorySlug = this.$route.params.subcategory
        }
       this.loadProducts();
      },
      
  },
  computed: {
    ...mapGetters([
        'CART'
    ]),
  }
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
