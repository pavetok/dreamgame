Meteor.methods({
  clearDb: function reset() {
    Heroes.remove({});
    Meteor.users.remove({});
  },

  resetDb: function reset() {
    Meteor.call('clearDb');
    Accounts.createUser({
      username: 'username',
      email: 'email@domain.com',
      password: 'password',
    });
  },
});
