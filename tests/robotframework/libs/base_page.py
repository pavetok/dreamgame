from selement import Selement


class BasePage(Selement):

    def __init__(self, url):
        super(BasePage, self).__init__("body")
        self._url = url

    def open(self):
        self.menu_link.click()

    def should_be_visible(self):
        self.se.location_should_contain(self._url)

    @property
    def menu_link(self):
        return None