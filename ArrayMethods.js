"use strict";
//  ARRAYS
/* Arrays are used to store more than single data and It is an index based.
 and it will contain duplicate values.
*/
let ages = [25, 30, 52, 84, 74, 54, 98, 74, 78, 54, 87];

// Unshift methods :- is used to add a value to an array at starting position.
ages.unshift(82);
// console.log("ages", ages);

// Push method :- is used to add a value to an array at ending position.
ages.push(84);
// console.log("ages", ages);

// Shift Method :- is used to delete a value to an array at starting position.
ages.shift();
// console.log("ages", ages);

// Pop method :- is used to delete a value to an array at ending position.
ages.pop();
// console.log("ages", ages);

// Length Method :- is used to get an length of an array and it will give integer value.
// console.log("ages", ages.length);

// Includes method :- is used to check for a value contains or not. if value contains
// it will return true.
// console.log("ages", ages.includes(84));

// IndexOf :- is used to get the specific value index from an array and i will return index.
// console.log("Index", ages.indexOf(84));

/*  Convert an entire array to string :- We can achieve this in two ways 
 1. Using toString() method => t will take comma as a default value. => converts an array to a string of (comma separated) array values.
 2. Using Array.join() Method  => The join() method also joins all array elements into a string.
 It behaves just like toString(), but in addition you can specify the separator: 
 3. JSON.stringify()   ==> convert entire array as string.*/

//console.log("toString()", ages.toString());
//console.log("Array.join()", ages.join(","), typeof ages.join(","));
/* console.log(
  "JSON.stringify()",
  JSON.stringify(ages),
  typeof JSON.stringify(ages)
); */

/* How to join Two Arrays IN JS ==> We can use concat method to join to arrays.
Syntax :- concat(); The concat() method can take any number of array arguments:
The concat() method does not change the existing arrays. It always returns a new array.
*/
// Add Values to an Exsisting Array.
let ages2 = [54, 78, 98];
ages = ages.concat(ages2, "Hello");
//console.log(ages);

let ages3 = ages.concat(ages2, "Added Two Arrays");

//console.log("ages3", ages3);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3); //We can add 'n' number of array to concat.
//console.log(myChildren);

// First Way :-  Looping an array.
// console.log("ages.length", ages.length);
for (let i = 0; i < ages.length; i++) {
  // console.log("i Val", ages[i]);
}
// Second Way :- using for of loop.
for (let value of ages) {
  //console.log("Val", value);
}
// Third Wat : using for in loop.
for (let value in ages) {
  //console.log("Val", ages[value]);
}

// NESTED ARRAYS LOOPING
let studentMarks = [
  20,
  30,
  50,
  [54, 8, 78, 87, 87],
  [87, 87, 78],
  21,
  [87, 78, 787, 87, 45, 78, 87, 98],
];

// First Way ==>

for (let i = 0; i < studentMarks.length; i++) {
  // console.log(studentMarks[i]);
  for (let j = 0; j < studentMarks[i].length; j++) {
    // console.log("NESTED ARRAY VAL", studentMarks[i][j]);
    // console.log("Index Val", i,"VAL" , studentMarks[i] ,"NESTED ARRAY", studentMarks[i][j]);
  }
}

let employeeDetails = [
  {
    firstName: "Jayapal Reddy",
    LastName: "Kummetha Venkata",
    age: 24,
    DOB: "08-08-1998",
    Gender: "Male",
    Phone: "9490360552",
    Salary: 250000,
  },
  {
    firstName: "Pavan",
    LastName: "Tavva",
    age: 22,
    DOB: "08-08-1998",
    Gender: "Male",
    Phone: "9490360552",
    Salary: 250000,
  },
  {
    firstName: "Eswar",
    LastName: "Teja",
    age: 26,
    DOB: "07-07-1997",
    Gender: "Male",
    Phone: "9490389852",
    Salary: 55000000,
  },
  {
    firstName: "Ravi Chandra",
    LastName: "Kopperla",
    age: 26,
    DOB: "08-08-1998",
    Gender: "Male",
    Phone: "9490360552",
    Salary: 450000,
  },
  {
    firstName: "Sadik",
    LastName: "Hussain",
    age: 22,
    DOB: "01-02-1995",
    Gender: "Male",
    Phone: "9490780552",
    Salary: 2500000,
  },
  {
    firstName: "Harish",
    LastName: "Krsihna",
    age: 27,
    DOB: "08-07-1999",
    Gender: "Male",
    Phone: "9490360552",
    Salary: 450000,
  },
];

