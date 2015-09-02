MainPage = function MainPage() {
  BasePage.call(this, '/');
  // elements
  this.signUpForm = new SignUpForm();
};

MainPage.prototype = Object.create(BasePage.prototype);
MainPage.prototype.constructor = MainPage;
