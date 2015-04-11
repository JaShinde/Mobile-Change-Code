/**
 * Created by Shinde on 2/16/15.
 */
contraflowApp.controller("ForgotPasswordController",  ["$scope", "$window", "$location", function ($scope, $window, $location) {

    // $scope.isCollapsed = false;
    $scope.onCanel = function() {
        console.log("onCanel");
        // Need to ask Alert create in PhoneGap and then on confirm  do a Logout.
        //clear all locally stored userid and password.
        $location.path("/login");
    };

}]);