<template>
  <div class="home">
    <Slider></Slider>
    <MainSection title="Новости" link="/news">
      <NewsCard v-for="item in news.slice(0,4)" :key="item" :itemData="item"></NewsCard>
    </MainSection>
    <MainSection title="Новинки" link="/newsales">
      <ItemCard v-for="item in newgoods.slice(0,4)" :key="item" :itemData="item"></ItemCard>
    </MainSection>
    <MainSection title="Лидеры продаж" link="/topsales">
      <ItemCard v-for="item in newsales.slice(0,4)" :key="item" :itemData="item"></ItemCard>
    </MainSection>
  </div>
</template>

<script>
import MainSection from '@/components/main-section.vue'
import ItemCard from '@/components/item-card.vue'
import NewsCard from '@/components/news-card.vue'
import Slider from '@/components/Slider.vue'

export default {
  name: 'Home',
  components: {
    MainSection,
    ItemCard,
    NewsCard,
    Slider,
  },
  data() {
    return {
      news: [],
      newsales: [],
      newgoods: [],
      perPage: 4,
    }    
  },
  methods: {
    loadNews() {
      this.news = []

      fetch('http://api.foxhole.club/api/article/1/index?page=1')
        .then((response) => {
          if(response.ok) {                        
            return response.json();                 
          }            
          throw new Error('Network response was not ok');
        })
        .then((json) => {
          json.data.forEach(element => {
            this.news.push({
              title: element.title,
              content: element.content,
              id: element.id,
              description: element.short_description,           
              img: 'http://api.foxhole.club/storage/catalog/article/source/' + element.image,
              date: new Date(element.created_at).toLocaleDateString('ru-RU')
            })
          })          
        })
    },
    loadNewsales() {
      this.newsales = []

      fetch('http://api.foxhole.club/api/product/hit')
        .then((response) => {
          if(response.ok) {                        
            return response.json();                 
          }            
          throw new Error('Network response was not ok');
        })
        .then((json) => {

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
              short_description: element.short_description,                  
            }
            this.newsales.push(product);
          })          
        })
    },
    loadNewGoods() {

      this.newgoods = []

      fetch('http://api.foxhole.club/api/product/new')
        .then((response) => {
          if(response.ok) {                        
            return response.json();                 
          }            
          throw new Error('Network response was not ok');
        })
        .then((json) => {         

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
              short_description: element.short_description,                  
            }
            this.newgoods.push(product);
          })          
        })
    },
  },
  mounted() {
    this.loadNews()
    this.loadNewsales()
    this.loadNewGoods()
  },
  
}
</script>

<style scoped>
.home {
  padding: 40px 10px;
}
</style>
