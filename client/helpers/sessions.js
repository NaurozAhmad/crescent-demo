Session.setDefault('lat', '33.9916439');
Session.setDefault('lng', '71.5136147');
Session.setDefault('zoom', '8');
Session.setDefault('dim', '600x300');
if(Meteor.isCordova) {
	Session.set('dim', '290x300');
}
Session.setDefault('isPint', '');
Session.setDefault('noHospitalSelected', '');
