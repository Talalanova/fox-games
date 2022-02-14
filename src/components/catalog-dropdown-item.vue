<template>
    <div v-for="category in categorys" v-bind:key="category.name" class="catalog__genre">
        <img v-bind:src="category.icon">
        <p @click="toggleSublist">
            {{ category.name }}
        </p>
        <ul v-show="isOpen" class="catalog__sublist">
            <li v-for="item in category.games" v-bind:key="item.index">
                {{ item }}
            </li>
        </ul>
    </div>
</template>


<script>
import {categorys} from '@/data.js'


export default {
    name: 'CatalogDropdownItem',
    props: {        
        
    },
    data() {
        return {
            categorys,
            isOpen: false,
        }
    },
    components: {

    },
    methods: {
        toggleSublist() {
            this.isOpen = !this.isOpen
        }
    }
}

</script>

<style scoped>
.catalog__genre {
    display: grid;
    grid-template-columns: 40px auto;
}

.catalog__sublist {
    list-style: none;
    grid-column: 1 / -1;
}
</style>