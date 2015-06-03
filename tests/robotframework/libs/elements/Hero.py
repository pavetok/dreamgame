from base.selement import Selement


class Hero(Selement):

    def __init__(self, name=None):
        super(Hero, self).__init__(".hero:contains({0})".format(name))
        self._name = name
        self.name = Selement(".hero-name", self)

    def should_be_visible(self):
        super(Hero, self).should_be_visible()
        self.name.text_should_be(self._name)

    def new(self, name):
        return Hero(name=name)

    def __repr__(self):
        return "Hero<name={0}>".format(self._name)


