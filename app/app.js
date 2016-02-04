var HomeTaskApp = angular.module("HomeTask", []);

HomeTaskApp.controller("MainCtrl", ["$scope", function($scope){
	$scope.num1 = "Sum";
	$scope.num2 = "ma";
	
	var listenerFun = function(newValue, oldValue, $scope){
		if (isFinite($scope.num1) == true && isFinite($scope.num2) == true) {
			$scope.num3 = +$scope.num1 + $scope.num2;
			//alert("введённые значения - числа");
		} else{
			$scope.num3 = $scope.num1 + $scope.num2;
			//alert("введённые значения - не числа");	
		}	
	}
	$scope.$watch('num1',listenerFun);
	$scope.$watch('num2',listenerFun);

/*
	$scope.$watch("num1",function(newValue, oldValue){
		if (isFinite($scope.num1) == true && isFinite($scope.num2) == true) {
			$scope.num3 = +$scope.num1 + $scope.num2;
			//alert("введённые значения - числа");
		} else{
			$scope.num3 = $scope.num1 + $scope.num2;
			//alert("введённые значения - не числа");	
		}	
	});

	$scope.$watch("num2",function(newValue, oldValue){
		if (isFinite($scope.num1) == true && isFinite($scope.num2) == true) {
			$scope.num3 = +$scope.num1 + $scope.num2;
			//alert("введённые значения - числа");
		} else{
			$scope.num3 = $scope.num1 + $scope.num2;
			//alert("введённые значения - не числа");	
		}	
	});
	


	var changeFun = function(num1, num2, Summa){
		if (isFinite(num1) == true && isFinite(num2) == true) {
			Summa = +num1 + num2;
			//alert("введённые значения - числа");
		} else{
			Summa = num1 + num2;
			//alert("введённые значения - не числа");	
		}	
	}	*/


	
}])