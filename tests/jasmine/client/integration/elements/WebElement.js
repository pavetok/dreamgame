WebElement = function WebElement(locator) {
	this.locator = locator;
};

WebElement.prototype.shouldBeVisible = function() {
	expect($(this.locator).is(":visible")).toBeTruthy();
};

WebElement.prototype.shouldBeVisibleWithChildren = function() {
	this.shouldBeVisible();
	for (var property in this) {
		if (this.hasOwnProperty(property) && (this[property] instanceof WebElement)) {
			this[property].shouldBeVisible();
		}
	}
};

WebElement.prototype.self = function() {
	return $(this.locator);
};
