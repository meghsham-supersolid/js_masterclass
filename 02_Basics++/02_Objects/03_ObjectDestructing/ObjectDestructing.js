/* 
- Destructuring is a JavaScript feature that allows you to extract values from objects or arrays into distinct variables.
- It is completely okay to skip destructuring the object because it just process of taking out the property value from object, but it makes the code compact and clean to write and read.
*/

// Suppose there is a object

const course = {
  title: "CAC Web Dev",
  price: 10000,
  "course instructor": "Hitesh Chaudhari",
};

// To extract value from above object we can use dot operator or square notation
console.log(
  `My Course name is  ${course.title} and prized at ${course.price} rupees. Course is taught by ${course["course instructor"]}`
);
// this can get tedious as we have to always write course.propertyName or course["property name"]

// to avoid that JS has a sugar coated syntax
// keyword {propertyName} = object;

const { title } = course;
const { price } = course;
const { "course instructor": instructor } = course;

console.log(
  `My Course name is  ${title} and prized at ${price} rupees. Course is taught by ${instructor}`
);

// another way to destructure all properties at once, including one with a string key
const { titleCopy, priceCopy, "course instructor": instructorCopy } = course;

console.log(
  `My Course name is  ${titleCopy} and prized at ${priceCopy} rupees. Course is taught by ${instructorCopy}`
);
