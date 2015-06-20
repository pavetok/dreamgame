waitUntilSuccess = function (expectation, done) {
	done = done || function () {
		// empty
	};
	timeout = MochaWeb.timeout;

	var intervalId = Meteor.setInterval(function () {
		try {
			expectation();
		} catch (error) {
			// empty
		}
		allDone();
	}, 100);

	var timerId = Meteor.setTimeout(function () {
		allDone();
		expectation();
	}, timeout);

	function allDone() {
		Meteor.clearInterval(intervalId);
		Meteor.clearTimeout(timerId);
		done();
	}
};