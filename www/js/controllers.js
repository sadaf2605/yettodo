angular.module('yettodo')

.controller('YettodoCtrl', function($scope, $state,$http, Todobooks, Tasks) {
        $scope.booksSelectStates={}




})

.controller('UsersCtrl', function($scope, $state,$http, $window, User) {
        $scope.signin = function(username, password){

          User.signin(username,password).then(
             function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            //alert(JSON.stringify(response.data))
            $window.authtoken = response.data.authtoken
            

            $state.go("todobooks.list", {})
              


          }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            //alert({"error":JSON.stringify(response)})
            alert("login failed"+JSON.stringify(response))
          })

        }

        $scope.signup = function(username, password){

          User.signup(username,password).then(
             function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            //alert(JSON.stringify(response.data))
            $window.authtoken = response.data.authtoken
            

            $state.go("todobooks.list", {})
              


          }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            //alert({"error":JSON.stringify(response)})
            alert("login failed"+JSON.stringify(response))
          })

        }




})


.controller('TodobookCtrl', function($scope, $state,$stateParams,$window, Todobooks) {

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
    

//    var books =  

//    $scope.selectedBooks=books


//    $state.go("todobooks.show", {names: books })

  }


})
.controller('TasksCtrl', function($scope, $state,$stateParams,$window, Tasks, Todobooks) {


//alert($stateParams.names.split(',').l)
 // $scope.tasks = Tasks.getByBook('private');
//    $stateParams.names.split(','));


    
    books =  $stateParams.names;
    $scope.selectedBooks=[];

    $scope.newtask={}

    if ($stateParams.name == undefined || books.length<1){
      Todobooks.all().then(
           function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          //alert(JSON.stringify(response.data))
          $scope.tasks =[]
          $scope.selectedBooks = []

          response.data.forEach(function(book){
            //alert(JSON.stringify(book))

            $scope.selectedBooks.push(book.name)
            $scope.tasks = $scope.tasks.concat(book.tasks);

          })

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          //alert({"error":JSON.stringify(response)})
        })
      

    }else{
      $scope.selectedBooks=[books]

      $scope.newtask={}
      $scope.newtask.book = $stateParams.names;

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

    }




  

  $scope.createTask = function(todobook, title){



    Tasks.create(todobook, title, $window.dir ).then(
           function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          //alert(JSON.stringify(response.data))
          //$state.go("todobooks.show", {names: name })
          $window.dir=null
          
          $show.newtask.title="";

          $scope.tasks=response.data.tasks


          //alert(JSON.stringify(response))

          $scope.showTasks()

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          
          // or server returns response with an error status.
          alert(JSON.stringify({"fail":response}))
        })


  }

//  $scope.createTask("office","great title")



})