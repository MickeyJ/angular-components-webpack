import angular from 'angular'
import 'angular-ui-router'

import appEnv from './Directives/env_tag'
import configHome from './Pages/Home/'
import configAbout from './Pages/About/'
import configContact from './Pages/Contact/'

angular.module('app', ['ui.router'])
  .directive( 'appEnv', appEnv() )
  .config(
    ['$stateProvider', '$urlRouterProvider', '$locationProvider',
      ($stateProvider, $urlRouterProvider, $locationProvider) =>{
        require('./Style/main.scss');

        $stateProvider
          .state('/', configHome() )
          .state('about', configAbout() )
          .state('contact', configContact() );

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }]
  );