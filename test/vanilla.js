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

// See comments in async-await.js. Tests here use a similar approach.
//
// Note that we can use this consumer approach without regard to whether the
// promiser function is using a) vanilla promises; or b) async/await.

describe('Call vanilla promiser function', function() {
  describe('Random string', function() {
    it('should return a legit string', async function() {
      let bytesLength = 8;
      let hexLength = bytesLength * 2;
      let result = await f.createPromiseVanillaCrypto(bytesLength);
      assert.equal(typeof result, 'string');
      assert.equal(result.length, hexLength);
    });
  });
  describe('Random string with bad input', function() {
    it('should throw an exception', async function() {
      let bytesLength = 'banana';
      await f.createPromiseVanillaCrypto(bytesLength)
        .then(
          () => Promise.reject(new Error('Expected an exception')),
          err => assert.equal(typeof err, 'object'),
        );
    });
  });
});
