/* global Heroes:true */

Heroes = new Mongo.Collection('heroes', {
  transform(doc) {
    return new Hero(doc);
  },
});

Heroes.allow({
  insert() {
    return true;
  },

  update() {
    return true;
  },

  remove() {
    return true;
  },
});

const HeroDocSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
    max: 32,
  },
  url: {
    type: String,
    label: 'Url',
  },
  userId: {
    type: String,
    label: 'User Id',
  },
});

Heroes.attachSchema(HeroDocSchema);
