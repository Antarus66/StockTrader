import Vue from 'vue';
import Vuex from 'vuex';
import stockMarketModule from './modules/stockMarket';
import portfolioModule from './modules/portfolio';
import { FundsResource, StockTypesResource, StocksResource } from "./../resources";

Vue.use(Vuex);

export const store = new Vuex.Store({
    actions: {
        save(context) {
            context.dispatch("rewriteStockTypes");
            context.dispatch("rewriteFunds");
            context.dispatch("rewriteStocks");
        },
        rewriteStockTypes(context) {
            const stocksTypes = context.getters["stockMarket/stocksTypes"];

            StockTypesResource.delete()
                .then(response => {
                    console.log("Removed.");

                    StockTypesResource.save({}, stocksTypes)
                        .then(response => {
                            console.log('stockTypes are saved');
                        }, error => {
                            console.error(error);
                        });
                });
        },
        rewriteFunds(context) {
            const funds = context.getters["portfolio/funds"];

            FundsResource.delete()
                .then(response => {
                    console.log("Removed.");

                    FundsResource.save({}, funds)
                        .then(response => {
                            console.log('funds are saved');
                        }, error => {
                            console.error(error);
                        });
                });
        },
        rewriteStocks(context) {
            const stocks = context.getters["portfolio/stocks"];

            StocksResource.delete()
                .then(response => {
                    console.log("Removed.");

                    StocksResource.save({}, stocks)
                        .then(response => {
                            console.log('stocks are saved');
                        }, error => {
                            console.error(error);
                        });
                });
        },
        load(context) {
            context.dispatch("loadStockTypes");
            context.dispatch("loadFunds");
            context.dispatch("loadStocks");
        },
        loadStockTypes(context) {
            StockTypesResource.get()
                .then(response => response.json())
                .then(data => Object.values(data)[0])
                .then(values => {
                    if (values) {
                        context.commit("stockMarket/setStockTypes", values);
                    }
                });
        },
        loadFunds(context) {
            FundsResource.get("funds.json")
                .then(response => response.json())
                .then(data => Object.values(data)[0])
                .then(value => {
                    context.commit("portfolio/setFunds", value);
                });
        },
        loadStocks(context) {
            StocksResource.get("stocks.json")
                .then(response => response.json())
                .then(data => Object.values(data)[0])
                .then(values => {
                    if (values) {
                        context.commit("portfolio/setStocks", values);
                    }
                })
        }
    },
    modules: {
        stockMarket: stockMarketModule,
        portfolio: portfolioModule
    }
});