User = function User() {
	this.currentPage = null;
};

User.prototype.opens = function(page) {
	Router.go(page.path);
	this.currentPage = page;
};

User.prototype.shouldSee = function() {
	for (var i = 0; i < arguments.length; ++i) {
		arguments[i].shouldBeVisibleWithChildren();
	}
};

User.prototype.withEmail = function(email) {
	this.email = email;
	return this;
};

User.prototype.withPass = function(password) {
	this.password = password;
	return this;
};

User.prototype.registers = function() {
	this.currentPage.signUpForm.create(this);
};
