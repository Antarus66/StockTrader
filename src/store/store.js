import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
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
        },
        portfolio: {
            namespaced: true,
            state: {
                funds: 10000,
                stocks: [
                    {
                        title: "BMW",
                        price: 110,
                        quantity: 10
                    },
                    {
                        title: "Google",
                        price: 110,
                        quantity: 20
                    }
                ]
            },
            getters: {
                stocks: state => state.stocks,
                funds: state => state.funds
            }
        }
    }
});