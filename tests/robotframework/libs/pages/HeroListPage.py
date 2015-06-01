from base_page import BasePage


class HeroListPage(BasePage):

    def __init__(self, url):
        super(HeroListPage, self).__init__(url)
        self._records = []

    def with_record(self, record):
        self._records.append(record)

    def should_be_visible(self):
        super(HeroListPage, self).should_be_visible()
        for record in self._records:
            record.should_be_visible()

