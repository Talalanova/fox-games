<template>
  <div class="home">
    <Slider></Slider>
    <MainSection title="Новости" link="/news">

    </MainSection>
    <MainSection title="Новинки" link="/newsales">

    </MainSection>
    <MainSection title="Топ настольных игр 2020 года" link="/topsales">

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
