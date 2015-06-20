waitUntilSuccess = function(expectation, done) {
	done = done || function(){};
	timeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;

	var intervalId = Meteor.setInterval(function() {
		try {
			expectation();
		} catch (error) {
			console.log(error);
		}
		allDone();
	}, 100);

	var timerId = Meteor.setTimeout(function() {
		allDone();
		expectation();
	}, timeout);

	function allDone() {
		Meteor.clearInterval(intervalId);
		Meteor.clearTimeout(timerId);
		done();
	}
};