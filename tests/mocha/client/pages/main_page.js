MainPage = class MainPage extends BasePage {
  constructor() {
    super('/');
    this.signUpForm = new SignUpForm();
    this.signInForm = new SignInForm();
  }
};
