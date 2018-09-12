var app = angular.module('kontrolModule', []);
app.controller("CtrlMain", function ($scope, $rootScope,$http) {
    $rootScope.minimum = [];
    $rootScope.sortType = ["il", "ilce"];
    
    
    $scope.getMin = function () {
        $http.post('../index.aspx/Min', { data: {} })
                       .success(function (data, status, headers, config) {
                           $scope.minimum = data.d;
                           $rootScope.loading = false;

                       })
                       .error(function (data, status, headers, config) {
                           console.log(data);
                           $rootScope.loading = false;
                       });

    }

    $scope.getMin();
    $rootScope.loading = true;
    

});
app.filter('meteorDateFormat', function ($filter) {
    return function (givenTime) {
        var _date = $filter('date')(new Date(givenTime),
                            'dd MMMM - HH:mm', '+0300');
        if (_date == "Invalid Date")
            _date = "";
        return _date;
    };
})
app.filter('kaliteKontrol', function ($filter) {
    return function (value) {

        if (value == -9999)
            value = "";
        return value;
    };
})
