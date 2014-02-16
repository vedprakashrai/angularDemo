var app = angular.module('StockApp',['endpoints']);

//http://stackoverflow.com/questions/16661032/http-get-is-not-allowed-by-access-control-allow-origin-but-ajax-iss
app.config(function($httpProvider){
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});