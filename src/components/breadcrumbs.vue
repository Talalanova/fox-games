<template>
    <div class="bread-crumbs">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Breadcrumbs',
}
</script>

<style>
.bread-crumbs {
    text-align: left;
    display: flex;
    flex-direction: row;
    margin: 0 0 20px 0;
    flex-wrap: wrap;
}

.bread-crumbs a {
    padding: 5px 0;
    font-size: 18px;
    line-height: 18px;
    color: #757575;
    position: relative;
    margin-right: 25px;
    font-weight: lighter;
}

.bread-crumbs a:hover {
    color: #CB7D49;
}

.bread-crumbs a::after {
    position: absolute;
    content: "/";
    width: 15px;
    height: 15px;
    right: -25px;
}

</style>