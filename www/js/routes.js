angular.module('yettodo')

.config(function($stateProvider) {
  $stateProvider
  .state('hello', {
    url: '/hello',
    templateUrl: 'templates/hello.html'
  })

  .state('users', {
    //url: '/todobooks',
    abstract: true,
    controller: 'UsersCtrl',
    templateUrl: 'templates/users/users.html'
  })

   .state('users.signin', {
    url: '/users',
    
    controller: 'UsersCtrl',
    templateUrl: 'templates/users/signin.html'
  })


  .state('todobooks', {
    //url: '/todobooks',
    abstract: true,
    controller: 'YettodoCtrl',
    templateUrl: 'templates/todobooks/todobooks.html'
  })

  .state('todobooks.list', {
    url: '/todobooks',
    //abstract: true,
    templateUrl: 'templates/todobooks/list.html'
  })

  .state('todobooks.new', {
    url: '/todobooks/new',
    templateUrl: 'templates/todobooks/new.html'
  })

  .state('todobooks.show', {
    url: '/todobooks/:names',
    controller: 'TasksCtrl',
    templateUrl: 'templates/tasks.html'
  })

  .state('tasks', {
    url: '/tasks',
    controller: "TasksCtrl",
    templateUrl: 'templates/tasks.html'
  })





})
