// ----------------------------------------------------------------------------
// create default template
var portfolio = angular.module( 'portfolio', ['ngAria', 'ngRoute', 'ngSanitize']);

// ----------------------------------------------------------------------------
// controller
portfolio.controller( 'head', ['$scope', '$http', function( $scope, $http ) {
    $http.get( 'portfolio/banner' ).then( function( res ) {
        if( res.status == 200 ) {
            $scope.banner = res.data;
        }
    });
}]);

// ----------------------------------------------------------------------------
// controller
portfolio.controller( 'footer', ['$scope', '$http', function( $scope, $http ) {
    $scope.date = (new Date()).getFullYear();

    $http.get( 'user/public_name' ).then( function( res ) {
        if( res.status == 200 ) {
            $scope.name = res.data;
        }
    });

    var url = ['banner', 'presentation', 'educations', 'experiences', 'skills', 'hobbies', 'contact'];
    var get = function( url ) {
        $http.get( 'portfolio/' + url ).then( function( res ) {
            if( res.status == 200 ) {
                $scope[url] = res.data;
            }
        });
    };

    for( var i in url ) {
        get( url[i] );
    }
}]);

// ----------------------------------------------------------------------------
// controller
portfolio.controller( 'banner', ['$scope', '$http', function( $scope, $http ) {
    $http.get( 'user/public_name' ).then( function( res ) {
        if( res.status == 200 ) {
            $scope.name = res.data;
        }
    });

    var url = ['banner', 'presentation', 'educations', 'experiences', 'skills', 'hobbies', 'contact'];
    var get = function( url ) {
        $http.get( 'portfolio/' + url ).then( function( res ) {
            if( res.status == 200 ) {
                $scope[url] = res.data;
            }
        });
    };

    for( var i in url ) {
        get( url[i] );
    }
}]);