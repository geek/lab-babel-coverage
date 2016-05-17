'use strict';

const Code = require('code');
const Lab = require('lab');
const Foo = require('../../src/');

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

describe('async', () => {
  it('coverage works', function () {
    return new Promise((resolve) => {
      resolve(Foo())
    }).then((result) => {
      expect(result).to.equal('foobar');
    });
  });
});
