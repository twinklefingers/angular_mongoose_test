heroApp.controller("heroManagementController", ['$scope', '$http', function($scope, $http) {

    getHeros();

    // Scoped Functions - available on DOM
    $scope.heros = [];

    // delete req
    $scope.deleteHero = function(id) {
        $http.delete('/deleteHero/' + id) // this is a promise
            .then(function() { // this is the fufillment of the promise
                console.log("DELETE hero: ", id);
                getHeros();
            });
    }



    // Utility Functions - called from other functions (not available on DOM)
    function getHeros() {
        $http.get('/getHeros')
            .then(function(response) {
                console.log("GET /getHeros: ", response.data);

                var heroDataArray = response.data;

                $scope.heros = heroDataArray; // overrides empty array with array of heros
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

}]);
