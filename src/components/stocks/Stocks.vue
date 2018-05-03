<template>
    <div class="row">
        <div class="col-md-6" v-for="stock in stocks">
            <app-stock :stock="stock"></app-stock>
        </div>
    </div>
</template>

<script>
    import Stock from "./Stock.vue";

    export default {
        components: {
            appStock: Stock
        },
        data() {
            return {
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
            };
        }
    }
</script>