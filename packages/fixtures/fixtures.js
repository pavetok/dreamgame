Meteor.methods({
  clearDb() {
    Heroes.remove({});
    Meteor.users.remove({});
  },

  resetDb() {
    Meteor.call('clearDb');
    Accounts.createUser({
      username: 'username',
      email: 'email@domain.com',
      password: 'password',
    });
  },
});
