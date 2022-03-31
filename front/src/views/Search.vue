<template>
  <div class="search">
    <SortingBar @renderFilteredProducts="renderFilteredProducts"></SortingBar>
    <h1>{{ title }}</h1>
    <hr />
    <Breadcrumbs>
      <router-link to="/">Главная</router-link>
      <router-link to="/Search">Поиск</router-link>
    </Breadcrumbs>
    <div class="section__content">
      <ItemCard
        v-for="item in searched"
        :itemData="item"
        @addToCart="addToCart"
        :key="item"
      ></ItemCard>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from "@/components/breadcrumbs.vue";
import SortingBar from "@/components/sorting-bar.vue";
import ItemCard from "@/components/item-card.vue";

export default {
  name: "Search",
  components: {
    SortingBar,
    Breadcrumbs,
    ItemCard,
  },
  data() {
    return {
      title: "",
      searched: [],
      paginationLimit: false,
      catalogRendered: false,
      paginationTotal: false,
    };
  },
  methods: {
    searchProducts() {
      this.searched = [];
      fetch("http://api.foxhole.club/api/product/search?q=" + this.title, {})
        .then((response) => {
          if (response.ok) return response.json();
          throw new Error("Network response was not ok");
        })
        .then((json) => {
          json.forEach((element) => {
            let _images = [];

            element.images.forEach((item) => {
              _images.push("http://api.foxhole.club/files/" + item.path);
            });

            this.searched.push({
              discont: element.discount,
              id: element.id,
              slug: element.slug,
              inStock: element.status_id,
              title: element.title,
              desc: element.description,
              price: element.price,
              age: element.age_from + "-" + element.age_to,
              time: element.game_time,
              players: element.players_from + "-" + element.players_to,
              pics: _images,
              short_description: element.short_description,
              amount: element.amountб,
            });
          });
        });
    },
    renderFilteredProducts(json) {
      this.searched = [];
      json.data.forEach((element) => {
        console.log(json);
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
          age: element.age_from + "-" + element.age_to + " лет",
          time: element.game_time + " мин",
          players: element.players_from + "-" + element.players_to,
          pics: _images,
          description: element.description,
          amount: element.amount,
          short_description: element.short_description,
        };
        this.searched.push(product);
      });
    },
  },
  mounted() {
    this.title = this.$route.params.search;
    this.searchProducts();
  },
  watch: {
    $route() {
      this.title = this.$route.params.search;
      this.searchProducts();
    },
  },
};
</script>

<style scoped>
.search {
  padding: 40px 10px;
}
</style>