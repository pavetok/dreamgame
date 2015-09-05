/* eslint func-names: 0 */

MochaWeb.testOnly(function() {
  describe('Hero', function() {
    const database = new Package['pavetok:fixtures'].Database();
    const user = new User();
    const heroListPage = new HeroListPage();

    beforeEach(function(done) {
      database.reset(done);
    });

    beforeEach(function() {
      hero = new Hero({
        name: 'hero1',
        url: 'url1',
      });
    });

    it('should be presented on the page', function() {
      // given
      database.contains(hero);
      // when
      user.opens(heroListPage);
      // then
      heroListPage.shouldContain(hero);
    });
  });
});
