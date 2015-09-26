const waitUntilSuccess = Package.fixtures.waitUntilSuccess;

/**
 * @constructor
 * @extends {Jelement}
 */
SignOutButton = class SignOutButton extends Jelement {
  constructor() {
    super('#at-nav-button');
  }

  shouldBeVisible(done) {
    const self = this;
    Jelement.prototype.shouldBeVisible.call(self);
    waitUntilSuccess(function assert() {
      chai.expect($(self.selector).text()).to.equal('Sign Out');
    }, done);
  }
};
