<template>

    <div class="tabs">
        <div class="tabs__nav">
            <div class="tabs__nav_tab"
                v-for="(item, index) in items"
                v-bind:key="item.index"
                :class="[index === active ? 'tabs__nav_tab--active' : '']"
                @click="activate(index)">Сортировка</div>
                
            </div>
        <div class="tabs__content">{{content}}</div>
    </div>

</template>

<script>

export default {
    name: 'Tabs',
    components: {

    },

    data() {
        return {
            active: 0,
            items: [
            'Content for tab 1!',
            'Content for tab 2!',
            ]
        }
    },
    computed: {
        content () {
            return this.items[this.active]
        }
    },
    methods: {
        activate (index) {
            this.active = index
        }
    },
}
</script>

<style scoped>
.tabs {
    width:240px;
    box-sizing:border-box;    
    border-radius: 5px;
    padding:1rem;
}
.tabs__nav {
    display:flex;
}
.tabs_tab {
    padding:1rem;
    margin:0 0.5rem 0 0;
    background:#fff;
    border-radius:0.5rem 0.5rem 0 0;
    box-shadow:inset 0 -1rem 0.75rem -1rem rgba(0,0,0,0.25);
    cursor:pointer;
    opacity:0.75;
    transition:100ms linear all;
}
.tabs__nav_tab--active {
    opacity:1;
    box-shadow:none;
    border: 1px solid #CB7D49;
    border-radius: 5px 5px 0 0;
    border-bottom: none;
}
.tabs__content {
    background:#fff;
    padding:1rem;
    border-radius:0 0.5rem 0.5rem 0.5rem;
    border: 1px solid #CB7D49;
}

</style>