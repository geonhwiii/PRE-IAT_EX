// # recursion2
// 아래 함수를 recursion으로 고치시오

var eat = function(meal) {
  return !meal.length ? console.log('done with the meal!') : (
    console.log('meal before bite:', meal),
    console.log('now eating', meal.pop()),
    eat(meal)
  )
}

eat(['soup', 'potatoes', 'fish']);
// => meal before bite: ["soup", "potatoes", "fish"]
// => now eating fish
// => meal before bite: ["soup", "potatoes"]
// => now eating potatoes
// => meal before bite: ["soup"]
// => now eating soup
// => done with the meal!