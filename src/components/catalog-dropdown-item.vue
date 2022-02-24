<template>
    <div v-for="category in categorys" v-bind:key="category.name" class="catalog__genre">
        <img v-bind:src="category.icon" width="50" height="50">
        <router-link to="/Category" class="catalog__link">
            {{ category.name }}
        </router-link>
        <button class="catalog__button" @click="showId(category.id)"></button>
        <div class="catalog__sublist" v-bind:id= category.id @mouseleave="showId(category.id)">
            <router-link to="/item-full" v-for="item in category.games" v-bind:key="item.index">
                {{ item }}
            </router-link>
        </div>
    </div>
</template>
<script>
import {categorys} from '@/data.js'

export default {
    name: 'CatalogDropdownItem',
    data() {
        return {
            categorys, 
        }
    },
    methods: {
        showId: function (key){	
            let item = document.getElementById(key)                  				
            item.classList.toggle('catalog__sublist--opened')
            item.previousSibling.classList.toggle('catalog__button--fill')
        }
    }
}
</script>

<style scoped>
.catalog__genre {
    display: grid;
    grid-template-columns: 50px 190px 28px;
    text-align: left;
    column-gap: 15px;
    font-family: "Nunito", "Arial", sans-serif;
    font-size: 24px;
    line-height: 33px;
    position: relative;
}
.catalog__link {
    color: black;
    margin: auto 0;
    cursor: pointer;
    position: relative;
    line-height: 45px;
    /* border-bottom: 1px solid #CB7D49; */
}

.catalog__link:hover {
    color: #CB7D49;
}

.catalog__button--fill {
    background-image: url('~@/assets/catalog_icon_arrow-down.svg') !important;
}

.catalog__button {
    width: 28px;
    height: 28px;
    background-image: url('~@/assets/catalog_icon_arrow-fill.svg');
    background-repeat: no-repeat;
    transition: 0.5s;
    border: none;
    background-color: white;
    margin: auto;
    cursor: pointer;
}

.catalog__button:hover {
    background-image: url('~@/assets/catalog_arrow-brown.svg')
}

.catalog__sublist {
    font-size: 20px;
    line-height: 30px;
    list-style: none;
    grid-column: 1 / -1;
    display: none;
    margin: 0;
    position: absolute;
    background-color: white;
    width: calc(100% - 115px);
    top: 94%;
    left: 63px;
    border: 1px solid #CB7D49;
    border-radius: 5px;
    padding: 10px 25px;
    z-index: 1;
    box-shadow: -1px 7px 24px -2px rgba(34, 60, 80, 0.4);
}

.catalog__sublist a {
    margin: 5px 0;
    /* border-bottom: 1px solid #CB7D49; */
    cursor: pointer;
    color: black;
}

.catalog__sublist a:hover {
    color: #CB7D49;
}


.catalog__sublist--opened {
    display: block;
}
</style>