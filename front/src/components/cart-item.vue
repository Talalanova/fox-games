<template>
    <div class="cart-item" :class="[itemData.amount == 0 ? 'cart-item--outofstock' : '']">
        <div class="cart-item__pic">
            <input  @change="emitCheck($event.target.checked,itemData.id)"
                    type="checkbox" :id="itemData.id" :value="itemData.id">
            <label :for="itemData.id"></label>
            <img :src="'http://api.foxhole.club/files/' +  itemData.images[0].path" width="89" height="89" alt="">
        </div>
       <router-link :to="'/item-full/' + itemData.slug + '/prd/' + itemData.id" class="cart-item__title">{{ itemData.title }}</router-link>
       <span class="counter" v-if="itemData.amount > 0">
           <button @click="deleteFromCart(itemData)">-</button>
           <p>{{ itemData.pivot.quantity }}</p>
           <button v-if="itemData.pivot.quantity < itemData.amount" @click="addToCart(itemData)">+</button>
       </span>
        <span class="item__outofstock" v-if="itemData.amount == 0">           
           <p>Нет в наличии</p>           
       </span>
       <span class="cart-item__price" :class="[itemData.discount < 0 ? 'cart-item__price--discont' : '']">
            <span v-if="itemData.old_price" class="current-price">
                {{ Math.ceil(itemData.old_price) + `₽` }}
            </span>
            <span v-if="itemData.discount < 0" class="discont">
                {{ itemData.discount + `%` }}
            </span>
            <span class="discont-price">
                {{ Math.ceil(itemData.price) + `₽`}}
            </span>
        </span>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: 'CartItem',
    data() {
        return {
          
        }
    },
    props: {
        itemData: Object,
        modelValue: { type: String, default: "" },
    },
    emits: ['checkCartItem'],
    computed: {
        discontPrice: function() {
            return this.itemData.price - (this.itemData.price*this.itemData.discont/100)
        }
    },
    methods: {
        addToCart(data) {            
            fetch('http://api.foxhole.club/api/basket/' + this.$cookie.get('fox_cart') + '/increase/' + data.id)
                .then((response) => {
                    if(response.ok) {                        
                        return response.json();
                    }
                    throw new Error('Network response was not ok');
                })
                .then((json) => {
                    console.log(json)
                    this.RESET_CART()
                    json.products.forEach(item => {
                        this.ADD_TO_CART(item)
                    })             
                })
                console.log(this.checked)
                
        },
        deleteFromCart(data) {
            fetch('http://api.foxhole.club/api/basket/' + this.$cookie.get('fox_cart') + '/decrease/' + data.id)
                .then((response) => {
                    if(response.ok) {                        
                        return response.json();
                    }
                    throw new Error('Network response was not ok');
                })
                .then((json) => {
                    console.log(json)
                    this.RESET_CART()
                    json.products.forEach(item => {
                        this.ADD_TO_CART(item)
                    })             
                })
        },
        ...mapActions([
            'ADD_TO_CART',
            'RESET_CART'
        ]),
        emitCheck(event,id) {           
            this.$emit('checkCartItem',event,id)
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
    padding: 22px 30px 22px 45px;
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
    font-size: 18px;
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
        column-gap: 5px;
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
        flex-direction: row;
        font-size: 21px;
        line-height: 22px;
        margin: 15px auto 15px 0;
    }

    .discont {
        position: static;
        padding: 3px;
    }

    .cart-item label::before {
        left: -65px;
    }

    .cart-item label::after {
        left: -63px;
    }
}

@media (max-width: 1080px) {


}
</style>