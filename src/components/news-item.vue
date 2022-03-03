<template>
    <div class="news-item">
        <div class="news-item__pic">
            <img :src="require(`@/assets/${img}`)" width="250" height="200" alt="">
        </div>
        <div class="news-item__content">
            <router-link to="/news-item" class="news-item__title">{{ title }}</router-link>
            <p class="news-item__text">
                <slot></slot>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewsItem',
    props: {
        title: String,
        img: String,
    },
    data() {
        return {
           
        }
    }
}
</script>

<style scoped>
.news-item {
    display: grid;
    grid-template-columns: 250px auto;
    column-gap: 15px;
    border: 1px solid #CB7D49;
    border-radius: 15px;
    padding: 10px;
    text-align: left;
    margin: 20px 0;
}

.news-item__pic img {
    background-color: #FFE9D4;
    border-radius: 10px;
    margin: 0 auto;
}

.news-item__title {
    font-size: 24px;
    line-height: 25px;
    font-weight: 300;
    margin: 8px 0;
    color: #333;
}

.news-item__title:hover {
    color: #CB7D49;
}

.news-item__text {
    color: rgba(51, 51, 51, 0.5);
    font-size: 22px;
    line-height: 23px;
}

@media (max-width: 1080px) { 
    .news-item {
        grid-template-rows: 250px auto;
        grid-template-columns: auto;
    }
}
</style>