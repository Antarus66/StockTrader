<template>
    <div class="panel panel-success">
        <div class="panel-heading">
            <span class="panel-title stock-title">{{ stock.stockType.title }}</span>
            <span class="stock-price">(Price: {{ stock.stockType.price }} | Quantity: {{ stock.quantity }})</span>
        </div>
        <div class="panel-body">
            <form class="form-inline">
                <div class="form-group">
                    <input type="number"
                           class="form-control"
                           placeholder="Quantity"
                           v-on:keyup.enter="submit"
                           @input="quantityToSell = parseInt($event.target.value)">
                </div>
                <button type="submit"
                        class="btn btn-primary"
                        :disabled="!quantityToSell"
                        @click.prevent="sell"
                >Sell</button>
            </form>
        </div>
    </div>
</template>

<script>
    import { createNamespacedHelpers } from 'vuex';

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
        methods: {
            ...mapActions(["sellStocks"]),
            sell() {
                if (!this.quantityToSell) {
                    return;
                }

                this.sellStocks({
                    stocksId: this.stock.id,
                    quantity: this.quantityToSell
                });
            }
        }
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
</style>