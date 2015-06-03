from base.selement import Selement


class BasePage(Selement):

    ROBOT_LIBRARY_SCOPE = "GLOBAL"

    def __init__(self, url):
        super(BasePage, self).__init__("body")
        self.url = url
        self.menu_link = None

    def open(self):
        self.menu_link.click()

    def should_be_visible(self):
        self.se.location_should_contain(self.url)