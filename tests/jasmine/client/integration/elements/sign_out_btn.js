SignOutButton = function SignOutButton() {
	Element.call(this, "#at-nav-button");
};

SignOutButton.prototype = Object.create(Element.prototype);
SignOutButton.prototype.constructor = SignOutButton;

SignOutButton.prototype.shouldBeVisible = function() {
	Element.prototype.shouldBeVisible.call(this);
	expect(this.element().text()).toEqual("Sign Out");
};
