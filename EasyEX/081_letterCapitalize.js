
function letterCapitalize(str) { 
  return str.split(' ').map(word => word.slice(0, 1).toUpperCase() + word.slice(1)).join(' ')
}
   
console.log(letterCapitalize("hello world from codestates"))
console.log(letterCapitalize("hello"))