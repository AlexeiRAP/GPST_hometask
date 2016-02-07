var HomeTaskApp = angular.module("HomeTask", ["ngRoute"]);

HomeTaskApp.controller("MainCtrl", ["$scope", function($scope){
	$scope.num1 = "1";
	$scope.num2 = "2";
	$scope.numbers = [
		{name: "Number One", model: "num1", value: $scope.num1, url:"testVal1"},
		{name: "Number Two", model: "num2", value: $scope.num2, url:"testVal1"},
		{name: "Summa = ", model: "num3", value: $scope.num3, url:"testVal1"}
	]; 
}]);

HomeTaskApp.controller("InputCtrl", ["$scope", function($scope){
	$scope.numbers[0].value = $scope.num1;
	$scope.numbers[1].value = $scope.num2;
}])


HomeTaskApp.directive("raSumma", function(){
	
	return {
		restrict: 'AE',
    	link: function($scope){
    		$scope.num3 = $scope.num1 + $scope.num2;
    		var myFunUrl1 = function(){	return "myUrlScheme" + $scope.num1;	};
			var myFunUrl2 = function(statement){return statement + $scope.num2; };
			var myMainUrlFun = _.compose(myFunUrl2, myFunUrl1);
    		var listenerFun = function(){
				if (isFinite($scope.num1) == true && isFinite($scope.num2) == true) {
					$scope.num3 = +$scope.num1 + +$scope.num2;
					//alert("введённые значения - числа");
				} else{
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
    		"<label>Summa =</label>"+
    		"<input value={{num3}}></div>"
    };
});


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
