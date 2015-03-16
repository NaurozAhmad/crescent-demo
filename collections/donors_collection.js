Donors = new Meteor.Collection('donors');

Meteor.methods({
	createNewDonor: function(donorAttr) {
		if(!donorAttr.username) {
			throw new Meteor.Error(422, "Enter name");
		}
		if(!donorAttr.password) {
			throw new Meteor.Error(422, "Enter Password");
		}
		if(!donorAttr.bType) {
			throw new Meteor.Error(422, "Select your blood type");
		}
		
		var userId = Accounts.createUser(donorAttr);
		return userId
	},
	addDonorStuff: function(stuffAttr) {

		var newStuff = _.extend(stuffAttr, {
			created: new Date().getTime()
		});

		var newId = Donors.insert(newStuff);
	}
})