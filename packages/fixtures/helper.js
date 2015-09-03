/* eslint no-console: 0, no-param-reassign: 0 */

waitUntilSuccess = function waitUntilSuccess(expectation, done, timeout) {
  timeout = timeout || 2000;
  done = done || function fake() {
    // empty
  };

  const intervalId = Meteor.setInterval(function setIntervalCallback() {
    try {
      expectation();
    } catch (error) {
      console.log(error);
    }
    allDone();
  }, 100);

  const timerId = Meteor.setTimeout(function setTimeoutCallback() {
    allDone();
    expectation();
  }, timeout);

  function allDone() {
    Meteor.clearInterval(intervalId);
    Meteor.clearTimeout(timerId);
    done();
  }
};
