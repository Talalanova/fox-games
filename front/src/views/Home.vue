<template>
  <div class="home">
    <Slider></Slider>
    <MainSection title="Новости">
      <NewsCard buttonValue="Читать"></NewsCard>
      <NewsCard buttonValue="Читать"></NewsCard>
      <NewsCard buttonValue="Читать"></NewsCard>
      <NewsCard buttonValue="Читать"></NewsCard>  
    </MainSection>
    <MainSection title="Новинки">
      <!-- <ItemCard></ItemCard>
      <ItemCard></ItemCard>
      <ItemCard></ItemCard>
      <ItemCard></ItemCard>   -->
    </MainSection>
    <MainSection title="Топ настольных игр 2020 года">
      <!-- <ItemCard></ItemCard>
      <ItemCard></ItemCard>
      <ItemCard></ItemCard>
      <ItemCard></ItemCard> -->
    </MainSection>
  </div>
</template>

<script>

import MainSection from '@/components/main-section.vue'
// import ItemCard from '@/components/item-card.vue'
import NewsCard from '@/components/news-card.vue'
import Slider from '@/components/Slider.vue'

export default {
  name: 'Home',
  components: {
    MainSection,
    // ItemCard,
    NewsCard,
    Slider,
  },
  
}
</script>

<style scoped>
.home {
  padding: 40px 10px;
}
</style>
