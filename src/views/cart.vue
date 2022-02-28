<template>
  <div class="cart">    
    <h1>Корзина</h1>
    <hr>
    <form method="post" action="#">
      <div class="cart__buttons">
        <button class="cart__choose-button">Выделить все</button>
        <button class="cart__remove-button">Удалить выбранное</button>
      </div>
      <CartItem :title="itemData.title" :price="itemData.price" :pic="itemData.thumb" :itemId="itemData.id" :discont="itemData.discont" :inStock="itemData.inStock"></CartItem>
      <CartItem :title="itemData.title" :price="itemData.price" :pic="itemData.thumb" :itemId="itemData.id" :discont="itemData.discont" :inStock="itemData.inStock"></CartItem>
      <CartItem :title="itemData.title" :price="itemData.price" :pic="itemData.thumb" :itemId="itemData.id" :discont="itemData.discont" :inStock="itemData.inStock"></CartItem>
      <div class="sum">
        <span>Итог</span>
        <span> 13200₽ </span>
      </div>
      <div class="cart__contacts-frame">
        <div class="cart__contacts-info">          
          <input type="text" placeholder="*Имя" required/>
          <input type="tel" placeholder="*Номер" required/>
          <textarea placeholder="Комментарий"></textarea>
          <button class="submit" type="submit">Отправить</button>
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
import { itemData } from '@/data.js'

export default {
  name: 'Cart',
  components: {
    CartItem
  },
  data() {
    return {
      itemData,
      delivery: false
    }
  },
  computed: {

  }
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  -webkit-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
  overflow: auto;
}

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
@media (max-width: 568px) {
  .cart__contacts-frame {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }
}

</style>