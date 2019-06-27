/**
 * Write a function called "getElementOfArrayProperty".
 * Given an object, a key, and a numerical index, "getElementOfArrayProperty" returns 
 * the value of the element at the given index of the array located within the given object 
 * at the given key. 
  If the array is empty, it should return undefined.
  If the given index is out of range of the array located at the given key, it should return undefined.
  If the property at the given key is not an array, it should return undefined.
  If there is no property at the key, it should return undefined.
 */

function getElementOfArrayProperty(obj, key, index) {
  return !obj[key] || !Array.isArray(obj[key]) ? undefined : obj[key][index];
}

let obj = {
  key: ['Jamil', 'Albrey']
 };
 let output = getElementOfArrayProperty(obj, 'key', 0); 
 console.log(output); // --> 'Jamil'