const data = require("./shows.json")

// --- how many types of language --- 
const language = data.map((el) => el.language)
language.push("french")
// remove duplicates language  using filter and indexOf
const filterLanguageUsingIndexof = language.filter((value, index, array) => array.indexOf(value) === index)
// remove duplicates language using Set method
const filterUsingSet = [...new Set(language)] // prints array 
const filterUsingSetReturnsObjL = new Set([...language]) // prints object literal
console.log(filterLanguageUsingIndexof, filterUsingSetReturnsObjL)
/* Set(3) { 'English', 'Japanese', 'french' } */

// --- how many types of type --- 
const type = data.map((el) => el.type)
const filterType = new Set([...type]) // prints object literal
console.log(filterType) 
/* Set(5) {
  'Scripted',
  'Reality',
  'Animation',
  'Talk Show',
  'Documentary'
} */