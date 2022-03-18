<template>
  <div class="newsales">
    <SortingBar></SortingBar>
    <h1>Новинки</h1>
    <hr>
    <Breadcrumbs>
      <router-link to="/">Главная</router-link>
      <router-link to="/newsales">Новинки</router-link>
    </Breadcrumbs>
    <div class="section__content">
      <ItemCard v-for="item in sales" :itemData ="item" @addToCart="addToCart" :key="item"></ItemCard>  
    </div>
    
  </div>
</template>

<script>
import Breadcrumbs from '@/components/breadcrumbs.vue'
import SortingBar from '@/components/sorting-bar.vue'
import ItemCard from '@/components/item-card.vue'

export default {
  name: 'Newsales',
  components: {
    SortingBar,
    Breadcrumbs,
    ItemCard,
  },
  data() {
    return {      
      sales: [],
      paginationLimit: false,
      catalogRendered:false,
      paginationTotal: false,
    }
  },
//   methods: {
//     searchProducts() {
//       this.searched = []
      
//       fetch('http://api.foxhole.club/api/product/search?q='+ this.title, {})
//       .then((response) => {
//       if(response.ok) return response.json();
//       throw new Error('Network response was not ok');
//       })
//       .then((json) => {         
//           json.forEach(element => {
//               this.searched.push({
//                 discont: element.discount,
//                 id: element.id,
//                 slug: element.slug,
//                 inStock: element.status_id,
//                 title: element.title,
//                 desc: element.description,
//                 price : element.price,
//                 age : element.age_from + '-' + element.age_to + ' лет',
//                 time : element.game_time + ' мин',
//                 players : element.players_from + '-' + element.players_to,
//                 thumb: require('@/assets/card_img.png'),
//                 pics: [require('@/assets/gallery_img1.png'),require('@/assets/gallery_img2.png'),require('@/assets/gallery_img3.png'),require('@/assets/gallery_img4.png'),require('@/assets/gallery_img5.png'),],
//                 description: element.description, 
//               })
//           })
//       });
//     },
//   },
//   mounted() {
//     this.title = this.$route.params.search
//     this.searchProducts()
//   },
//   watch: {    
//     $route (){
//       this.title = this.$route.params.search
//       this.searchProducts()
//     },      
//   },
}
</script>

<style scoped>
.newsales {
  padding: 40px 10px;
}
</style>