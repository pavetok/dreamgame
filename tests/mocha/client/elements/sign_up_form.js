SignUpForm = function SignUpForm() {
  Jelement.call(this, '#at-pwd-form');
  this.navButton = new Jelement('#at-nav-button');
  this.signUpLink = new Jelement('#at-signUp');
  this.emailField = new Jelement('#at-field-email');
  this.passwordField = new Jelement('#at-field-password');
  this.passwordAgain = new Jelement('#at-field-password_again');
  this.submitButton = new Jelement('#at-btn');
};

SignUpForm.prototype = Object.create(Jelement.prototype);
SignUpForm.prototype.constructor = SignUpForm;

SignUpForm.prototype.create = function create(visitor) {
  this.open();
  this.fill(visitor);
  this.submit();
};

SignUpForm.prototype.open = function open() {
  this.navButton.click();
  this.signUpLink.click();
};

SignUpForm.prototype.fill = function fill(visitor) {
  this.emailField.set(visitor.email);
  this.passwordField.set(visitor.password);
  this.passwordAgain.set(visitor.password);
};

SignUpForm.prototype.submit = function submit() {
  this.submitButton.click();
};
