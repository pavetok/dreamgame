User = function User() {
	this.currentPage = null;
};

User.prototype.opens = function(page) {
	Router.go(page.url);
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

User.prototype.withPassword = function(password) {
	this.password = password;
	return this;
};

User.prototype.registers = function() {
	this.currentPage.register(this);
};
