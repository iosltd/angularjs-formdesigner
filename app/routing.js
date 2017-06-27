    angular
        .module('formDesigner', ['ui.router'])
        .config(RoutingConfig);

    function RoutingConfig($stateProvider, $urlRouterProvider) {
        
        // use the HTML5 History API
        //$locationProvider
        //    .html5Mode(true);

        // Default location to navigate to start with... 
        $urlRouterProvider
            .when('', '/home')
            .otherwise('/home');
    
        $stateProvider
        .state('home',{
            url:'/home',
            templateUrl:'app/view/home.html'
        })

        .state('formList',{
            url:'/formList',
            templateUrl:'app/view/formList.html',
            controller:'formList'
        })

        .state('formEdit',{
            url:'/formEdit',
            templateUrl:'app/view/formEdit.html',
            controller:'formEdit'
        })

        .state('formPreview',{
            url:'/formPreview',
            templateUrl:'app/view/formPreview.html',
            controller:'formPreview'
        })  
    }