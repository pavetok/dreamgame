Element = function Element(locator) {
	this.locator = locator;
};

Element.prototype.shouldBeVisible = function() {
	expect($(this.locator).is(":visible")).toBeTruthy();
};

Element.prototype.shouldBeVisibleWithChildren = function() {
	this.shouldBeVisible();
	for (var property in this) {
		if (this.hasOwnProperty(property) && (this[property] instanceof Element)) {
			this[property].shouldBeVisible();
		}
	}
};

Element.prototype.self = function() {
	return $(this.locator);
};
