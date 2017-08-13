angular.module('investHouseAdmin.services')
    .factory('newsService', ['$http', '$rootScope', function($http, $rootScope) {

        var news = {};


        news.loadNews = function(id) {
            return $http({
                url: $rootScope.apiLink + 'api/news/get/' + id,
                method: "GET"
            });
        }

        news.loadArticle = function(siteId, articleId) {
            return $http({
                url: $rootScope.apiLink + 'api/news/get/' + siteId + '/' + articleId,
                method: "GET"
            });
        }

        news.saveArticle = function(article) {
            return $http({
                url: $rootScope.apiLink + 'api/news/save',
                method: "POST",
                data: article
            });
        }

        news.removeArticle = function(id) {
            return $http({
                url: $rootScope.apiLink + 'api/news/remove/' + id,
                method: "GET"
            });
        }



        return news;

    }]);