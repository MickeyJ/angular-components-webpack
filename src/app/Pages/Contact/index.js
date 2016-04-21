
export default () =>{
  require('./contact.scss');
  return{
    url: '/contact',
    template: require('./contact.html'),
    controller: ContactController()
  }
}

const ContactController = () =>(
  ['$scope',
    ($scope) =>{

      $scope.title = 'Contact Page'

    }
  ]
);