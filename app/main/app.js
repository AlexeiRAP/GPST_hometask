var HomeTaskApp = angular.module("HomeTask", ["ngRoute"]);
var RAP = [];


//main contrller
var mainCtrl = function($scope, $http){
	$http({
		method: "GET", 
		url: "https://api.fixer.io/latest"
	})
	.success( function(data){
		$scope.currensy = [];
		for (property in data.rates){
			$scope.currensy.push({curName: property, curRate:data.rates[property]});
		}
    })
	$scope.num1 = 1;
	$scope.num2 = 2;
	$scope.numbers = [
		{name: 'Number One', model: 'num1', value: $scope.num1, url:'test_url'},
		{name: 'Number Two', model: 'num2', value: $scope.num2, url:'test_url'},
		{name: 'Exchange Rate ', model: 'num3', value: $scope.num3, url:'test_url'}
	]; 
};

mainCtrl.$inject = ['$scope', '$http'];
HomeTaskApp.controller('MainCtrl', mainCtrl);


//urlcontroller
var InputCtrl=  function($scope){
	$scope.numbers[0].value = $scope.num1;
	$scope.numbers[1].value = $scope.num2;
};

InputCtrl.$inject = ['$scope'];
HomeTaskApp.controller('InputCtrl', InputCtrl)


HomeTaskApp.directive('raSumma', function(){
	
	return {
		restrict: 'AE',
    	link: function($scope ){
    		//после добавления задания на валюты необходимо изменить данный блок на блок проверки на ввод верных значений!
    		$scope.num3 = $scope.num1 + $scope.num2;
    		function myFunUrl1(){	
    			return 'myUrlScheme' + $scope.num1;	
    		};
			function myFunUrl2(statement){
				return statement + $scope.num2; 
			};
			var myMainUrlFun = _.compose(myFunUrl2, myFunUrl1);
    		
			$scope.numbers[0].url = myMainUrlFun();
			$scope.numbers[1].url = $scope.num2 + $scope.num1;
			$scope.numbers[2].value = +$scope.num1 + +$scope.num2;
			
		console.log('конец')	
    	},
    	//templateUrl: 'app/directives.html',
    	template: 
    		"<div>"+
	    		"<label>{{numbers[2].name}} for</label>"+
	    		"<select ng-model='mycur' ng-options='cur.curName for cur in currensy'>"+
	    			"<option value=''>-- choose currency --</option>"+
	    		"</select>"+
	    		"<input value='{{(num1 + num2) * mycur.curRate}}'>"+  
    		"</div>"
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
