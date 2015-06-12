
Database = function Database() {};

Database.prototype.reset = function(done) {
	Meteor.call('reset', function(error, result) {
		done();
	});
};

Database.prototype.save = function(entity, done) {
	if (done) {
		Heroes.insert(entity, function(error, result) {
			done();
		});
	} else {
		Heroes.insert(entity);
	}
};

Database.prototype.contains = function(entity, done) {
	this.save(entity, done)
};

Database.prototype.shouldContain = function(expected) {
	var actual = Heroes.findOne(expected);
	expect(actual.name).toEqual(expected.name);
};

Database.prototype.shouldNotContain = function(expected) {
	var actual = Heroes.findOne(expected);
	expect(actual).toBeUndefined();
};
