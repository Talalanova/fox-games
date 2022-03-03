<template>
  <div class="item-page item">    
    <h1>{{ itemData.title }}</h1>
    <hr>
    <Breadcrumbs>
      <router-link to="/Catalog">Категории</router-link>
      <router-link to="/Catalog">Ужасы</router-link>
      <router-link to="/Catalog">Вселенная Лавкрафта</router-link>
      <router-link to="/">Особняки безумия</router-link>
    </Breadcrumbs>
    <div class="item__data">
      <div class="item__current-pic" v-bind:class="[ getStatus(itemData.inStock) ]" :title="stockStatus[itemData.inStock]">
        <span class="prev" @click="updateImage(selectedPic - 1)" ></span>
				<span class="next" @click="updateImage(selectedPic + 1)" ></span>
        <img :src="itemData.pics[selectedPic]" width="563" height="370" alt="">
      </div>
      <div class="item__thumbs">
        <img v-for="(item,index) in itemData.pics" :key="item.index" :src="item" @click="updateImage(index)" width="125" height="90" alt="">
      </div>
      <div class="item__information">
        <span :class="[itemData.discont > 0 ? 'price price--discont' : 'price']">
          <span class="current-price">{{ itemData.price }}₽</span>
          <span v-if="itemData.discont > 0" class="discont">
            {{`-` + itemData.discont + `%` }}
          </span>
          <span v-if="itemData.discont > 0" class="discont-price">
            {{ discontPrice + `₽`}}
          </span>
        </span>
        <span v-for="(value,name) in itemParameters" v-bind:key="value.index" class="row">
          <span class="parameters">{{ value }}</span>
          <span class="value"> {{ itemData[name] }}</span>          
        </span>
        <router-link to="delivery" class="delivery">Условия заказа</router-link>
        <button type="button" :disabled="!itemData.inStock || itemData.inStock === 1" class="item__button">
          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.98247 1.83333L3.85425 1.35H3.3542H2.0575C1.93564 1.35 1.82615 1.30409 1.75134 1.2337C1.67787 1.16458 1.64463 1.07959 1.64463 1C1.64463 0.920406 1.67787 0.835425 1.75134 0.766301C1.82615 0.695913 1.93564 0.65 2.0575 0.65H4.18323C4.18323 0.65 4.18324 0.65 4.18324 0.65C4.28514 0.650006 4.37984 0.682291 4.45243 0.73559C4.52434 0.78839 4.56802 0.856457 4.58606 0.924068C4.58608 0.924126 4.5861 0.924184 4.58611 0.924241L4.91542 2.16655L5.04357 2.65H5.54372L16.9374 2.65C16.9375 2.65 16.9376 2.65 16.9377 2.65C17.015 2.65009 17.0893 2.66885 17.1529 2.70226C17.2164 2.73562 17.2652 2.78126 17.298 2.83118C17.3306 2.88079 17.3472 2.93408 17.3497 2.98609C17.3522 3.03803 17.3407 3.0915 17.3138 3.14211L14.1253 9.14197L14.1252 9.14211C14.0958 9.1976 14.0474 9.24984 13.9807 9.28866C13.9137 9.32763 13.8333 9.34996 13.7488 9.35H6.74901H6.4913L6.30361 9.52659L5.24074 10.5266L4.28552 11.4253C4.12166 10.98 4.19906 10.4636 4.62865 10.0594L5.57753 9.16766L5.86024 8.90197L5.76057 8.52702L4.31719 3.09702L4.31723 3.09701L4.31534 3.09018C4.31412 3.0858 4.31301 3.0814 4.312 3.07699L4.30951 3.06611L4.30665 3.05533L3.98247 1.83333ZM5.68614 12.35C5.07725 12.35 4.62797 12.0475 4.39241 11.65H5.68614H14.812C14.9338 11.65 15.0433 11.6959 15.1181 11.7663C15.1916 11.8354 15.2248 11.9204 15.2248 12C15.2248 12.0796 15.1916 12.1646 15.1181 12.2337C15.0433 12.3041 14.9338 12.35 14.812 12.35H5.68614Z" fill="white" stroke="white" stroke-width="1.3"/>
          <path d="M15.2246 15.4999C15.2246 15.7121 15.1354 15.9243 14.9623 16.0872C14.7878 16.2513 14.5431 16.3499 14.2803 16.3499C14.0175 16.3499 13.7729 16.2513 13.5984 16.0872C13.4253 15.9243 13.336 15.7121 13.336 15.4999C13.336 15.2877 13.4253 15.0756 13.5984 14.9127C13.7729 14.7485 14.0175 14.6499 14.2803 14.6499C14.5431 14.6499 14.7878 14.7485 14.9623 14.9127C15.1354 15.0756 15.2246 15.2877 15.2246 15.4999Z" fill="white" stroke="white" stroke-width="1.3"/>
          <path d="M6.45838 16.0872C6.2839 16.2513 6.03924 16.3499 5.77644 16.3499C5.51364 16.3499 5.26897 16.2513 5.09449 16.0872C4.92136 15.9243 4.83213 15.7121 4.83213 15.4999C4.83213 15.2877 4.92136 15.0756 5.09449 14.9127C5.26897 14.7485 5.51363 14.6499 5.77644 14.6499C6.03924 14.6499 6.2839 14.7485 6.45838 14.9127C6.63151 15.0756 6.72074 15.2877 6.72074 15.4999C6.72074 15.7121 6.63151 15.9243 6.45838 16.0872Z" fill="white" stroke="white" stroke-width="1.3"/>
          </svg>
          Добавить в корзину
        </button>
      </div>
    </div>
    <div id="tabs" class="container">
        <div class="tabs">
          <a v-if="itemData.description" v-on:click="activetab='1'" v-bind:class="[ activetab === '1' ? 'active' : '' ]">Описание</a>
          <a v-if="itemData.rules" v-on:click="activetab='2'" v-bind:class="[ activetab === '2' ? 'active' : '' ]">Правила</a>
          <a v-on:click="activetab='3'" v-bind:class="[ activetab === '3' ? 'active' : '' ]">Игры серии</a>
          <a v-on:click="activetab='4'" v-bind:class="[ activetab === '4' ? 'active' : '' ]">Аксессуары</a>
          <a v-if="itemData.comments" v-on:click="activetab='5'" v-bind:class="[ activetab === '5' ? 'active' : '' ]">Отзывы и вопросы({{itemData.comments.length}})</a>
        </div>
        <div class="content">
          <div v-if="activetab ==='1'" class="tabcontent text-hidden" ref="tabContent">
            {{itemData.description}}
            <button type="button" class="tabcontent__button--inverted tabcontent__button--right" @click="showMore">Продолжение...</button>
          </div>
          <div v-if="activetab ==='2'" class="tabcontent text-hidden" ref="tabContent">
            {{itemData.rules}}
            <button type="button" class="tabcontent__button--inverted tabcontent__button--right" @click="showMore">Продолжение...</button>
          </div>
          <div v-if="activetab ==='3'" class="tabcontent section__content">
            <ItemCard buttonValue="6990р"></ItemCard>
            <ItemCard buttonValue="6990р"></ItemCard>
            <ItemCard buttonValue="6990р"></ItemCard>
            <ItemCard buttonValue="6990р"></ItemCard>
          </div>
          <div v-if="activetab ==='4'" class="tabcontent section__content">
            <ItemCard buttonValue="6990р"></ItemCard>
            <ItemCard buttonValue="6990р"></ItemCard>
            <ItemCard buttonValue="6990р"></ItemCard>
            <ItemCard buttonValue="6990р"></ItemCard>
          </div>
          <div v-if="activetab ==='5'" class="tabcontent">
            <div>
              <Comment v-for="item in itemData.comments.slice(0,3)" v-bind:key="item.index" :text="item.message" :date="item.date" :name="item.name"></Comment>
              <form method="post" action="#">
                <input class="comment__field--name" type="text" :placeholder="getRandomArrayElement(someRandomNames).name" v-model="commentName" id="commentName"/>
                <textarea class="comment__field" placeholder="Напишите комментарий" required v-model="commentText" id="commentText"></textarea>
                <button type="button" class="tabcontent__button--inverted" @click="updateComments">Еще комментарии...</button>
                <button type="submit" class="tabcontent__button" @click.prevent="addComment">Отправить</button>
              </form>
            </div>
          </div>
        </div>  
    </div>
    <MainSection title="Рекомендуем вам">
      <ItemCard buttonValue="6990р"></ItemCard>
      <ItemCard buttonValue="6990р"></ItemCard>
      <ItemCard buttonValue="6990р"></ItemCard>
      <ItemCard buttonValue="6990р"></ItemCard>
    </MainSection>
  </div>
