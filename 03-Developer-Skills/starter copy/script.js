"use strict";

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const printForeCast = function (arr) {
  let str = ``;
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days `; // so that += is the reason why it goes again.
  }
  console.log(str);
};

//printForeCast([17, 21, 23]);
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

printForeCast(data1);
printForeCast(data2);

//i did it right but it was like differnt the += makes everthing work better.

/*
function forecastTemp(TempArray)
    initial string = '';
    for each item in array
        (concatenate to the init string)
 
    return final string

 
// Result
function forecastTemp(tempArray) {
  let tempStr = '';
  tempArray.forEach((temp, index) => {
      tempStr += `... ${temp}ºC in ${index + 1} days `;
  })

  return tempStr;
}

console.log(forecastTemp([17, 21, 23]));
console.log(forecastTemp([12, 5, -5, 0, 4]));
*/
