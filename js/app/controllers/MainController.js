function MainController($scope) {
  $scope.name = 'Ian Valentine';
}

angular
  .module('app')
  .controller('MainController', MainController);
