<template>
    <div class="row">
        <div class="col-md-6" v-for="stock in stocks">
            <app-stock :stock="stock"></app-stock>
        </div>
    </div>
</template>

<script>
    import { createNamespacedHelpers } from 'vuex';
    import Stock from "./Stock.vue";

    const { mapGetters } = createNamespacedHelpers("stockMarket");

    export default {
        components: {
            appStock: Stock
        },
        computed: {
            ...mapGetters(['stocks']),
        },
    }
</script>