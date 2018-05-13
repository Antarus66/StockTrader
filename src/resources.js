import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.http.options.root = "https://stock-trader-b3fb6.firebaseio.com/";

export const FundsResource = Vue.resource("funds.json");
export const StockTypesResource = Vue.resource("stocksTypes.json");
export const StocksResource = Vue.resource("stocks.json");