<template>
<vueper-slides style="border-radius:20px;overflow:hidden;" fixed-height="215px"   
  autoplay
  :pause-on-hover="pauseOnHover"
  @autoplay-pause="internalAutoPlaying = false"
  @autoplay-resume="internalAutoPlaying = true" fade :touchable="true">
  <vueper-slide
    v-for="(slide, i) in slidesArr"
    :key="i"
    :image="slide.img"
  />
</vueper-slides>
</template>

<script>
import  {  VueperSlides ,  VueperSlide  }  from  'vueperslides' 
import  'vueperslides/dist/vueperslides.css' 
export default {
  name: 'Slider',
  components: {
    VueperSlides,
    VueperSlide
  },
  data() {
    return {
      slidesArr: [],
      pauseOnHover: true,
      autoPlaying: true,
      internalAutoPlaying: true,
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
            let slideItem = {
              img: 'http://api.foxhole.club/storage/catalog/slider/source/' + item.path
            }
            this.slidesArr.push(slideItem)
          })
        })
    },
  },
  mounted() {
    this.loadSlider()
  }
};
</script>

<style>
.vueperslides__parallax-wrapper {
  padding-bottom: 18.33%;
}

</style>