const Database = Package.fixtures.Database;

MochaWeb.testOnly(() => {
  describe('Database', () => {
    const database = new Database();
    let hero;

    beforeEach(done => {
      database.clear(done);
    });

    beforeEach(() => {
      hero = new Hero({
        name: 'hero1',
        url: 'url1',
        userId: 'user1',
      });
    });

    it('can save entity', done => {
      // when
      database.contains(hero);
      // then
      database.shouldContain(hero, done);
    });

    it('can be reseted', done => {
      // given
      database.contains(hero);
      // when
      database.clear();
      // then
      database.shouldNotContain(hero, done);
    });
  });
});
