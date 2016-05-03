// ----------------------------------------------------------------------------
// create default template
var portfolio = angular.module( 'portfolio', ['ngAria', 'ngRoute', 'ngSanitize']);

// ----------------------------------------------------------------------------
// controller head
portfolio.controller( 'head', ['$scope', '$http', function( $scope, $http ) {
    $http.get( 'portfolio/banner' ).then( function( res ) {
        if( res == 200 ) {
            $scope.title = res.data.title;
        }
    });
}]);