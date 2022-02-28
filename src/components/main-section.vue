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

<style>

.section h2 {
   font-size: 36px; 
   line-height: 42px;
   color: #333333;
   font-weight: 300;
   text-align: left;
   margin: 40px 0 10px;
}

hr {
    width: 100%;
    height: 1px;
    background-color: #CB7D49;
    margin: 10px 0 20px 0;
    grid-column: 1 / -1;
    border: none;
}

.section__content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px,1fr));
    -moz-column-gap: 2%;
    column-gap: 2%;
    row-gap: 2%;
    /* display: flex;
    justify-content: space-between; */
}

@media (max-width: 1080px) {
    .section__content {
        grid-template-columns: repeat(auto-fill, minmax(160px,1fr));
    }
}
</style>