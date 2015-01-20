'use strict';
 

angular.module('buffettchesneyApp')
  .controller('MainCtrl', function ($scope) {
  	var coinFlip = function () {
  		if (Math.floor(Math.random() * 2)){
		    var index = Math.floor(Math.random() * $scope.data.buffett.length);
		    console.log("buffett");
		    $scope.answer = "Buffett";
		    $(".song").html($scope.data.buffett[index]);
	    }
	    else{
		    var index = Math.floor(Math.random() * $scope.data.chesney.length);
		    $scope.answer = "Chesney";
		    $(".song").html($scope.data.chesney[index]);
	    }
  	}
    $scope.start = function () {
		$.getJSON("../../songs.json", function(data) {
			$scope.data = data;
			coinFlip();
			$(".start").fadeOut(400, function() {
				$("#question").fadeIn(400);
			});
		});
    };
    $scope.next = function () {
    	coinFlip();
    	$("#answer").fadeOut(400, function() {
    		$("#result").html("");
    		$("#question").fadeIn(400);
    	});
    };
    $scope.choose = function () {
    	if ($scope.answer == $scope.userAnswer){
    		$("#result").html("CORRECT!");
    	}
    	else {
    		$("#result").html("WRONG!")
    	}
    };
    $scope.setAnswer = function(answer) {
    	$scope.userAnswer = answer;
    	$("#question").fadeOut(400, function(){
			$("#answer").fadeIn(400);
		});
    };
});