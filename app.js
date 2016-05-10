// ----------------------------------------------------------------------------
// create default template
var portfolio = angular.module( 'portfolio', ['ngAria', 'ngRoute', 'ngSanitize']);

// ----------------------------------------------------------------------------
// config
portfolio.config(['$routeProvider', function( $routeProvider ) {
    var routes = [
        { link: '/educations', controller: 'educations', templateUrl: 'views/educations.html' },
        { link: '/experiences', controller: 'experiences', templateUrl: 'views/experiences.html' },
        { link: '/hobbies', controller: 'hobbies', templateUrl: 'views/hobbies.html' },
        { link: '/presentation', controller: 'presentation', templateUrl: 'views/presentation.html' },
        { link: '/skills', controller: 'skills', templateUrl: 'views/skills.html' }
    ];

    for( var i in routes ) {
        $routeProvider.when( routes[i].link, {
            templateUrl: routes[i].templateUrl,
            controller: routes[i].controller
        });
    }

    $routeProvider.otherwise( '/presentation' );
}]);

// ----------------------------------------------------------------------------
// filter
portfolio.filter( 'carriage', [function() {
    return function( input ) {
        if( !input ) {
            return '';
        }

        return input.replace( /\n/gi, '<br />' );
    };
}]);

// ----------------------------------------------------------------------------
// controller
portfolio.controller( 'educations', ['$scope', '$http', function( $scope, $http ) {
    $http.get( 'portfolio/educations' ).then( function( res ) {
        if( res.status == 200 ) {
            $scope.educations = res.data;

            for( var i in $scope.educations.contents ) {
                $scope.educations.contents[i].date = '<span class="float-right" >' + $scope.educations.contents[i].date + '</span>';
            }
        }
    });
}]);


// ----------------------------------------------------------------------------
// controller
portfolio.controller( 'experiences', ['$scope', '$http', function( $scope, $http ) {
    $http.get( 'portfolio/experiences' ).then( function( res ) {
        if( res.status == 200 ) {
            $scope.experiences = res.data;

            for( var i in $scope.experiences.contents ) {
                $scope.experiences.contents[i].date = '<span class="float-right" >' + $scope.experiences.contents[i].date + '</span>';
            }
        }
    });
}]);


// ----------------------------------------------------------------------------
// controller
portfolio.controller( 'hobbies', ['$scope', '$http', function( $scope, $http ) {
    $http.get( 'portfolio/hobbies' ).then( function( res ) {
        if( res.status == 200 ) {
            $scope.hobbies = res.data;
        }
    });
}]);


// ----------------------------------------------------------------------------
// controller
portfolio.controller( 'presentation', ['$scope', '$http', function( $scope, $http ) {
    $http.get( 'portfolio/presentation' ).then( function( res ) {
        if( res.status == 200 ) {
            $scope.presentation = res.data;
        }
    });
}]);

// ----------------------------------------------------------------------------
// controller
portfolio.controller( 'skills', ['$scope', '$http', function( $scope, $http ) {
    $http.get( 'portfolio/skills' ).then( function( res ) {
        if( res.status == 200 ) {
            $scope.skills = res.data;
        }
    });
}]);

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

    $http.get( 'user/email' ).then( function( res ) {
        if( res.status == 200 ) {
            $scope.email = res.data;
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