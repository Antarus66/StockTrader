import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        funds: 10000,
        stocks: [
            {
                title: "BMW",
                price: 110
            },
            {
                title: "Google",
                price: 110
            },
            {
                title: "Twitter",
                price: 110
            },
            {
                title: "Apple",
                price: 110
            },
        ]
    },
    getters :{
        funds: state => state.funds,
        stocks: state => state.stocks
    }
});