<template>
    <router-link to="/news">
        <div class="news-card">
            <img class="news-card__pic" src="@/assets/card_img.png" width="178" height="178" alt="Особняки безумия">
            <h3 class="news-card__title">Особняки безумия</h3>
            <p class="news-card__desc">Никто не выйдет</p>
            <button class="news-card__button" aria-label="Купить">Читать</button>
        </div>
    </router-link>

</template>

<script>
export default {
    name: 'NewsCard',
}
</script>

<style scoped>
.news-card {
    display: flex;
    flex-direction: column;
    max-width: 220px;
    border: 0.5px solid #CB7D49;
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
    margin: 15px 0 10px
}

.news-card__desc {
    color: #B6B6B6;
    font-size: 18px;
    line-height: 21px;
    margin: 10px 0;
}

.news-card__button {
    background-color: #CB7D49;
    color: white;
    font-family: "Nunito", "Arial", sans-serif;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    border: none;
    border-radius: 5px;
    padding: 8px 20px;
}

</style>