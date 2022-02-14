<template>
  <carousel :autoplay="3000" :items-to-show="1">
    <slide v-for="slide in slides" :key="slide">
      <img v-bind:src="slide.img" width="1140" height="215"> 
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>

import '/node_modules/vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from '/node_modules/vue3-carousel';

export default {
  name: 'Slider',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
      return {
        slides: [
            {img: require("@/assets/carousel-item1.jpg")},
            {img: require("@/assets/carousel-item2.jpg")},
            {img: require("@/assets/carousel-item3.jpg")}, 
        ]   
      }
  }

};
</script>

<style>

.carousel__prev, .carousel__next {
    display: none;
}

</style>