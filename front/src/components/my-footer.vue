<template>
    <div class="footer">
        <div class="footer__subscribe">
            <form name="newsletter">
                <h3>Распродажи и акции!</h3>
                <p>Оставьте e-mail и покупайте по лучшим ценам</p>
                <input type="email"  v-model="email" name="email" placeholder="E-mail">
                <button type="submit" aria-label="Подписаться на рассылку" @click.prevent="sendEmail">{{ buttonText }}</button>
            </form>
        </div>
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
                <router-link to="/stocks">Акции</router-link>
            </li>
            <li>
                <router-link to="/contacts">Контакты</router-link>
            </li>
            <li>
                <router-link to="/Delivery">Доставка</router-link>
            </li>
            <li>
                <router-link to="/privacy">Политика<br>конфиденциальности</router-link>
            </li>
        </ul>
        <SocialList></SocialList>
        <a href="https://delomain.com/" class="footer__copyright">© 2022 Разработано Digital Agency “Delomain”</a>
        <div class="error" v-if="error">
        <div class="overlay" @click.self="error = !error">
            <img src="@/assets/fox-error.svg" width="512" height="450">
            <h1>Что-то пошло не так. Попробуйте перезагрузить страницу или вернуться позже</h1>
        </div>
        </div>
    </div>
</template>

<script>
import SocialList from '@/components/social-list.vue'
export default {
    name: 'MyFooter',
    data() {
        return {
            buttonText: 'Отправить',
            email: '',
            error: false
        }
    },
    components: {
        SocialList
    },
    methods: {
        sendEmail() {
            let formData = new FormData(document.forms.newsletter)
            fetch('http://127.0.0.1:8000/api/email/', {
                method: 'POST',
                body: formData
            })
            .then((response) => {
                if (response.ok) {
                    this.buttonText = 'Отправлено!'
                    this.email = ''                    
                } else {
                    this.error = true
                }
            });
        }
    }
}
</script>

<style scoped>
.footer {
    /* display: grid;
    grid-template-columns: auto auto auto; */
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 5% 0 6%;
    align-items: center;
    /* margin-bottom: -30px; */
    width: 100%;
}

.footer__links {
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 65px;
    list-style: none;
    color: white;
    padding: 0 5px;
    margin: 0;
    text-align: left;
}

.footer__links a {
    color: white;
    text-decoration: none;
    word-break: break-all;
}

.footer__subscribe {
    background-color: #CB7D49;
    border-radius: 35px;
    color: white;
}

.footer__subscribe form {
    padding: 12px;
    text-align: center;
    font-family: "Nunito", "Arial", sans-serif;
}

form input {
    border-radius: 5px;
    padding: 5px 20px;
    border: none;
    margin-right: 15px;
}

form h3,
form p {
    margin: 5px 0;
}

form button {
    font-family: "Nunito", "Arial", sans-serif;
    border-radius: 5px;
    border: none;
    color: white;
    background-color: #4B0101;
    padding: 5px 10px;
    font-weight: 700;
}

.footer__copyright {
    color: white;
    text-decoration: none;
    width: 100%;
    margin-left: 50%;
}

@media (max-width: 1080px) {
    .footer {
        padding: 0;
        flex-direction: column;
    }

    .footer__subscribe {
        border-radius: 0;
        width: 100%;
    }

    .footer__links {
        order: -1;
        margin: 20px auto;
        column-gap: 50px;
    }

    .footer__copyright {
        margin: 0;
    }
}
</style>
