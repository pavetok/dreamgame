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
