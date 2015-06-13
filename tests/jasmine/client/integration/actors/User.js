User = function User() {};

User.prototype.opens = function(page) {
	Router.go(page.getUrl());
};
