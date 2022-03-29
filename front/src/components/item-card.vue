<template>
    <div class="item-card" @mouseenter="addClass" @mouseleave="removeClass">
        <router-link :to="'/item-full/' + itemData.slug + '/prd/' + itemData.id" class="item-card__link-wrapper">        
            <img class="item-card__pic" :src= itemData.pics[0] width="220" height="178" :alt="itemData.title">
            <h3 class="item-card__title">{{ itemData.title}}</h3>
            <p class="item-card__desc">{{ itemData.short_description }}</p>
        </router-link>
        <button class="item-card__button" aria-label="Купить" @click="addToCart(itemData)" :disabled="itemData.amount == 0">
            <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.14833 1.85148H2.65623L2.77904 2.34431L3.01865 3.30587L3.0212 3.31611L3.02342 3.32642L3.02477 3.33212L3.02646 3.33861L3.02643 3.33862L4.09327 7.61133L4.18237 7.96817L3.92237 8.2283L3.22109 8.92993C3.02972 9.1216 2.94596 9.35754 2.94879 9.58797L3.41194 9.12407L4.19754 8.3372L4.38798 8.14645H4.65753H9.83114C9.8561 8.14643 9.88063 8.13947 9.902 8.12622C9.92338 8.11298 9.9408 8.09394 9.95218 8.07113L9.95225 8.07099L12.309 3.34991L2.14833 1.85148ZM2.14833 1.85148H1.1899C1.15427 1.85148 1.1199 1.83731 1.09438 1.81176L0.634394 2.27101L1.09438 1.81176C1.06884 1.78617 1.0543 1.75125 1.0543 1.71461C1.0543 1.67797 1.06884 1.64304 1.09438 1.61745C1.1199 1.5919 1.15427 1.57773 1.1899 1.57773H2.76108C2.76108 1.57773 2.76109 1.57773 2.76109 1.57773C2.79105 1.57774 2.82026 1.58776 2.8441 1.60639C2.8679 1.62499 2.88501 1.65117 2.89249 1.68089M2.14833 1.85148L2.89249 1.68089M2.89249 1.68089C2.89251 1.68096 2.89253 1.68103 2.89255 1.68111L3.13592 2.65853L3.25866 3.15148H3.76666H12.1879C12.2108 3.15149 12.2334 3.15736 12.2535 3.16861L12.5707 2.60121L12.2535 3.16861C12.2737 3.17986 12.2907 3.19614 12.303 3.21601L12.8562 2.87476L12.303 3.21601C12.3152 3.23588 12.3223 3.25865 12.3233 3.28214C12.3244 3.30558 12.3194 3.32886 12.309 3.34977L2.89249 1.68089ZM3.21512 10.2333H3.87193H10.6171C10.6527 10.2333 10.6871 10.2475 10.7126 10.273C10.7381 10.2986 10.7527 10.3335 10.7527 10.3702C10.7527 10.4068 10.7381 10.4418 10.7126 10.4673C10.6871 10.4929 10.6527 10.5071 10.6171 10.5071H3.87193C3.60197 10.5071 3.37595 10.399 3.21512 10.2333Z" fill="white" stroke="white" stroke-width="1.3"/>
                <path d="M10.7527 13.1242C10.7527 13.2651 10.6968 13.4001 10.5976 13.4995C10.4984 13.5988 10.3641 13.6545 10.2243 13.6545C10.0845 13.6545 9.95021 13.5988 9.85103 13.4995C9.75182 13.4001 9.6959 13.2651 9.6959 13.1242C9.6959 12.9832 9.75182 12.8482 9.85103 12.7488C9.95021 12.6495 10.0845 12.5938 10.2243 12.5938C10.3641 12.5938 10.4984 12.6495 10.5976 12.7488C10.6968 12.8482 10.7527 12.9832 10.7527 13.1242Z" stroke="white" stroke-width="1.3"/>
                <path d="M4.31192 13.4995C4.21274 13.5988 4.07845 13.6545 3.93865 13.6545C3.79885 13.6545 3.66457 13.5988 3.56539 13.4995C3.46618 13.4001 3.41025 13.2651 3.41025 13.1242C3.41025 12.9832 3.46618 12.8482 3.56539 12.7488C3.66456 12.6495 3.79885 12.5938 3.93865 12.5938C4.07845 12.5938 4.21274 12.6495 4.31192 12.7488C4.41113 12.8482 4.46705 12.9832 4.46705 13.1242C4.46705 13.2651 4.41113 13.4001 4.31192 13.4995Z" stroke="white" stroke-width="1.3"/>
            </svg>
            {{ Math.ceil(itemData.price)+'₽' }}
        </button>
        <div v-if="itemData.age !== null && itemData.players !== null && itemData.time !== null" class="item-card__mark">
            <span class="age">{{ itemData.age }}</span>            
            <span class="players">{{ itemData.players }}</span>            
            <span class="time">{{ itemData.time }}</span>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: 'ItemCard',
    props: {
        itemData : Object
    },
    data() {
        return {            
        }
    },
    methods: {
        addClass() {
            this.$el.classList.add('item-card--mouseon')
        },
        removeClass() {
            this.$el.classList.remove('item-card--mouseon')
        },
        addToCart(data) {
            fetch('http://api.foxhole.club/api/basket/' + this.$cookie.get('fox_cart') + '/increase/' + data.id)
                .then((response) => {
                    if(response.ok) {                        
                        return response.json();
                    }
                    throw new Error('Network response was not ok');
                })
                .then((json) => {
                    if (json.message == "amount_error") {
                        alert('Это максимальное количество товара на складе!')
                    } else {
                        this.RESET_CART()
                        json.products.forEach(item => {
                            this.ADD_TO_CART(item)
                        })                            
                    }          
                })
        },
        ...mapActions([
            'ADD_TO_CART',
            'RESET_CART'
        ])
    },
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
    position: relative;
    justify-content: space-between;
    min-height: 334px;
    min-width: 220px;
    margin: auto 0;
}

