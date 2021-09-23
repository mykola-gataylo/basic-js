import { NotImplementedError } from "../extensions/index.js";

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  const discardNext = "--discard-next";
  const discardPrev = "--discard-prev";
  const doubleNext = "--double-next";
  const doublePrev = "--double-prev";

  const errorMessage = "'arr' parameter must be an instance of the Array!";

  let result = [];

  if (!Array.isArray(arr)) {
    throw new Error(`${errorMessage}`);
  } else {
    let copyOfArray = [...arr];
    const copyOfArrayLength = copyOfArray.length;

    if (arr[0] === discardPrev || arr[0] === doublePrev) {
      copyOfArray.splice(0, 1);

      return copyOfArray;
    } else if (
      arr[copyOfArrayLength - 1] === discardNext ||
      arr[copyOfArrayLength - 1] === doubleNext
    ) {
      copyOfArray.splice(copyOfArrayLength - 1, 1);

      return copyOfArray;
    }

    for (let k = 0; k < copyOfArray.length; k++) {
      if (copyOfArray[k] === discardNext) {
        copyOfArray.splice(k, 1);
        copyOfArray.splice(k + 1, 1);
      }

      if (copyOfArray[k] === discardPrev) {
        copyOfArray.splice(k, 1);
        copyOfArray.splice(k - 1, 1);
      }

      if (copyOfArray[k] === doubleNext) {
        copyOfArray.splice(k, 1, copyOfArray[k + 1]);
      }

      if (copyOfArray[k] === doublePrev) {
        copyOfArray.splice(k, 1, copyOfArray[k - 1]);
      }
    }

    result = [...copyOfArray];
  }

  console.log(result);
  return result;
}
