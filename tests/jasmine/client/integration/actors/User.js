User = function User() {
	this.currentPage = null;
};

User.prototype.opens = function(page) {
	Router.go(page.getUrl());
	this.currentPage = page;
};

User.prototype.shouldSee = function() {
	for (var i = 0; i < arguments.length; ++i) {
		this.currentPage.shouldContain(arguments[i]);
	}
};
