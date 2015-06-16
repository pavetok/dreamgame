describe("Visitor", function() {
    var database;
    var visitor;
    var user;
    var mainPage;

    beforeAll(function() {
        database = new Package["pavetok:fixtures"].Database();
        visitor = user = new User();
        mainPage = new MainPage("/");
    });

    beforeEach(function(done) {
        database.reset(done);
    });

    xit("should be registered", function() {
        //given
        visitor.withEmail("email1@domain.com").withPassword("password1");
        //when
        visitor.opens(mainPage);
        //and
        visitor.registers();
        //then
        database.shouldContain(user);
    });
});
