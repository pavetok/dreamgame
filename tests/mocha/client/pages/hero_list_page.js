const waitUntilSuccess = Package.fixtures.waitUntilSuccess;

HeroListPage = class HeroListPage extends BasePage {
  constructor() {
    super('/heroes');
  }

  shouldContain(expected, done) {
    waitUntilSuccess(() => {
      const $heroes = $('.hero');
      chai.expect($heroes.length).to.equal(1, 'User hero count');

      const $hero = $heroes.first();
      chai.expect($hero.is(':visible')).to.equal(true);

      const $heroName = $hero.find('.hero-name');
      chai.expect($heroName.text()).to.equal(expected.name);
      chai.expect($heroName.attr('href')).to.equal(expected.url);
    }, done);
  }
};
