Hero = function Hero(doc) {
  _.extend(this, doc);
};

Hero.prototype.save = function save() {
  Heroes.insert(this, function insertCallback(error, _id) {
    if (error) {
      throw new Error('Fail to save: ' + error);
    }
    this._id = _id;
  });
};

Heroes = new Mongo.Collection('heroes', {
  transform: function transform(doc) {
    return new Hero(doc);
  },
});

Heroes.allow({
  insert: function insert() {
    return true;
  },

  update: function update() {
    return true;
  },

  remove: function remove() {
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
});

Heroes.attachSchema(HeroDocSchema);
