
// persamaan dari ketiga 3 pustaka  functional programming  JavaScript tersebut
//  1. Libraries to support FP
//  2. 

// implementasi 
// Underscore.js
const arr = [1, 2, 3];
const arr 2 = _.map(arr, (e) => e + 1);

//Lodash
_.flatten([[1, 2, [3]]]); //[1, 2, [3]]

// Ramda
const addOneToNumbers = R.map(x => x + 1);
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
addOneToNumbers(arr1); // [2, 3, 4]
addOneToNumbers(arr2); // [5, 6, 7]