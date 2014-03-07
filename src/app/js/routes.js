gsnote.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/',{
		templateUrl : 'app/tpl/all.tpl.html'
	});
	$routeProvider.when('/new',{
		templateUrl : 'app/tpl/note.tpl.html',
		controller : 'NewNoteCtrl'
	});
	$routeProvider.when('/:noteid',{
		templateUrl : 'app/tpl/note.tpl.html',
		controller : 'NoteCtrl'
	});
	$routeProvider.otherwise({
		redirectTo : '/'
	});
}])