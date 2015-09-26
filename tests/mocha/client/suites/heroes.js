const Database = Package.fixtures.Database;
const waitUntilSuccess = Package.fixtures.waitUntilSuccess;

MochaWeb.testOnly(() => {
  describe('Hero', () => {
    const database = new Database();
    const user = new User().withEmail('email@domain.com').withPass('password');
    const mainPage = new MainPage();
    const heroListPage = new HeroListPage();
    let hero;

    beforeEach(done => {
      database.reset(done);
    });

    beforeEach(() => {
      user.opens(mainPage);
      user.signIn();
    });

    beforeEach(done => {
      waitUntilSuccess(() => {
        chai.expect(Meteor.userId()).to.exist;
      }, done);
    });

    beforeEach(() => {
      hero = new Hero({
        name: 'hero1',
        url: 'url1',
        userId: Meteor.userId(),
      });
    });

    it('should be presented on the page', done => {
      // given
      database.contains(hero);
      // when
      user.opens(heroListPage);
      // then
      heroListPage.shouldContain(hero, done);
    });
  });
});
