HeroesPage = function HeroesPage() {
	BasePage.call(this, "/heroes");
};

HeroesPage.prototype = Object.create(BasePage.prototype);
HeroesPage.prototype.constructor = HeroesPage;

HeroesPage.prototype.shouldContain = function (expected) {
	var $heroes = $(".hero");
	chai.expect($heroes.length).to.equal(1, "Count");

	var $hero = $heroes.first();
	chai.expect($hero.is(":visible")).to.equal(true);

	var $heroName = $hero.find(".hero-name");
	chai.expect($heroName.text()).to.equal(expected.name);
	chai.expect($heroName.attr("href")).to.equal(expected.url);
};
