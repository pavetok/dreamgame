describe('Hero', function() {
  'use strict';
  var database;
  var heroesPage;

  beforeAll(function() {
    database = new Database();
    heroesPage = new HeroesPage();
  });

  beforeEach(function(done) {
    database.reset(done);
  });

  it('should be stored in the database', function(done) {
    //given
    var hero = new Hero('hero1');
    //when
    database.save(hero, done);
    //then
    database.shouldContain(hero);
  });

  it('should be presented in the browser', function(done) {
    //given
    var hero = new Hero('hero1');
    //when
    database.contains(hero, done);
    //then
    heroesPage.shouldContain(hero)
  });

  it('should not be stored in the database', function() {
    //given
    var hero = new Hero('hero1');
    //then
    database.shouldNotContain(hero);
  });

});
