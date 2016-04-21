
export default () =>(
  function(){
    return{
      restrict: 'A',
      link: function(scope, element, attr){

        let env;
        
        ENV_MODE
          ? env = '*Development Mode*'
          : env = '*Production Mode*';
        
        element.text(env);
      }
    }
  }
)