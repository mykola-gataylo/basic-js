import { NotImplementedError } from "../extensions/index.js";

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let stringArray = [];
  let stringArray2 = [];
  let result = "";
  let indexOfEl = 1;

  if (!options.repeatTimes) {
    result = `${str}${options.addition}`;
    console.log(result);
    return result;
  }

  for (let i = 1; i <= options.additionRepeatTimes; i++) {
    if (options.addition) {
      stringArray2.push(options.addition);
    }

    if (options.additionSeparator) {
      stringArray2.push(options.additionSeparator);
    }
  }

  let stringArray2Length = stringArray2.length;

  stringArray2.splice(stringArray2Length - 1, 1);

  stringArray2.unshift(str);
  if (!options.separator) {
    options.separator = "+";
  }

  stringArray2.push(options.separator);
  let length = options.separator.length;

  result = stringArray2.join("").repeat(options.repeatTimes);
  let lengthResult = result.length;
  let arrayOfResult = result.split("");
  arrayOfResult.splice(lengthResult - length, length);

  console.log(arrayOfResult.join(""));

  return arrayOfResult.join("");
}
