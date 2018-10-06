'use strict';

const f = require('./functions');
const uris = ['http://www.github.com', 'http://www..'];
const byteLengths = [16, null];

// Both function calls below return a promise. This code illustrates
// the promise consumer pattern:
//
//   promiserFunction().then().catch()

for (let i = 0; i < uris.length; i++) {
  let uri = uris[i];
  f.createPromiseAsyncAxios(uri)
    .then(res => {
      console.log('Should succeed.. (URI ' + uri + '). ' +
        'HTTP response status code: ' + res.status);
    }).catch(err => {
      console.error('Should throw.. (URI ' + uri + '). [' + err + ']');
    });
}

for (let i = 0; i < byteLengths.length; i++) {
  let len = byteLengths[i];
  f.createPromiseVanillaCrypto(len)
    .then(res => {
      console.log('Should succeed.. (bytelength ' + len + '). ' +
        'Random hex string: ' + res);
    }).catch(err => {
      console.error('Should throw.. (bytelength ' + len + ') [' + err + ']');
    });
}
