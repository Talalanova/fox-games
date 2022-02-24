<template>
    <div class="page404">
        <img src="@/assets/404.svg" width="560" height="270">
        <p>Oops!Лис тут может и был, но сейчас он уже дома.</p>
        <router-link to="/">Вернуться на главную</router-link>
    </div>
</template>

<style scoped>
.page404 img {
    margin: auto;
}

.page404 {
    padding: 80px 0 0 0;
}

.page404 p,
.page404 a {
    font-family: 'Nunito', "Arial", sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #333333;
}

.page404 a {
    border: 1px solid #333;
    padding: 10px 20px;
    border-radius: 10px;
    max-width: fit-content;
    margin: auto;
}
</style>