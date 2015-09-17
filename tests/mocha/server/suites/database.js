/* eslint func-names: 0 */
const Database = Package.fixtures.Database;

MochaWeb.testOnly(function() {
  describe('Database', function() {
    const database = new Database();

    beforeEach(function(done) {
      database.clear(done);
    });

    beforeEach(function() {
      hero = new Hero({
        name: 'hero1',
        url: 'url1',
        userId: 'user1',
      });
    });

    it('can save entity', function(done) {
      // when
      database.contains(hero);
      // then
      database.shouldContain(hero, done);
    });

    it('can be reseted', function(done) {
      // given
      database.contains(hero);
      // when
      database.clear();
      // then
      database.shouldNotContain(hero, done);
    });
  });
});
