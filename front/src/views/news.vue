<template>
  <div class="news">    
    <h1>Новости</h1>
    <hr>    
    <div v-if="!newsRendered" class="loading_div">
      <div class="loading_wrapper">
        <div class="loading_step step1">
          <img src="@/assets/fox-trail.svg">
        </div>
        <div class="loading_step step2">
          <img src="@/assets/fox-trail.svg">
        </div>
        <div class="loading_step step3">
          <img src="@/assets/fox-trail.svg">
        </div>
      </div>
    </div>
    <NewsItem v-for="item in news" :key="item" :date="item.date" :title="item.title" :img="item.img" :id="item.id" :slug="item.slug">{{item.content}}</NewsItem>
    <Pagination v-if="paginationTotal > perPage" :perPage="15" :page="1" :totalGoods="paginationTotal" @updatePage="updatePage"></Pagination>
  </div>
</template>

<script>
import NewsItem from '@/components/news-item.vue'
import Pagination from '@/components/pagination.vue'

export default {
  name: 'News',
  components: {
    NewsItem,
    Pagination
  },
  data() {
    return {
      news: [],
      paginationTotal: false,
      perPage: 15,
      newsRendered: false
    }
  },
  methods: {
    loadNews(page = 1) {
      this.news = []
      fetch('http://api.foxhole.club/api/article/1/index?page=' + page)
        .then((response) => {
          if(response.ok) {
            this.newsRendered = true
            return response.json();                  
          }            
          throw new Error('Network response was not ok');
        })
        .then((json) => {
          console.log(json)
          this.paginationTotal = json.total

          json.data.forEach(element => {
            this.news.push({
              title: element.title,
              content: element.content,
              id: element.id,
              slug: element.slug,
              img: element.img,
              date: new Date(element.created_at).toLocaleDateString('ru-RU')
            })
          })
        })
    },
    updatePage(page) {
      this.loadNews(page)
    },
  },
  mounted() {
    this.loadNews()
  }
}
</script>

<style>
.loading_step.step1{
  animation-name:step;
  animation-duration:5s;
  animation-delay:0;
  animation-iteration-count:infinite;
}
.loading_step.step2{
  animation-name:step;
  animation-duration:3s;
  animation-delay:1s;
  animation-iteration-count:infinite;
}
.loading_step.step3{
  animation-name:step;
  animation-duration:2s;
  animation-delay:2s;
  animation-iteration-count:infinite;
}
@keyframes step {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.loading_wrapper {
  display: flex;
  gap: 30px;
}

.loading_div {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  min-height: 100px;
  align-items: center;
}

.news {
  padding: 40px 10px;
}

.pagination {
  display: flex;
  flex-direction: row;
  margin: 40px 0 0 0;
  justify-content: center;
}

.pagination a {
  color: #333333;
  border: 1px solid #CB7D49;
  padding: 5px;
  border-radius: 4px;
  margin-right: 12px;
}

.pagination a:hover {
  background-color: #CB7D49;
  color: white;
}
</style>