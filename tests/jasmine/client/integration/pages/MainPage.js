MainPage = function MainPage(url) {
	BasePage.call(this, url);
};

MainPage.prototype = Object.create(BasePage.prototype);
MainPage.prototype.constructor = BasePage;
