describe("Hero", function() {
  var database;
  var user;
  var heroesPage;
  var hero;

  beforeAll(function() {
    database = new Package["pavetok:fixtures"].Database();
    user = new User();
    heroesPage = new HeroesPage("/heroes");
  });

  beforeEach(function(done) {
    database.reset(done);
  });

  beforeEach(function() {
    hero = new Hero({
      name: "hero1",
      url: "url1"
    });
  });

  it("should be presented on the page", function() {
    //given
    database.contains(hero);
    //when
    user.opens(heroesPage);
    //then
    heroesPage.shouldContain(hero)
  });

});
