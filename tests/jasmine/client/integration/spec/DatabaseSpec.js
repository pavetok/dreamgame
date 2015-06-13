describe('Database', function() {
  var database;

  beforeAll(function() {
    database = new Database();
  });

  beforeEach(function(done) {
    database.reset(done);
  });

  it('can save entity', function() {
    //given
    var hero = new Hero('hero1');
    //when
    database.save(hero);
    //then
    database.shouldContain(hero);
  });

  it('can be reseted', function(done) {
    //given
    var hero = new Hero('hero1');
    //when
    database.contains(hero);
    //then
    database.shouldContain(hero);
    //when
    database.reset();
    //then
    database.shouldNotContain(hero, done);
  });

});
