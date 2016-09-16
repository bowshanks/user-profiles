angular.module('userProfiles', ['ui.router'])

.config(function( $stateProvider, $urlRouterProvider ) {

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: './views/home.html',
		controller: 'mainCtrl'
	})
	.state('profile', {
		url: '/profile',
		'templateUrl': './views/profile.html',
		controller: 'profileCtrl',
		resolve: {
			userInfo: function( friendService ) {
				return friendService.getFriends()
				// .then(function(response){
				// 	console.log('A',response.data);
				// 	return response.data;
				// })
			}
		}
	});

	$urlRouterProvider.otherwise('/');

});
