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
        stocksTypes: state => state.stocksTypes,
        stockTypeById: state => id => {
            return state.stocksTypes.find(item => item.id == id);
        }
    },
    mutations: {
        setStockTypes(state, values) {
            state.stocksTypes = values;
        }
    }
};