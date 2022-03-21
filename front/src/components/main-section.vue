<template>
    <section class="section">
        <router-link :to= link>
            <h2> {{ title }}</h2>
        </router-link>        
        <hr>
        <div class="section__content">
            <slot></slot>
        </div>
    </section>
</template>

<script>

export default {
  name: 'MainSection',
  components: {
    
  },
  props: {
      title: String,
      link: String
  }
}
</script>

<style>

.section h2 {
   font-size: 36px; 
   line-height: 42px;
   color: #333333;
   font-weight: 300;
   text-align: left;
   margin: 40px 0 10px;
}

.section h2:hover {
    color: #CB7D49;
}

hr {
    width: 100%;
    height: 1px;
    background-color: #CB7D49;
    margin: 10px 0;
    grid-column: 1 / -1;
    border: none;
}

.section__content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px,1fr));
    -moz-column-gap: 2%;
    column-gap: 40px;
    row-gap: 40px;
    /* gap: 56px; */
    flex-wrap: wrap;
    /* display: flex;
    justify-content: space-between; */
}

@media (max-width: 1080px) {
    .section__content {
        grid-template-columns: repeat(auto-fill, minmax(160px,1fr));
    }

    .section h2 {
        font-size: 30px;
    }
}
</style>