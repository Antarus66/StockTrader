import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        funds: 10000
    },
    getters :{
        funds: state => state.funds
    },
    modules: {
        stockMarket: {
            namespaced: true,
            state: {
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
            getters: {
                stocks: state => state.stocks
            }
        }
    }
});