var app = angular.module('app', []);
	app.controller('myCtrl', function($scope) {
      		var sequenceArray = ['one', 'two'];
      		var level = 1;
      		var time = 30;
			var score= 0;
			angular.element('#score').html(score);
            $scope.startGame = function(){      		
			myFunGame.InitCanvas();

      			setInterval(function(){
	      			if(time == 0) {
	      				time = 30;
						if(score >= 30){
						if(level == 5){
						level = 1;
						alert("successfully completed.....!");
						}else{
						alert("successfully completed level : "+ level);
						level = level + 1;
						}
						}
						else{
						level= 1;
						alert("Game over....!");
						}
						score= 0;
						angular.element('#score').html(score);
						myFunGame.ClearCanvas();
	      			}
	      			time = time - 1;
					angular.element('#level').html(level);
	      			angular.element('#time').html(time);
		      	},1000);
				}
				$scope.canvasClick = function(e){
			     score = score + 2; 
                 angular.element('#score').html(score);				 
				}			
	});
		
		
      