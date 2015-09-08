/* eslint no-console: 0, no-param-reassign: 0, no-empty: 0 */

waitUntilSuccess = function waitUntilSuccess(assertion, done, timeout) {
  timeout = timeout || 1500;
  done = done || function fake() {
    // do nothing
  };

  const intervalId = Meteor.setInterval(function setIntervalCallback() {
    try {
      assertion();
      complete();
    } catch (error) {
      // do nothing
    }
  }, 100);

  const timerId = Meteor.setTimeout(function setTimeoutCallback() {
    complete();
  }, timeout);

  function complete() {
    Meteor.clearInterval(intervalId);
    Meteor.clearTimeout(timerId);
    try {
      assertion();
      done();
    } catch (error) {
      done(error);
    }
  }
};
