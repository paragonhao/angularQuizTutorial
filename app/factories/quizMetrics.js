(function(){
    angular
        .module("turtleFacts")
        .factory("quizMetrics",function(){
            var quizObj = {
                quizActive : false,
                changeState: changeState
            }
            return quizObj;

            function changeState(state){
                quizObj.quizActive = state;
            }

        });
})();