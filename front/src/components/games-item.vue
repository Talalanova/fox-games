<template>
  <div class="games-item">
    <div class="games-item__pic">
      <img :src="img" width="250" height="200" alt="" />
    </div>
    <div class="games-item__content">
      <p class="date">{{ date }}</p>
      <router-link
        :to="'/games-item/' + slug + '/id/' + id"
        class="games-item__title"
        >{{ title }}</router-link
      >
      <p class="games-item__text">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "GamesItem",
  props: {
    title: String,
    img: String,
    date: String,
    slug: String,
    id: Number,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.games-item {
  display: grid;
  grid-template-columns: 250px auto;
  column-gap: 15px;
  border: 1px solid #cb7d49;
  border-radius: 15px;
  padding: 10px;
  text-align: left;
  margin: 20px 0;
}

.games-item__pic img {
  background-color: #fff;
  border-radius: 10px;
  margin: 0 auto;
}

.games-item__title {
  font-size: 24px;
  line-height: 25px;
  font-weight: 300;
  margin: 8px 0;
  color: #333;
}

.games-item__title:hover {
  color: #cb7d49;
}

.games-item__text {
  color: rgba(51, 51, 51, 0.5);
  font-size: 22px;
  line-height: 23px;
}

.games-item__content .date {
  margin-top: 0;
}

@media (max-width: 1080px) {
  .games-item {
    grid-template-rows: 250px auto;
    grid-template-columns: auto;
  }
}
</style>