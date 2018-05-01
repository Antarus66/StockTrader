<template>
    <div class="container">
        <app-header></app-header>
        <app-home></app-home>
    </div>
</template>

<script>
    import Header from "./components/Header.vue";
    import Home from "./components/Home.vue";

    export default {
        components: {
            appHeader: Header,
            appHome: Home
        }
    }
</script>

<style>

</style>
