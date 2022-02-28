<template>
  <div class="news">    
    <h1>Новости</h1>
    <hr>
    
    <NewsItem title="Новость дня!" img='card_img.png'>
      "Особняки безумия" – это кооперативная игра для 1–5 игроков, действие которой происходит в мире Говарда Лавкрафта, мастера ужаса и автора мифов о Древних. Игрокам предстоит взять на себя роли сыщиков и окунуться в мрачный и наполненный безумием мир. 
    </NewsItem>
    <NewsItem title="Новость недели!" img='card_img.png'>
      Наш магазин празднует Halloween! Всем пришедшим 31.10 в костюме орка скидки на игры до 20%! 
    </NewsItem>
    <NewsItem title="Важное обьявление! 11.11.22" img='card_img.png'>
      Сегодня Лисья нора работает до 17:00 в связи с генеральной уборкой, приносим свои извинения за неудобства и ждем вас завтра! 
    </NewsItem>
  </div>
</template>

<script>
import NewsItem from '@/components/news-item.vue'

export default {
  name: 'News',
  components: {
    NewsItem
  },
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
.news {
  padding: 40px 10px;
}
</style>