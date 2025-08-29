/**
 * Working of Slice()
 * slice() method takes input like start and end index id end index in not given then its arr.length-1
 * slice() only copied element form starting index is included to end index-1  elements
 * original array is not affected by it while creating copy or modifying the copy afterwards.
 */

console.log();
console.log("Slice()");
console.log();

const heroes = [
  " SuperMan",
  " Flash",
  " Batman",
  " WonderWomen",
  " Aquaman",
  " GreenLantern",
];

console.log(`Heroes before slice : ${heroes}  Length : ${heroes.length} `);

const slicedHeroes = heroes.slice(2, 4);

console.log(
  `Sliced heroes 2-4 : ${slicedHeroes} Length : ${slicedHeroes.length} `
);

console.log(`Heroes after slice : ${heroes} Length : ${heroes.length} `);

/**
 * Working of Splice()
 * splice() method takes input of starting index and offset, offset is element form starting index
 * splice() method cuts the element from original array and moves it in new array
 *  original array is not affected when modifying the new arrays afterwards.
 */

console.log();
console.log("Splice()");
console.log();

const cars = [
  " Lamborghini",
  " Ferrari",
  " AstonMartin",
  " Tesla",
  " RollsRoyal",
  " Hummer",
];

console.log(`Cars before splice : ${cars} Length : ${cars.length} `);

const splicedCars = cars.splice(2, 4);

console.log(
  `Spliced cars  from index 2 till next 4 index in cars[]  : ${splicedCars} Length : ${splicedCars.length} `
);

console.log(`Cars after splice : ${cars}  Length : ${cars.length} `);
