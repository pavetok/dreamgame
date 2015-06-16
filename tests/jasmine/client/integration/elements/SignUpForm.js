SignUpForm = function SignUpForm() {

};

SignUpForm.prototype.register = function(visitor) {
	this.open();
	this.fill(visitor);
	this.submit();
};

SignUpForm.prototype.open = function() {
	$("#login-dropdown-list").click();
	$("#signup-link").click();
};

SignUpForm.prototype.fill = function(visitor) {
	$("#login-email").val(visitor.email);
	$("#login-password").val(visitor.password);
};

SignUpForm.prototype.submit = function() {
	$("#login-buttons-password").click();
};
