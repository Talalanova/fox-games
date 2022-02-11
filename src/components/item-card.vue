<template>
    <router-link to="/item-full">
        <div class="item-card">
            <img class="item-card__pic" src="../assets/card_img.png" width="178" height="178" alt="Особняки безумия">
            <h3 class="item-card__title">Особняки безумия</h3>
            <p class="item-card__desc">Никто не выйдет</p>
            <button class="item-card__button" aria-label="Купить">{{ buttonValue }}</button>
        </div>
    </router-link>

</template>

<script>
export default {
    name: 'ItemCard',
    props: {
        buttonValue: String
    }
}
</script>

<style scoped>
.item-card {
    display: flex;
    flex-direction: column;
    max-width: 220px;
    border: 0.5px solid #CB7D49;
    padding: 15px;
    text-align: center;
    border-radius: 10px;
}

.item-card__pic {
    margin: auto;
}

.item-card__title {
    font-family: "Nunito", "Arial", sans-serif;
    font-size: 24px;
    line-height: 25px;
    font-weight: 300;
    color: #333333;
    margin: 15px 0 10px
}

.item-card__desc {
    color: #B6B6B6;
    font-size: 18px;
    line-height: 21px;
    margin: 10px 0;
}

.item-card__button {
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