/* FOR EACH IN JS:- 
  Syntax         :- array.forEach(function(currentValue, index, arr), thisValue)
  currentValue   :- Required. The value of the current element.
  index	Optional :- The index of the current element.
  arr	Optional   :- The array of the current element. 
  The forEach()  :- method calls a function for each element in an array.
  The forEach()  :- method is not executed for empty elements.
  Return         :- It Will not return anything
  */
let sum = 0;
const numbers = [65, 44, 12, 4];
let modifedArray = [];
numbers.forEach((currentItem, indexNum, actualArray) => {
  modifedArray = [
    ...modifedArray,
    { cuttentRecId: indexNum + 1, currentValue: currentItem },
  ];
});

console.log("modifedArray", modifedArray);

/* FIND IN JS:- 
  Syntax         :- array.find(function(currentValue, index, arr), thisValue).
  The find()     :- method returns the value of the first element that passes a test.
  The find()     :- method executes a function for each array element.
  The find()     :- method returns undefined if no elements are found.
  The find()     :- method does not execute the function for empty elements.
  The find()     :- method does not change the original array.
  currentValue   :- Required. The value of the current element.
  index	Optional :- The index of the current element.
  arr	Optional   :- The array of the current element. 
  The find()     :- method calls a function for each element in an array.
  The find()     :- method is not executed for empty elements.
  Return         :- The value of the first element that pass the test.
                    Otherwise it returns undefined
  */

let empDetailsFind = employeeDetails.find(
  (currentItem) => currentItem.firstName === "Eswar"
);
console.log("empDetailsFind", empDetailsFind);
empDetailsFind.firstName += " Teja";

console.log(empDetailsFind);
console.log(employeeDetails);

/* ARRAY SORT IN JS:- 
  Syntax         :- array.sort(compareFunction).
 The sort()      :- sorts the elements of an array.
 The sort()      :- overwrites the original array.
 The sort()      :- sorts the elements as strings in alphabetical and ascending order.
 compareFunction : A function that defines a sort order. The function should return a negative, zero, or positive value, depending on the arguments:
                    function(a, b){return a-b}. When sort() compares two values, it sends the values to the compare function, 
                    and sorts the values according to the returned (negative, zero, positive) value.
  SORT           :- By default array will be sorted in assending the return type is '1' in Sort method. we can change the defalut behaviour. 
                    to dessending order '()-1'. below i have practised more examples in array sorting.
  Return         :- The array with the items sorted.
  */

let studentAges = [25, 54, 12, 25, 87, 100, 77, 34, 44, 54, 64, 58]; //Sort student ages by Assending.
let assendingSortedStudentAges = studentAges.sort((a, b) => {
  if (a > b) {
    return 1;
  } else {
    return -1;
  }
});
console.log("Assending Sorted Ages", assendingSortedStudentAges);

let dessendingSortedStudentAges = studentAges.sort((a, b) => {
  if (a > b) {
    return -1;
  } else {
    return 1;
  }
});
console.log("Dessending Sorted Ages", dessendingSortedStudentAges);

// Using Single Line Sorted Arrow Function.
let assendingSortedStudentAgesUsingArrow = studentAges.sort((a, b) =>
  a > b ? 1 : -1
);
console.log(
  "assendingSortedStudentAgesUsingArrow",
  assendingSortedStudentAgesUsingArrow
);
