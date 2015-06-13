describe('Hero', function() {
  'use strict';
  var database;
  var heroesPage;

  beforeAll(function() {
    database = new Database();
    heroesPage = new HeroesPage('/heroes');
  });

  beforeEach(function(done) {
    database.reset(done);
  });

  xit('should be presented in the browser', function() {
    //given
    var hero = new Hero('hero1');
    //and
    database.contains(hero);
    //when
    heroesPage.opens();
    //then
    heroesPage.shouldContain(hero)
  });

});
