<template>
  <div class="search">
    <SortingBar></SortingBar>
    <h1>{{ title }}</h1>
    <hr>
    <Breadcrumbs>
      <router-link to="/">Главная</router-link>
      <router-link to="/Search">Поиск</router-link>
    </Breadcrumbs>
    <div class="section__content">
      <ItemCard v-for="item in searched" :itemData ="item" @addToCart="addToCart" :key="item"></ItemCard>  
    </div>
    
  </div>
</template>

<script>
import Breadcrumbs from '@/components/breadcrumbs.vue'
import SortingBar from '@/components/sorting-bar.vue'
import ItemCard from '@/components/item-card.vue'

export default {
  name: 'Search',
  components: {
    SortingBar,
    Breadcrumbs,
    ItemCard,
  },
  data() {
    return {
      title: '',
      searched: [],
      paginationLimit: false,
      catalogRendered:false,
      paginationTotal: false,
    }
  },
  methods: {
    searchProducts() {
      this.searched = []
      
      fetch('http://127.0.0.1:8000/api/product/search/?q='+ this.title, {})
      .then((response) => {
      if(response.ok) return response.json();
      throw new Error('Network response was not ok');
      })
      .then((json) => {         
          json.forEach(element => {
              this.searched.push({
                discont: element.discount,
                id: element.id,
                slug: element.slug,
                inStock: element.status_id,
                title: element.title,
                desc: element.description,
                price : element.price,
                age : element.age_from + '-' + element.age_to + ' лет',
                time : element.game_time + ' мин',
                players : element.players_from + '-' + element.players_to,
                //cardSize : element.card_size,
                //producer : element.brand.name,
                thumb: require('@/assets/card_img.png'),
                pics: [require('@/assets/gallery_img1.png'),require('@/assets/gallery_img2.png'),require('@/assets/gallery_img3.png'),require('@/assets/gallery_img4.png'),require('@/assets/gallery_img5.png'),],
                description: element.description, 
                //rules: element.rules,
              })
          })
      });
    },
  },
  mounted() {
    this.title = this.$route.params.search
    this.searchProducts()
  },
  watch: {    
    $route (){
      this.title = this.$route.params.search
      this.searchProducts()
    },      
  },
}
</script>