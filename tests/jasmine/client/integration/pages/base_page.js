waitUntilSuccess = Package["pavetok:fixtures"].waitUntilSuccess;

BasePage = function BasePage(path) {
    Element.call(this, "body");
    this.path = path;
};

BasePage.prototype = Object.create(Element.prototype);
BasePage.prototype.constructor = BasePage;

BasePage.prototype.shouldBeVisible = function(done) {
  waitUntilSuccess(function() {
    expect(window.location.href).toMatch(this.path);
  }, done);
};
