/* eslint no-console: 0, no-param-reassign: 0 */

/**
 * @constructor
 */
Database = function Database() {
  // empty
};

Database.prototype.clear = function clear(done) {
  done = done || function fake() {
      };
  Meteor.call('clearDb', function clearCallback(error) {
    if (error) {
      done(error);
    }
    done();
  });
};

Database.prototype.reset = function reset(done) {
  Meteor.call('resetDb', function resetCallback(error) {
    if (error) {
      done(error);
    }
    done();
  });
};

Database.prototype.contains = function contains(entity) {
  entity.save();
};

Database.prototype.shouldContain = function shouldContain(expected, done) {
  waitUntilSuccess(function assert() {
    const actual = Heroes.findOne(expected._id);
    chai.expect(actual).to.exist;
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
  waitUntilSuccess(function assert() {
    chai.expect(that.doesNotContain(expected)).to.equal(true);
  }, done);
};
