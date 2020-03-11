// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
// function centuryFromYear(year) {
//   centuryraw = year/100
//   centuryRnd = century = Math.floor(year/100)
//   if (centuryraw == centuryRnd ){
//     return centuryraw
//   }  else {
//     return 1 + century
//   }

//   return centuryDec
// }
// console.log(centuryFromYear(2002))

// Given the string, check if it is a palindrome.
// function checkPalindrome(inputString) {
//   const textReverse = inputString.split('').reverse().join('');
//   if(textReverse == inputString) {
//      return true
//   } else {
//      return false
//   }

// }
// console.log(checkPalindrome("meerrm"))

// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// function adjacentElementsProduct(inputArray) {
//   var arr = inputArray;
//   var x = 0;
//   var y = 0;
//   var p = -Infinity;
//   for (var i = 0; i < arr.length; i++) {
//     x = arr[i];
//     y = arr[i + 1];
//     if (x * y > p) {
//       p = x * y;
//     }
//   }
//   return p;
// }
// console.log(adjacentElementsProduct([2,4,3,45,6,54,54,5,5,5,5,66]))

// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

// A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

// function shapeArea(n) {
//   if(n==1) return 1;
//   return  (1 + (n-1)*n) *2 - 1
// }
// console.log(shapeArea(7))

// function addTwoDigits(n) {
//   const nStr = n.toString();
//   const strLeft = nStr.substring(0, 1);
//   const strRight = nStr.substring(1, 2);
//   const intLeft = parseInt(strLeft)
//   const intRight  = parseInt(strRight)
//   const output = intLeft + intRight

//   return (console.log(output) )
// }
// addTwoDigits(13);

// Given an integer n, return the largest number that contains exactly n digits.

function largestNumber(n) {
  const lenLargestNumber = n

  if (lenLargestNumber === 1) {
    finalNumber = 9;
  } else {
    finalNumber = Math.pow(10, lenLargestNumber) - 1;
  }
  return finalNumber;
}
largestNumber(1);
