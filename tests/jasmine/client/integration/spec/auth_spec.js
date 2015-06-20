describe("Visitor", function() {
    var database;
    var visitor;
    var mainPage;
    var heroesPage;
    var signOutButton;

    beforeAll(function() {
        database = new Package["pavetok:fixtures"].Database();
        visitor = new User();
        mainPage = new MainPage("/");
        heroesPage = new HeroesPage("/heroes");
        signOutButton = new SignOutButton();
    });

    beforeEach(function(done) {
        database.reset(done);
    });

    it("should be registered", function(done) {
        //given
        visitor.withEmail("email1@domain.com").withPass("password1");
        //when
        visitor.opens(mainPage);
        //and
        visitor.registers();
        //then
        visitor.shouldSee(heroesPage);
        //and
        visitor.shouldSee(signOutButton, done);
    });
});
