var HomeTaskApp = angular.module("HomeTask", []);

HomeTaskApp.controller("MainCtrl", ["$scope", function($scope){
	$scope.num1 = 1;
	$scope.num2 = 2;
	
	/*
	var listenerFun = function(newValue, oldValue, $scope){
		if (isFinite($scope.num1) == true && isFinite($scope.num2) == true) {
			$scope.num3 = +$scope.num1 + +$scope.num2;
			//alert("введённые значения - числа");
		} else{
			$scope.num3 = $scope.num1 + $scope.num2;
			//alert("введённые значения - не числа");	
		}	
	}
	$scope.$watch('num1',listenerFun);
	$scope.$watch('num2',listenerFun);
	*/
}]);


HomeTaskApp.directive("raDirective", function(){

	return {
		restrict: 'AE',
    	link: function($scope){
    		
    		var listenerFun = function(newValue, oldValue, $scope){
				if (isFinite($scope.num1) == true && isFinite($scope.num2) == true) {
					$scope.num3 = +$scope.num1 + +$scope.num2;
					//alert("введённые значения - числа");
				} else{
					$scope.num3 = $scope.num1 + $scope.num2;
					//alert("введённые значения - не числа");	
				};	
			};	
			$scope.$watch('num1',listenerFun);
			$scope.$watch('num2',listenerFun);
    	},
    	//templateUrl: 'app/directives.html',
    	template: "<div><label>Summa =</label><input value={{num3}}></div>"
    };
});
