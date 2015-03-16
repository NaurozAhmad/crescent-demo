Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	progressSpinner: false
});

Router.route('/', {
	name: 'mainMenu'
});

Router.route('/register', {
	name: 'register'
});

Router.route('/ask', {
	name: 'ask',
	waitOn: function() {
		return Meteor.subscribe('donors');
	}
});

Router.route('/login', {
	name: 'login'
});
