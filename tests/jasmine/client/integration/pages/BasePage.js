BasePage = function BasePage(url) {
    WebElement.call(this, "body");
    this.url = url;
};

BasePage.prototype = Object.create(WebElement.prototype);
BasePage.prototype.constructor = BasePage;

BasePage.prototype.shouldBeVisible = function() {
  expect(window.location.href).toMatch(this.url);
};
