var app = angular.module('myApp', []);

app.directive('optIn', function () {
    return {
        restrict: 'AE',
        templateUrl: 'form.html',
    };
});
