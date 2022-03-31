<template>
  <div class="catalog__list">
    <router-link
      to="/category"
      v-for="item in accessories"
      v-bind:key="item.index"
    >
      {{ item }}
    </router-link>
  </div>
</template>

<script>
import { accessories } from "@/data.js";

export default {
  name: "CatalogList",
  data() {
    return {
      accessories,
    };
  },
};
</script>

<style scoped>
.catalog__list {
  list-style: none;
  font-family: "Nunito", "Arial", sans-serif;
  font-size: 24px;
  line-height: 33px;
  text-align: left;
  padding: 0;
  margin: 0;
  grid-column: 1 / -1;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
}

.catalog__list a {
  margin: 8px 0;
  color: black;
  cursor: pointer;
}
.catalog__list a:hover {
  color: #cb7d49;
}
</style>