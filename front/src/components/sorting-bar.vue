<template>
    <div class="sorting-bar sorting">
        <div class="sorting__tabs">
            <span class="sorting__tab" @click="sorting = !sorting" :class="[sorting === true ? 'sorting__tab--active' : '']">
                <svg width="16" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.71494 7.33333C5.71494 7.70152 6.01342 8 6.38161 8H13.1775C13.5457 8 13.8441 7.70152 13.8441 7.33333C13.8441 6.96514 13.5457 6.66666 13.1775 6.66666H6.38161C6.01342 6.66666 5.71494 6.96514 5.71494 7.33333ZM2.75905 4C2.75905 4.36819 3.05752 4.66667 3.42571 4.66667H13.1776C13.5458 4.66667 13.8443 4.36819 13.8443 4C13.8443 3.63181 13.5458 3.33334 13.1777 3.33334H3.42571C3.05752 3.33334 2.75905 3.63181 2.75905 4ZM1.20866 0C0.840469 0 0.541992 0.298477 0.541992 0.666667C0.541992 1.03486 0.840469 1.33333 1.20866 1.33333H13.1777C13.5458 1.33333 13.8443 1.03486 13.8443 0.666667C13.8443 0.298477 13.5458 0 13.1777 0H1.20866Z" fill="#4B0101"/>
                </svg>Сортировка
            </span>
            <span class="sorting__tab" @click="filters = !filters" :class="[filters === true ? 'sorting__tab--active' : '']">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_474_1064)">
                    <path d="M14.936 0.425669C14.8152 0.149163 14.6062 0.0108912 14.308 0.0107422H0.691695C0.393877 0.0107422 0.184587 0.149163 0.0640141 0.425669C-0.0564846 0.716334 -0.00689162 0.964709 0.213017 1.17031L5.45762 6.41476V11.5848C5.45762 11.7694 5.52502 11.9287 5.65972 12.0637L8.38286 14.7868C8.51063 14.9214 8.67013 14.989 8.86169 14.989C8.94672 14.989 9.03532 14.9712 9.12754 14.9357C9.40423 14.8151 9.54261 14.6059 9.54261 14.3081V6.4148L14.787 1.17035C15.007 0.964746 15.0565 0.716446 14.936 0.425669Z" fill="#4B0101"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_474_1064">
                    <rect width="15" height="15" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>Фильтр
            </span>
        </div>
        <div class="sorting__content" v-if="sorting || filters">
            <form method="post" name="filters">
                <div v-if="sorting">
                    <button type="submit" class="sorting__button--string">Популярное</button>
                    <button type="submit" class="sorting__button--string">Новинки</button>
                    <button type="submit" class="sorting__button--string">Дороже</button>
                    <button type="submit" class="sorting__button--string">Дешевле</button>
                </div>
                <div v-if="filters">                
                    <p class="sorting__label">Теги</p> 
                    <span class="tags-wrapper">
                        <input type="text" readonly="readonly" placeholder="Выберите тег"/>
                        <button type="button" @click="tagsOpen = !tagsOpen">
                            <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M35.5884 0C37.7975 0 39.5884 1.79086 39.5884 4V24C39.5884 26.2091 37.7975 28 35.5884 28H0.764851V0L35.5884 0Z" fill="#CB7D49"/>
                                <path d="M25.7168 10L20.4641 17.5885C20.3845 17.7034 20.2147 17.7034 20.1352 17.5885L14.8824 10" stroke="white" stroke-width="3" stroke-linecap="round"/>
                            </svg>
                        </button>
                    </span>               
                    <div class="tags" v-if="tagsOpen">
                        <span v-for="tag in tags" v-bind:key="tag.index">
                            <input type="checkbox" :value="tag" :id="tag" name="tags"/>
                            <label :for="tag">{{tag}}</label>
                        </span>
                    </div>
                    <p class="sorting__label">Цена</p>
                    <SliderRange v-model="priceValue"></SliderRange>
                    <input class="sorting__checkbox" type="checkbox" value="discont" id="discont"/>
                    <label for="discont">Только со скидкой</label>
                    <input class="sorting__checkbox" type="checkbox" value="true" name="available" id="inStock"/>
                    <label for="inStock">В наличии</label>

                    <p class="sorting__label">Количество игроков</p>
                    <PlayerRange v-model="playersAmount"></PlayerRange>
                    <span class="players"><p>Любое</p><p>6+</p></span>
                    <p class="sorting__label">Возраст</p>
                    <div class="ages">
                        <span v-for="age in ages" v-bind:key="age" >
                            <input class="sorting__checkbox" type="checkbox" name="age_from" :value="[age.split(' ')[0], age.split(' ')[2]]" :id="age"/>
                            <label :for="age">{{age}}</label>
                        </span>
                    </div>
                    <button class="sorting__button" type="submit" @click.prevent="filterProducts">Применить фильтры</button>
                    <button class="sorting__button sorting__button--reset" type="reset">Сбросить фильтры</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import SliderRange from '@/components/price-range.vue'
import PlayerRange from '@/components/players-range.vue'

