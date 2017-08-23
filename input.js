/**
 * Created by torcap on 23.08.2017.
 */
/* function input - take message as argument and returns value
 * from console stdin
 * function works sync by dint of redline-sync lib
 * from https://www.npmjs.com/package/readline-sync*/

const inputReader = (message) => {
  let readlineSync = require('readline-sync');
  return readlineSync.question(message);
};
export default inputReader;