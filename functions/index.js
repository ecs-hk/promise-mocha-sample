'use strict';

// ----------------------------------------------------------------------------
// Global variable definitions
// ----------------------------------------------------------------------------

const crypto = require('crypto');
const axios = require('axios');

// ----------------------------------------------------------------------------
// Exported functions
// ----------------------------------------------------------------------------

// The promiser functions below demonstrate both the vanilla promise pattern
// (first function) and async/await (second function).

exports.createPromiseVanillaCrypto = function(length) {
  return new Promise(function(resolve, reject) {
    crypto.randomBytes(length, (err, buf) => {
      if (err) {
        reject(new Error(err));
      }
      resolve(buf.toString('hex'));
    });
  });
};

exports.createPromiseAsyncAxios = async function(uri) {
  try {
    let res = await axios.get(uri);
    return res;
  } catch (err) {
    throw new Error(err);
  }
};
