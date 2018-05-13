<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link class="navbar-brand" :to="{name: 'home'}">Stock Trader</router-link>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <router-link tag="li" active-class="active" :to="{name: 'stocks'}"><a>Stocks</a></router-link>
                    <router-link tag="li" active-class="active" :to="{name: 'portfolio'}"><a>Portfolio</a></router-link>
                </ul>
                <p class="navbar-text navbar-right"><strong>Funds: {{ funds | money }}</strong></p>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" @click="endDay">End day</a></li>
                    <li class="dropdown" :class="{open: dropdownOpened}" @click="dropdownOpened = !dropdownOpened">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save & Load<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#" @click="save">Save</a></li>
                            <li><a href="#" @click="load">Load</a></li>
                        </ul>
                    </li>
                </ul>
            </div><!--/.nav-collapse -->
        </div><!--/.container-fluid -->
    </nav>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import money from '../mixins/filters/money';

    export default {
        data() {
            return {
                dropdownOpened: false
            };
        },
        computed: {
            ...mapGetters('portfolio', ['funds'])
        },
        methods: {
            ...mapActions([
                'save',
                'load'
            ]),
            ...mapActions({
                endDay: 'stockMarket/randomizePrices'
            })
        },
        mixins: [
            money
        ]
    }
</script>