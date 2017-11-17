<template>
<div>
    <p>{{ vue_hello }} MUGI</p>
    <component></component>
</div>
</template>

<script>
import component from './component.vue'

module.exports = {
    data: function() {
        return {
            vue_hello: "hello"
        }
    }
}
</script>

<style scoped>
p {
    color: #777;
}
</style>
