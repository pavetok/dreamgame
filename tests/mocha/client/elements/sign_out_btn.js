const waitUntilSuccess = Package.fixtures.waitUntilSuccess;

/**
 * @constructor
 * @extends {Jelement}
 */
SignOutButton = function SignOutButton() {
  Jelement.call(this, '#at-nav-button');
};

SignOutButton.prototype = Object.create(Jelement.prototype);
SignOutButton.prototype.constructor = SignOutButton;

SignOutButton.prototype.shouldBeVisible = function shouldBeVisible(done) {
  const self = this;
  Jelement.prototype.shouldBeVisible.call(self);
  waitUntilSuccess(function assert() {
    chai.expect($(self.selector).text()).to.equal('Sign Out');
  }, done);
};
