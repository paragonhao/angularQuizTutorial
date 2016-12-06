(function(){
    angular
        .module("turtleFacts")
        .controller("quizCtrl", ['quizMetrics','dataService',function(quizMetrics, dataService){
            var vm = this;
            vm.quizMetrics = quizMetrics;
            vm.dataService = dataService;
            vm.activeQuestion = 0;
            vm.setActiveQuestion = setActiveQuestion;
            vm.error = false;
            vm.finalise = false;
            var numQuestionsAnswered = 0;

            vm.questionAnswered = function(){
                var quizLength = dataService.quizQuestions.length;
                if(dataService.quizQuestions[vm.activeQuestion].selected !==null){
                    numQuestionsAnswered++;
                    if(numQuestionsAnswered >= quizLength){
                        for(var i = 0; i < quizLength; i++){
                            if(dataService.quizQuestions[i].selected ===null){
                                setActiveQuestion(i);
                                return;
                            }
                        }
                        vm.error = false;
                        vm.finalise = true;
                    }
                }
                vm.setActiveQuestion();
            };

            function setActiveQuestion(index){
                if (index === undefined ){
                var breakOut = false;
                    var quizLength = dataService.quizQuestions.length - 1;
                    while(!breakOut){
                        console.log("setActive loop");
                        vm.activeQuestion = vm.activeQuestion < quizLength ? ++vm.activeQuestion : 0;
                        if(vm.activeQuestion === 0){
                           vm.error = true;
                        }
                        if(dataService.quizQuestions[vm.activeQuestion].selected === null){
                            breakOut = true;
                        }

                    }
                }else{
                    vm.activeQuestion = index;
                }
            };

            vm.selectAnswer = function (index){
                dataService.quizQuestions[vm.activeQuestion].selected = index;
            };

        }])
})();