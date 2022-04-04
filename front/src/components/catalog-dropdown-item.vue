<template>
  <div
    v-for="category in categorys.subcategorys"
    v-bind:key="category.name"
    :class="[
      category.icon == null
        ? 'catalog__genre catalog__genre--noicon'
        : 'catalog__genre',
    ]"
  >
    <img
      v-bind:src="category.icon"
      width="50"
      height="50"
      v-if="category.icon != null"
    />
    <router-link :to="'/Category/' + category.slug" class="catalog__link">
      {{ category.name }}
    </router-link>
    <button
      class="catalog__button"
      @click="showId(category.id)"
      v-if="category.subcategorys.length"
    ></button>
    <div class="catalog__sublist" v-bind:id="category.id">
      <router-link
        :to="'/Category/' + category.slug + '/' + item.slug"
        v-for="item in category.subcategorys"
        v-bind:key="item.index"
      >
        {{ item.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogDropdownItem",
  data() {
    return {};
  },
  methods: {
    showId: function (key) {
      let item = document.getElementById(key);
      let sublist = item.parentNode.querySelector(".catalog__sublist");
      item.classList.toggle("catalog__sublist--opened");
      item.previousSibling.classList.toggle("catalog__button--fill");
      item.parentNode.classList.toggle("catalog__genre--opened");
      if (item.classList.contains("catalog__sublist--opened")) {
        item.parentNode.style.gridRow = `span ${sublist.childElementCount + 1}`;
      } else {
        item.parentNode.style.gridRow = `span 1`;
      }
    },
  },
  props: {
    categorys: Object,
  },
};
</script>

<style scoped>
.catalog__genre {
  display: grid;
  grid-template-columns: 50px 190px 28px;
  text-align: left;
  column-gap: 15px;
  font-family: "Nunito", "Arial", sans-serif;
  font-size: 21px;
  line-height: 30px;
  position: relative;
}

.catalog__genre--noicon {
  grid-template-columns: 258px 28px;
}

.catalog__link {
  color: black;
  margin: auto 0;
  cursor: pointer;
  position: relative;
  line-height: 24px;
}

.catalog__link:hover {
  color: #cb7d49;
}

.catalog__button--fill {
  background-image: url("~@/assets/catalog_icon_arrow-down.svg") !important;
}

.catalog__button {
  width: 28px;
  height: 28px;
  background-image: url("~@/assets/catalog__arrow-down-noborder.svg");
  background-repeat: no-repeat;
  background-position: 6px;
  border: none;
  background-color: white;
  margin: auto;
  cursor: pointer;
}

.catalog__button:hover {
  background-image: url("~@/assets/catalog_arrow-brown.svg");
  background-position: 0px 0px;
}
.catalog__genre--opened .catalog__button {
  background-position: 0px 0px;
}

.catalog__sublist {
  font-size: 20px;
  line-height: 30px;
  list-style: none;
  grid-column: 1 / -1;
  display: none;
  margin: 0;
  box-shadow: none;
  position: static;
  width: auto;
  padding: 0 0 0 66px;
  /* border: 1px solid #CB7D49;
    border-radius: 5px; */
}

.catalog__genre--noicon .catalog__sublist {
  padding: 10px;
}

.catalog__sublist a {
  margin: 5px 0;
  /* border-bottom: 1px solid #CB7D49; */
  cursor: pointer;
  color: black;
}

.catalog__sublist a:hover {
  color: #cb7d49;
}

.catalog__sublist--opened {
  display: block;
}

@media (max-width: 1080px) {
  .catalog__sublist {
  }
}
</style>