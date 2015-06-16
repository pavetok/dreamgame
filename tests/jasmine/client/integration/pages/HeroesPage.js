HeroesPage = function HeroesPage() {
	BasePage.call(this, "/heroes");
};

HeroesPage.prototype = Object.create(BasePage.prototype);
HeroesPage.prototype.constructor = HeroesPage;

HeroesPage.prototype.shouldContain = function(expected) {
	var $heroes = $(".hero");
	expect($heroes.length).toEqual(1);

	var $hero = $heroes.first();
	expect($hero.is(":visible")).toBeTruthy();

	var $heroName = $hero.find(".hero-name");
	expect($heroName.text()).toEqual(expected.name);
	expect($heroName.attr("href")).toEqual(expected.url);
};
