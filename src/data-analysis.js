const data = require("./shows.json")

// --- how many types of language --- 
const language = data.map((el) => el.language)
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

// --- how many types of weight --- 
const weight = data.filter((el) => el.weight === 100).map((el) => el.id)

console.log("id's of the all weight 100 are: " + weight) 
/* 
id's of the all weight 100 are: 5,56,59,60,67,81,83,103
*/

// --- reverse the date of first aired and replace month for name of month --- 
const premired = data.map((el) => el.premiered)
const dateMonthYear = premired.map((el) => el.split("-").reverse())
const replaceNameOfMonth = dateMonthYear.map((el) => {
  return el[1].replace(/01/g,"Jan").replace(/02/g,"Feb").replace(/03/g,"Mar").replace(/04/g,"Apr").replace(/05/g,"May").replace(/06/g,"Jun").replace(/07/g,"Jul").replace(/08/g,"Aug").replace(/09/g,"Sep").replace(/10/g,"Oct").replace(/11/g,"Nov").replace(/12/g,"Dec")
})
console.log(replaceNameOfMonth) // date revesed and replaced name of the months