from selement import Selement


class BasePage(Selement):

    def __init__(self, url):
        super(BasePage, self).__init__("body")
        self.url = url

    def should_be_visible(self):
        self.se.location_should_contain(self.url)