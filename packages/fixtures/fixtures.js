Meteor.methods({
  reset: function reset() {
    Heroes.remove({});
    Meteor.users.remove({});
  },
});
