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

}]);
