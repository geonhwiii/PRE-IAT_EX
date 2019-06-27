/**
 * (100 - 90) --> 'A'
 * (89 - 80) --> 'B'
 * (79 - 70) --> 'C'
 * (69 - 60) --> 'D'
 * (60 - 0) --> 'F'
  If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
  If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a '-'
  If the score is between the 8 and 9 (inclusive) of a given range, return the letter with a '+'
  There are is no F+ and there is no F-.
 */
function convertScoreToGradeWithPlusAndMinus(score) {
  if (score > 100 || score < 0) return `INVALID SCORE`;
  if (score === 100) return 'A+';
  if (score <= 60) return 'F';
  let grade;
  let dec = score % 10;
  score >= 90 ? grade = 'A' :
  score >= 80 ? grade = 'B' :
  score >= 70 ? grade = 'C' : grade = 'D';
  if (dec >= 0 && dec <= 2) {
    grade += '-';
  } else if (dec >= 8 && dec <= 9) {
    grade += '+';
  }
  return grade;
}
console.log(convertScoreToGradeWithPlusAndMinus(99)); // A+
console.log(convertScoreToGradeWithPlusAndMinus(81)); // B-
console.log(convertScoreToGradeWithPlusAndMinus(66)); // D
console.log(convertScoreToGradeWithPlusAndMinus(59)); // F


