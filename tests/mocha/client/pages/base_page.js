const waitUntilSuccess = Package.fixtures.waitUntilSuccess;

BasePage = class BasePage extends Jelement {
  constructor(path) {
    super('body');
    this.path = path;
  }

  shouldBeVisible(done) {
    waitUntilSuccess(() => {
      chai.expect(window.location.href).to.match(this.path);
    }, done);
  }
};
