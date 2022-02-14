<template>
    <div class="catalog-dropdown">
        <CatalogDropdownItem></CatalogDropdownItem>
    </div>
</template>

<script>
import CatalogDropdownItem from '@/components/catalog-dropdown-item.vue'

export default {
    name: 'CatalogDropdown',
    components: {
        CatalogDropdownItem,
    },
}
</script>

<style scoped>
.catalog-dropdown {
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
}
</style>