// ----------------------------------------------------------------------------
// create default template
var template = angular.module( 'template', ['ngAria', 'ngRoute', 'ngSanitize']);

// ----------------------------------------------------------------------------
// controller head
template.controller( 'head', ['$scope', '$http', function( $scope, $http ) {
    $http.get( 'portfolio/banner' ).then( function( res ) {
        if( res == 200 ) {
            $scope.title = res.data.title;
        }
    });
}]);