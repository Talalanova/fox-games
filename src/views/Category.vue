<template>
  <div class="category">
    <SortingBar></SortingBar>
    <h1>{{ title }}</h1>
    <hr>
    <div class="intro">
      <span class="intro__text">
        Приехав в Аркхэм и добравшись по грязным переулкам до особняков, вы сразу понимаете, что они покинуты и привычных обитателей внутри точно нет. Дома явно покидали в спешке... Вы также чувствуете напряжённость и ощущение чего-то потустороннего, опасного и необъяснимого. Сыщики без работы не останутся точно.
      </span>
      <span class="intro__pic">
        <img src="@/assets/intro.png" width="270" height="200">
      </span>
    </div>
    <div class="section__content">
      <ItemCard buttonValue="6990р"></ItemCard>
      <ItemCard buttonValue="6990р"></ItemCard>
      <ItemCard buttonValue="6990р"></ItemCard>
      <ItemCard buttonValue="6990р"></ItemCard>
      <ItemCard buttonValue="6990р"></ItemCard>
      <ItemCard buttonValue="6990р"></ItemCard>
      <ItemCard buttonValue="6990р"></ItemCard>
      <ItemCard buttonValue="6990р"></ItemCard>    
    </div>
  </div>
</template>

<script>
import ItemCard from '@/components/item-card.vue'
import SortingBar from '@/components/sorting-bar.vue'

export default {
  name: 'Category',
  components: {
    ItemCard,
    SortingBar,
  },
  data() {
    return {
      title: 'Вселенная Лавкрафта'
    }
  }
}
</script>

<style scoped>
.category {
  padding: 40px 0;
  position: relative;
}
.category h1 {
  font-weight: 300;
  font-size: 36px;
  line-height: 49px;
  font-family: "Nunito", "Arial", sans-serif;
  grid-column: 1 / -1;
  width: 100%;
  text-align: left;
  margin: 0;
}

.intro {
  display: grid;
  grid-template-columns: auto 270px;
  column-gap: 10px;
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
</style>
