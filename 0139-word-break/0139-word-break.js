/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const memo = {};
  
    const dfs = start => {
      if (start in memo) return memo[start];
      
      if (start === s.length) {
        memo[start] = true;
        return true;
      }
      
      for (const word of wordDict) {
        if (s.substring(start, start + word.length) === word) {
            if (dfs(start + word.length)) {
                return true;
            }
        }
      }
      
      memo[start] = false;
      return false;
    }
  
    return dfs(0);
};