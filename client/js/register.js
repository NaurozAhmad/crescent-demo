Template.register.events({
	'submit form': function(e, template) {
		e.preventDefault();

		var username = template.find('[name=name]').value;
		var password = template.find('[name=password]').value;
		var confirm = template.find('[name=confirm]').value;
		var bType = template.find('[name=bType]').value;

		if(password === confirm) {
			var newDonor = {
				username: username,
				password: password,
				bType: bType
			}
			var donorStuff = {
				username: username,
				bType: bType
			}

			Meteor.call('createNewDonor', newDonor, function(error, result) {
				if (error) {
					throwError(error.reason);
				}
				else {
					stuff = _.extend(donorStuff, {
						userId: result
					});
					Meteor.call('addDonorStuff', donorStuff, function(error, result) {
						if(error) {
							throwError(error.reason);
						}
						else {
							Router.go('/');
						}
					})
				}
			})
		}
	}
});
