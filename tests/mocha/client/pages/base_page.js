const waitUntilSuccess = Package.fixtures.waitUntilSuccess;

/**
 * @param {string} path
 * @constructor
 * @extends {Jelement}
 */
BasePage = class BasePage extends Jelement {
  constructor(path) {
    super('body');
    this.path = path;
  }

  shouldBeVisible(done) {
    const self = this;
    waitUntilSuccess(function assert() {
      chai.expect(window.location.href).to.match(self.path);
    }, done);
  }
};
