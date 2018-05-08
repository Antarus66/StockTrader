<template>
    <div class="row">
        <div class="col-md-6" v-for="stock in stocks">
            <app-stock :stock="stock"></app-stock>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Stock from "./Stock.vue";

    export default {
        components: {
            appStock: Stock
        },
        computed: {
            ...mapGetters(['stocks']),
        },
    }
</script>