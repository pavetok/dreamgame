if (!(typeof MochaWeb === 'undefined')) {
	MochaWeb.testOnly(function () {
		describe("Visitor", function () {
			var database;
			var visitor;
			var mainPage;
			var heroListPage;
			var signOutButton;

			before(function () {
				database = new Package["pavetok:fixtures"].Database();
				visitor = new User();
				mainPage = new MainPage();
				heroListPage = new HeroListPage();
				signOutButton = new SignOutButton();
			});

			beforeEach(function (done) {
				database.reset(done);
			});

			it("should be registered", function (done) {
				//given
				visitor.withEmail("email1@domain.com").withPass("password1");
				//when
				visitor.opens(mainPage);
				//and
				visitor.registers();
				//then
				visitor.shouldSee(heroListPage);
				//and
				visitor.shouldSee(signOutButton, done);
			});
		});
	});
}
