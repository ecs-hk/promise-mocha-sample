'use strict';

/* eslint-env mocha */

// --------------------------------------------------------------------------
//                      GLOBAL VAR DEFINITIONS
// --------------------------------------------------------------------------

const assert = require('assert');
const f = require('../functions');

// --------------------------------------------------------------------------
//                      MOCHA TESTS
// --------------------------------------------------------------------------

// A simple promise consumer approach to use for mocha testing is:
//
//   it('should', async function() {
//     let p = await promiserFunction();
//
// .. and then evaluate the value of p.
//
//
// A promise consumer approach to use for testing exceptions is:
//
//   it('should', async function() {
//     await promiserFunction().then(
//       () => Promise.reject(new Error()),
//       err => assert.equal(typeof err, 'object')
//    );
//
// In this case, the idea is that the promiser function is expected to
// throw an exception, and we want mocha to confirm it will.

describe('Call async-await promiser function', function() {
  describe('HTTP GET', function() {
    it('should return a numeric HTTP status code', async function() {
      let uri = 'http://www.github.com';
      let result = await f.createPromiseAsyncAxios(uri);
      assert.equal(typeof result, 'object');
      assert.equal(result.hasOwnProperty('status'), true);
      assert.equal(isNaN(result.status), false);
    });
  });
  describe('HTTP GET with bad URI', function() {
    it('should throw an exception', async function() {
      let uri = 'http://www..';
      await f.createPromiseAsyncAxios(uri)
        .then(
          () => Promise.reject(new Error('Expected an exception')),
          err => assert.equal(typeof err, 'object')
        );
    });
  });
});
