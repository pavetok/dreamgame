Meteor.methods({
  reset: function() {
    Heroes.remove({});
    Meteor.users.remove({});
  }
});
