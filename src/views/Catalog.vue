<template>
  <div class="catalog-page">
    <CatalogDropdown></CatalogDropdown>
  </div>
</template>

<script>

import CatalogDropdown from '@/components/catalog-dropdown.vue'

export default {
  name: 'Catalog',
  components: {
    CatalogDropdown,
  }
}
</script>

<style scoped>

</style>
