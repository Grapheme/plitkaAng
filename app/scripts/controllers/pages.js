'use strict';

/**
 * @ngdoc function
 * @name plitkaApp.controller:PagesCtrl
 * @description
 * # PagesCtrl
 * Controller of the plitkaApp
 */
angular.module('plitkaApp')
    .controller('PagesCtrl', ['$http', '$routeParams', '$scope', '$rootScope', function($http, $routeParams, $scope, $rootScope) {

        //Get contacts - page data
        $http.get('http://plitka.dev.grapheme.ru/application/get').success(function(data){
            var this_id = $routeParams.id;
            self.data = data;
            self.page = self.data.pages[this_id];
            self.blocks = [];
            $.each(self.page.blocks, function(index, value){
                self.blocks.push('<p>' + value.content + '</p>');
            });

            $rootScope.blocks = self.blocks.join('');
            $rootScope.h1 = self.data.pages[this_id].seo.h1;
            $rootScope.title = self.data.pages[this_id].seo.title;
            $rootScope.description = self.data.pages[this_id].seo.description;
            $rootScope.keywords = self.data.pages[this_id].seo.keywords;

            // SEO REQUIREMENT: 
            // PhantomJS pre-rendering workflow requires the page to declare, through htmlReady(), that
            // we are finished with this controller.
            $scope.htmlReady();
        });
    }]);
