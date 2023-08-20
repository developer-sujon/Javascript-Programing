/**
 * 125. Valid Palindrome
 * check provided string is palindrome
 * if palindrome return true otherwise false
 * palindrome ("race car") should return true
 * palindrome ("not a palindrome") should return false
 */

function validPalindrome(string) {
  const normalizedString = string.toLowerCase().replace(/[\W_]/g, "");
  console.log(normalizedString);
  const reverseString = normalizedString.split("").reverse().join("");

  return reverseString === normalizedString ? true : false;
}

const result = validPalindrome("A man, a plan, a canal: Panama");

console.log(result);
