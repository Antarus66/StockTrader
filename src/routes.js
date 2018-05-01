import Home from "./components/Home.vue";
import Stocks from "./components/Stocks.vue";

export default [
    {
        path: "",
        name: "home",
        component: Home
    },
    {
        path: "/stocks",
        name: "stocks",
        component: Stocks
    },
    {
        path: "*",
        redirect: {
            name: "home"
        }
    }
];