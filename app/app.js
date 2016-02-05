var HomeTaskApp = angular.module("HomeTask", []);

HomeTaskApp.controller("MainCtrl", ["$scope", function($scope){
	$scope.num1 = "Sum";
	$scope.num2 = "ma";
	
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

}])
