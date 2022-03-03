<template>
    <div class="news-page">
        <h1>Новости</h1>
        <hr>
        <Breadcrumbs>
            <router-link to="/">Главная</router-link>
            <router-link to="/news">Новости</router-link>
            <router-link to="/news-item">Новость недели</router-link>
        </Breadcrumbs>
        <div class="news-page__content">
            <h3>Главная новость этой недели!</h3>
              <img src="@/assets/news-img-mini.jpg" width="250" height="200" alt="">
            <div>
                <p>
                    "Особняки безумия" – это кооперативная игра для 1–5 игроков, действие которой происходит в мире Говарда Лавкрафта, мастера ужаса и автора мифов о Древних. 
                    Игрокам предстоит взять на себя роли сыщиков и окунуться в мрачный и наполненный безумием мир.
                </p>
                <p>
                    "Особняки безумия" – это кооперативная игра для 1–5 игроков, действие которой происходит в мире Говарда Лавкрафта.
                </p>
                <p>
                    "Особняки безумия" – это кооперативная игра для 1–5 игроков, действие которой происходит в мире Говарда Лавкрафта, мастера ужаса и автора мифов о Древних. 
                    Игрокам предстоит взять на себя роли сыщиков и окунуться в мрачный и наполненный безумием мир. 
                </p>
                <p>
                    "Особняки безумия" – это кооперативная игра для 1–5 игроков, действие которой происходит в мире Говарда Лавкрафта, мастера ужаса и автора мифов о Древних. 
                    Игрокам предстоит взять на себя роли сыщиков и окунуться в мрачный и наполненный безумием мир. 
                </p>                
            </div>            
              <img src="@/assets/news-img-large.jpg" width="1150" height="185" alt="">      
        </div>
    </div>
</template>

<script>
import Breadcrumbs from '@/components/breadcrumbs.vue'
export default {
    name: 'newsPage',
    components: {
        Breadcrumbs
    }
}
</script>

<style scoped>

.news-page {
    padding: 40px 10px;
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

.news-page__content p {
    text-align: left;
    font-size: 23px;
    line-height: 24px;
    font-weight: 300;
}
</style>