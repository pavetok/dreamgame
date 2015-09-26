const waitUntilSuccess = Package.fixtures.waitUntilSuccess;

SignOutButton = class SignOutButton extends Jelement {
  constructor() {
    super('#at-nav-button');
  }

  shouldBeVisible(done) {
    super.shouldBeVisible(done);
    waitUntilSuccess(() => {
      chai.expect($(this.selector).text()).to.equal('Sign Out');
    }, done);
  }
};
