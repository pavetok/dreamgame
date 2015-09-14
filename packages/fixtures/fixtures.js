Meteor.methods({
  reset: function reset() {
    Heroes.remove({});
    Meteor.users.remove({});
  },

  toDefault: function toDefault() {
    Meteor.call('reset');
    Accounts.createUser({
      username: 'username',
      email: 'email@domain.com',
      password: 'password',
    });
  },
});
