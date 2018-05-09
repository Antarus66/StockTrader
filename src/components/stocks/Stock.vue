<template>
    <div class="panel panel-success">
        <div class="panel-heading">
            <span class="panel-title stock-title">{{ stock.title }}</span>
            <span class="stock-price">(Price: {{ stock.price }})</span>
        </div>
        <div class="panel-body">
            <form class="form-inline">
                <div class="form-group">
                    <input type="number"
                           class="form-control"
                           placeholder="Quantity"
                           v-on:keyup.enter="submit"
                           @input="quantityToBuy = parseInt($event.target.value)">
                </div>
                <button type="submit"
                        class="btn btn-primary"
                        :disabled="quantityToBuy <= 0"
                        @click.prevent="buy"
                >Buy</button>
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
                quantityToBuy: 0
            }
        },
        methods: {
            ...mapActions(["buyStocks"]),
            buy() {
                if (this.quantityToBuy <= 0) {
                    return;
                }

                this.buyStocks({
                    stockTypeId: this.stock.id,
                    quantity: this.quantityToBuy
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
</style>