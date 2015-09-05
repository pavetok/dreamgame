const waitUntilSuccess = Package['pavetok:fixtures'].waitUntilSuccess;

Jelement = function Jelement(locator) {
  this.locator = locator;
};

Jelement.prototype.element = function element() {
  return $(this.locator);
};

Jelement.prototype.isVisible = function isVisible() {
  return this.element().is(':visible');
};

Jelement.prototype.shouldBeVisible = function shouldBeVisible(done) {
  const element = this;
  waitUntilSuccess(function assert() {
    chai.expect(element.isVisible()).to.equal(true, 'Element<' + element.locator + '> should be visible, but does not');
  }, done);
};
