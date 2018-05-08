import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        stockMarket: {
            namespaced: true,
            state: {
                stocksTypes: [
                    {
                        id: 1,
                        title: "BMW",
                        price: 110
                    },
                    {
                        id: 2,
                        title: "Google",
                        price: 120
                    },
                    {
                        id: 3,
                        title: "Twitter",
                        price: 130
                    },
                    {
                        id: 4,
                        title: "Apple",
                        price: 140
                    },
                ]
            },
            getters: {
                stocksTypes: state => state.stocksTypes,
                stockTypeById: state => id => {
                    return state.stocksTypes.find(item => item.id == id);
                }
            }
        },
        portfolio: {
            namespaced: true,
            state: {
                funds: 10000,
                stocks: [
                    {
                        id: 1,
                        stockTypeId: 1,
                        quantity: 10
                    },
                    {
                        id: 2,
                        stockTypeId: 2,
                        quantity: 20
                    }
                ]
            },
            getters: {
                funds: state => state.funds,
                stocks: state => state.stocks,
                stocksWithTypes: (state, getters, rootState, rootGetters) => {
                    const stocks = getters.stocks;

                    stocks.forEach(stock => {
                        const getter = rootGetters["stockMarket/stockTypeById"];
                        stock.stockType = getter(stock.stockTypeId);
                    });

                    return stocks;
                }
            }
        }
    }
});