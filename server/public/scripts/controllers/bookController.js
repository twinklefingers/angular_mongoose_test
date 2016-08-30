app.controller("BookController", ['$scope', '$http', function($scope, $http) {

    $scope.books = []; // the array of books we expect
    $scope.newBook = {}; // object to be sent to server (DB)
    $scope.displayBookId = ''; // facilitates display of comments for only a particular book
    $scope.newComment = {}; // new comment to post to server

    getBooks();

    // Scoped Functions - available on DOM
    $scope.submitNewBook = function() {
        var data = $scope.newBook;
        $http.post('/books', $scope.newBook)
            .then(function() {
                console.log("POST /books: ", data);
                getBooks();
            });
    }

    $scope.deleteBook = function(id) {
        $http.delete('/books/' + id) // this is a promise
            .then(function() { // this is the fufillment of the promise
                console.log("DELETE books: ", id);
                getBooks();
            });
    }

    $scope.updateBook = function(book) {
        var id = book._id;
        $http.put('/books/' + id, book)
            .then(function() {
                console.log('PUT /books: ', id);
                getBooks();
            });
    }

    $scope.displayComments = function(id) {
        $scope.displayBookId = id;
    }

    $scope.submitComment = function(book, newComment) {
        var comment = $scope.newComment;
        $http.post('/books/' + book._id + '/comments', comment)
            .then(function() {
                $scope.newComment = {};
                getBooks();
            })
    }


    // Utility Functions - called from other functions (not available on DOM)
    function getBooks() {
        $http.get('/books')
            .then(function(response) {
                console.log("GET /books: ", response.data);

                var bookDataArray = response.data;

                bookDataArray.forEach(function(book) {
                    book.publishDate = new Date(book.publishDate);
                });

                $scope.books = bookDataArray; // overrides empty array with array of books
            });
    }

}]);
