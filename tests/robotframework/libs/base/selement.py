from robot.libraries.BuiltIn import BuiltIn
from Selenium2Library import Selenium2Library


class Selement(object):

    SELEMENT_TIMEOUT = "5s"
    RETRY_INTERVAL = "0.5s"

    def __init__(self, locator, parent=None):
        self._locator = locator
        self._parent = parent
        self._built_in_library = None
        self._selenium_2_library = None

    @property
    def bin(self):
        if not self._built_in_library:
            self._built_in_library = BuiltIn()
        return self._built_in_library

    @property
    def se(self):
        if not self._selenium_2_library:
            self._selenium_2_library = self.bin.get_library_instance("Selenium2Library")
        return self._selenium_2_library

    @property
    def locator(self):
        if self._parent:
            return "{0} {1}".format(self._parent.locator, self._locator)
        return "jquery={0}".format(self._locator)

    @property
    def parent(self):
        return self._parent

    def should_be_visible(self):
        self.bin.wait_until_keyword_succeeds(self.SELEMENT_TIMEOUT,
                                             self.RETRY_INTERVAL,
                                             "element_should_be_visible",
                                             self.locator)

    def click(self):
        self.se.click_element(self.locator)

    def text_should_be(self, text):
        self.bin.run_keyword("element_text_should_be", self.locator, text)