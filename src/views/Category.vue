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
import Breadcrumbs from '@/components/breadcrumbs.vue'

export default {
  name: 'Category',
  components: {
    ItemCard,
    SortingBar,
    Breadcrumbs,
  },
  data() {
    return {
      title: 'Категория/Подкатегория'
    }
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
