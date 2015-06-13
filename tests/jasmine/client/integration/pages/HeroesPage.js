HeroesPage = function HeroesPage(url) {
	this.url = url;
};

HeroesPage.prototype.shouldContain = function(expected) {
	var $heroName = $('.hero-name:contains(hero1)').text();
	expect($heroName).toEqual(expected.name);
};

HeroesPage.prototype.opens = function(done) {
	Router.go(this.url);
	Tracker.afterFlush(done);
	waitForRouter(done);
};
