const Database = Package.fixtures.Database;

MochaWeb.testOnly(() => {
  describe('Visitor', () => {
    const database = new Database();
    const visitor = new User();
    const mainPage = new MainPage();
    const heroListPage = new HeroListPage();
    const signOutButton = new SignOutButton();

    beforeEach(done => {
      database.clear(done);
    });

    it('can sign up', done => {
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
