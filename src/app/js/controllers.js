gsnote.controller('MainCtrl', ['$scope','$location', function($scope,$location){
	$scope.newNote = function () {
    	$location.path('/new');
	}
}]);

gsnote.controller('NewNoteCtrl', ['$scope', function($scope){
	
}])

gsnote.controller('NoteCtrl', ['$scope', function($scope){
	
}])