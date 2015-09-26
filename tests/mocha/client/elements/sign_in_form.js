/**
 * @class
 * @constructor
 * @extends {Jelement}
 */
SignInForm = class SignInForm extends Jelement {
  constructor() {
    super('#at-pwd-form');
    this.navButton = new Jelement('#at-nav-button');
    this.emailField = new Jelement('#at-field-email');
    this.passwordField = new Jelement('#at-field-password');
    this.submitButton = new Jelement('button:contains("Sign In")');
  }

  signIn(user) {
    this.open();
    this.fill(user);
    this.submit();
  }

  open() {
    this.navButton.click();
  }

  fill(user) {
    this.emailField.set(user.email);
    this.passwordField.set(user.password);
  }

  submit() {
    this.submitButton.click();
  }
};
