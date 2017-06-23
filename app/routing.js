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
            templeteUrl:'view/home.html'
        })

        .state('listOfForms',{
            url:'/view',
            templeteUrl:'view/listOfForm',
            controller:'grid',
            $resource: ''
        })

    }
});
