/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/

// const str1 = "abcABC";
// const expected1 = "abcABC";

// const str2 = "helloo";
// const expected2 = "helo";

// /**
//  * De-dupes the given string.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} str A string that may contain duplicates.
//  * @returns {string} The given string with any duplicate characters removed.
//  */
// function stringDedupe(str) {
//     var result = "";
//     for (var i = 0; i < str.length; i++) {
//         if (!result.includes(str[i])) {
//             result += str[i];
//         }
//     }
//     return result;
// }
// console.log(stringDedupe(str2))
/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

// /**
//  * Reverses the letters in each words in the given space separated
//  * string of words. Does NOT reverse the order of the words themselves.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} str Contains space separated words.
//  * @returns {string} The given string with each word's letters reversed.
//  */
function reverseWords(str) {
    var result = [];
    for (var i = 0; i < str.length; i++){
        if (str[i] == " "){
            result += str.substring(0,i);
            result += str.substring(i+1, str.length);
        }
        
    }
    return
}