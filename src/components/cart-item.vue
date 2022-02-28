<template>
    <div class="cart-item" :class="[inStock <= 2 ? 'cart-item--outofstock' : '']">
        <div class="cart-item__pic">
            <input type="checkbox" :id="itemId" :value="itemId">
            <label :for="itemId"></label>
            <img :src= pic width="89" height="89" alt="">
        </div>
       <router-link to="/item-full" class="cart-item__title">{{ title }}</router-link>
       <span class="counter" v-if="inStock > 2">
           <button @click="plus">+</button>
           <p>{{ counter }}</p>
           <button @click="minus">-</button>
       </span>
        <span class="item__outofstock" v-if="inStock <= 2">           
           <p>Нет в наличии</p>           
       </span>
       <span class="cart-item__price" :class="[discont > 0 ? 'cart-item__price--discont' : '']">
            <span class="current-price">
                {{ price + `₽` }}
            </span>
            <span v-if="discont > 0" class="discont">
                {{`-` + discont + `%` }}
            </span>
            <span v-if="discont > 0" class="discont-price">
                {{ discontPrice + `₽`}}
            </span>
        </span>
    </div>
</template>

<script>
export default {
    name: 'CartItem',
    data() {
        return {
            counter: 1,
        }
    },
    props: {
        title: String,
        price: Number,
        pic: String,
        itemId: Number,
        discont: Number,
        inStock: Number,

    },
    computed: {
        discontPrice: function() {
            return this.price - (this.price*this.discont/100)
        }
    },
    methods: {
        plus() {
            this.counter += 1
        },
        minus() {
            if (this.counter <= 1) {
                return
            } else {
               this.counter -= 1  
            }

        }
    }
}
</script>

<style scoped>

.cart-item {
    display: grid;
    grid-template-columns: 95px auto 100px auto;
    column-gap: 15px;
    border: 1px solid #CB7D49;
    border-radius: 10px;
    overflow: hidden;
    padding: 8px 30px 8px 45px;
    margin: 20px 0;
}

.cart-item--outofstock {
    grid-template-columns: 95px auto 200px auto;
}

.cart-item__title {
    color: #333333;
    font-size: 24px;
    line-height: 25px;
    text-align: left;
    margin: auto 0;
}

.cart-item__price {
    color: #333333;
    font-size: 24px;
    line-height: 25px;
    text-align: right;
    margin: auto;
    font-weight: 600;
}

.cart-item__price--discont {
    display: flex;
    position: relative;
    flex-direction: column;  
}

.cart-item__price--discont .current-price {
    text-decoration: line-through;
}

.discont {
    background-color: #CB7D49;
    color: white;
    padding: 5px;
    border-radius: 10px;
    font-size: 21px;
    position: absolute;
    right: -30px;
    top: -23px;
}

.counter {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: #CB7D49;
    color: white;
    border-radius: 10px;
    max-height: 45px;
    margin: auto 0;
    font-size: 23px;
    padding: 5px 0;
}

.counter p {
    margin: auto 0;
}

.item__outofstock p {
    background-color: #ECECEC;
    border-radius: 10px;
    font-size: 23px;
    padding: 5px 0;
}
.counter button {
    border: none;
    background-color: #CB7D49;
    color: white;
    max-height: 45px;
    border-radius: 10px;
    font-size: 23px;
}

.cart-item input[type="checkbox"] {
    display: none;
}

.cart-item label {
    position: relative;
    
}

.cart-item label::before {
    content: "";
    position: absolute;
    width: 21px;
    height: 21px;
    border-radius: 2px;
    border: 0.5px solid #B6B6B6;
    left: -86px;
    bottom: -22px;
}

.cart-item label::after {
    content: "";
    position: absolute;
    width: 21px;
    height: 21px;
    background-image: url(/img/icon_checked.fb624254.svg);
    background-repeat: no-repeat;
    left: -84px;
    bottom: -20px;
    background-size: 18px 21px;
}

input[type="checkbox"]:checked + label::before {
    background-color: #CB7D49;
    border-color: #CB7D49;
}

@media (max-width: 568px) {
    .cart-item {
        grid-template-columns: 95px auto;
        padding: 2% 2% 2% 6%;
        margin: 20px 0;
    }

    .cart-item__pic {
        grid-row: 1 / 4;
    }

    .cart-item__title {
        font-size: 18px;
        line-height: 19px;
    }

    .counter {
        order: 3;
        max-width: 120px;
    }

    .cart-item__price--discont {
        align-items: center;
        gap: 4%;
        margin: 15px auto;
    }
}
</style>