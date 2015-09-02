if (!(typeof MochaWeb === 'undefined')) {
  MochaWeb.testOnly(function() {
    describe('Hero', function() {
      var database;
      var user;
      var heroListPage;
      var hero;

      before(function() {
        database = new Package['pavetok:fixtures'].Database();
        user = new User();
        heroListPage = new HeroListPage();
      });

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
        //given
        database.contains(hero);
        //when
        user.opens(heroListPage);
        //then
        heroListPage.shouldContain(hero);
      });
    });
  });
}