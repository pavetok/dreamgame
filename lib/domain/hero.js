/* global Hero:true */

Hero = class Hero {
  constructor(doc) {
    _.extend(this, doc);
  }

  save() {
    Heroes.insert(this, (error, _id) => {
      if (error) {
        throw new Error('Fail to save: ' + error);
      }
      this._id = _id;
    });
  }
};
