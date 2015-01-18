'use strict';
 

angular.module('buffettchesneyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.start = function () {
		$.getJSON("../../songs.json", function(data) {
	      //coin flip
	      if (Math.floor(Math.random() * 2)){
	      	var index = Math.floor(Math.random() * data.buffett.length);
	      	console.log("buffett");
	      	$scope.answer = "Buffett";
	      	$(".song").html(data.buffett[index]);
	      }
	      else{
	      	var index = Math.floor(Math.random() * data.chesney.length);
	      	$scope.answer = "Chesney";
	      	$(".song").html(data.chesney[index]);
	      }
      // data is a JavaScript object now. Handle it as such
  	  });
    };
    $scope.choose = function () {
    	if ($scope.answer == $scope.userAnswer){
    		alert("correct!");
    	}
    };
    $scope.setAnswer = function(answer) {
    	$scope.userAnswer = answer;
    };
  });