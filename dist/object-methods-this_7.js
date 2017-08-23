'use strict';

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var calculator = function calculator() {
  var calc = {
    read: function read() {
      this.prop1 = (0, _input2.default)('Enter prop1 ');
      this.prop2 = (0, _input2.default)('Enter prop2 ');
    },
    sum: function sum() {
      return this.prop1 + this.prop2;
    },
    mul: function mul() {
      return this.prop1 * this.prop2;
    }
  };
  return calc;
}; /**
    * Created by torcap on 23.08.2017.
    */
/*Create calculator
* create object 'calculator' having three methods:
* read() - prompts two meanings and saves them as object's properties
* sum() - returns sum of these meanings
* mul() - returns mul of these meanings
* */


var newCalc = calculator();
newCalc.read();
console.log(newCalc.sum());
console.log(newCalc.mul());
console.log(newCalc.prop1);
console.log('check babel');
//# sourceMappingURL=object-methods-this_7.js.map