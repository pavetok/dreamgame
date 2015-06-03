from base.basepage import BasePage
from base.selement import Selement


class HeroesPage(BasePage):

    def __init__(self, url):
        super(HeroesPage, self).__init__(url)
        self.menu_link = Selement(".navbar #hero-list")
