<template>
  <div class="home">
    <MainSection title="Новости">
      <ItemCard buttonValue="Читать"></ItemCard>
      <ItemCard buttonValue="Читать"></ItemCard>
      <ItemCard buttonValue="Читать"></ItemCard>
      <ItemCard buttonValue="Читать"></ItemCard>  
    </MainSection>
    <MainSection title="Новинки">
      <ItemCard buttonValue="6990р"></ItemCard>
      <ItemCard buttonValue="6990р"></ItemCard>
      <ItemCard buttonValue="6990р"></ItemCard>
      <ItemCard buttonValue="6990р"></ItemCard>  
    </MainSection>
    <MainSection title="Топ настольных игр 2020 года">
      <ItemCard buttonValue="6990р"></ItemCard>
      <ItemCard buttonValue="6990р"></ItemCard>
      <ItemCard buttonValue="6990р"></ItemCard>
      <ItemCard buttonValue="6990р"></ItemCard>
    </MainSection>
  </div>
</template>

<script>

import MainSection from '@/components/main-section.vue'
import ItemCard from '@/components/item-card.vue'

export default {
  name: 'Home',
  components: {
    MainSection,
    ItemCard
  },
  
}
</script>
