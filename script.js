var testApp = angular.module("testApp", []);

testApp.controller("tableController", function($scope, $http) {

  function loadTable() {
    $http.get("http://localhost:8080/colaboradores/hierarquia").then(
      function successCallback(response) {
        console.log(response);
        $scope.colaboradorGerente = response.data.colaboradorGerente;
        $scope.colaboradorCoordenador = response.data.colaboradorCoordenador;
        $scope.colaboradorAuxiliar = response.data.colaboradorAuxiliar;
      },
      function errorCallback(response) {
        console.log("Unable to perform get request");
      }
    );
  }
  loadTable();

  $scope.getRequest = function() {
    let nome = $scope.nomeColaborador;
    let senha = $scope.senhaColaborado;
    let hierarquia = $scope.hierarquiaColaborador;

    let data = {
      nome: nome,
      senha: senha,
      hierarquiaId: hierarquia
    };
    
    $http.post("http://localhost:8080/colaboradores", data).then(
      function successCallback(response) {
        console.log("Successfully POST-ed data");
        loadTable();
      },
      function errorCallback(response) {
        console.log("POST-ing of data failed");
      }
    );
  }
});