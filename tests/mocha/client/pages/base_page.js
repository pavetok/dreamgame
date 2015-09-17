const waitUntilSuccess = Package.fixtures.waitUntilSuccess;

/**
 * @param {string} path
 * @constructor
 * @extends {Jelement}
 */
BasePage = function BasePage(path) {
  Jelement.call(this, 'body');
  this.path = path;
};

BasePage.prototype = Object.create(Jelement.prototype);
BasePage.prototype.constructor = BasePage;

BasePage.prototype.shouldBeVisible = function shouldBeVisible(done) {
  const self = this;
  waitUntilSuccess(function assert() {
    chai.expect(window.location.href).to.match(self.path);
  }, done);
};
