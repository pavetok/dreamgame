/**
 * @constructor
 */
User = class User {
  constructor() {
    this.currentPage = null;
  }

  /**
   * @param {BasePage} page
   */
  opens(page) {
    Router.go(page.path);
    this.currentPage = page;
  }

  /**
   * @param {Jelement} element
   * @param {function} done
   */
  shouldSee(element, done) {
    element.shouldBeVisible(done);
  }

  withUsername(username) {
    this.username = username;
    return this;
  }

  withEmail(email) {
    this.email = email;
    return this;
  }

  withPass(password) {
    this.password = password;
    return this;
  }

  registers() {
    this.currentPage.signUpForm.create(this);
  }

  signIn() {
    this.currentPage.signInForm.signIn(this);
  }

  login(done) {
    Meteor.loginWithPassword(this.username || this.email, this.password, function loginCallback(error) {
      if (error) {
        done(error);
      }
      done();
    });
  }
};
