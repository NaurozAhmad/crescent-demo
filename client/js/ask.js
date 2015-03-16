Template.ask.helpers({
   loc: function() {
      return {
         lat: Session.get("lat"),
         lng: Session.get("lng"),
         zoom: Session.get("zoom"),
         dim: Session.get("dim")
      };
   },
   isPint: function() {
      return Session.get("isPint");
   },
   bTypes: function() {
      var e = Donors.find().fetch(),
         n = _.uniq(e, !0, function(e) {
            return e.bType;
         }),
         t = _.pluck(n, "bType");
      return t;
   },
   connected: function() {
      return null !== Geolocation.error() ? (throwError("Could not connect to the internet."), !1) : !0;
   },
   isHospitalSelected: Session.get("noHospitalSelected")
}), Template.ask.rendered = function() {
   $("#datepicker").datepicker();
}, Template.ask.events({
   "change .selHos": function() {
      var n;
      var e = $(".selHos").val();
      if ("" !== e) {
         Session.set("noHospitalSelected", "");
         n = {
            LRH: {
               lat: 34.011283,
               lng: 71.568905
            },
            RMI: {
               lat: 33.9923709,
               lng: 71.4360288
            },
            CMH: {
               lat: 34.003148,
               lng: 71.542235
            },
            NWH: {
               lat: 33.993313,
               lng: 71.448984
            },
            KTH: {
               lat: 33.997502,
               lng: 71.486385
            },
            CBH: {
               lat: 33.994682,
               lng: 71.538594
            }
         };
      } else Session.set("noHospitalSelected", "Please select a hospital.");
      Session.set("lat", n[e].lat);
      Session.set("lng", n[e].lng);
      Session.set("zoom", "15");
   },
   "change .selType": function() {
      $(".pintGroup").css("display", "block");
   },
   "change .pintSel": function() {
      var e = Donors.find({
         bType: $(".selType").val()
      }).count();
      e >= $(".pintSel").val() ? (Session.set("isPint", ""), $(".patient-info").css("display", "block"), $(".pintSel").css("background-color", "#9AEFA1")) : (Session.set("isPint", "Sorry. Only " + Donors.find({
         bType: $(".selType").val()
      }).count() + " pints are available."), $(".pintSel").css("background-color", "#f2ba9d"));
   },
   "submit .ask": function(e, n) {
      e.preventDefault();
      var t = {
         bType: n.find("[name=bType]").value,
         pints: n.find("[name=pintSel]").value,
         name: n.find("[name=name]").value,
         phone: n.find("[name=phone]").value,
         time: n.find("[name=time]").value,
         date: n.find("[name=date]").value,
         hospital: n.find("[name=hospital]").value
      };
      Meteor.call("askBlood", t, function(e) {
         e ? throwError(e.reason) : Router.go("/");
      });
   }
});
