<template>
    <div class="news-page">
        <h1>Новости</h1>
        <hr>
        <Breadcrumbs>
            <router-link to="/">Главная</router-link>
            <router-link to="/news">Новости</router-link>            
        </Breadcrumbs>
        <div class="news-page__content">
            <h3>{{ item.title }}</h3>
            <p class="news-page__date"> {{ item.date }}</p>
            <div v-html="item.content"></div>            
              <!-- <img :src="item.img" width="1150" height="185" alt=""> -->
        </div>
    </div>
</template>

<script>
import Breadcrumbs from '@/components/breadcrumbs.vue'

export default {
    name: 'newsPage',
    components: {
        Breadcrumbs
    },
    data() {
        return {
            item : Object,
            
        }
    },
    methods: {
        loadNewsItem() {

            fetch('http://api.foxhole.club/api/article/' + this.$route.params.id)

                .then((response) => {
                    if(response.ok) {
                        return response.json();
                    }
                
                    throw new Error('Network response was not ok');
                })
                .then((json) => {
                    let element = json
                    console.log(json)
                    this.item = {
                        title: element.title,
                        content: element.content,
                        date: new Date(element.created_at).toLocaleDateString('ru-RU')
                    }
                })
        }
    },
    mounted() {
        this.loadNewsItem()
    }
}
</script>

<style scoped>

.news-page {
    padding: 40px 10px;
}

.news-page__date {
    font-size: 14px;
}

.news-page h3 {
    font-size: 24px;
    line-height: 25px;
    font-family: "Nunito", "Arial", sans-serif;
    text-align: left;
    font-weight: 600;
}

.news-page__content img {
    background-color: bisque;
    float: left;
    margin: 0 20px 0 0;
    border-radius: 15px;
}

.news-page__content {
    text-align: left;
    font-size: 23px;
    line-height: 24px;
    font-weight: 300;
}
</style>