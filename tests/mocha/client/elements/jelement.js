const waitUntilSuccess = Package.fixtures.waitUntilSuccess;

/**
 * @param {string} selector
 * @constructor
 */
Jelement = function Jelement(selector) {
  this.selector = selector;
};

Jelement.prototype.click = function click() {
  const self = this;
  function waitAndClick() {
    if (!$(self.selector).size()) {
      window.requestAnimationFrame(waitAndClick);
    }
    $(self.selector).click();
  }
  waitAndClick();
};

Jelement.prototype.set = function set(value) {
  const self = this;
  function waitAndSet() {
    if (!$(self.selector).size()) {
      window.requestAnimationFrame(waitAndSet);
    }
    $(self.selector).val(value);
  }
  waitAndSet();
};

Jelement.prototype.isVisible = function isVisible() {
  return $(this.selector).is(':visible');
};

Jelement.prototype.shouldBeVisible = function shouldBeVisible(done) {
  const self = this;
  waitUntilSuccess(function assert() {
    chai.expect(self.isVisible()).to.equal(true, 'Element<' + self.selector + '> should be visible, but does not');
  }, done);
};
