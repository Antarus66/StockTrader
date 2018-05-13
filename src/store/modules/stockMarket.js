import { stocksTypes } from "./../../data/stocks"

export default {
    namespaced: true,
    state: {
        stocksTypes: []
    },
    getters: {
        stocksTypes: state => {
            return  state.stocksTypes.map(item => {
                return {...item};
            });
        },
        stockTypeById: state => id => {
            return state.stocksTypes.find(item => item.id == id);
        }
    },
    mutations: {
        setStockTypes(state, values) {
            state.stocksTypes = values;
        }
    },
    actions: {
        initStockTypes({ commit }) {
            commit("setStockTypes", stocksTypes);
        },
        randomizePrices(context) {
            const stockTypes = context.getters.stocksTypes;
            const getRandomInt = function (min, max) {
                return Math.ceil(Math.random() * (++max - min)) + min;
            };

            for (let stockType of stockTypes) {
                const changeLimit = Math.floor(stockType.price * 0.3);
                stockType.price += getRandomInt(-changeLimit, changeLimit);
            }

            context.commit("setStockTypes", stockTypes);
        }
    }
};