</template>

<script>
import { someRandomNames } from '@/data.js'
import Comment from '@/components/comment.vue'
import {itemParameters,itemData,stockStatus} from '@/data.js'
import MainSection from '@/components/main-section.vue'
import ItemCard from '@/components/item-card.vue'
import Breadcrumbs from '@/components/breadcrumbs.vue'

export default {
  name: 'ItemPage',
  data() {
    return {
      itemParameters,
      itemData, 
      selectedPic: 0,
      activetab: '1' ,
      stockStatus,
      commentText: '',
      someRandomNames,
      commentName: null,
      price: Number,
      discont: Number,
    }
  },
  components: {
    MainSection,
    ItemCard,
    Comment,
    Breadcrumbs
  },
  computed: {
    discontPrice: function() {
        return this.itemData.price - (this.itemData.price*this.itemData.discont/100)
    }
  },
    methods: {
		updateImage(index = 0) {
			if (index === -1) {
				this.selectedPic = itemData.pics.length - 1;
				return;
			}
			if (index === itemData.pics.length) {
				this.selectedPic = 0;
				return;
			}
			this.selectedPic = index;
		},
    getStatus(n) {
      if (n === 0) {
        return 'outOfStock'
      }
      if (n === 1) {
        return 'pendingStock'
      }
      if (n === 2) {
        return 'limitedStock'
      }
      if( n === 3)
      {
        return 'inStock'
      }
    },
    updateComments() {
      this.itemData.comments = this.itemData.comments.slice(3,itemData.comments.length + 1);
    },
    addComment() {
      let newComment = {
        name: this.commentName,
        message: this.commentText
      }
      this.itemData.comments.push(newComment) 
      this.commentName = ''
      this.commentText = ''
    },
    showMore() {
      this.$refs.tabContent.classList.toggle('text-hidden')
    },
    getRandomArrayElement(arr) {
      return arr[Math.floor(Math.random()*arr.length)]
    }
  }
}
</script>

