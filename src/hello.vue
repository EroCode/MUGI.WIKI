<template>
<div>
    <h3>Components</h3>
    <p>{{ vue_hello }} MUGI</p>
    <test></test>

    <h3>Router</h3>
    <p>
        <router-link to="/test">Go to Test</router-link>
    </p>
    <router-view></router-view>

</div>
</template>

<script>
import test from './test.vue'

module.exports = {
    data: function() {
        return {
            vue_hello: "hello"
        }
    },
    components: {
        test: test
    }
}
</script>

<style scoped>
p {
    color: #777;
}
</style>
