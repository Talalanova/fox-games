<template>
  <div class="newsales">
    <SortingBar></SortingBar>
    <h1>Новинки</h1>
    <hr />
    <Breadcrumbs>
      <router-link to="/">Главная</router-link>
      <router-link to="/newsales">Новинки</router-link>
    </Breadcrumbs>
    <div class="section__content">
      <ItemCard
        v-for="item in newsales"
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
  name: "Newsales",
  components: {
    SortingBar,
    Breadcrumbs,
    ItemCard,
    Pagination,
  },
  data() {
    return {
      newsales: [],
      paginationLimit: false,
      perPage: 15,
      paginationTotal: false,
    };
  },
  methods: {
    loadNewsales(page = 1) {
      this.newsales = [];

      fetch("http://api.foxhole.club/api/product/new?page=" + page)
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
            this.newsales.push(product);
          });
        });
    },
    updatePage(page) {
      this.loadNewsales(page);
    },
  },
  mounted() {
    this.loadNewsales();
  },
};
</script>

<style scoped>
.newsales {
  padding: 40px 10px;
}
</style>