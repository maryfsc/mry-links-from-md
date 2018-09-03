const mocha = require('mocha');
const chai = require('chai');
const lib = require('../index');
const expect = chai.expect;

describe('#getLinksFromMd', function () {
  describe('when there is no parameter'), function () {
    it('should throw an error', function () {
      expect(function() { lib.getLinksFromMd() }).to.throw(new Error('No parameter given'));
    });
  }
});