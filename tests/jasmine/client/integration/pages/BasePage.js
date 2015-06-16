BasePage = function BasePage(url) {
    Element.call(this, "body");
    this.url = url;
};

BasePage.prototype = Object.create(Element.prototype);
BasePage.prototype.constructor = BasePage;

BasePage.prototype.shouldBeVisible = function() {
  expect(window.location.href).toMatch(this.url);
};
