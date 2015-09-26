const waitUntilSuccess = Package.fixtures.waitUntilSuccess;

Jelement = class Jelement {
  constructor(selector) {
    this.selector = selector;
  }

  click() {
    const self = this;

    function waitAndClick() {
      if (!$(self.selector).size()) {
        window.requestAnimationFrame(waitAndClick);
      }
      $(self.selector).click();
    }

    waitAndClick();
  }

  set(value) {
    const self = this;

    function waitAndSet() {
      if (!$(self.selector).size()) {
        window.requestAnimationFrame(waitAndSet);
      }
      $(self.selector).val(value);
    }

    waitAndSet();
  }

  isVisible() {
    return $(this.selector).is(':visible');
  }

  shouldBeVisible(done) {
    waitUntilSuccess(() => {
      chai.expect(this.isVisible()).to.equal(true, 'Element<' + this.selector + '> should be visible, but does not');
    }, done);
  }
};
