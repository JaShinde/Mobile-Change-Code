/**
 * Created by jayesh on 2/17/15.
 */
contraflowApp.controller("ContactDetailsController",  ["$scope", "$window", "$location", function ($scope, $window, $location) {

    // $scope.isCollapsed = false;
    $scope.onLogout = function() {
        console.log("OnLogout");
        // Need to ask Alert create in PhoneGap and then on confirm  do a Logout.
        //clear all locally stored userid and password.
        $location.path("/login");
    };




}]);