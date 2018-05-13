<template>
    <div class="container">
        <app-header></app-header>
        <transition
                enter-active-class="animated bounceInLeft"
                leave-active-class="animated fade"
                :duration="{ enter: 600, leave:200}"
                mode="out-in"
        >
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import Header from "./components/Header.vue";

    export default {
        components: {
            appHeader: Header
        },
        created() {
            this.$store.dispatch("stockMarket/initStockTypes");
        }
    }
</script>

<style>
    .container {
        margin-top: 20px;
    }
</style>
