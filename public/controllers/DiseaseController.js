function DiseaseController($scope, $http){
    var get_list_of_diseases = function (){
      $http.get('/HeartMonitor').success(function(response){
        $scope.disease_list = response;
        $scope.disease = "";
      })
    };
    get_list_of_diseases();

    $scope.link = function (disease_id){
      $http.get('/disease/'+disease_id).success(function(response){
        $scope.disease = response;
      });
    }


}
