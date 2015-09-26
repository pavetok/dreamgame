/* eslint no-console: 0, no-param-reassign: 0, no-empty: 0 */

waitUntilSuccess = (assertion, done, timeout) => {
  timeout = timeout || 1500;
  done = done || function fake() {
      };

  const intervalId = Meteor.setInterval(() => {
    try {
      assertion();
      complete();
    } catch (error) {
      // do nothing
    }
  }, 100);

  const timerId = Meteor.setTimeout(() => complete(), timeout);

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
