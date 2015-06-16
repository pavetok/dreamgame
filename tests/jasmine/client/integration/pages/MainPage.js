MainPage = function MainPage(url) {
	BasePage.call(this, url);
	// elements
	this.signUpForm = new SignUpForm();
};

MainPage.prototype = Object.create(BasePage.prototype);
MainPage.prototype.constructor = MainPage;

MainPage.prototype.register = function(visitor) {
	this.signUpForm.register(visitor);
};