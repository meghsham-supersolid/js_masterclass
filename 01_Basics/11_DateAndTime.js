// Creating Date Object
let myDate = new Date(); // if not give it takes current time by default

console.log(`Type of Date object is ${typeof myDate}`);

// this give current date  time stamp with timezone
console.log(`Date object is like ${myDate.toString()}`);

// returns a string representing this date in the date time string format, a simplified format based on ISO 8601.
console.log(`Date in ISO 8601 format : ${myDate.toISOString()}`);

// this give current date and time in locale String
console.log(
  `Current date and time in locale String : ${myDate.toLocaleString()}`
);

// this give current date in locale String
console.log(`Current date in locale String : ${myDate.toLocaleDateString()}`);

// this give current time in locale String
console.log(`Current time in locale String : ${myDate.toLocaleTimeString()}`);

//Custom Date and Time object

console.log();
console.log();
console.log();

const myBirthday = new Date(1996, 9, 9, 4, 25, 32);
// year , month (0-11), day (1-31), hours (0-23), minutes (0-59), seconds (0-59)
console.log(`Date object of my birthday is ${myBirthday.toString()}`);

console.log(
  `Date : ${myBirthday.getDate()}, Month : ${myBirthday.getMonth()}, Year : ${myBirthday.getFullYear()},  Hours : ${myBirthday.getHours()}, Minutes :  ${myBirthday.getMinutes()}, Seconds : ${myBirthday.getSeconds()}, MilliSeconds : ${myBirthday.getMilliseconds()}`
);
/*
Date object of my birthday is Wed Oct 09 1996 04:25:32 GMT+0530 (India Standard Time)
Date : 9, Month : 9, Year : 1996,  Hours : 4, Minutes :  25, Seconds : 32, MilliSeconds : 0
*/

//Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
const myBirthdayInMilliseconds = myBirthday.getTime();
const currentTimeInMilliseconds = Date.now();
const myAgeInSeconds = Math.floor(
  (currentTimeInMilliseconds - myBirthdayInMilliseconds) / 1000
);

console.log(`My age in seconds is ${myAgeInSeconds}`);
console.log(`My age in minutes is ${myAgeInSeconds / 60}`);
console.log(`My age in hours is ${myAgeInSeconds / 60 / 60}`);
console.log(`My age in days is ${myAgeInSeconds / 60 / 60 / 24}`);

console.log();
console.log();
console.log();

 