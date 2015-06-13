HeroesPage = function HeroesPage(url) {
	this._url = url;
};

HeroesPage.prototype.getUrl = function() {
	return this._url;
};

HeroesPage.prototype.shouldContain = function(expected, done) {
	done = done || function(){};
	var heroName = $('.hero-name').text();
	expect(heroName).toEqual(expected.name);
	done();
};
