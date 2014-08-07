'use strict';

angular.module('summonApp')
        .controller('SettingsCtrl', function ($scope, User, Auth) {
            //console.log(User);
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

            $scope.updateProfile = function (form, User ) {
                //console.log('This is the update form');
                $scope.submitted = true;
                //console.log($scope.user);
//              TODO: Need to figure out where the AJAX update code should go.
//              The exports method used below, came from the Things controller, but doesn't 
//              work here.
//
//			// Updates an existing user in the DB.
//			exports.update = function(req, res) {
//			  if(req.body._id) { delete req.body._id; }
//			  User.findById(req.params.id, function (err, user) {
//				if (err) { return handleError(err); }
//				if(!user) { return res.send(404); }
//				var updated = _.merge(user, req.body);
//				updated.save(function (err) {
//				  if (err) { return handleError(err); }
//				  return res.json(200, user);
//				});
//			  });
//			};
            }

        });
