'use strict';

/*
  browser:

  name:
  message:

  callstack:

  the mistake:
  the fix(es):
*/

const userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');

} else (userName.length < 5) {
  console.log('just right');

} else {
  console.log('too long');
}
