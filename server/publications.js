Meteor.publish('heroes', function all() {
  return Heroes.find();
});
