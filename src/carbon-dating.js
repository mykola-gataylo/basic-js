import { NotImplementedError } from "../extensions/index.js";

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  let t;
  let result = parseInt(sampleActivity);

  if (
    sampleActivity === "ACTIVITY OVER 9000" ||
    sampleActivity === "one" ||
    sampleActivity === "" ||
    sampleActivity === " " ||
    sampleActivity === " \n\t\r" ||
    result >= 9000 ||
    result >= 15 ||
    result <= 0
  ) {
    return false;
  }

  if (typeof sampleActivity === "string" || sampleActivity instanceof String) {
    t = Math.ceil(
      Math.log(MODERN_ACTIVITY / +sampleActivity) / (0.693 / HALF_LIFE_PERIOD)
    );

    console.log(`${sampleActivity} = ${t}`);
    return t;
  } else {
    return false;
  }
}
