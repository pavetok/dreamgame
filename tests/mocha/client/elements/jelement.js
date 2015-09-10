const waitUntilSuccess = Package['pavetok:fixtures'].waitUntilSuccess;

Jelement = function Jelement(locator) {
  this.locator = locator;
};

Jelement.prototype.click = function click() {
  const self = this;
  function waitAndClick() {
    if (!$(self.locator).size()) {
      window.requestAnimationFrame(waitAndClick);
    }
    $(self.locator).click();
  }
  waitAndClick();
};

Jelement.prototype.set = function set(value) {
  const self = this;
  function waitAndSet() {
    if (!$(self.locator).size()) {
      window.requestAnimationFrame(waitAndSet);
    }
    $(self.locator).val(value);
  }
  waitAndSet();
};

Jelement.prototype.isVisible = function isVisible() {
  return $(this.locator).is(':visible');
};

Jelement.prototype.shouldBeVisible = function shouldBeVisible(done) {
  const self = this;
  waitUntilSuccess(function assert() {
    chai.expect(self.isVisible()).to.equal(true, 'Element<' + self.locator + '> should be visible, but does not');
  }, done);
};
