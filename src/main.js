import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './hello.vue';
import test from './test.vue';

// vue-router

Vue.use(VueRouter);

const routes = [{
    path: '/test',
    component: test
}];

const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
});

// vue

new Vue({
    el: '#app',
    render: h => h(App),
    router
});