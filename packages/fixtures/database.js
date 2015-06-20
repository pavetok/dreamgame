Database = function Database() {
	// empty
};

Database.prototype.reset = function (done) {
	done = done || function () {
		// empty
	};
	Meteor.call("reset", function (error, result) {
		if (error) {
			throw new Error("Database reset failed: " + error);
		}
		console.log("Database reseted");
		done();
	});
};

Database.prototype.contains = function (entity) {
	Heroes.insert(entity, function (error, _id) {
		if (error) {
			throw new Error("Fail to save: " + error);
		}
		entity._id = _id;
		console.log("Saved to database:", entity)
	});
};

Database.prototype.shouldContain = function (expected) {
	var actual = Heroes.findOne(expected);
	chai.expect(actual.name).to.equal(expected.name);
};

Database.prototype.doesNotContain = function (entity) {
	console.log("Check that database does not contain:", entity);
	return Heroes.findOne({name: entity.name}) === undefined;
};

Database.prototype.shouldNotContain = function (expected, done) {
	var that = this;
	waitUntilSuccess(function() {
		chai.expect(that.doesNotContain(expected)).to.equal(true);
	}, done);
};

Database.prototype.isEmpty = function () {
	return Heroes.find().count() === 0;
};
