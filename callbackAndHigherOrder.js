////////// PROBLEM 1 //////////
const multiply = (num1, num2, cb) => cb(num1 * num2)

multiply(4, 3, answer => {
  console.log('The answer is ' + answer)
})



////////// PROBLEMS 2 - 6 //////////

// The names array will be used in problems 2 - 6.
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan']

////////// PROBLEM 2 //////////
const first = (arr, cb) => cb(arr[0])

first(names, firstName => {
  console.log('The first name in names is ' + firstName)
})

////////// PROBLEM 3 //////////
const last = (arr, cb) => cb(arr[arr.length - 1])

last(names, lastName => {
  console.log('The last name in names is ' + lastName)
})

////////// PROBLEM 4 //////////
const contains = (arr, name, cb) => cb(arr.includes(name))

contains(names, 'Colt', result => {
  if(result === true){
    console.log('Colt is in the array')
  } else {
    console.log('Colt is not in the array')
  }
})

////////// PROBLEM 5 //////////
const uniq = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
      for (let x = i + 1; x < arr.length; x++) {
          if (arr[i] === arr[x]) {
              arr.splice(x, 1)
              x--
          }
      }
  }

  cb(arr)
}

uniq(names, uniqArr => console.log(`The new names array with all the duplicate items removed is ${uniqArr}`))

////////// PROBLEM 6 //////////
const each = (arr, cb) => arr.forEach((el, i) => cb(el, i))

each(names, (item, index) => console.log(`The item at index ${index} is ${item}.`))


////////// PROBLEM 7 //////////

/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
*/
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
]

const getUserById = (arr, id, cb) => {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
          return cb(arr[i])
      }
  }
}
// One line
// const getUserById = (arr, id, cb) => arr.forEach(elem => elem.id === id ? cb(elem) : null)

getUserById(users, '16t', user => {
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address) 
})

////////// CHALLENGE //////////
const addingFactory = x => {
  return function(y) {
      return x + y
  }
}
/*
  Now that you have addingFactory, you can create other
  functions from it. 

  You're going to invoke addingFactory and save the result
  to a new variable. 

  Create a variable called addTen and set it equal to 
  the invocation of addingFactory passing in the number
  10 as an arguemnt.
*/

const addTen = addingFactory(10)

console.log(addTen(5))
console.log(addTen(5789))

const addFour = addingFactory(4)

console.log(addFour(4))
console.log(addFour(4444444))