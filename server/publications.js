Meteor.publish('donors', function() {
	return Donors.find();
});
