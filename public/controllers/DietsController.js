function DietsController($scope, $http){
    var get_list_of_diets = function (){
      $http.get('/diets').success(function(response){
        $scope.diet_list = response;
        $scope.diet = "";
      })
    };
    get_list_of_diets();
}
