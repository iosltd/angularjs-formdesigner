(function () {
    'use strict';

    angular
        .module('formDesigner')
        .config(RoutingConfig);

    function RoutingConfig($stateProvider, $urlRouterProvider) {

        // use the HTML5 History API
        //$locationProvider
        //    .html5Mode(true);

        // Default location to navigate to start with... 
        $urlRouterProvider
            .when('', '/')
            .otherwise('/home');
    
        $stateProvider

        .state('home',{
            url:'/view',
            templateUrl:'app/view/home.html'
        })

        .state('listOfForms',{
            url:'/view',
            templateUrl:'app/view/listOfForm.html',
            controller:'formgrid'
        })

        .state('editForm',{
            url:'/view',
            templateUrl:'app/view/editForm.html',
            controller:'editctrl'
        })

        .state('formPreview',{
            url:'/view',
            templateUrl:'app/view/formPreview',
            controller:'formPreview'
        })  
    }
});
