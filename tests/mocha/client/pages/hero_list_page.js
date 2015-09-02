HeroListPage = function HeroListPage() {
	BasePage.call(this, '/heroes');
};

HeroListPage.prototype = Object.create(BasePage.prototype);
HeroListPage.prototype.constructor = HeroListPage;

HeroListPage.prototype.shouldContain = function (expected) {
	var $heroes = $('.hero');
	chai.expect($heroes.length).to.equal(1, 'User hero count');

	var $hero = $heroes.first();
	chai.expect($hero.is(':visible')).to.equal(true);

	var $heroName = $hero.find('.hero-name');
	chai.expect($heroName.text()).to.equal(expected.name);
	chai.expect($heroName.attr('href')).to.equal(expected.url);
};
