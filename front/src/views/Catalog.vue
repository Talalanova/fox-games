<template>
  <div class="catalog-page">
    <h2>Каталог</h2>
    <hr>
    <Breadcrumbs>
      <router-link to="/">Главная</router-link>
      <router-link to="/Catalog">Каталог</router-link>
    </Breadcrumbs>
    <div v-for="cat in tableGames" :key="cat">
      <div class="catalog__section">
        <router-link class="h1" :to="'/Category/' + cat.slug">
          {{ cat.name }}
        </router-link>
        <hr>
        <CatalogDropdownItem :categorys="cat"></CatalogDropdownItem>
      </div>
    </div>
  </div>
</template>

<script>

import CatalogDropdownItem from '@/components/catalog-dropdown-item.vue'
import Breadcrumbs from '@/components/breadcrumbs.vue'
import {tableGames} from '@/data.js'

export default {
    name: 'Catalog',
    components: {
      CatalogDropdownItem,
      Breadcrumbs,
    },
    data() {
      return {
        tableGames,
        
      }
    },
}
</script>

<style>
.catalog-page {
  padding: 40px 10px;
}

.catalog__section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  margin-bottom: 40px;
}

.catalog-page h2 {
  font-weight: 300;
  font-size: 36px;
  line-height: 49px;
  font-family: "Nunito", "Arial", sans-serif;
  grid-column: 1 / -1;
  width: 100%;
  text-align: left;
  margin: 0;
}
</style>