<template>
    <div class="panel panel-primary">
        <div class="panel-heading">
            <span class="panel-title stock-title">{{ stock.stockType.title }}</span>
            <span class="stock-price">(Price: {{ stock.stockType.price }} | Quantity: {{ stock.quantity }})</span>
        </div>
        <div class="panel-body">
            <form class="form-inline">
                <div class="form-group" :class="{'has-error': insufficientStocks}">
                    <input type="number"
                           class="form-control"
                           placeholder="Quantity"
                           v-on:keyup.enter="submit"
                           @input="quantityToSell = parseInt($event.target.value)">
                </div>
                <span class="total-price">{{ totalPrice | money}}</span>
                <button type="submit"
                        class="btn btn-primary"
                        :disabled="quantityToSell <= 0"
                        @click.prevent="sell"
                >Sell</button>
            </form>
        </div>
    </div>
</template>

<script>
    import { createNamespacedHelpers } from 'vuex';
    import money from '../../mixins/filters/money';

    const { mapActions } = createNamespacedHelpers("portfolio");

    export default {
        props: {
            stock: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                quantityToSell: 0
            };
        },
        computed: {
            totalPrice() {
                return this.stock.stockType.price * this.quantityToSell;
            },
            insufficientStocks() {
                return this.quantityToSell > this.stock.quantity
            }
        },
        methods: {
            ...mapActions(["sellStocks"]),
            sell() {
                if (this.quantityToSell <= 0) {
                    return;
                }

                this.sellStocks({
                    stocksId: this.stock.id,
                    quantity: this.quantityToSell
                });
            }
        },
        mixins: [
            money
        ]
    }
</script>

<style>
    .stock-title {
        font-weight: bold;
    }

    .stock-price {
        font-size: 14px;
    }

    button {
        float: right;
    }

    .has-error input {
        color: darkred;
    }
</style>