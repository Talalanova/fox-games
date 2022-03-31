<template>
  <router-link :to="'/news-item/' + itemData.slug + '/id/' + itemData.id">
    <div class="news-card">
      <img
        class="news-card__pic"
        :src="itemData.img"
        width="178"
        height="178"
        alt="Особняки безумия"
      />
      <h3 class="news-card__title">{{ itemData.title }}</h3>
      <p class="news-card__desc">{{ itemData.description }}</p>
      <button class="news-card__button" aria-label="Читать новость">
        Читать
      </button>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "NewsCard",
  props: {
    itemData: Object,
  },
};
</script>

<style scoped>
.news-card {
  display: flex;
  flex-direction: column;
  max-width: 220px;
  border: 0.5px solid #cb7d49;
  padding: 15px;
  text-align: center;
  border-radius: 10px;
}

.news-card__pic {
  margin: auto;
}

.news-card__title {
  font-family: "Nunito", "Arial", sans-serif;
  font-size: 24px;
  line-height: 25px;
  font-weight: 300;
  color: #333333;
  margin: 15px 0 10px;
}

.news-card__desc {
  color: #b6b6b6;
  font-size: 18px;
  line-height: 21px;
  margin: 10px 0;
}

.news-card__button {
  background-color: #cb7d49;
  color: white;
  font-family: "Nunito", "Arial", sans-serif;
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  border: none;
  border-radius: 5px;
  padding: 8px 20px;
}

@media (max-width: 1080px) {
  .news-card {
    padding: 10px;
  }

  .news-card__title {
    font-size: 18px;
    line-height: 19px;
    margin: 5px 0;
  }

  .news-card__desc {
    margin: 5px 0;
    font-size: 16px;
    line-height: 17px;
  }
}
</style>