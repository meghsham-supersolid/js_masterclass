// Absolute Function {Positive number 1=1, -1=1}
let negNum = -15772;
console.log(`Absolute value of ${negNum} is ${Math.abs(negNum)}`);
/* 
Absolute value of -15772 is 15772
*/

// Round Function :  {if fraction value is greater than or equals to .5 the 1 is added to whole number part and fraction is discarded otherwise whole number stays the same and fraction part is discarded}
console.log(`Rounding off numbers`);
console.table([Math.round(10.4), Math.round(10.5), Math.round(10.6)]);
/*
Rounding off numbers
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ 0       │ 10     │
│ 1       │ 11     │
│ 2       │ 11     │
└─────────┴────────┘
*/

// Ceil Function : if fraction is greater than or equals to  .1 then adding 1 to whole number and discarding fraction
console.log(`Ceiling numbers`);
console.table([
  Math.ceil(10.0),
  Math.ceil(10.1),
  Math.ceil(10.5),
  Math.ceil(10.9),
]);
/*
Ceiling numbers
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ 0       │ 10     │
│ 1       │ 11     │
│ 2       │ 11     │
│ 3       │ 11     │
└─────────┴────────┘
*/

// Floor Function : just discard the fraction value
console.log(`Floor numbers`);
console.table([
  Math.floor(10.0),
  Math.floor(10.1),
  Math.floor(10.5),
  Math.floor(10.9),
]);

// Min Function : Given number returns Minimum value out of input
console.log(
  `MIN Value in (1, 5, 7, 4, 2, 3, 6, 9, 8, 2, 0, 1, 4, 5, 6) is ${Math.min(
    17,
    65,
    72,
    4,
    74,
    52,
    33,
    71,
    46,
    55,
    67
  )}`
);

/*
MIN Value in (1, 5, 7, 4, 2, 3, 6, 9, 8, 2, 0, 1, 4, 5, 6) is 4
*/

// Max Function : Given number returns Maximum value out of input
console.log(
  `MAX Value in (1, 5, 7, 4, 2, 3, 6, 9, 8, 2, 0, 1, 4, 5, 6) is ${Math.max(
    17,
    65,
    72,
    4,
    74,
    52,
    33,
    71,
    46,
    55,
    67
  )}`
);

/*
MAX Value in (1, 5, 7, 4, 2, 3, 6, 9, 8, 2, 0, 1, 4, 5, 6) is 74
*/

// Math.random : random generates a fraction value

let randomFractionValue = Math.random(); //gives a random fraction value
console.log(`Random Fraction Value is ${randomFractionValue}`);
console.log(
  `Random Value between 0 to 100 : ${Math.floor(randomFractionValue * 100)}`
); // multiplying the value by max value desired and discarding fraction wth floor function

// Logic for generating a random value which is also in valid range

const lowerBound = 25;
const upperBound = 75;

let randomValueWithInRange = Math.floor(
  Math.random() * (upperBound - lowerBound + 1) + lowerBound
);

console.log(`Random Value between 25 to 75 : ${randomValueWithInRange}` );
