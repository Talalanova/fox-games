<template>
  <div class="stocks">    
    <h1>Акции</h1>
    <hr>
    
    <stocksItem title="Самая выгодная покупка в Лисе!" img='card_img.png'>
      Аттракцион невиданной щедрости! При покупке "Особняков безумия" в подарок значок. 
    </stocksItem>
    <stocksItem title="Новость недели!" img='card_img.png'>
      Наш магазин празднует Halloween! Всем пришедшим 31.10 в костюме орка скидки на игры до 20%! 
    </stocksItem>
    <stocksItem title="Важное обьявление! 11.11.22" img='card_img.png'>
      Акция! Ликвидация остатков Мафии, купи 3 игры этой серии и 4-ую тоже купи!
    </stocksItem>
      <div class="pagination">
        <router-link to="/stocks">1</router-link>
        <router-link to="/stocks">2</router-link>
        <router-link to="/stocks">3</router-link>
        <router-link to="/stocks">4</router-link>
      </div>
  </div>
</template>

<script>
import stocksItem from '@/components/stocks-item.vue'

export default {
  name: 'stocks',
  components: {
    stocksItem
  },
  data() {
    return {
      
    }
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