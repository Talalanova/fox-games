<template>
  <div class="cart">
    <h1>Корзина</h1>
    <hr>
    <form method="post" action="#">
      <div class="cart__buttons">
        <button class="cart__choose-button">Выделить все</button>
        <button class="cart__remove-button" @click="deleteFromCart()">Удалить выбранное</button>
      </div>
      <div>
        <CartItem @checkCartItem="checkCartItem" :itemData="item" v-for="item in this.CART" :key="item"></CartItem>
      </div>
      <div class="sum">
        <span>Итог</span>
        <span>{{ sum + `₽`}}</span>
      </div>
      <div class="cart__contacts-frame">
        <div class="cart__contacts-info">          
          <input type="text" placeholder="*Имя" required/>
          <input type="tel" placeholder="*Номер" required/>
          <textarea placeholder="Комментарий"></textarea>
          <button class="submit" type="submit">Оформить заказ</button>
          <input class="cart__privacy--input" type="checkbox" id="privacy" value="privacy">
          <label class="cart__privacy" for="privacy">Я подтверждаю свое согласие на обработку персональных данных</label>
          <button type="button" @click="delivery = !delivery" class="cart__delivery-rules">Правила резерва товара</button>
        </div>
        <div class="cart__contacts-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1731.4932560840555!2d131.90289118261148!3d43.12525428257137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb391828dd66b61%3A0xd974554b32a68d90!2z0JvQuNGB0YzRjyDQndC-0YDQsA!5e0!3m2!1sru!2sru!4v1645080909644!5m2!1sru!2sru" width="100%" height="456" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
    </form>
    <div class="overlay" v-if="delivery" @click.self="delivery = !delivery">
      <div class="delivery__info">
        <p>В нашем магазине пока отсутствует возможность заказать любимую игру с доставкой, но вы можете оформить резерв на любую из игр!</p>
        <ul> 
          <li>Бронь на товар осуществляется без предоплаты</li>
          <li>После получения вашей заявки, наш сотрудник свяжется с вами для уточнения деталей, не забудьте оставить свой телефон!</li>
          <li>Бронь сохраняется в течение 48 часов, после оформления заказа через сайт</li>
          <li>Если заказ не оплачен и не забран из магазина в течение 48 часов, бронь автоматически отменяется</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from '@/components/cart-item.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'Cart',
  components: {
    CartItem,
    
  },
  data() {
    return {
      delivery: false,
      cartSum: 0,
      checkedItems: []
    }
  },
  methods: {
    deleteFromCart() {
      console.log(this.checkedItems)
      // fetch('http://api.foxhole.club/api/basket/' + this.$cookie.get('fox_cart') + '/decrease/' + id)
      //   .then((response) => {
      //       if(response.ok) {                        
      //         return response.json();
      //       }
      //       throw new Error('Network response was not ok');
      //   })
      //   .then((json) => {
      //       console.log(json)
      //       this.RESET_CART()
      //       json.products.forEach(item => {
      //           this.ADD_TO_CART(item)
      //       })             
      //   })
    },
    checkCartItem(event,id) {
      if(event == true) {
        this.checkedItems.push(id)
      } else {
        this.checkedItems = this.checkedItems.filter(item => item[!id])
      }
      console.log(this.checkedItems)
    }
  },
  props: {
    itemData: Object
  },
  computed: {
    ...mapGetters([
      'CART'
    ]),
    sum() {
      let result = 0;
      this.CART.forEach(el=> {
        result += Math.ceil(+el.price*el.pivot.quantity)
      });
      return result;
    },
  },
  mounted() {
  }
}
</script>

<style scoped>


.delivery__info {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  font-size: 24px;
  text-align: left;
  padding: 15px 30px;
  border: 1px solid #004A22;
  border-radius: 20px;
  background-image: url('~@/assets/delivery-green.png'), url('~@/assets/delivery-green2.png');
  background-repeat: no-repeat;
  background-position: left top, bottom right;
  animation: 0.7s slideDown;
  max-width: 600px;
  width: 91%;
}

