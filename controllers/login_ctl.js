/**
 * Created by Shinde on 2/5/15.
 */

contraflowApp.controller("LoginController",  ["$scope", "$window","$location","$http", function ($scope, $window, $location,$http) {
//    console.log('OKOADKFOAKDFOAKDSF');
    $scope.userDetails = {email:"",password:""};
    $scope.validated = false;
    $scope.errorMessage = "";
    $scope.isClicked = false;
    $scope.authenticated = false;

    $scope.OnSubmit = function () {

        //console.log("On Submit");

        if($scope.formValidation()){

            $scope.serverurl = "http://app.contraflow.in/webservice/authenticateuser";
            $scope.loginDetails = [$scope.userDetails];
            $scope.loginServiceData = {"gpstrackdata": $scope.loginDetails};
            //var loginServiceData = {"gpstrackdata": $scope.loginDetails};
            //$scope.isClicked = true;

            $http({
                method: 'POST',
                url: 'http://app.contraflow.in/webservice/authenticateuser',
              //  url: 'http://172.29.178.44/hannover/login.php',
                dataType: 'json',
                data: $scope.loginServiceData,
                //data: {"gpstrackdata":[{"email":"sonali@harisoft.net","password":"sonali"}]},
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
            }).success(function (data) {
                //$scope.isClicked = false;
                //alert('success Data'+data);
               // alert('OKOK');
               alert('success Data'+ angular.toJson(data));

            }).error(function (data) {
                alert('Error'+data);
                //$scope.isClicked = false;
            });
//
//            $http({
//                withCredentials: false,
//                method: 'POST',
//				dataType: 'JSON',
//				url: $scope.serverurl,
//                data:{"gpstrackdata":[{"email":"sonali@harisoft.net","password":"sonali"}]}
//				//headers: { 'Content-Type': 'application/json; charset=UTF-8' }
//            }).success(function(data, status) {
//               console.log("Success of Login"+data);
//                alert(data);
////                alert(angular.fromJson(data));
//                //$scope.isClicked = false;
//                $location.path("/dashboard");
//            }).error(function(data, status) {
//                //$scope.isClicked = false;
//                console.log("Error of Login");
//
//            });
//
//            $.post( $scope.serverurl, loginServiceData, function(data) {
//                var obj = jQuery.parseJSON(data);
//				   console.log(obj);
//                if(obj.responsecode == 100)
//                {
//                    $scope.authenticated = true;
//				    $scope.routetoDashboard();
//                }
//                else
//                {
//                    $scope.authenticated = false;
//				    $scope.validated = true;
//                    $scope.errorMessage = obj.message;
//                 }
//				})
//                .done(function() {
//                   // $scope.isClicked = false;
//                })
//                .fail(function() {
//					$scope.authenticated = false;
//                    $scope.validated = true;
//                    $scope.errorMessage = "No Internet Connection Available, Please try Later";
//                })
//                .always(function() {
//                    $scope.isClicked = false;
//                },"json");



        }

    };

    $scope.routetoDashboard = function(){
        $location.path("/dashboard");
    };

    $scope.formValidation = function(){

        if(!$scope.userDetails.email){
            $scope.validated = true;
            $scope.errorMessage = "Please Enter User Name";
            return false;
        }
        else {
            if(!/^(([a-zA-Z0-9~\{\}\^\?%&=`'/\*!#\+_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?))$/.test($scope.userDetails.email)) {
                $scope.validated = true;
                $scope.errorMessage = "Please Enter Valid Email";
                return false;
            }
            else{
                if(!$scope.userDetails.password){
                    $scope.validated = true;
                    $scope.errorMessage = "Please Enter Password";
                    return false;
                }
                else{
                    if($scope.userDetails.password.length < 5)
                    {
                        $scope.validated = true;
                        $scope.errorMessage = "Please Enter Valid Password";
                        return false;
                    }
                    else{
                        return true;
                    }}}}};

    $scope.EmailValidation = function(){

        if(!$scope.userDetails.email){
            $scope.validated = true;
            $scope.errorMessage = "Please Enter User Name";
        }
        else{
            if(!/^(([a-zA-Z0-9~\{\}\^\?%&=`'/\*!#\+_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?))$/.test($scope.userDetails.email)){
                $scope.validated = true;
                $scope.errorMessage = "Please Enter Valid Email";
            }else{
                $scope.validated = false;
                $scope.errorMessage = "";
            }
        }
    };

    $scope.PasswordValidation = function(){
        if(!$scope.userDetails.password){
            $scope.validated = true;
            $scope.errorMessage = "Please Enter Password";
        }
        else{
            if($scope.userDetails.password.length < 5)
            {
                $scope.validated = true;
                $scope.errorMessage = "Please Enter Valid Password";
            }else{
                $scope.validated = false;
                $scope.errorMessage = "";
            }
        }
    };

}]);
