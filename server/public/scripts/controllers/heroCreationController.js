heroApp.controller("heroCreationController", ['$scope', '$http', function($scope, $http) {

    $scope.heros = [];
    $scope.newHero = {}; // object to be sent to server (DB)

    // Scoped Functions - available on DOM
    $scope.submitNewHero = function() {
        var data = $scope.newHero;
        $http.post('/createHero', $scope.newHero)
            .then(function() {
                console.log("POST /createHero: ", data);
            });
    }

    // Utility Functions - called from other functions (not available on DOM)


}]);
