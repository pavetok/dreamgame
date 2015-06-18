SignUpForm = function SignUpForm() {
	Element.call(this, "#login-dropdown-list");
};

SignUpForm.prototype = Object.create(Element.prototype);
SignUpForm.prototype.constructor = SignUpForm;

SignUpForm.prototype.create = function(visitor) {
	this.open();
	this.fill(visitor);
	this.submit();
};

SignUpForm.prototype.open = function() {
	this.self().click();
	$("#signup-link").click();
};

SignUpForm.prototype.fill = function(visitor) {
	$("#login-email").val(visitor.email);
	$("#login-password").val(visitor.password);
};

SignUpForm.prototype.submit = function() {
	$("#login-buttons-password").click();
};