<style scoped>
.item-page {
  padding: 40px 10px;
}

.item__data {
  display: grid;
  grid-template-columns: auto auto 417px;
  align-items: stretch;
}

.item__data img {
  border: 0.5px solid #FFE9D4;
  border-radius: 10px;
  margin: auto;
}

.item__information {
  display: flex;
  flex-direction: column;
}

.price {
  font-weight: 700;
  line-height: 32px;
  color: #333333;
  margin-left: auto;
  border: 1px solid #CB7D49;
  border-radius: 0 0 10px 10px;
  border-top: none;
  padding: 6px 13px 0 13px;
  margin-bottom: 55px;
  margin-top: -58px;
  align-items: center;

}

.current-price {
  font-size: 48px;
}

.price--discont {
  margin-bottom: 41px;
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 5%;
  padding: 2px 10px;
}

.price--discont .current-price {
  font-size: 26px;
  font-weight: 500;
  text-decoration: line-through;
  color: #aaa;
}

.discont {
  background-color: #CB7D49;
  color: white;
  padding: 5px;
  border-radius: 10px;
  font-size: 16px;
  line-height: 18px;
}

.discont-price {
  font-size: 26px;
  grid-column: 1 / -1;
}

.parameters {
  font-size: 22px;
  line-height: 25px;
  text-align: left;
}

.value {
  font-size: 22px;
  line-height: 25px;
  font-weight: 400;
  text-align: right;
}

.row {
  margin: 8px 0;
  border-bottom: 1px solid #CB7D49;
  display: flex;
  justify-content: space-between;
}

