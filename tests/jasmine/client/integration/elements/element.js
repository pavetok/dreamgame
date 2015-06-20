Element = function Element(locator) {
	this.locator = locator;
};

Element.prototype.element = function() {
	return $(this.locator);
};

Element.prototype.shouldBeVisible = function() {
	expect(this.element().is(":visible"))
			.toBeTruthy("Element<" + this.locator + "> should be visible, but does not",
			"\nActual" + this.element().parent().html().trim());
};

Element.prototype.shouldBeVisibleWithChildren = function() {
	this.shouldBeVisible();
	for (var property in this) {
		if (this.hasOwnProperty(property) && (this[property] instanceof Element)) {
			this[property].shouldBeVisible();
		}
	}
};
