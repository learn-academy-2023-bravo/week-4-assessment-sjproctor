// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("removeShuffle", () => {
  const colors1 = ["purple", "blue", "green", "yellow", "pink"]
  // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
  const colors2 = [
    "chartreuse",
    "indigo",
    "periwinkle",
    "ochre",
    "aquamarine",
    "saffron"
  ]
  it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
    expect(removeShuffle(colors1)).toEqual(
      expect.arrayContaining(["blue", "green", "yellow", "pink"])
    )
    expect(removeShuffle(colors1)).not.toEqual(
      expect.arrayContaining(["purple"])
    )
    expect(removeShuffle(colors2)).toEqual(
      expect.arrayContaining([
        "indigo",
        "periwinkle",
        "ochre",
        "aquamarine",
        "saffron"
      ])
    )
    expect(removeShuffle(colors2)).not.toEqual(
      expect.arrayContaining(["chartreuse"])
    )
  })
})

// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

const removeShuffle = (array) => {
  // shift is a mutator that removes the value at the first index of the array
  array.shift()
  // let removedItem = array.slice(1) - another option to remove the first value
  // sort the array by creating randomized positive and neg values
  return array.sort(() => Math.random() - 0.5)
}

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

describe("totalVotes", () => {
  const votes1 = { upVotes: 13, downVotes: 2 }
  // Expected output: 11
  const votes2 = { upVotes: 2, downVotes: 33 }
  // Expected output: -31
  it("takes in an object that contains up votes and down votes and returns the end tally", () => {
    expect(totalVotes(votes1)).toEqual(11)
    expect(totalVotes(votes2)).toEqual(-31)
  })
})

// const totalVotes = (object) => {
//   // storing the value of upvotes
//   let uVotes = object.upVotes
//   console.log(uVotes)
//   // storing the value of downvotes
//   let dVotes = object.downVotes
//   // math on the variables to get the total
//   let total = uVotes - dVotes
//   return total
// }

const totalVotes = (object) => {
  return object.upVotes - object.downVotes
}

// a) Create a test with expect statements for each of the variables provided.

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("arrayCombo", () => {
  const dataArray1 = ["array", "object", "number", "string", "Boolean"]
  const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
  // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    expect(arrayCombo(dataArray1, dataArray2)).toEqual([
      "array",
      "object",
      "number",
      "string",
      "Boolean",
      "null",
      "undefined"
    ])
  })
})

// b) Create the function that makes the test pass.

// const arrayCombo = (array1, array2) => {
//   // combine the two arrays
//   let comboArray = array1.concat(array2)
//   console.log(comboArray)
//   // filter out values that exist
//   return comboArray.filter(
//     (value, index, array) => array.indexOf(value) === index
//   )
// }

const arrayCombo = (...array) => {
  // combine the two arrays
  let comboArray = [].concat(...array)
  console.log(comboArray)
  // filter out values that exist
  return comboArray.filter(
    (value, index, array) => array.indexOf(value) === index
  )
}

// [ 'array', 'object', 'number', 'string', 'Boolean', 'string', 'null',  'Boolean', 'string',  'undefined'
// ]
