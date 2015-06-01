from selement import Selement


class HeroRecord(Selement):

    def __init__(self, name=None):
        super(HeroRecord, self).__init__(".hero-record:contains(%s)", name)
        self._name = name
        self.name = Selement(".hero-record:contains(%s)", name)

    def should_be_visible(self):
        super(HeroRecord, self).should_be_visible()
        self.name.should_be_visible()

    def instance(self, name):
        return HeroRecord(name=name)

    def __str__(self):
        return "HeroRecord<name=%s>".format(self._name)


