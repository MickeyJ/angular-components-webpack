
export default () =>{
  require('./home.scss');
  return{
    url: '/',
    template: require('./home.html'),
    controller: HomeController()
  }
}

const HomeController = () =>(
  ['$scope',
    ($scope) =>{
      
      $scope.title = 'Home Page';
      
    }
  ]
);