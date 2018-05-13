import { funds, stocks } from "./../../data/portfolio"

export default {
    namespaced: true,
    state: {
        funds,
        stocks
    },
    getters: {
        funds: state => state.funds,
        stocks: state => state.stocks,
        stocksWithTypes(state, getters, rootState, rootGetters) {
            const stocks = getters.stocks;

            const stocksWithTypes = stocks.map(stock => {
                const getter = rootGetters["stockMarket/stockTypeById"];
                const stockType = getter(stock.stockTypeId);

                return {
                    ...stock,
                    stockType
                };
            });

            return stocksWithTypes;
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
        },
        setFunds(state, funds) {
            state.funds = funds;
        },
        setStocks(state, values) {
            state.stocks = values;
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
};