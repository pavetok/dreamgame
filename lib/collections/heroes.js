Heroes = new Mongo.Collection('heroes', {
  transform: function(doc) { return new Hero(doc); }
});

Hero = function Hero(doc) {
  _.extend(this, doc);
};