export default {
    name: 'SortingBar',
    data() {
        return {
            sorting: false,
            filters: false,
            tags: ['Фентези', 'Детектив', 'Романтичные', 'Карточные', 'Новое', 'Ужасы', 'На воображение',],
            tagsOpen: false,            
            inStockOpen: false,
            ages: ['3 - 8','8 - 14','14 - 18','18+'],            
            priceValue: [ 300, 2500 ],
            playersAmount: [1, 6]
        }
    },
    components: {
        SliderRange,
        PlayerRange
    },
    methods: {
        filterProducts() {
            let formData = new FormData(document.forms.filters)
            let params = []

            for(let value of formData.entries()) {
                let name = value[0]
                let _value = value[1]
                if(typeof params[name] === "undefined") params[name] = [];
                params[name].push(_value);
            }

            let filter =  `price_from=` + this.priceValue[0] + `&price_to=` + this.priceValue[1] + `&players_from=` + this.playersAmount[0] + `&players_to=` + this.playersAmount[1] 
            
            if (params.age_from) {
                
                params.age_from.forEach((element,index) => {
                    params.age_from[index] = element.split(',')
                });

                params.age_from = params.age_from.flat()
            
                params.age_from.forEach((element,index) => {
                    if (element === '18+') element = '18'
                    if (element === '') element = '99'
                    params.age_from[index] = element
                })

                params.age_from.sort(function(a, b) {
                    return a - b;
                });

                filter = filter.concat(`&age_from=` + params.age_from[0] + `&age_to=` + params.age_from[params.age_from.length - 1])
            }
            
            if (params.tags) {
                params.tags = params.tags.flat()
                filter = filter.concat(`&tags=` + params.tags)
            }

            if (params.available) {
                filter = filter.concat(`&available=` + params.available[0])
            }

            console.log(filter)

            fetch('http://127.0.0.1:8000/api/product/filter?' + filter, {})
                .then((response) => {
                    console.log('есть ответ')
                    if(response.ok) {
                        console.log('есть данные')
                        return response.json();
                    }
                                   
                    throw new Error('Network response was not ok');
                })
                .then((json) => {
                    console.log(json)
                })
        }
    }
}
</script>

<style scoped>
.sorting {
    display: flex;
    flex-direction: column;
    width: 270px;
    position: absolute;
    right: 0px;
    top: 71px;
    z-index: 1;
}

.sorting__tabs {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.sorting__tab {
    padding: 5px 5px 0 5px;
    cursor: pointer;
}

.sorting__tab svg {
    margin: auto 5px;
}

.sorting__tab--active {
    border: 1px solid #CB7D49;
    border-radius: 5px 5px 0 0;
    border-bottom: none;
}

.sorting__content {
    width: fit-content;
    background-color: white;
    border: 1px solid #CB7D49;
    border-radius:  0 0 5px 5px;
    padding: 10px;
}

.sorting__content form {
    text-align: left;
}

.sorting__label {
    margin: 5px 0;
    text-align: left;
    color: #4B0101;
    font-size: 18px;
    line-height: 25px;
    font-family: "Nunito", "Arial", sans-serif;
}

.tags-wrapper {
    display: grid;
    grid-template-columns: 208px 38px;
    border: 0.5px solid #CB7D49;
    border-radius: 5px;
}

.tags-wrapper button {
    border: none;
    background-color: white;
    border-radius: 0 5px 5px 0;
    padding: 0;
    height: 27px;
}

.tags-wrapper input {
    padding: 0;
    outline: #CB7D49;
    height: 21px;
    border-right: none;
    border-radius: 5px;
    border: none;
    padding: 3px;
}

.tags, .inStock {
    padding: 10px 5px;
    display: flex;
    flex-direction: column;
    text-align: left;
    border: 1px solid #CB7D49;
    border-radius: 0 0 5px 5px;
    border-top: none;
    margin-top: -2.5px;
}

.ages {    
    display: flex;
    flex-direction: column;
    text-align: left;
}

.players {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.players p {
    margin: 0;
    font-size: 13px;
}

.sorting__button {
    width: 100%;
    padding: 7px;
    background-color: #CB7D49;
    border: 1px solid #CB7D49;
    color: white;
    font-family: "Nunito", "Arial", sans-serif;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 7px;
}

.sorting__button:hover {
    color: #4B0101;
    border: 1px solid #CB7D49;
    background-color: white;
}


.sorting__button--reset {
    background-color: #B6B6B6;
    border: 1px solid #B6B6B6;
    color: white;
}

.sorting input[type="checkbox"] {
    display: none;
}

.sorting label {
    position: relative;
    padding-left: 20px;
    margin-right: 70px;
}

.sorting label::before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 2px;
    border: 0.5px solid #B6B6B6;
    left: 2px;
    bottom: 5px;
}

.sorting label::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background-image: url('~@/assets/icon_checked.svg');
    background-repeat: no-repeat;
    left: 3px;
    bottom: 6px;
}

input[type="checkbox"]:checked + label::before {
    background-color: #CB7D49;
    border-color: #CB7D49;
}

.sorting__button--string {
    background-color: white;
    font-size: 18px;
    line-height: 25px;
    border: none;
    display: block;
    width: 100%;
}

.sorting__button--string:hover {
    background-color: #CB7D49;
    color: white;
    cursor: pointer;
}

@media (max-width: 768px) {
    .sorting {
        
    }
}
</style>