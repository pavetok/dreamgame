/* eslint func-names: 0 */
const Database = Package.fixtures.Database;
const waitUntilSuccess = Package.fixtures.waitUntilSuccess;

MochaWeb.testOnly(function() {
  describe('Hero', function() {
    const database = new Database();
    const user = new User().withEmail('email@domain.com').withPass('password');
    const mainPage = new MainPage();
    const heroListPage = new HeroListPage();

    beforeEach(function(done) {
      database.reset(done);
    });

    beforeEach(function () {
      user.opens(mainPage);
      user.signIn();
    });

    beforeEach(function (done) {
      waitUntilSuccess(function assert() {
        chai.expect(Meteor.userId()).to.exist;
      }, done);
    });

    beforeEach(function() {
      hero = new Hero({
        name: 'hero1',
        url: 'url1',
        userId: Meteor.userId(),
      });
    });

    it('should be presented on the page', function(done) {
      // given
      database.contains(hero);
      // when
      user.opens(heroListPage);
      // then
      heroListPage.shouldContain(hero, done);
    });
  });
});
