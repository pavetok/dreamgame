SignUpForm = function SignUpForm() {
  Jelement.call(this, '#at-pwd-form');
};

SignUpForm.prototype = Object.create(Jelement.prototype);
SignUpForm.prototype.constructor = SignUpForm;

SignUpForm.prototype.create = function create(visitor) {
  this.open();
  this.fill(visitor);
  this.submit();
};

SignUpForm.prototype.open = function open() {
  $('#at-nav-button').click();
  $('#at-signUp').click();
};

SignUpForm.prototype.fill = function fill(visitor) {
  $('#at-field-email').val(visitor.email);
  $('#at-field-password').val(visitor.password);
  $('#at-field-password_again').val(visitor.password);
};

SignUpForm.prototype.submit = function submit() {
  $('#at-btn').click();
};
