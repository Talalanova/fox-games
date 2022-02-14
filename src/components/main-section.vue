<template>
    <section class="section">
        <h2> {{ title }}</h2>
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
  }
}
</script>

<style scoped>

.section h2 {
   font-size: 36px; 
   line-height: 42px;
   color: #333333;
   font-weight: 300;
   text-align: left;
   margin: 40px 0 10px;
}

.section hr {
    width: 100%;
    height: 1px;
    background-color: #CB7D49;
    margin: 10px 0 20px 0;
}

.section__content {
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    column-gap: 40px;
}
</style>