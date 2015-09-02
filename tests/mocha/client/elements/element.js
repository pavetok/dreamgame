waitUntilSuccess = Package['pavetok:fixtures'].waitUntilSuccess;

Element = function Element(locator) {
	this.locator = locator;
};

Element.prototype.element = function () {
	return $(this.locator);
};

Element.prototype.isVisible = function () {
	return this.element().is(':visible');
};

Element.prototype.shouldBeVisible = function (done) {
	var element = this;
	waitUntilSuccess(function () {
		chai.expect(element.isVisible()).to.equal(true, 'Element<' + element.locator + '> should be visible, but does not');
	}, done);
};
