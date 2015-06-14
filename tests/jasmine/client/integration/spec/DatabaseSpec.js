describe("Database", function() {
  var database;
  var hero;

  beforeAll(function() {
    database = new Package["pavetok:fixtures"].Database();
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

  it("can save entity", function() {
    //when
    database.contains(hero);
    //then
    database.shouldContain(hero);
  });

  it("can be reseted", function(done) {
    //and
    database.contains(hero);
    //when
    database.reset();
    //then
    database.shouldNotContain(hero, done);
  });

});
