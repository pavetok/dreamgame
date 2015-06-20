BasePage = function BasePage(path) {
    Element.call(this, "body");
    this.path = path;
};

BasePage.prototype = Object.create(Element.prototype);
BasePage.prototype.constructor = BasePage;

BasePage.prototype.shouldBeVisible = function() {
  expect(window.location.href).toMatch(this.path);
};
