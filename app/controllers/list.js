(function(){
    angular
        .module("turtleFacts")
        .controller("listCtrl",['quizMetrics','dataService',function(quizMetrics,dataService){ //$scope is an angular service $scope allows databinding
            var vm = this;
            vm.data = dataService.turtlesData;
            vm.activeTurtle ={};
            vm.search="";
            vm.quizMetrics = quizMetrics;

            vm.changeActiveTurtle = function(index){
                vm.activeTurtle = index;
            };
            vm.activateQuiz = function(){
                quizMetrics.changeState(true);
            };
        }]);
})();