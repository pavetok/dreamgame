Meteor.publish('heroes', function all() {
  return Heroes.find({user: this.userId});
});
