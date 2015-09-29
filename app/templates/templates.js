angular.module('templateSite.templates', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.
			when('/templates', {
				templateUrl: 'templates/templates.html',
				controller: 'TemplastesCtrl'
			}).
			when('/templates/:templateId',{
				templateUrl: 'templates/templates-details.html',
				controller: 'TemplatesDetailsCtrl'
			})
	}])
	.controller('TemplastesCtrl', ['$scope','$http', function($scope, $http){
		$http.get('json/templates.json').success(function(data){
			$scope.templates = data;
		})
	}])
	.controller('TemplatesDetailsCtrl', ['$scope','$http','$routeParams', '$filter', function($scope, $http, $routeParams, $filter){
		var templateId = $routeParams.templateId;

		$http.get('json/templates.json').success(function(data){
			$scope.template = $filter('filter')(data, function(d){
				// console.log(d);
				return d.id == templateId;
				// console.log(d.id)
			})[0];
			
			// console.log()
			$scope.mainImage = $scope.template.images[0].name;
			// console.log($scope.mainImage);
		});

		$scope.setImage= function(image){
			$scope.mainImage = image.name;
		}
	}]);