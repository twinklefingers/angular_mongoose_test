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

    $scope.pickHero = '';
    //create an array with all the animal choices with display and value;
    $scope.powers = [{
            type: '(select one)',
            value: ''
        }, {
            type: 'Invisibility',
            value: 'invisibility'
        }, {
            type: 'Flight',
            value: 'light'
        }, {
            type: 'SuperSpeed',
            value: 'superSpeed'
        }, {
            type: 'HeatVision',
            value: 'heatVision'
        }, {
            type: 'SuperStrength',
            value: 'superStrength'
        }, {
            type: 'AcceleratedHealing',
            value: 'acceleratedHealing'
        }, {
            type: 'PowerBlast',
            value: 'powerBlast'
        }, {
            type: 'AnimalAffinity',
            value: 'animalAffinity'
        },

    ];


    // Utility Functions - called from other functions (not available on DOM)


}]);
