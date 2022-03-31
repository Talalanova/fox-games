<template>
  <div class="stocks-item">
    <div class="stocks-item__pic">
      <img :src="img" width="250" height="200" alt="" />
    </div>
    <div class="stocks-item__content">
      <p class="date">{{ date }}</p>
      <p class="stocks-item__title">{{ title }}</p>
      <p class="stocks-item__text">{{ description }}</p>
      <p class="stocks-item__text" v-html="content"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "stocksItem",
  props: {
    title: String,
    img: String,
    date: String,
    description: String,
    content: String,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.stocks-item {
  display: grid;
  grid-template-columns: 250px auto;
  column-gap: 15px;
  border: 1px solid #cb7d49;
  border-radius: 15px;
  padding: 10px;
  text-align: left;
  margin: 20px 0;
}

.stocks-item__pic img {
  background-color: #fff;
  border-radius: 10px;
  margin: 0 auto;
}

.stocks-item__title {
  font-size: 24px;
  line-height: 25px;
  font-weight: 400;
  margin: 8px 0;
  color: #333;
}

.stocks-item__text {
  color: rgba(51, 51, 51, 0.5);
  font-size: 22px;
  line-height: 23px;
}

.stocks-item__content .date {
  margin-top: 0;
}

@media (max-width: 1080px) {
  .stocks-item {
    grid-template-rows: 250px auto;
    grid-template-columns: auto;
  }
}
</style>