@keyframes slideDown {
  0% {
    transform: translate(-50%, -100%);
  }
  100% {
    transform: translate(-50%, -50%);
  }
}

.cart {
  padding: 40px 10px;
}

.cart__buttons {
  text-align: right;
}

.cart__choose-button {
  font-size: 13px;
  line-height: 14px;
  color: #4F4F4F;
  border: none;
  background-color: white;
  position: relative;
  padding-left: 30px;
  cursor: pointer;
}

.cart__choose-button::before {
  position: absolute;
  content: "—";
  background-color: #CB7D49;
  color: white;
  border-radius: 5px;
  width: 16px;
  height: 16px;
  left: 0;
  top: -6px;
  padding: 5px;
}

.cart__remove-button {
  font-size: 13px;
  line-height: 14px;
  color: #CB7D49;
  border: none;
  background-color: white;
  cursor: pointer;
}

.sum {
  font-size: 36px;
  line-height: 37px;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid #CB7D49;
  border-bottom: 1px solid #CB7D49;
  padding: 20px 0;
}

.contacts {
  padding: 40px 0;
  position: relative;
}

.cart__contacts-frame {
  display: grid;
  grid-template-columns: auto auto;
  border: 1px solid #CB7D49;
  border-radius: 0 0 40px 40px;
  border-top: none;
  overflow: hidden;
  background-image: url('~@/assets/sidemenu_green.svg');
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: 142px 30px;
}

.cart__contacts-info {
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 24px;
  line-height: 25px;
  text-align: left;
  color: #4B0101;
  position: relative;
}

.cart__contacts-info input,
.cart__contacts-info textarea {
  border: 1px solid #CB7D49;
  border-radius: 10px;
  padding: 8px 10px;
  margin: 10px 0;
  font-size: 16px;
  resize: none;
}

.cart__contacts-info .submit {
  padding: 4px 20px;
  background-color: #CB7D49;
  border: 1px solid #CB7D49;
  color: white;
  font-family: "Nunito", "Arial", sans-serif;
  font-size: 21px;
  border-radius: 0 0 8px 8px;
  cursor: pointer;
  margin-top: 10px;
  margin-left: auto;
  transition: 0.7s;
  position: absolute;
  top: 228px;
  right: 66px;
}

/* @-moz-document url-prefix() {
  .cart__contacts-info .submit { top: 244px;}
} */

.cart__contacts-info .submit:hover {
  color: #4B0101;
  border: 1px solid #CB7D49;
  background-color: white;
}

.cart__delivery-rules {
  cursor: pointer;
  border: 1px solid #CB7D49;
  padding: 10px 20px;
  color: #333333;
  background-color: white;
  text-align: center;
  border-radius: 10px;
  margin-top: 115px;
  transition: 0.7s;
}

.cart__delivery-rules:hover {
  background-color: #CB7D49;
  border: 1px solid #CB7D49;
  color: white;
}

.cart__privacy {
  padding: 0 0 0 40px;
  position: relative;
  margin-top: 40px;
  font-size: 16px;
}

.cart__privacy::before {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 2px;
  border: 0.5px solid #B6B6B6;
  left: 2px;
  bottom: 5px;
}

.cart__privacy::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background-image: url('~@/assets/icon_checked.svg');
  background-repeat: no-repeat;
  left: 3px;
  bottom: 6px;
}

input[type="checkbox"]:checked + .cart__privacy::before {
  background-color: #CB7D49;
  border-color: #CB7D49;
}

.cart__privacy--input {
  display: none;
}

@media (max-width: 568px) {
  .cart__contacts-frame {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    position: relative;
    background-image: none;
  }

  .cart__contacts-frame::after {
    position: absolute;
    content: "";
    width: 175px;
    height: 47px;
    bottom: 0;
    background-image: url('~@/assets/sidemenu_green.svg');
    background-repeat: no-repeat;
    background-position: bottom left;
    background-size: 146px 33px;
  }
}

@media (max-width: 1080px) {
  .delivery__info {
    top: 20px;
    transform: translate(-50%, 0);
    width: 80%;
  }
}
</style>