
export default () =>{
  require('./about.scss');
  return{
    url: '/about',
    template: require('./about.html'),
    controller: AboutController()
  }
}

const AboutController = () =>(
  ['$scope',
    ($scope) =>{
      
      $scope.title = 'About Page'    
      
    }
  ]
);