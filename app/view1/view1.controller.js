angular.module('myApp.view1', [])
.controller('View1Ctrl', [function() {
        View1Ctrl.spice = 'very';

        View1Ctrl.chiliSpicy = function() {
            $scope.spice = 'chili';
        };

        View1Ctrl.jalapenoSpicy = function() {
            $scope.spice = 'jalapeño';
        };
}]);

