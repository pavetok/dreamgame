waitUntilSuccess = Package['pavetok:fixtures'].waitUntilSuccess;

SignOutButton = function SignOutButton() {
	Element.call(this, '#at-nav-button');
};

SignOutButton.prototype = Object.create(Element.prototype);
SignOutButton.prototype.constructor = SignOutButton;

SignOutButton.prototype.shouldBeVisible = function (done) {
	var that = this;
	Element.prototype.shouldBeVisible.call(that);
	waitUntilSuccess(function () {
		chai.expect(that.element().text()).to.equal('Sign Out');
	}, done);
};
