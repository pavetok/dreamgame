SignInForm = function SignInForm() {
  Jelement.call(this, '#at-pwd-form');
  this.navButton = new Jelement('#at-nav-button');
  this.emailField = new Jelement('#at-field-email');
  this.passwordField = new Jelement('#at-field-password');
  this.submitButton = new Jelement('button:contains("Sign In")');
};

SignInForm.prototype = Object.create(Jelement.prototype);
SignInForm.prototype.constructor = SignInForm;

SignInForm.prototype.signIn = function create(user) {
  this.open();
  this.fill(user);
  this.submit();
};

SignInForm.prototype.open = function open() {
  this.navButton.click();
};

SignInForm.prototype.fill = function fill(user) {
  this.emailField.set(user.email);
  this.passwordField.set(user.password);
};

SignInForm.prototype.submit = function submit() {
  this.submitButton.click();
};
