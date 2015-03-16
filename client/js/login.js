Template.login.helpers({
	loginMessage: function() {
		return Session.get('loginMessage');
	}
})
Template.login.events({
	'submit form': function(event, template) {
		event.preventDefault();

		var userName = template.find('#login-user').value;
		var userPass = template.find('#login-pass').value;
      console.log(userName);
      console.log(userPass);

      Meteor.loginWithPassword(userName, userPass, function(error) {
         if(error) {
            Session.set('loginMessage', 'Wrong ID or Password.');
            console.log("login failed");
         } else {
            Session.setDefault('loginMessage', '');
            console.log("logged in");
            Router.go('/');
         }
      });
	}
})
