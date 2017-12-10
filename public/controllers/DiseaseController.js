function DiseaseController($scope, $http){
    var get_list_of_diseases = function (){
      $http.get('/diseases').success(function(response){
        $scope.disease_list = response;
        $scope.disease = "";
      })
    };
    get_list_of_diseases();
}
