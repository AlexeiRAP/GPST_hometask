var HomeTaskApp = angular.module("HomeTask", ["ngRoute"]);

HomeTaskApp.controller("MainCtrl", ['$scope', '$http', function($scope, $http){
	$scope.currensies = [
		{name: 'AUD', rate: 1.5},
		{name: 'USD', rate: 2},
		{name: 'AUD', rate: 3},
		{name: 'AUD', rate: 4},
		{name: 'AUD', rate: 5}
	]
	$http({method: "GET", url: "https://api.fixer.io/latest"}).success(function(data){
		$scope.currensy = data.rates;
		//console.log($scope.currensy);	
    })
	$scope.num1 = "1";
	$scope.num2 = "2";
	$scope.numbers = [
		{name: "Number One", model: "num1", value: $scope.num1, url:"test_url"},
		{name: "Number Two", model: "num2", value: $scope.num2, url:"test_url"},
		{name: "Exchange Rate ", model: "num3", value: $scope.num3, url:"test_url"}
	]; 
}]);

HomeTaskApp.controller("InputCtrl", ["$scope", function($scope){
	$scope.numbers[0].value = $scope.num1;
	$scope.numbers[1].value = $scope.num2;
}])


HomeTaskApp.directive("raSumma", function(){
	
	return {
		restrict: 'AE',
    	link: function($scope ){
    		$scope.num3 = $scope.num1 + $scope.num2;
    		var myFunUrl1 = function(){	return "myUrlScheme" + $scope.num1;	};
			var myFunUrl2 = function(statement){return statement + $scope.num2; };
			var myMainUrlFun = _.compose(myFunUrl2, myFunUrl1);
    		var listenerFun = function(){
				if (isFinite($scope.num1) == true && isFinite($scope.num2) == true) {
					$scope.num3 = +$scope.num1 + +$scope.num2;
					//alert("введённые значения - числа");
				} else{
					//$scope.num3 = "wrong inputs"//for exchange rates
					$scope.num3 = $scope.num1 + $scope.num2;
					//alert("введённые значения - не числа");	
				};
				$scope.numbers[0].url = myMainUrlFun();
				$scope.numbers[1].url = $scope.num2 + $scope.num1;
				$scope.numbers[2].value = $scope.num3;
			};

			$scope.$watch('num1',function(newValue, oldValue){
				$scope.numbers[0].value = $scope.num1;
				listenerFun();		
			});
			$scope.$watch('num2',function(newValue, oldValue){
				$scope.numbers[0].value = $scope.num1;
				listenerFun();	
			});
			
			
    	},
    	//templateUrl: 'app/directives.html',
    	template: 
    		"<div>"+
	    		"<label>{{numbers[2].name}} for</label>"+
	    		"<select ng-model='mycur' ng-options='cur.name for cur in currensies'>"+
	    			"<option value=''>-- choose currency --</option>"+
	    		"</select>"+
	    		"<input value='{{num3*currensy.CAD }}'>"+
    		"</div>"
    };
});

/*HomeTaskApp.directive("raCurrency", function(){
	return {
		restrict: 'AE',
		link: function($http){
			$http({method: "GET", url: "http://api.fixer.io/latest"}).success(function(data){
	    		$scope.currency = data;	
	    		console.log($scope.currency);
	    	})

		}
	}
})
*/

HomeTaskApp.config(function($routeProvider){
    $routeProvider
    	.when('/:numbers', {
    		//templateUrl: 'input/input.html',
    		controller: 'InputCtrl'
    	})
    	.otherwise({ 
    		redirectTo: '/'
    	});
});
