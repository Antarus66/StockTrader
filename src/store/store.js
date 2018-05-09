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
                stocksWithTypes(state, getters, rootState, rootGetters) {
                    const stocks = getters.stocks;

                    stocks.forEach(stock => {
                        const getter = rootGetters["stockMarket/stockTypeById"];
                        stock.stockType = getter(stock.stockTypeId);
                    });

                    return stocks;
                }
            },
            mutations: {
                sellStocks(state, { stocksId, quantity, sum }) {
                    const stock = state.stocks.find(item => item.id === stocksId);

                    if (!stock) {
                        throw new Error("Unknown stocks id.");
                    } else if (stock.quantity < quantity) {
                        throw new Error("Unsufficient stocks number.");
                    }

                    stock.quantity -= quantity;

                    if (stock.quantity === 0) {
                        const stockIndex = state.stocks.findIndex(item => item.id === stocksId);
                        state.stocks.splice(stockIndex, 1);
                    }

                    state.funds += sum;
                },
                buyStocks(state, { stockTypeId, quantity, sum }) {
                    if (state.funds < sum) {
                        throw new Error("Unsufficient funds");
                    }

                    let stocksOfThisType = state.stocks.find(item => item.stockTypeId === stockTypeId);

                    if (!stocksOfThisType) {
                        const nextId = state.stocks.length + 1;

                        state.stocks.push({
                            id: nextId,
                            stockTypeId: stockTypeId,
                            quantity: 0
                        });

                        stocksOfThisType = state.stocks.find(item => item.stockTypeId === stockTypeId);
                    }

                    stocksOfThisType.quantity += quantity;
                    state.funds -= sum;
                }
            },
            actions: {
                sellStocks(context, { stocksId, quantity }) {
                    const stocks = context.getters.stocksWithTypes;
                    const stock = stocks.find(item => item.id === stocksId);
                    const sum = quantity * stock.stockType.price;

                    context.commit("sellStocks", {
                        stocksId,
                        quantity,
                        sum
                    });
                },
                buyStocks(context, {stockTypeId, quantity})
                {
                    const stocksType = context.rootGetters["stockMarket/stockTypeById"](stockTypeId);
                    const sum = quantity * stocksType.price;

                    context.commit("buyStocks", {
                        stockTypeId,
                        quantity,
                        sum
                    });
                }
            }
        }
    }
});