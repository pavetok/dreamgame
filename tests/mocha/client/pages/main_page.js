/**
 * @constructor
 * @extends {BasePage}
 */
MainPage = function MainPage() {
  BasePage.call(this, '/');
  // elements
  this.signUpForm = new SignUpForm();
  this.signInForm = new SignInForm();
};

MainPage.prototype = Object.create(BasePage.prototype);
MainPage.prototype.constructor = MainPage;
