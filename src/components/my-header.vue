<template>
    <div class="header">
        <span class="header__search-bar">
            <input type="text" id="" placeholder="Поиск...">
            <router-link to="/cart">
                <svg width="25" height="25" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.28229 2.31158L3.16204 1.81437H2.6505H1.19392C1.0564 1.81437 0.9202 1.75818 0.816501 1.65116C0.712127 1.54344 0.65 1.39309 0.65 1.23218C0.65 1.07128 0.712127 0.920932 0.816501 0.813212C0.9202 0.70619 1.0564 0.65 1.19392 0.65H3.58174C3.58175 0.65 3.58175 0.65 3.58176 0.65C3.69762 0.650007 3.8127 0.689826 3.90854 0.767021L4.23844 0.357425L3.90854 0.767021C4.0047 0.844473 4.07651 0.955846 4.10812 1.08574C4.10814 1.08585 4.10817 1.08597 4.1082 1.08609L4.47816 2.61705L4.59834 3.11437H5.10997H17.9084C17.9972 3.11442 18.0856 3.13781 18.1655 3.18382C18.2456 3.22991 18.3152 3.29774 18.3661 3.38277L18.9239 3.04891L18.3661 3.38278C18.4171 3.46792 18.447 3.56663 18.4515 3.66945C18.456 3.77228 18.4348 3.87381 18.3911 3.96408L14.8094 11.357L14.8094 11.3572C14.7618 11.4554 14.6901 11.5352 14.6047 11.5897C14.5196 11.644 14.4233 11.6718 14.3267 11.6718H6.46388H6.18861L5.99707 11.8695L4.80315 13.1017L3.73507 14.204H5.26996H15.5209C15.6585 14.204 15.7947 14.2602 15.8984 14.3672C16.0027 14.475 16.0649 14.6253 16.0649 14.7862C16.0649 14.9471 16.0027 15.0975 15.8984 15.2052C15.7947 15.3122 15.6585 15.3684 15.5209 15.3684H5.26996C3.75865 15.3684 2.91445 13.4349 4.04831 12.2643C4.04833 12.2643 4.04834 12.2643 4.04835 12.2643C4.04842 12.2642 4.0485 12.2641 4.04857 12.264L5.11448 11.1652L5.36406 10.9079L5.27964 10.5595L3.6583 3.86877L3.65833 3.86876L3.65673 3.86243C3.65463 3.85412 3.6527 3.84576 3.65094 3.83734L3.64885 3.82729L3.64643 3.81731L3.28229 2.31158Z" stroke="white" stroke-width="1.3"/>
                    <path d="M15.7237 18.2441L16.1905 17.7918L15.7237 18.2441C15.94 18.4674 16.0651 18.7745 16.0651 19.0988C16.0651 19.4231 15.94 19.7301 15.7237 19.9534C15.5081 20.1759 15.22 20.297 14.9242 20.297C14.6283 20.297 14.3403 20.1759 14.1246 19.9534L13.6578 20.4057L14.1246 19.9534C13.9083 19.7301 13.7833 19.4231 13.7833 19.0988C13.7833 18.7745 13.9083 18.4674 14.1246 18.2441C14.3403 18.0216 14.6283 17.9005 14.9242 17.9005C15.22 17.9005 15.5081 18.0216 15.7237 18.2441Z" stroke="white" stroke-width="1.3"/>
                    <path d="M6.17098 18.2441L6.63779 17.7918L6.17098 18.2441C6.3873 18.4674 6.51232 18.7745 6.51232 19.0988C6.51232 19.4231 6.3873 19.7301 6.17098 19.9534C5.95533 20.1759 5.66729 20.297 5.37145 20.297C5.0756 20.297 4.78756 20.1759 4.57191 19.9534L4.1051 20.4057L4.57191 19.9534C4.35559 19.7301 4.23057 19.4231 4.23057 19.0988C4.23057 18.7745 4.35559 18.4674 4.57191 18.2441C4.78756 18.0216 5.0756 17.9005 5.37145 17.9005C5.66729 17.9005 5.95533 18.0216 6.17098 18.2441Z" stroke="white" stroke-width="1.3"/>
                </svg>
            </router-link>
        </span>
        <SocialList></SocialList>
        <a class="header__phone" href="tel:+74232661414">+7(423)266-14-14</a>
    </div>
</template>

<script>
import SocialList from '@/components/social-list.vue'

export default {
    name: 'MyHeader',
    components: {
    SocialList   
    }
    
}
</script>
З
<style>
.header {
    background: -webkit-linear-gradient(180deg, rgb(255, 175, 102) 1%, rgb(75, 1, 1) 95%);
    background: -moz-linear-gradient(180deg, rgb(255, 175, 102) 1%, rgb(75, 1, 1) 95%);
    background: linear-gradient(180deg, rgb(255, 175, 102) 1%, rgb(75, 1, 1) 95%);
    display: grid;
    grid-template-columns: 410px 110px 140px;
    align-items: center;    
    column-gap: 205px;
    margin-left: auto;
    padding: 4px 50px;
    min-width: 80%;
    position: relative;
}

.header::before {
    position: absolute;
    content: "";
    width: 100px;
    height: 56px;
    background-image: url(/img/header_before.34810498.svg);
    left: -43px;
    bottom: -12px;
    background-repeat: no-repeat;
}
.header__search-bar {
    position: relative;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
}

.header__search-bar::after {
    position: absolute;
    content: "";
    width: 30px;
    height: 20px;
    background-image: url('../assets/icon_loupe.svg');
    background-repeat: no-repeat;
    right: 45px;
    bottom: 3px;
}
.header__search-bar input {
    border-radius: 5px;
    padding: 5px 20px;
    border: none;
    min-width: 320px;
}


.header__phone {
    color: white;
    margin-left: auto;
}

</style>