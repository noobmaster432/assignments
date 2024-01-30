/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let strArr = str.toLowerCase().split('');
  let start = 0;
  let end = strArr.length - 1;
  while(start < end) {
    while (strArr[start] < 'a' || str[start] > 'z') start++;
    while (strArr[end] < "a" || str[end] > "z") end--;
    if(strArr[start++] !== strArr[end--]) return false;
  }
  return true;
}

module.exports = isPalindrome;