.item__information button {
  font-size: 24px;
  line-height: 25px;
  font-weight: 400;
  width: 100%;
  padding: 7px;
  background-color: #CB7D49;
  border: 1px solid #CB7D49;
  color: white;
  font-family: "Nunito", "Arial", sans-serif;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.item__information button:hover {
  color: #4B0101;
  border: 1px solid #CB7D49;
  background-color: white;
}

.item__information button:disabled {
  border: 1px solid #B6B6B6;
  background-color: #fff;
  color: #B6B6B6;
}

.item__button svg {
  vertical-align: baseline;
  margin-right: 20px;
}

.delivery {
  color: #B6B6B6;
  font-size: 22px;
  line-height: 23px;
  padding: 7px;
  border: 1px solid #B6B6B6;
  border-radius: 5px;
  margin-top: 15px;
}

.item__current-pic {
  position: relative;
}

.item__thumbs {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.item__thumbs img:first-child {
  display: none;
}

.prev, .next {
  cursor: pointer;
  border-bottom: 3px solid;
  border-left: 3px solid;
  position: absolute;
  top: 50%;
  z-index: 1;
  border-color: #CB7D49;
  width: 24px;
  height: 24px;
  transform: translate(0, -100%) rotate(45deg);
}

.prev {
  left: 30px;
}

.next {
  right: 30px;
  transform: translate(0, -100%) rotate(-135deg);
}

.container {
  margin: 40px auto;
  font-family: "Nunito Sans", Arial, Helvetica, sans-serif;
  font-size: 0.9em;
  color: #333333;
}

.tabs {
  overflow: hidden;
  margin-bottom: -2px;  
}

.tabs a {
  float: left;
  cursor: pointer;
  padding: 12px 24px;
  transition: background-color 0.2s;
  border: 1px solid #ccc;
  border-right: none;
  background-color: #f1f1f1;
  border-radius: 10px 10px 0 0;
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;
  font-weight: 300;
}

.tabs a:last-child { 
  border-right: 1px solid #ccc;
}

.tabs a:hover {
  background-color: #aaa;
  color: #fff;
}

.tabs a.active {
  background-color: #CB7D49;
  color: white;
  border-bottom: 2px solid #fff;
  cursor: default;
}

.tabcontent {
  padding: 40px 10px;
  border: 1px solid #ccc;
  border-radius: 0 0 10px 10px;
  box-shadow: 4px 4px 8px #e1e1e1;
  font-family: "Nunito", "Arial", sans-serif;
  font-size: 24px;
  line-height: 25px;
  font-weight: 200;
  text-align: left;
  position: relative;
  min-height: 300px;
}

.tabcontent form{
  display: flex;
  flex-direction: column;
  padding: 0 9%;
}

.tabcontent__button {
  font-family: "Nunito", "Arial", sans-serif;
  font-size: 16px;
  line-height: 25px;
  font-weight: 400;
  padding: 7px 30px;
  background-color: #CB7D49;
  border: 1px solid #CB7D49;
  color: white;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 20px;
  transition: background-color 0.3s;
}

.tabcontent__button:hover {
  color: #4B0101;
  background-color: #fff;
  border-color: #CB7D49;
  border-bottom: none;
}

.tabcontent__button--inverted {
  font-family: "Nunito", "Arial", sans-serif;
  font-size: 16px;
  line-height: 25px;
  font-weight: 400;
  padding: 7px 30px;
  background-color: #fff;
  border: 1px solid #CB7D49;
  border-bottom: none;
  color: #4B0101;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 180px;
  transition: background-color 0.3s;
}

.tabcontent__button--inverted:hover {
  background-color: #CB7D49;
  border: 1px solid #CB7D49;
  color: white;
}

.comment__field {
  font-family: 'Nunito', 'Arial', sans-serif;
  border: 1px solid #CB7D49;
  border-radius: 5px;
  padding: 8px 10px;
  max-width: 100%;
  width: 90%;
  margin: 10px 0 30px 0;
  font-size: 16px;
  resize: none;
  /* margin-left: 85px; */
}

.comment__field--name {
  border: 1px solid #CB7D49;
  border-radius: 5px;
  max-width: 100%;
  min-width: 150px;
  width: 40%;
  margin: 30px 0 10px 0;
  padding: 5px;
  /* margin-left: 85px; */
  font-size: 16px;
}

.inStock::after {
  position: absolute;
  content: "";
  background-color: #00A410;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  right: 30px;
  top: 10px;
}

.outOfStock::after {
  position: absolute;
  content: "";
  background-color: red;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  right: 30px;
  top: 10px;
}

.pendingStock::after {
  position: absolute;
  content: "";
  background-color: yellow;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  right: 30px;
  top: 10px;
}

.limitedStock::after {
  position: absolute;
  content: "";
  background-color: orange;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  right: 30px;
  top: 10px;
}

.tabcontent__button--right {
  right: 20px;
}

@media (max-width: 1440px) { 
  .item__data {
    display: flex;
    flex-direction: column;
  }

  .item__thumbs {
    display: flex;
    flex-direction: row;
    margin: 15px 0;
    overflow: scroll;
  }

  .price {
    margin-top: 15px;
    border: 1px solid #CB7D49;
    border-radius: 5px;
  }

  .tabs {
    display: flex;
    overflow: scroll;
  }

  .tabs a {
    padding: 9px 6px;
    font-size: 18px;
    line-height: 18px;
  }

  .comment__field {
    max-width: 560px;
    width: 90%;
    margin: 20px 0;
  }

  .tabcontent__button--inverted {
    padding: 7px;
    line-height: 16px;
  }
}

</style>