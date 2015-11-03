waitUntilSuccess = (assertion, done, timeout) => {
  const fake = () => {
  };
  done = done || fake;
  timeout = timeout || 1500;

  const intervalId = Meteor.setInterval(() => {
    try {
      assertion();
      complete();
    } catch (error) {
      // do nothing
    }
  }, 100);

  const timeoutId = Meteor.setTimeout(() => complete(), timeout);

  function complete() {
    Meteor.clearInterval(intervalId);
    Meteor.clearTimeout(timeoutId);
    try {
      assertion();
      done();
    } catch (error) {
      done(error);
    }
  }
};
