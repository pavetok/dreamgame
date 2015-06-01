

class User(object):

    def should_see(self, *elements):
        for element in elements:
            element.should_be_visible()