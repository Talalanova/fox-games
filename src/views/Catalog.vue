<template>
  <div class="catalog-page">
      <div class="catalog__section">
        <h2>Настольные игры</h2>
        <hr>
        <CatalogDropdownItem></CatalogDropdownItem>
      </div>
      <div class="catalog__section">
        <h2>Аксессуары</h2>
        <hr>
        <CatalogList></CatalogList>
      </div>
      <div class="catalog__section">
        <h2>Миниатюрки</h2>
        <hr>
        <CatalogList></CatalogList>
      </div>
      <div class="catalog__section">
        <h2>Книги и журналы</h2>
        <hr>
        <CatalogList></CatalogList>
      </div>
      <div class="catalog__section">
        <h2>Мерч и сувениры</h2>
        <hr>
        <CatalogList></CatalogList>
      </div>
  </div>
</template>

<script>
import CatalogDropdownItem from '@/components/catalog-dropdown-item.vue'
import CatalogList from '@/components/catalog-list.vue'

export default {
    name: 'Catalog',
    components: {
      CatalogDropdownItem,
      CatalogList,
    },

}
</script>

<style>
.catalog-page {
  padding: 40px 0;
}

.catalog__section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  margin-bottom: 40px;

}

.catalog__section h2 {
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