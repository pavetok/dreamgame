Meteor.publish('heroes', function all() {
  return Heroes.find({userId: this.userId});
});
