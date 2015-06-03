

class User(object):

    def opens(self, page):
        page.open()

    def should_see(self, *elements):
        for element in elements:
            element.should_be_visible()