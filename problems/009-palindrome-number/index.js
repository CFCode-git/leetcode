/**
 * 009 Palindrome Number
 * Determine whether an integer is a palindrome.
 * An integer is a palindrome when it reads the same backward as forward.
 *
 * example 1:
 * Input: 121
 * Output: true
 *
 * example 2:
 * Input: -121
 * Output: false
 *
 * example 3:
 * Input: 10
 * Output: false
 */
const isPalindrome = function(x) {
  if (x <= 0) {
    return false;
  }

  const strArr = String(x).split('');
  const len = strArr.length;

  for (let i = 0; i < (len / 2); i++) {
    if (strArr[i] !== strArr[len - i - 1]) {
      return false
    }
  }

  return true
};



module.exports = [
  isPalindrome
]