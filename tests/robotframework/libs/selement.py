from robot.libraries.BuiltIn import BuiltIn
from Selenium2Library import Selenium2Library


class Selement(object):

    def __init__(self, locator, parent=None):
        self._locator = locator
        self._parent = parent
        self._built_in_library = None
        self._selenium_2_library = None

    @property
    def builtin(self):
        if not self._built_in_library:
            self._built_in_library = BuiltIn()
        return self._built_in_library

    @property
    def se(self):
        if not self._selenium_2_library:
            self._selenium_2_library = self.builtin.get_library_instance("Selenium2Library")
            # self.selenium_2_library = Selenium2Library()
        return self._selenium_2_library

    @property
    def locator(self):
        if self._parent:
            return "jquery=%s %s".format(self._parent.locator, self._locator)
        return "jquery=%s".format(self._locator)

    @property
    def parent(self):
        return self._parent

    def should_be_visible(self):
        self.se.element_should_be_visible(self.locator)
