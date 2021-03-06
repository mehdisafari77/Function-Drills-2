////////// PROBLEM 1 //////////
const mixedNumbers = [6,3,1,7,5,2,6,8,9,4,2,7,9,3,1,8,4,3];

const evenNumbers = mixedNumbers.filter(num => num % 2 === 0)
console.log(`Here are the even numbers: ${evenNumbers}`)


////////// PROBLEM 2 //////////

const prices = [15.00, 23.00, 78.00, 34.00, 12.00, 86.00, 12.00, 79.00, 32.00];

const postTaxPrices = prices.map(num => num * 1.07)
console.log(`Here are the Post-Tax-Prices numbers: ${postTaxPrices}`)


////////// PROBLEM 3 //////////
const populations = [8175133, 3792621, 2695598, 2100263];

const totalPopulation = populations.reduce((acc, curr) => acc + curr)
console.log(`The total population is: ${totalPopulation}`)



////////// PROBLEM 4 //////////
const monstersInYourPocket = [{"monster":"Bulbabunny","CP":156},{"monster":"Bulbabunny","CP":135},
{"monster":"Bulbabunny","CP":250},{"monster":"Ponylopse","CP":277},{"monster":"Ponylopse","CP":184},
{"monster":"Pikadoughnet","CP":207},{"monster":"Bulbabunny","CP":139},{"monster":"Pikadoughnet","CP":47},
{"monster":"Pikadoughnet","CP":175},{"monster":"WaterHorsia","CP":26},{"monster":"Ponylopse","CP":19},
{"monster":"Pikadoughnet","CP":218},{"monster":"Charaflier","CP":101},{"monster":"WaterHorsia","CP":96},
{"monster":"Pikadoughnet","CP":253},{"monster":"Sandmush","CP":146},{"monster":"Bulbabunny","CP":247},
{"monster":"Charaflier","CP":55},{"monster":"Bulbabunny","CP":72},{"monster":"Pikadoughnet","CP":300},
{"monster":"Sandmush","CP":262},{"monster":"Sandmush","CP":25},{"monster":"Charaflier","CP":215},
{"monster":"Ponylopse","CP":125},{"monster":"Bulbabunny","CP":178}];

/*
  Now we're going to ramp these up a little bit.
  Instead of just arrays of numbers, we are going to have array of objects that we want to use map, filter, and reduce with.
  Use the filter method to return only the monsters that have a CP of over 200.
*/
const myStrongest = monstersInYourPocket.filter(monster => monster.CP > 200)
console.log(myStrongest)



////////// PROBLEM 5 //////////
const orders = [{"price":15,"tax":0.09},{"price":42,"tax":0.07},{"price":56,"tax":0.11},
{"price":80,"tax":0.11},{"price":69,"tax":0.06},{"price":68,"tax":0.14},
{"price":72,"tax":0.14},{"price":51,"tax":0.09},{"price":89,"tax":0.15},
{"price":48,"tax":0.13}];

const orderTotals = orders.map(order => order.price + (order.price * order.tax))
console.log(orderTotals)

////////// PROBLEM 6 //////////

// Do not edit the code below.
const purchases = [{"owner":"Barry","price":103},{"owner":"Bob","price":75},
{"owner":"Bob","price":73},{"owner":"Barry","price":57},{"owner":"Barry","price":128},
{"owner":"Bob","price":119},{"owner":"Barry","price":133},{"owner":"Barry","price":27},
{"owner":"Barry","price":138},{"owner":"Bob","price":68},{"owner":"Bob","price":50},
{"owner":"Barry","price":9},{"owner":"Bob","price":123},{"owner":"Bob","price":135},
{"owner":"Barry","price":30},{"owner":"Barry","price":129},{"owner":"Barry","price":38},
{"owner":"Bob","price":133},{"owner":"Barry","price":109},{"owner":"Bob","price":115}];
// Do not edit the code above.

/*
  Use a high order method(s) to create to get the sum of bobsTotal.
*/

const bobsTotal = purchases.filter(function(elem) {
  return elem.owner === "Bob"
}).reduce(function(acc,elem) {
  return acc + elem.price
}, 0)
console.log(bobsTotal)

const bobsTotalArrowfunc = purchases
    .filter(purchase => purchase.owner === "Bob")
    .reduce((a, c) => a + c.price, 0)
    
console.log(bobsTotalArrowfunc)