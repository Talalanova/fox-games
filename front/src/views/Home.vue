<template>
  <div class="home">
    <Slider></Slider>
    <MainSection title="Новости">

    </MainSection>
    <MainSection title="Новинки">

    </MainSection>
    <MainSection title="Топ настольных игр 2020 года">

    </MainSection>
  </div>
</template>

<script>

import MainSection from '@/components/main-section.vue'
// import ItemCard from '@/components/item-card.vue'
// import NewsCard from '@/components/news-card.vue'
import Slider from '@/components/Slider.vue'

export default {
  name: 'Home',
  components: {
    MainSection,
    // ItemCard,
    //NewsCard,
    Slider,
  },
  
}
</script>

<style scoped>
.home {
  padding: 40px 10px;
}
</style>
