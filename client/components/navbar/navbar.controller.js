'use strict';

angular.module('summonApp')
        .controller('NavbarCtrl', function ($scope, $location, Auth) {
            $scope.menu = [
              {
                'title': 'Home',
                'link': '/'
              },
              {
                'title': 'Questions',
                'link': '/questions'
              }
            ];

            $scope.isCollapsed = true;
            $scope.isLoggedIn = Auth.isLoggedIn;
            $scope.isAdmin = Auth.isAdmin;
            $scope.currentUser = Auth.getCurrentUser();

            $scope.logout = function () {
                Auth.logout();
                $location.path('/login');
            };

            $scope.isActive = function (route) {
                return route === $location.path();
            };


            $scope.getUserName = function () {
                if ($scope.currentUser.firstName == null || $scope.currentUser.lastName == null)
                {
                    var currentEmail = $scope.currentUser.email;
                    var computedName = currentEmail.substring(0, currentEmail.indexOf('@'));
                    return computedName;
                } else {
                    return ($scope.currentUser.firstName + " " + $scope.currentUser.lastName);
                }
            };

        });
