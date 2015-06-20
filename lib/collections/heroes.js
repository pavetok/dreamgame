Heroes = new Mongo.Collection("heroes", {
	transform: function (doc) {
		return new Hero(doc);
	}
});

var HeroDocSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name",
		max: 32
	},
	url: {
		type: String,
		label: "Url"
	}
});

Heroes.attachSchema(HeroDocSchema);

Hero = function Hero(doc) {
	_.extend(this, doc);
};
