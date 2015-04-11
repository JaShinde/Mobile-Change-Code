/**
 * Created by Shinde on 2/16/15.
 */

var contraflowApp = angular.module("contraflowApp", ["ngRoute", "ngResource","ngTouch"]);

contraflowApp.config(["$routeProvider", "$httpProvider", "$locationProvider", function ($route, $httpProvider, $locationProvider)
{
    $route.when("/login", {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
    });

    $route.when("/dashboard", {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardController'
    });

    $route.when("/forgot", {
        templateUrl: 'views/forgot.html',
        controller: 'ForgotPasswordController'
    });


    $route.when("/contacts", {
        templateUrl: 'views/contacts.html',
        controller: 'ContactsController'
    });

    $route.when("/contactsdetails", {
        templateUrl: 'views/contact_details.html',
        controller: 'ContactDetailsController'
    });

    $route.when("/createcontacts", {
        templateUrl: 'views/create-contact.html',
        controller: 'CreateContactController'
    });

    $route.when("/leads", {
        templateUrl: 'views/leads.html',
        controller: 'LeadsController'
    });

    $route.when("/createleads", {
        templateUrl: 'views/create-lead.html',
        controller: 'CreateLeadsController'
    });

    $route.when("/leadsdetails", {
        templateUrl: 'views/lead_details.html',
        controller: 'LeadsDetailsController'
    });

    $route.when("/tasks", {
        templateUrl: 'views/task.html',
        controller: 'TaskController'
    });

    $route.when("/createtasks", {
        templateUrl: 'views/create-task.html',
        controller: 'CreateTaskController'
    });

    $route.when("/syncdata", {
        templateUrl: 'views/sync-data.html',
        controller: 'SyncDataController'
    });

    $route.when("/settings", {
        templateUrl: 'views/settings.html',
        controller: 'SettingsController'
    });

    $route.when("/account", {
        templateUrl: 'views/account.html',
        controller: 'AccountController'
    });

    $route.when("/privacy", {
        templateUrl: 'views/privacy.html',
        controller: 'PrivacyController'
    });

    $route.when("/touse", {
        templateUrl: 'views/termsofuse.html',
        controller: 'TOUseController'
    });

    $route.otherwise({ redirectTo: '/login' });

//    $httpProvider.defaults.headers.post["Content-Type"] = "application/jsonp;charset=UTF-8";
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json;charset=UTF-8";

}]);


