<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link class="navbar-brand" :to="{name: 'home'}">Stock Trader</router-link>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li>
                        <router-link :to="{name: 'stocks'}">Stocks</router-link>
                    </li>
                </ul>
                <!--<p class="navbar-text navbar-right"><strong>Funds: $10.000</strong></p>-->
                <!--<ul class="nav navbar-nav navbar-right">-->
                    <!--<li><a href="../navbar-fixed-top/">End day</a></li>-->
                    <!--<li class="dropdown">-->
                        <!--<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save & Load<span class="caret"></span></a>-->
                        <!--<ul class="dropdown-menu">-->
                            <!--<li><a href="#">Save</a></li>-->
                            <!--<li><a href="#">Load</a></li>-->
                        <!--</ul>-->
                    <!--</li>-->
                    <!--<li>-->

                    <!--</li>-->
                <!--</ul>-->
            </div><!--/.nav-collapse -->
        </div><!--/.container-fluid -->
    </nav>
</template>

<script>

</script>