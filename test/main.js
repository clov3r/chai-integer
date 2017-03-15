'use strict';

const chai = require('chai')
  , expect = chai.expect
  , integer = require('../');

chai.use(integer);

describe('chai-integer', () => {
  describe('expect(a).to.be.a.integer()', () => {
    it('should fail if a is not an integer', () => {
      try {
        expect(0.00000001).to.be.an.integer();
        expect(3.5).to.be.an.integer();
        expect(-1.1).to.be.an.integer();
        expect('some random string').to.be.an.integer();
      }
      catch (err) {
        return;
      }

      throw new Error('it should fail');
    });

    it('should pass if a is an integer', () => {
      expect(1).to.be.an.integer();
      expect(0).to.be.an.integer();
      expect(-11).to.be.an.integer();
      expect(9).to.be.an.integer();
    });
  });
});
