<template>
<vueperSlides style="border-radius:20px;overflow:hidden;" :touchable="true" fixed-height="215px" >
  <vueperSlide v-for="(slide, i) in slides" :key="i" :image="slide.image" />
</vueperSlides>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "Slider",
  components: {
    VueperSlides,
    VueperSlide,
  },
  data() {
    return {
      slides: [{image: ""},{image: ""},]
    };
  },
  methods: {
    loadSlider() {
      fetch("http://api.foxhole.club/api/slider")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok");
        })
        .then((json) => {
          this.slides = [];
          json.forEach((item) => {
            let slideItem = {
              image:
                "http://api.foxhole.club/storage/catalog/slider/source/" +
                item.path,
            };
            this.slides.push(slideItem);
          });
        });
    },
  },
  mounted() {
    this.loadSlider();
  },
};
</script>

<style>
.vueperslides--fixed-height { height: 215px; }
</style>