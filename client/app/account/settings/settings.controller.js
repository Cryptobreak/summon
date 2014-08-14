'use strict';

angular.module('summonApp')
        .controller('SettingsCtrl', function ($scope, Auth, User) {
//            console.log(User);
            $scope.user = Auth.getCurrentUser();
            $scope.errors = {};

            $scope.changePassword = function (form) {
                $scope.submitted = true;
                if (form.$valid) {
                    Auth.changePassword($scope.user.oldPassword, $scope.user.newPassword)
                            .then(function () {
                                $scope.message = 'Password successfully changed.';
                            })
                            .catch(function () {
                                form.password.$setValidity('mongoose', false);
                                $scope.errors.other = 'Incorrect password';
                                $scope.message = '';
                            });
                }
            };

            $scope.updateProfile = function (form) {
//                //console.log('This is the update form');
                $scope.submitted = true;
       User.save($scope.user,
          function(data) {
		   console.log("Things updated fine")
            //currentUser = User.get();
          },
          function(err) {
			  console.log("Error on update: "+ JSON.stringify(err))
            //return cb(err);
			}.bind(this)).$promise;

            };

        });
