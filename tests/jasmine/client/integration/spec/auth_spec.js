describe("Visitor", function() {
    var database;
    var visitor;
    var mainPage;
    var heroesPage;

    beforeAll(function() {
        database = new Package["pavetok:fixtures"].Database();
        visitor = new User();
        mainPage = new MainPage("/");
        heroesPage = new HeroesPage("/heroes")
    });

    beforeEach(function(done) {
        database.reset(done);
    });

    it("should be registered", function() {
        //given
        visitor.withEmail("email1@domain.com").withPassword("password1");
        //when
        visitor.opens(mainPage);
        //and
        visitor.registers();
        //then
        //todo: user should see profile link
        visitor.shouldSee(heroesPage);
    });
});
