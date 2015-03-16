Ask = new Meteor.Collection('ask');

Meteor.methods({
   askBlood: function(askAttr) {
      if(!askAttr.name) {
         throw new Meteor.Error(422, 'Please enter your name.');
      }
      if(!askAttr.phone) {
         throw new Meteor.Error(422, 'Please enter you phone number.');
      }
      if(!askAttr.time) {
         throw new Meteor.Error(422, 'Please choose a time.');
      }
      if(!askAttr.date) {
         throw new Meteor.Error(422, 'Please choose a date.');
      }
      if(!askAttr.hospital) {
         throw new Meteor.Error(422, 'Please select a hospital where you want the blood.');
      }
      var newAsk = _.extend(askAttr, {
         created     : new Date().getTime()
      });
      var askId = Ask.insert(askAttr);

      //Select donors with required blood
      // var selectedDonors = Donors.find({bType: askAttr.bType});
      // $.each(selectedDonors, function(key, value) {
      //    return App.notificationClient.sendNotification(selectedDonors.userId, {
      //       title: 'Blood Required!',
      //       message: 'Your blood is required on ' + askAttr.date + ' at ' + askAttr.time + ' in ' + askAttr.hospital + '. Please come.'
      //    });
      // })

      return askId;
   }
})