.item-card__link-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 300px;
    justify-content: space-between;
}
.item-card--mouseon {
    transform: scale(1.02)
}

.item-card__mark {
    flex-direction: column;
    color: white;
    width: fit-content;
    text-align: left;
    position: absolute;
    top: 6px;
    font-size: 10px;
    left: -7px;
    display: none;
}

.item-card--mouseon .item-card__mark {
    display: flex;
}

.age::before,
.players::before,
.time::before {
    position: absolute;
    content: "";
    width: 15px;
    height: 15px;
    left: 1px;
    background-repeat: no-repeat;
}

.age {
    background-image: url('~@/assets/mark-age.svg');
    background-repeat: no-repeat;
    /* background-position: -8px, 0;     */
    position: relative;
    padding: 2px 0px 7px 16px;
    /* background-size: 73px, 30px;    */
}

.age::before {
    background-image: url('~@/assets/mark-age_icon.svg');
    
}

.players {
    background-image: url('~@/assets/mark.svg');
    background-repeat: no-repeat;
    /* background-size: 51px, 18px; */
    position: relative;
    padding: 3px 0px 7px 19px;
}

.players::before {
    background-image: url('~@/assets/mark-players_icon.svg');
}

.time {
    background-image: url('~@/assets/mark-time.svg');
    background-repeat: no-repeat;
    /* background-size: 98px, 29px; */
    position: relative;
    padding: 3px 10px 5px 18px;
}

.time::before {
    background-image: url('~@/assets/mark-time_icon.svg');
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
    -webkit-line-clamp: 2;
    width: 100%;
    overflow: hidden;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
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
    cursor: pointer;
}

.item-card__button:disabled {
    background-color: darkgrey;
    color: white;
}

@media (max-width: 1080px) {

    .item-card {
        padding: 10px;
    }

    .item-card__title {
        font-size: 18px;
        line-height: 19px;
        margin: 5px 0;
    }

    .item-card__desc {
        margin: 5px 0;
        font-size: 16px;
        line-height: 17px;
    }
}

</style>