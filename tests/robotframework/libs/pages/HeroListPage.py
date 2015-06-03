from base_page import BasePage
from selement import Selement


class HeroListPage(BasePage):

    def __init__(self, url):
        super(HeroListPage, self).__init__(url)
        self._records = []

    def should_be_visible(self):
        super(HeroListPage, self).should_be_visible()
        for record in self._records:
            record.should_be_visible()

    def with_records(self, *records):
        self._records.extend(records)

    @property
    def menu_link(self):
        return Selement(".navbar #hero-list")
