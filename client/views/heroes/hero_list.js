Template.heroList.helpers({
  heroes: function heroes() {
    return Heroes.find();
  },
});
