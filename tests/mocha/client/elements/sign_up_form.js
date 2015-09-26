SignUpForm = class SignUpForm extends Jelement {
  constructor() {
    super('#at-pwd-form');
    this.navButton = new Jelement('#at-nav-button');
    this.signUpLink = new Jelement('#at-signUp');
    this.emailField = new Jelement('#at-field-email');
    this.passwordField = new Jelement('#at-field-password');
    this.passwordAgain = new Jelement('#at-field-password_again');
    this.submitButton = new Jelement('button:contains("Register")');
  }

  /**
   * @param {User} visitor
   */
  create(visitor) {
    this.open();
    this.fill(visitor);
    this.submit();
  }

  open() {
    this.navButton.click();
    this.signUpLink.click();
  }

  /**
   * @param {User} visitor
   */
  fill(visitor) {
    this.emailField.set(visitor.email);
    this.passwordField.set(visitor.password);
    this.passwordAgain.set(visitor.password);
  }

  submit() {
    this.submitButton.click();
  }
};
