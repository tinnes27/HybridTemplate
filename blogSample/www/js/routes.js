blogSample.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainController'
      }).
      when('/about', {
        templateUrl: 'views/about.html',
        controller: 'photoController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);