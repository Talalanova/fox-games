<template>
  <div class="stocks">    
    <h1>Акции</h1>
    <hr>
    <stocksItem v-for="item in news" :key="item" :date="item.date" :title="item.title" :img='item.img' :id="item.id" :slug="item.slug" :description="item.description" :content="item.content"></stocksItem>
    <Pagination v-if="paginationTotal > perPage" :perPage="15" :page="1" :totalGoods="paginationTotal" @updatePage="updatePage"></Pagination>
  </div>
</template>

<script>
import stocksItem from '@/components/stocks-item.vue'
import Pagination from '@/components/pagination.vue'
export default {
  name: 'stocks',
  components: {
    stocksItem,
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
      fetch('http://api.foxhole.club/api/article/2/index?page=' + page)
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
              description: element.short_description,
              img: 'http://api.foxhole.club/storage/catalog/article/source/' + element.image,
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

<style scoped>
.stocks {
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