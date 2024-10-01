/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits == null || digits.length === 0) return [];

    const phoneNumber = ['','','abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz' ]

    const result = [];
    const repeat = (i, s) => {
      if (i === digits.length) {
        result.push(s);
        return;
      }

      for (const item of phoneNumber[digits[i]]) {
        repeat(i + 1, s + item);
      }
    };

    repeat(0, '');
    return result;
};