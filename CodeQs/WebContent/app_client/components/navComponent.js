var app = angular.module("ngCodeQs");

app.component('navComponent', {
	controller : function(profileService, authenticationService, $location) {
	var vm = this;
	
	vm.currentUser=authenticationService.currentUser;
	
	vm.go = function () {
//	    	  profileService.profileId=id; 
	    	  var path = "/profile/"
	      	  $location.path( path );
	      	};
	      	
	},

	template : `
	<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Coding Qs</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#!/profile">Profile <span class="sr-only">(current)</span></a></li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Tests <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#!/category">New Quiz</a></li>
            <li><a href="#!/wrongList">Wrong Answer Quiz</a></li>
          </ul>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a>Logged in as: {{$ctrl.currentUser().name}}</a></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
	
	`
	      	
})