User = function User() {
  this.currentPage = null;
};

User.prototype.opens = function opens(page) {
  Router.go(page.path);
  this.currentPage = page;
};

User.prototype.shouldSee = function shouldSee(element, done) {
  element.shouldBeVisible(done);
};

User.prototype.withUsername = function withUsername(username) {
  this.username = username;
  return this;
};

User.prototype.withEmail = function withEmail(email) {
  this.email = email;
  return this;
};

User.prototype.withPass = function withPass(password) {
  this.password = password;
  return this;
};

User.prototype.registers = function registers() {
  this.currentPage.signUpForm.create(this);
};

User.prototype.signIn = function signIn() {
  this.currentPage.signInForm.signIn(this);
};

User.prototype.login = function login(done) {
  Meteor.loginWithPassword(this.username || this.email, this.password, function loginCallback(error) {
    if (error) {
      done(error);
    }
    done();
  });
};
