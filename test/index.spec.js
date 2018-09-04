const mocha = require('mocha');
const chai = require('chai');
const lib = require('../index');
const expect = chai.expect;

describe('getLinksFromMd', function () {
  describe('when there is no parameter', function () {
    it('should throw an error', function () {
      expect(() => { lib.getLinksFromMd() }).to.throw('No parameter given');
    });
  });
  describe('when parameter is a number', function () {
    it('should throw an error', function () {
      expect(() => { lib.getLinksFromMd(5) }).to.throw('Parameter must be a string');
    });
  });
  describe('when parameter is a text without links', function () {
    it('should return an empty array', function () {
    	const text = 'Laboratoria is super cool!';
      expect(lib.getLinksFromMd(text)).be.an('array');
      expect(lib.getLinksFromMd(text)).be.empty;
    });
  });
  describe('when there\'s just a link in markdown', function () {
    it('should return an array with an object', function () {
    	const singleLink = 'Get to know [Laboratoria](https://laboratoria.la)!'
      expect(lib.getLinksFromMd(singleLink)).to.deep.equal([{href: 'https://laboratoria.la', text: 'Laboratoria'}]);
    });
  });
  describe('when there\'s two links in markdown', function () {
    it('should return an array with both objects', function () {
    	const twoLinks = 'Get to know [Laboratoria](https://laboratoria.la) and [Google](https://google.com)!'
      expect(lib.getLinksFromMd(twoLinks)).to.deep.equal([{href: 'https://laboratoria.la', text: 'Laboratoria'}, {href: 'https://google.com', text: 'Google'} ]);
    });
  });
  describe('when there\'s three links in markdown', function () {
    it('should return an array with three objects', function () {
    	const threeLinks = 'Get to know [Laboratoria](https://laboratoria.la) and [Google](https://google.com) and also [StackOverflow](https://stackoverflow.com)!'
      expect(lib.getLinksFromMd(threeLinks)).to.deep.equal([{href: 'https://laboratoria.la', text: 'Laboratoria'}, {href: 'https://google.com', text: 'Google'}, {href: 'https://stackoverflow.com', text: 'StackOverflow'} ]);
    });
  });
  describe('when there\'s a link with http', function () {
    it('should return an array with the objects', function () {
    	const sameThreeLinks = 'Get to know [Laboratoria](https://laboratoria.la) and [Google](http://google.com) and also [StackOverflow](https://stackoverflow.com)!'
      expect(lib.getLinksFromMd(sameThreeLinks)).to.deep.equal([{href: 'https://laboratoria.la', text: 'Laboratoria'}, {href: 'http://google.com', text: 'Google'}, {href: 'https://stackoverflow.com', text: 'StackOverflow'} ]);
    });
  });
  describe('when there\'s just the domain', function () {
    it('should return an array with the objects', function () {
    	const sameThreeLinksAgain = 'Get to know [Laboratoria](www.laboratoria.la) and [Google](http://google.com) and also [StackOverflow](https://stackoverflow.com)!'
      expect(lib.getLinksFromMd(sameThreeLinksAgain)).to.deep.equal([{href: 'www.laboratoria.la', text: 'Laboratoria'}, {href: 'http://google.com', text: 'Google'}, {href: 'https://stackoverflow.com', text: 'StackOverflow'} ]);
    });
  });        
});