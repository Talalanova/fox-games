<template>
  <div class="item-page item" v-if="productReady">    
    <h1>{{ itemData.title }}</h1>
    <hr>
    <Breadcrumbs>
      <router-link to="/Catalog">Категории</router-link>
      <router-link to="/">{{ itemData.title }}</router-link>
    </Breadcrumbs>
    <div class="item__data">
      <div class="item__current-pic" v-bind:class="[ getStatus(itemData.inStock) ]" :title="stockStatus[itemData.inStock]">
        <span class="prev" @click="updateImage(selectedPic - 1)" ></span>
				<span class="next" @click="updateImage(selectedPic + 1)" ></span>
        <img :src="itemData.pics[selectedPic]" width="560" height="370" :alt="itemData.title">
      </div>
      <div class="item__thumbs">
        <img v-for="(item,index) in itemData.pics.slice(0,4)" :key="item.index" :src="item" @click="updateImage(index)" width="125" height="90" alt="">
      </div>
      <div class="item__information">
        <span :class="[itemData.discont > 0 ? 'price price--discont' : 'price']">
          <span class="current-price">{{ Math.ceil(itemData.price)+'₽' }}</span>
          <span v-if="itemData.discont > 0" class="discont">
            {{`-` + itemData.discont + `%` }}
          </span>
          <span v-if="itemData.discont > 0" class="discont-price">
            {{ Math.ceil(discontPrice)+'₽'}}
          </span>
        </span>        
        <span v-for="(value,name) in itemParameters" v-bind:key="value.index" :class="[ itemData[name] == null ? 'row' : 'row row--underline' ]">
          <span v-if="itemData[name] !== null" class="parameters">{{ value }}</span>
          <span v-if="itemData[name] !== null" class="value"> {{ itemData[name] }}</span>          
        </span>
        <router-link to="/delivery" class="delivery">Условия заказа</router-link>
        <button @click="addToCart(itemData)" type="button" :disabled="itemData.amount == 0" class="item__button">
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
          <a v-if="collection.length" v-on:click="activetab='3'" v-bind:class="[ activetab === '3' ? 'active' : '' ]">Игры серии</a>
          <a v-if="accessorys.length" v-on:click="activetab='4'" v-bind:class="[ activetab === '4' ? 'active' : '' ]">Аксессуары</a>
          <a v-if="itemData.comments" v-on:click="activetab='5'" v-bind:class="[ activetab === '5' ? 'active' : '' ]">Отзывы и вопросы({{itemData.comments.length}})</a>
        </div>
        <div class="content">
          <div v-if="activetab ==='1'" class="tabcontent text-hidden" ref="tabContent" v-html="itemData.description">            
            
          </div>
          <div v-if="activetab ==='2'" class="tabcontent text-hidden" ref="tabContent" v-html="itemData.rules">
            
          </div>
          <div v-if="activetab ==='3'" class="tabcontent section__content section__content--flex">
            <ItemCard v-for="item in collection" :key="item" :itemData="item"></ItemCard>
          </div>
          <div v-if="activetab ==='4'" class="tabcontent section__content section__content--flex">
            <ItemCard v-for="item in accessorys" :key="item" :itemData="item"></ItemCard>
          </div>
          <div v-if="activetab ==='5'" class="tabcontent">
            <div>
              <Comment v-for="item in itemData.comments.slice(0,3)" v-bind:key="item.index" :text="item.message" :date="item.created_at" :name="item.name"></Comment>
              <form method="post" name="comments">
                <input class="comment__field--name" type="text" :placeholder="getRandomArrayElement(someRandomNames).name" v-model="commentName" name="name"/>
                <textarea class="comment__field" placeholder="Напишите комментарий" required v-model="commentText" name="message"></textarea>
                <button type="button" class="tabcontent__button--inverted" @click="updateComments">Еще комментарии...</button>
                <button type="submit" class="tabcontent__button" @click.prevent="addComment">Отправить</button>
              </form>
            </div>
          </div>
        </div>  
    </div>
    <MainSection title="Рекомендуем вам" link="/newsales" class="item__recommended section--flex">
      <ItemCard v-for="item in recommended" :key="item" :itemData="item"></ItemCard>
    </MainSection>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import { someRandomNames } from '@/data.js'
