// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('yettodo', ['yettodo.services','ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider) {
  $stateProvider
  .state('hello', {
    url: '/hello',
    templateUrl: 'templates/hello.html'
  })

  .state('todobooks', {
    //url: '/todobooks',
    abstract: true,
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
    templateUrl: 'templates/tasks.html'
  })

  .state('tasks.all', {
    url: '/todobooks/:name/tasks',
    //templateUrl: 'templates/tasks.html'
  })


  .state('tasks', {
    url: '/tasks',
    controller: 'YettodoCtrl',
    templateUrl: 'templates/tasks.html'
  })





})


.controller('YettodoCtrl', function($scope, $state, Todobooks) {

  $scope.todobooks = Todobooks.all();



  $scope.tasks = [
    { title: 'Collect coins' },
    { title: 'Eat mushrooms' },
    { title: 'Get high enough to grab the flag' },
    { title: 'Find the Princess' }
  ];

  $scope.showTasks = function(){

    //todo: need to get book list from view rather than controller querying view
    var booknodes = document.querySelectorAll('input[type=checkbox]:checked') ;
    
    var books =  Array.from(booknodes).map(function(book){ return book.name;})
   
    $state.go("todobooks.show", {names: books })
  }







})




function Todobooks(){

}

Todobooks.prototype.getAll = function(){
  return
  [
      {name: "private", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..."},
      {name: "office", description: null}
  ]
};