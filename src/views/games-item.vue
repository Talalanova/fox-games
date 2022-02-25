<template>
    <div class="game-page">
        <h1>Игротеки</h1>
        <hr>
        <div class="game-page__content">
            <h3>Игротека в эту субботу!</h3>
            <img src="@/assets/news-img-mini.jpg" width="250" height="200" alt="">
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
            <img src="@/assets/news-img-large.jpg" width="1150" height="185" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'gamePage'
}
</script>

<style scoped>

.game-page {
    padding: 40px 0;
}

.game-page h3 {
    font-size: 24px;
    line-height: 25px;
    font-family: "Nunito", "Arial", sans-serif;
    text-align: left;
    font-weight: 600;
}

.game-page__content img {
    background-color: bisque;
    float: left;
    margin: 0 20px 0 0;
    border-radius: 15px;
}

.game-page__content p {
    text-align: left;
    font-size: 23px;
    line-height: 24px;
    font-weight: 300;
}
</style>