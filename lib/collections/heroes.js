Heroes = new Mongo.Collection('heroes', {
	transform: function (doc) {
		return new Hero(doc);
	}
});

Heroes.allow({
	insert: function (userId, doc) {
		return true;
	},

	update: function (userId, doc, fields, modifier) {
		return true;
	},

	remove: function (userId, doc) {
		return true;
	}
});

var HeroDocSchema = new SimpleSchema({
	name: {
		type: String,
		label: 'Name',
		max: 32
	},
	url: {
		type: String,
		label: 'Url'
	}
});

Heroes.attachSchema(HeroDocSchema);

Hero = function Hero(doc) {
	_.extend(this, doc);
};
