<template>
  <div class="games">    
    <h1>Игротеки</h1>
    <hr>
      <GamesItem title="Игротека Взрывные котята!" img='card_img.png'>
        Взрывные котята! Смотри не подорвись! Внимание, игра 18+
      </GamesItem>
      <GamesItem title="В эту субботу играем в D&D" img='card_img.png'>
        Начало в 17:00, количество мест ограничено! 
      </GamesItem>
      <GamesItem title="Важное!" img='card_img.png'>
        Игротека по Особнякам Безумия переносится на следующую среду! 
      </GamesItem>
      <div class="pagination">
        <router-link to="/games">1</router-link>
        <router-link to="/games">2</router-link>
        <router-link to="/games">3</router-link>
        <router-link to="/games">4</router-link>
      </div>
  </div>
</template>

<script>
import GamesItem from '@/components/games-item.vue'

export default {
  name: 'Games',
  components: {
    GamesItem
  }
}
</script>

<style scoped>
.games {
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