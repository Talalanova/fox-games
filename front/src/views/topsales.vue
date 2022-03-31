<template>
  <div class="topsales">
    <SortingBar></SortingBar>
    <h1>Топ продаж</h1>
    <hr />
    <Breadcrumbs>
      <router-link to="/">Главная</router-link>
      <router-link to="/topsales">Топ продаж</router-link>
    </Breadcrumbs>
    <div class="section__content">
      <ItemCard
        v-for="item in sales"
        :itemData="item"
        @addToCart="addToCart"
        :key="item"
      ></ItemCard>
    </div>
    <Pagination
      v-if="paginationTotal > perPage"
      :perPage="15"
      :page="1"
      :totalGoods="paginationTotal"
      @updatePage="updatePage"
    ></Pagination>
  </div>
</template>

<script>
import Breadcrumbs from "@/components/breadcrumbs.vue";
import SortingBar from "@/components/sorting-bar.vue";
import ItemCard from "@/components/item-card.vue";
import Pagination from "@/components/pagination.vue";

export default {
  name: "Topsales",
  components: {
    SortingBar,
    Breadcrumbs,
    ItemCard,
    Pagination,
  },
  data() {
    return {
      sales: [],
      paginationLimit: false,
      paginationTotal: false,
    };
  },
  methods: {
    loadSales(page = 1) {
      this.sales = [];

      fetch("http://api.foxhole.club/api/product/hit?page=" + page)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok");
        })
        .then((json) => {
          this.paginationTotal = json.total;
          json.data.forEach((element) => {
            let _images = [];

            element.images.forEach((item) => {
              _images.push("http://api.foxhole.club/files/" + item.path);
            });

            let product = {
              discont: element.discount,
              id: element.id,
              slug: element.slug,
              inStock: element.status,
              title: element.title,
              desc: element.description,
              price: element.price,
              age: element.age_from + "-" + element.age_to,
              time: element.game_time,
              players: element.players_from + "-" + element.players_to,
              pics: _images,
              description: element.description,
              short_description: element.short_description,
            };
            this.sales.push(product);
          });
        });
    },
    updatePage(page) {
      this.loadSales(page);
    },
  },
  mounted() {
    this.loadSales();
  },
};
</script>

<style scoped>
.topsales {
  padding: 40px 10px;
}
</style>