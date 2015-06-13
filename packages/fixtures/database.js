Database = function Database() {};

Database.prototype.reset = function(done) {
	done = done || function(){};
	Meteor.call('reset', function(error, result) {
		if (error) {
			throw new Error('Database reset failed: ' + error);
		}
		console.log('Database reseted');
		done();
	});
};

Database.prototype.contains = function(entity) {
	Heroes.insert(entity, function(error, _id) {
		if (error) {
			throw new Error('Fail to save: ' + error);
		}
		entity._id = _id;
		console.log('Saved to database:', entity)
	});
};

Database.prototype.shouldContain = function(expected) {
	var actual = Heroes.findOne(expected);
	expect(actual.name).toEqual(expected.name);
};

Database.prototype.has = function(entity) {
	return function() {
		console.log('Check that database contains:', entity);
		return Heroes.findOne({name: entity.name}) !== undefined;
	};
};

Database.prototype.doesNotHave = function(entity) {
	return function() {
		console.log('Check that database does not contain:', entity);
		return Heroes.findOne({name: entity.name}) === undefined;
	};
};

Database.prototype.shouldNotContain = function(expected, done) {
	done = done || function(){};

	var waitFor = function(condition, timeout) {
		timeout = timeout || jasmine.DEFAULT_TIMEOUT_INTERVAL;

		var intervalId = Meteor.setInterval(function() {
			if (condition()) {
				waitDone();
			}
		}, 1);

		var timerId = Meteor.setTimeout(function() {
			waitDone();
		}, timeout);

		function waitDone() {
			Meteor.clearInterval(intervalId);
			Meteor.clearTimeout(timerId);
			done();
		}
	};

	waitFor(this.doesNotHave(expected));
};

Database.prototype.isEmpty = function() {
	return Heroes.find().count() === 0;
};
