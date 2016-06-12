// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('yettodo', ['yettodo.services','ionic'])

.run(function () {
    var mdlUpgradeDom = false;
    setInterval(function() {
      if (mdlUpgradeDom) {
        componentHandler.upgradeDom();
        mdlUpgradeDom = false;
      }
    }, 200);

    var observer = new MutationObserver(function () {
      mdlUpgradeDom = true;
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    /* support <= IE 10
    angular.element(document).bind('DOMNodeInserted', function(e) {
        mdlUpgradeDom = true;
    });
    */
})


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

  .state('tasks.all', {
    url: '/todobooks/:name/tasks',
    //templateUrl: 'templates/tasks.html'
  })


  .state('tasks', {
    url: '/tasks',
    templateUrl: 'templates/tasks.html'
  })





})


.controller('YettodoCtrl', function($scope, $state,$http, Todobooks, Tasks) {
        $scope.booksSelectStates={}

    $scope.updateTodobooks = function(){
   

        Todobooks.all().then(
           function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          //alert(JSON.stringify(response.data))
          $scope.todobooks=response.data


        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          //alert({"error":JSON.stringify(response)})
        })
    }
    
    $scope.updateTodobooks()

//alert(JSON.stringify(Todobooks.all()))


 

  $scope.createTodobook = function(name, description){

    Todobooks.create(name, description).then(
           function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          //alert(JSON.stringify(response.data))
          $state.go("todobooks.show", {names: name })

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          //alert(JSON.stringify({"fail":response}))
        })

  }


  $scope.showTasks = function(){

    //todo: need to get book list from view rather than controller querying view
    
      $scope.selectedBooks = function(){

         return $.map($scope.todobooks, function (book) {

         if ($scope.booksSelectStates[book.name ])
          return book.name
        })
      }

    var books=$scope.selectedBooks()

    Tasks.byBook( books ).then(
           function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          //alert(JSON.stringify(response.data))
          $scope.tasks=response.data.tasks
        

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          //alert({"error":JSON.stringify(response)})
        })

    $state.go("todobooks.show", {names: books })
  }


})


.controller('TasksCtrl', function($scope, $state,$stateParams, Tasks) {


//alert($stateParams.names.split(',').l)
 // $scope.tasks = Tasks.getByBook('private');
//    $stateParams.names.split(','));

  
  $scope.createTask = function(todobook, title){

    Tasks.create(todobook, title).then(
           function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          //alert(JSON.stringify(response.data))
          //$state.go("todobooks.show", {names: name })
          alert(JSON.stringify(response))

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert(JSON.stringify({"fail":response}))
        })

  }

//  $scope.createTask("office","great title")



})

.directive('myRecursiveDir', function(){
  return {
     templateUrl: 'templates/tasks/recursiveTasks.html',  
/*
     scope: {
        tasks: '=',
     },
   replace: true

    template: 'Name: {{tasks[0].title}}'
  
  
  
*/
  };
});