export default {
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