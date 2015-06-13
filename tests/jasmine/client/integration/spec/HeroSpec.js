describe('Hero', function() {
  var database;
  var user;
  var heroesPage;

  beforeAll(function() {
    database = new Package['pavetok:fixtures'].Database();
    user = new User();
    heroesPage = new HeroesPage('/heroes');
  });

  beforeEach(function(done) {
    database.reset(done);
  });

  it('should be presented on the page', function() {
    //given
    var hero = new Hero('hero1');
    //and
    database.contains(hero);
    //when
    user.opens(heroesPage);
    //then
    heroesPage.shouldContain(hero)
  });

});
