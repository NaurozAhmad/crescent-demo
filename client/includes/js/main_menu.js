Template.mainMenu.events({
	'click .logout': function(event) {
		event.preventDefault();
		Meteor.logout();
		Session.set('loginMessage', '');
	}
})
Template.mainMenu.helpers({
	username: function() {
		return Meteor.user().username;
	}
})
