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
                $scope.submitted = true;

            User.update({
              firstName: $scope.user.firstName,
              lastName: $scope.user.lastName,
              jobTitle: $scope.user.jobTitle,
              jobDescription: $scope.user.jobDescription,
              email: $scope.user.email
            },
                function (data) {
                    console.log("Things updated fine");
                },
                function (err) {
                    $scope.updateMsg = "Error on update: " + JSON.stringify(err);
                });

    };

        });
