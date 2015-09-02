waitUntilSuccess = Package['pavetok:fixtures'].waitUntilSuccess;

BasePage = function BasePage(path) {
	Element.call(this, 'body');
	this.path = path;
};

BasePage.prototype = Object.create(Element.prototype);
BasePage.prototype.constructor = BasePage;

BasePage.prototype.shouldBeVisible = function (done) {
	var that = this;
	waitUntilSuccess(function () {
		chai.expect(window.location.href).to.match(that.path);
	}, done);
};
