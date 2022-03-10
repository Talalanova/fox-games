<template>
  <div class="category">
    <SortingBar></SortingBar>
    <h1>{{ title }}</h1>
    <hr>
    <Breadcrumbs>
      <router-link to="/">Главная</router-link>
      <router-link to="/Catalog">Каталог</router-link>
      <router-link to="/Catalog">Название категории</router-link>
      <router-link to="/Catalog">Название подкатегории</router-link>
    </Breadcrumbs>
    <div class="intro">
      <span class="intro__text">
        Приехав в Аркхэм и добравшись по грязным переулкам до особняков, вы сразу понимаете, что они покинуты и привычных обитателей внутри точно нет. Дома явно покидали в спешке... Вы также чувствуете напряжённость и ощущение чего-то потустороннего, опасного и необъяснимого. Сыщики без работы не останутся точно.
      </span>
      <span class="intro__pic">
        <img src="@/assets/intro.png" width="270" height="200">
      </span>
    </div>
    <div class="section__content" v-for="product in products" :key="product" >
      <ItemCard :itemData ="product" @addToCart="addToCart"></ItemCard>  
    </div>
    <Pagination v-if="paginationLimit" :perPage="paginationLimit" :page="1" :totalGoods="paginationTotal" @updatePage="updatePage"></Pagination>
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
      title: 'Категория/Подкатегория',
      products: [],
      categories: this.categories,
      hasPagination: true,
      pagination: [],
      currentPage: 1,
      paginationTotal: false,
      paginationLimit: false,
      catalogRendered:false,
      waitForCatTree:false
    }
  },
  methods: {
    loadProducts(page = 1) {
      this.currentPage = page

      // this.products = [];
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
 
      let json = { 
            "current_page": 1, 
            "data": [ 
                { 
                    "id": 1, 
                    "category_id": 1, 
                    "brand": {
                      "id": 3,
                      "name": "Потом надел перед зеркалом.",
                      "content": "Ни, ни, ни! И не просадил бы! ей-богу, не просадил бы! Не сделай я сам это делал, но только нос его слышал за несколько десятков верст, где была ярмарка со всякими припеками: припекой.",
                      "slug": "potom-nadel-pered-zerkalom",
                      "image": null
                    },
                    "status": {
                      "id": 4,
                      "title": "В наличии"
                    },
                    "age_from": 8, 
                    "age_to": 15, 
                    "title": "Селифан принялся стучать, и скоро, отворив.", 
                    "game_time": "16 - 258", 
                    "card_size": "107x192мм", 
                    "description": "А еще какой? — Москва, — отвечал Чичиков и потом прибавил: «А любопытно бы знать, чьих она? что, как ее выручить. Наконец, выдернувши ее потихоньку, он сказал, что не охотник. — Дрянь же ты! — сказал с приятною улыбкою Манилов. Наконец оба приятеля вошли в дверь выглянуло женское лицо и в — некотором роде, духовное наслаждение… Вот как, например, числом? — подхватил Чичиков, — заеду я в дела фамильные не — было. Туда все вошло: все ободрительные и.", 
                    "rules": "А Еремей Сорокоплёхин! да этот — мужик один станет за всех, в Москве торговал, одного оброку приносил — по восьми гривенок! — Что ж, разве это для вас дорого? — произнес он, рассматривая одну из них на — свете, — немножко разорвана, ну да между приятелями нечего на это ничего не хотите понимать слов моих, или — так что из-под кожи выглядывала пакля, был искусно зашит. Во всю дорогу суров и с ними.", 
                    "players_from": 1, 
                    "players_to": 7, 
                    "amount": 3, 
                    "slug": "selifan-prinyalsya-stucat-i-skoro-otvoriv", 
                    "price": "1636.00", 
                    "sale": 0,
                    "discount": 10,
                    "producer" : "Default",
                    "hit": 0, 
                    "new": 0, 
                    "old_price": "1752.00", 
                    "created_at": "2022-03-08T23:47:40.000000Z", 
                    "updated_at": "2022-03-08T23:47:40.000000Z" 
                },
                { 
                    "id": 2, 
                    "category_id": 1, 
                    "brand": {
                      "id": 3,
                      "name": "Потом надел перед зеркалом.",
                      "content": "Ни, ни, ни! И не просадил бы! ей-богу, не просадил бы! Не сделай я сам это делал, но только нос его слышал за несколько десятков верст, где была ярмарка со всякими припеками: припекой.",
                      "slug": "potom-nadel-pered-zerkalom",
                      "image": null
                    },
                    "status": {
                      "id": 4,
                      "title": "В наличии"
                    },
                    "age_from": 8, 
                    "age_to": 15, 
                    "title": "Селифан принялся стучать, и скоро, отворив.", 
                    "game_time": "16 - 258", 
                    "card_size": "107x192мм", 
                    "description": "А еще какой? — Москва, — отвечал Чичиков и потом прибавил: «А любопытно бы знать, чьих она? что, как ее выручить. Наконец, выдернувши ее потихоньку, он сказал, что не охотник. — Дрянь же ты! — сказал с приятною улыбкою Манилов. Наконец оба приятеля вошли в дверь выглянуло женское лицо и в — некотором роде, духовное наслаждение… Вот как, например, числом? — подхватил Чичиков, — заеду я в дела фамильные не — было. Туда все вошло: все ободрительные и.", 
                    "rules": "А Еремей Сорокоплёхин! да этот — мужик один станет за всех, в Москве торговал, одного оброку приносил — по восьми гривенок! — Что ж, разве это для вас дорого? — произнес он, рассматривая одну из них на — свете, — немножко разорвана, ну да между приятелями нечего на это ничего не хотите понимать слов моих, или — так что из-под кожи выглядывала пакля, был искусно зашит. Во всю дорогу суров и с ними.", 
                    "players_from": 1, 
                    "players_to": 7, 
                    "amount": 3, 
                    "slug": "selifan-prinyalsya-stucat-i-skoro-otvoriv", 
                    "price": "1636.00", 
                    "sale": 0,
                    "discount": 10,
                    "producer" : "Default",
                    "hit": 0, 
                    "new": 0, 
                    "old_price": "1752.00", 
                    "created_at": "2022-03-08T23:47:40.000000Z", 
                    "updated_at": "2022-03-08T23:47:40.000000Z" 
                } 
            ], 
            "first_page_url": "http://127.0.0.1:8000/api/categories/1?page=1", 
            "from": 1, 
            "last_page": 1, 
            "last_page_url": "http://127.0.0.1:8000/api/categories/1?page=1", 
            "next_page_url": null, 
            "path": "http://127.0.0.1:8000/api/categories/1", 
            "per_page": 15, 
            "prev_page_url": null, 
            "to": 9, 
            "total": 9 
          }

          this.paginationLimit = 5
          this.paginationTotal = json.total

          json.data.forEach(element => {
            
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
                  cardSize : element.card_size,
                  producer : element.brand.name,
                  thumb: require('@/assets/card_img.png'),
                  pics: [require('@/assets/gallery_img1.png'),require('@/assets/gallery_img2.png'),require('@/assets/gallery_img3.png'),require('@/assets/gallery_img4.png'),require('@/assets/gallery_img5.png'),],
                  description: element.description, 
                  rules: element.rules,
                  comments: [
                      {name: 'Лис-хитрец', message: '1Отличная игра! Круто провели время всей компанией', date: '03.01.2022'},
                      {name: 'Лисица Шутница', message: '2Не могла дождаться рестока Особняков, срочно дайте два!', date: '23.02.2022'},
                      {name: 'Рыжий проныра', message: '3Неплохая настолка, нам с друзьями понравилось.', date: '14.05.2022'},
                      {name: 'Матерый лис', message: '4Отличная игра! Круто провели время всей компанией', date: '03.01.2022'},
                      {name: 'Лисенок Вок', message: '5Не могла дождаться рестока Особняков, срочно дайте два!', date: '23.02.2022'},
                      {name: 'Серый плут', message: '6Неплохая настолка, нам с друзьями понравилось.', date: '14.05.2022'}
                  ],
            }
            this.products.push(product);            
          })
      
      // fetch('https://abaimmigration.com')
      //   .then((response) => {
      //       if(response.ok) {
      //           return response.json();
      //       }
        
      //       throw new Error('Network response was not ok');
      //   })
      //   .then((json) => {
      //     console.log(json)
      //   })
      //   .catch((error) => {
      //       console.log(error);
      //   });
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
       console.log("WATCH: load products");
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
