/**
 * Created by torcap on 23.08.2017.
 */
/*Create calculator
* create object 'calculator' having three methods:
* read() - prompts two meanings and saves them as object's properties
* sum() - returns sum of these meanings
* mul() - returns mul of these meanings
* */
import inputReader from './input'
const calculator = () => {
  let calc = {
        read: function() {
          this.prop1 = inputReader('Enter prop1 ');
          this.prop2 = inputReader('Enter prop2 ');
        },
        sum: function() {
          return this.prop1 + this.prop2;
        },
        mul:function() {
          return this.prop1 * this.prop2;
        }
  }
  return calc;
};

let newCalc = calculator();
newCalc.read();
console.log(newCalc.sum());
console.log(newCalc.mul());
console.log(newCalc.prop1);
console.log('check babel');
