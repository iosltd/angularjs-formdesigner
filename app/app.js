(function () {
    'use strict';

    angular
        .module('formDesigner',
            ['ngAnimate', 'ngCookies', 'ngSanitize',
             'ui.router', 'ngMaterial', 'ngMessages','kendo.directives'])

        // https://docs.angularjs.org/guide/production
        //.config(['$compileProvider', function ($compileProvider) {
        //    $compileProvider.debugInfoEnabled(false);
        //}])

        // https://github.com/angular/material/issues/1771#issuecomment-101070668
        //.config(['$provide', function($provide) {
        //  /**
        //    * Angular Material dynamically generates Style tags
        //    * based on themes and palletes; for each ng-app.
        //    * Let's disable generation and <style> DOM injections. 
        //    */
        //   $provide.constant('$MD_THEME_CSS', '/**/');
        //}])

        .config(function allowBlobLinkHrefs($compileProvider) {
            $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/);
        })
    
})();
