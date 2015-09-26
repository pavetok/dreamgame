/* eslint no-console: 0, no-param-reassign: 0 */

/**
 * @constructor
 */
Database = class Database {

  clear(done) {
    done = done || function () {
        };
    Meteor.call('clearDb', (error) => {
      if (error) {
        done(error);
      }
      done();
    });
  }

  reset(done) {
    Meteor.call('resetDb', (error) => {
      if (error) {
        done(error);
      }
      done();
    });
  }

  contains(entity) {
    entity.save();
  }

  shouldContain(expected, done) {
    waitUntilSuccess(() => {
      const actual = Heroes.findOne(expected._id);
      chai.expect(actual).to.exist;
      chai.expect(actual.name).to.equal(expected.name);
      chai.expect(actual.url).to.equal(expected.url);
    }, done);
  }

  doesNotContain(entity) {
    return Heroes.findOne({name: entity.name}) === undefined;
  }

  shouldNotContain(expected, done) {
    waitUntilSuccess(() => {
      chai.expect(this.doesNotContain(expected)).to.equal(true);
    }, done);
  }
};
