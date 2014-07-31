'use strict';

angular.module('summonApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };


	$scope.getUserName = function(){
		if ($scope.getCurrentUser.firstName == null || $scope.getCurrentUser.lastName == null)
		{
			var currentEmail = $scope.getCurrentUser().email;
			var computedName = currentEmail.substring(0,currentEmail.indexOf('@'));
			return computedName;
		} else {
			return ($scope.getCurrentUser().firstName + " " + $scope.getCurrentUser().lasName);
		}
	};

  });