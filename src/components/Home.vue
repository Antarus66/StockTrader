<template>
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-body">
                    <h1>Trade or View your portfolio</h1>
                    <p>You may save and load your data</p>
                    <p>Click on "End day" to begin a new day</p>
                    <hr>
                    <h3>Your funds: {{ funds | money }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import money from '../mixins/filters/money';

    export default {
        computed: {
            ...mapGetters('portfolio', ['funds']),
        },
        mixins: [
            money
        ]
    }
</script>