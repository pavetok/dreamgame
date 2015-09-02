SignUpForm = function SignUpForm() {
  Element.call(this, '#at-pwd-form');
};

SignUpForm.prototype = Object.create(Element.prototype);
SignUpForm.prototype.constructor = SignUpForm;

SignUpForm.prototype.create = function(visitor) {
  this.open();
  this.fill(visitor);
  this.submit();
};

SignUpForm.prototype.open = function() {
  $('#at-nav-button').click();
  $('#at-signUp').click();
};

SignUpForm.prototype.fill = function(visitor) {
  $('#at-field-email').val(visitor.email);
  $('#at-field-password').val(visitor.password);
  $('#at-field-password_again').val(visitor.password);
};

SignUpForm.prototype.submit = function() {
  $('#at-btn').click();
};
