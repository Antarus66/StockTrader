<template>
    <div class="panel panel-success">
        <div class="panel-heading">
            <span class="panel-title stock-title">{{ stock.stockType.title }}</span>
            <span class="stock-price">(Price: {{ stock.stockType.price }} | Quantity: {{ stock.quantity }})</span>
        </div>
        <div class="panel-body">
            Some info
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            stock: {
                type: Object,
                required: true
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