/**
 * Write a function called "findShortestOfOfThreeWords".
 * Given 3 strings, "findShortestOfOfThreeWords" returns the shortest of the given strings.
 * If there are ties, it should return the first word in the parameters list.
 */

function findShortestOfOfThreeWords(word1, word2, word3) {
  return [word1, word2, word3].sort((a, b) => a.length - b.length)[0]
}

var output = findShortestOfOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'