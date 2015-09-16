/* eslint func-names: 0 */
const Database = Package.fixtures.Database;

MochaWeb.testOnly(function() {
  describe('Visitor', function() {
    const database = new Database();
    const visitor = new User();
    const mainPage = new MainPage();
    const heroListPage = new HeroListPage();
    const signOutButton = new SignOutButton();

    beforeEach(function(done) {
      database.clear(done);
    });

    it('can sign up', function (done) {
      // given
      visitor.withEmail('email@domain.com').withPass('password');
      // when
      visitor.opens(mainPage);
      // and
      visitor.registers();
      // then
      visitor.shouldSee(heroListPage);
      // and
      visitor.shouldSee(signOutButton, done);
    });
  });
});
