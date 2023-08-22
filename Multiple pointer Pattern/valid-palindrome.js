/**
 * 125. Valid Palindrome
 * check provided string is palindrome
 * if palindrome return true otherwise false
 * palindrome ("race car") should return true
 * palindrome ("not a palindrome") should return false
 */

function validPalindrome(string) {
  const normalizedString = string.toLowerCase().replace(/[^\w_]/g, "");
  let left = 0;
  let right = normalizedString.length - 1;

  while (left < right) {
    const want = normalizedString[left] === normalizedString[right];
    if (!want) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

const result = validPalindrome("race car");

console.log(result);
