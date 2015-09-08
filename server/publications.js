Meteor.publish('heroes', function all() {
  return Heroes.find({name: {$in: ['hero1', 'hero2', 'hero3']}});
});
