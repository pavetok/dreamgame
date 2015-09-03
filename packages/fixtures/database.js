/* eslint no-console: 0, no-param-reassign: 0 */

Database = function Database() {
  // empty
};

Database.prototype.reset = function reset(done) {
  done = done || function fake() {
    // empty
  };
  Meteor.call('reset', function resetCallback(error) {
    if (error) {
      throw new Error('Database reset failed: ' + error);
    }
    console.log('Database reseted');
    done();
  });
};

Database.prototype.contains = function contains(entity) {
  Heroes.insert(entity, function cb(error, _id) {
    if (error) {
      throw new Error('Fail to save: ' + error);
    }
    entity._id = _id;
    console.log('Saved to database:', entity);
  });
};

Database.prototype.shouldContain = function shouldContain(expected, done) {
  waitUntilSuccess(function cb() {
    const actual = Heroes.findOne({name: expected.name});
    chai.expect(actual.name).to.equal(expected.name);
    chai.expect(actual.url).to.equal(expected.url);
  }, done);
};

Database.prototype.doesNotContain = function doesNotContain(entity) {
  console.log('Check that database does not contain:', entity);
  return Heroes.findOne({name: entity.name}) === undefined;
};

Database.prototype.shouldNotContain = function shouldNotContain(expected, done) {
  const that = this;
  waitUntilSuccess(function cb() {
    chai.expect(that.doesNotContain(expected)).to.equal(true);
  }, done);
};

Database.prototype.isEmpty = function isEmpty() {
  return Heroes.find().count() === 0;
};
