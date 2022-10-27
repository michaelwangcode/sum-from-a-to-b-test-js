// Sum numbers recursively from fromN to toN
function sum(fromN, toN) {

  // Base case: if both numbers are equal, return the number
  if (fromN === toN) {
    return toN;

  // Otherwise, add the first number and call the function again with fromN + 1
  } else {

    return fromN + sum(fromN + 1, toN);
  }
}

module.exports = sum;
