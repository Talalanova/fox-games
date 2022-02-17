<template>
    <Slider v-model="value" />
</template>
<script>
import Slider from '@vueform/slider'
export default {
    name: 'SliderRange',
    components: {
        Slider
    }
}
</script>

<style lang="scss">
@import 'path/to/node_modules/@vueform/slider/themes/tailwind.scss';
</style>