import Comment from '@/components/comment.vue'
// import {itemParameters,itemData,stockStatus} from '@/data.js'
import MainSection from '@/components/main-section.vue'
 import ItemCard from '@/components/item-card.vue'
import Breadcrumbs from '@/components/breadcrumbs.vue'

export default {
  name: 'ItemPage',
  data() {
    return {
      itemParameters: {},
      itemData: {}, 
      selectedPic: 0,
      activetab: '1' ,
      stockStatus: {},
      commentText: '',
      someRandomNames,
      commentName: null,
      price: Number,
      discont: Number,
      productReady: false,
      tags : [],
      recommended: [],
      accessorys: [],
      collection: [],
      collection_id: Number
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
				this.selectedPic = this.itemData.pics.length - 1;
				return;
			}
			if (index === this.itemData.pics.length) {
				this.selectedPic = 0;
				return;
			}
			this.selectedPic = index;
		},
    getStatus(n) {
      if (n === 1) {
        return 'outOfStock'
      }
      if (n === 2) {
        return 'pendingStock'
      }
      if (n === 3) {
        return 'inStock'
      }
    },
    updateComments() {
      this.itemData.comments = this.itemData.comments.slice(3,this.itemData.comments.length + 1);
    },
    addComment() {
      let newComment = {
        name: this.commentName,
        message: this.commentText,
        created_at: new Date().toLocaleDateString('ru-RU')
      }
      let formData = new FormData(document.forms.comments)
      fetch('http://api.foxhole.club/api/product/' + this.$route.params.id+'/message',{
        method: 'POST',
        body: formData
      })
      this.itemData.comments.unshift(newComment) 
      this.commentName = ''
      this.commentText = ''
    },
    showMore() {
      this.$refs.tabContent.classList.toggle('text-hidden')
    },
    getRandomArrayElement(arr) {
      return arr[Math.floor(Math.random()*arr.length)]
    },
    getProductInfo() {
      if (typeof this.$route.params.id !== 'undefined') {
        fetch('http://api.foxhole.club/api/product/' + this.$route.params.id)
          .then((response) => {
            if(response.ok) {             
              return response.json();
            }        
            throw new Error('Network response was not ok');
          })
          .then((json) => {            
            let element = json
            
            this.itemParameters = {
              age : 'Возраст',
              time : 'Время игры',
              players : 'Количество игроков',
              cardSize : 'Размер карт',
              producer : 'Производитель',
            }

            this.stockStatus = {
              1 : 'Нет в наличии',
              2 : 'Ожидает поставки',
              3 : 'В наличии',
            }
            //Age validation
            let age = '';
            if(typeof element.age_from !== "undefined"){
              age+=element.age_from+'-'
              if(typeof element.age_to !== "undefined"){
                age+=element.age_to +  ' лет';
              }else{
                age+=' лет'
              }
            }

            if (element.age_from == null) age = null
            let time =''
            if (element.game_time == null) {
              time = null
            } else {
              time = element.game_time + 'мин'
            }
            let players = ''
            if (element.players_from == null) {
              players = null
            } else {
              players = element.players_from + '-' + element.players_to
            }
            element.messages.forEach((item,index) => {
              element.messages[index].created_at = new Date(item.created_at).toLocaleDateString('ru-RU')
            });

            let _images = []

            element.images.forEach( item => {
              _images.push('http://api.foxhole.club/files/' + item.path)
            })
            //Получение списка тегов товара
            element.tags.forEach(tag => {
              this.tags.push(tag.id)
            })

          //Получение id серии продукта и вывод вкладки "Игры серии"
            this.collection_id = element.group_id
            if (this.collection_id == 0) {
              this.collection_id = null
            } else {
              fetch('http://api.foxhole.club/api/product/filter?is_accessory=0&group_id=' + this.collection_id )
                .then((response) => {
                  if(response.ok) {
                    return response.json();
                  }                                   
                  throw new Error('Network response was not ok');
                })
                .then((json) => {
                  json.data.forEach(element => {

                    let _images = []

                    element.images.forEach( item => {
                      _images.push('http://api.foxhole.club/files/' + item.path)
                    })
                    
                    let product = {
                      discont: element.discount,
                      id: element.id,
                      slug: element.slug,
                      inStock: element.status,
                      title: element.title,
                      desc: element.description,
                      price : element.price,
                      age : element.age_from + '-' + element.age_to,
                      time : element.game_time,
                      players : element.players_from + '-' + element.players_to,                    
                      pics: _images,
                      description: element.description,
                      amount: element.amount,
                      short_description: element.short_description,               
                    }
                    this.collection.push(product);   
                  })                 
                })
            }
            this.accessorys = []
            this.recommended = []
            this.collection = []
            //Получение тегов продукта и вывод раздела "Рекомендуем"
            fetch('http://api.foxhole.club/api/product/filter?tags=[' + this.tags +']')
              .then((response) => {
                if(response.ok) {
                  return response.json();
                }                                   
                throw new Error('Network response was not ok');
              })
              .then((json) => {
                json.data.forEach(element => {

                  let _images = []

                  element.images.forEach( item => {
                    _images.push('http://api.foxhole.club/files/' + item.path)
                  })
                  
                  let product = {
                    discont: element.discount,
                    id: element.id,
                    slug: element.slug,
                    inStock: element.status,
                    title: element.title,
                    desc: element.description,
                    price : element.price,
                    age : element.age_from + '-' + element.age_to,
                    time : element.game_time,
                    players : element.players_from + '-' + element.players_to,                    
                    pics: _images,
                    description: element.description,
                    amount: element.amount,
                    short_description: element.short_description,           
                  }
                  this.recommended.push(product);   
                })                 
              })

            //Получение вывод вкладки "Аксессуары" по тегам 
            fetch('http://api.foxhole.club/api/product/filter?tags=[' + this.tags +']&is_accessory=1')
              .then((response) => {
                if(response.ok) {
                  return response.json();
                }                                   
                throw new Error('Network response was not ok');
              })
              .then((json) => {
                json.data.forEach(element => {

                  let _images = []

                  element.images.forEach( item => {
                    _images.push('http://api.foxhole.club/files/' + item.path)
                  })
                  
                  let product = {
                    discont: element.discount,
                    id: element.id,
                    slug: element.slug,
                    inStock: element.status,
                    title: element.title,
                    desc: element.description,
                    price : element.price,
                    age : element.age_from + '-' + element.age_to,
                    time : element.game_time,
                    players : element.players_from + '-' + element.players_to,                    
                    pics: _images,
                    description: element.description,
                    amount: element.amount                
                  }
                  this.accessorys.push(product);   
                })                 
              })
            
            this.itemData = {
              discont: element.discount,
              id: element.id,
              slug: element.slug,
              inStock: element.status,
              title: element.title,
              desc: element.description,
              price : element.price,
              age : age,
              time : time,
              players : players,
              cardSize : element.card_size,
              producer : element.brand.title,
              amount: element.amount,
              pics: _images,
              description: element.description, 
              rules: element.rules,
              comments: element.messages
            }
            
            this.productReady = true
          })
            .catch((error) => {
              console.log(error);
            });
      }
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
  created() {
    this.getProductInfo()
  },
  watch:{    
    $route(){
      this.getProductInfo()
    }, 
  },
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
  margin: 8px 0;
}

.value {
  font-size: 22px;
  line-height: 25px;
  font-weight: 400;
  text-align: right;
  margin: 8px 0;
}

.row {  
  display: flex;
  justify-content: space-between;
}

.row--underline {
  border-bottom: 1px solid #CB7D49;
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
  margin-top: auto;
}

.delivery:hover {
  color: #333333;
  border: 1px solid #333333;
}

.item__current-pic {
  position: relative;
}

.item__thumbs {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* .item__thumbs img:first-child {
  display: none;
} */

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
  min-height: 380px;
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