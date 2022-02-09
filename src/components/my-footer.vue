<template>
    <div class="footer">
        <ul class="footer__links">
            <li>
                <router-link to="/about">О нас</router-link>
            </li>
            <li>
                <router-link to="/">Главная</router-link>
            </li>
            <li>
                <router-link to="/news">Новости</router-link>
            </li>
            <li>
                <router-link to="/catalog">Каталог</router-link>
            </li>
            <li>
                <router-link to="/games">Турниры</router-link>
            </li>
            <li>
                <router-link to="/">Акции</router-link>
            </li>
            <li>
                <router-link to="/contacts">Контакты</router-link>
            </li>
            <li>
                <router-link to="/">Доставка</router-link>
            </li>
        </ul>

        
    </div>
</template>

<script>
export default {
    name: 'MyFooter'
}
</script>

<style scoped>
.footer {
    background-color: darkkhaki;
}
</style>