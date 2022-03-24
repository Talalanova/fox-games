<template>
  <carousel :autoplay="5000" :items-to-show="1">
    <slide v-for="slide in slides" :key="slide">
      <img v-bind:src="slide" width="1180" height="215"> 
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
        slides: []   
      }
  },
  methods: {
    loadSlider() {
      fetch('http://api.foxhole.club/api/slider')
        .then((response) => {
          if(response.ok) {                        
            return response.json();                 
          }            
          throw new Error('Network response was not ok');
        })
        .then((json) => {
          json.forEach(item => {
            this.slides.push('http://api.foxhole.club/storage/catalog/slider/source/' + item.path)
          })
        })
    }
  },
  mounted() {
    this.loadSlider()
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