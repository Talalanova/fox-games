<template>
  <carousel :autoplay="5000" :items-to-show="1">
    <slide v-for="slide in slides" :key="slide">
      <img v-bind:src="slide.img" width="1180" height="215"> 
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
            {img: require("@/assets/carousel-item4.jpg")}, 
        ]   
      }
  }

};
</script>

<style>

.carousel__prev, .carousel__next {
  display: none;
}

.carousel img {
  border-radius: 20px;
}

.carousel {
  position: relative;
}

.carousel__pagination {
  position: absolute;
  margin: 0;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%,0);
}

.carousel__pagination-button {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: aliceblue;
}
.carousel__pagination-button--active {
  width: 14px;
  height: 14px;
}
</style>