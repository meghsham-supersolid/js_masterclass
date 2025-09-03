// iterating over object

const mySmartPhone = {
  id: 1,
  title: "Essence Mascara Lash Princess",
  description:
    "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
  category: "beauty",
  price: 9.99,
  discountPercentage: 10.48,
  rating: 2.56,
  stock: 99,
  brand: "Essence",
  sku: "BEA-ESS-ESS-001",
  weight: 4,
  warrantyInformation: "1 week warranty",
  shippingInformation: "Ships in 3-5 business days",
  availabilityStatus: "In Stock",

  returnPolicy: "No return policy",
  minimumOrderQuantity: 48,
};

console.log("\n\n\nIterating over mySmartPhone Object");

for (const propName in mySmartPhone) {
  console.log(`${propName} : ${mySmartPhone[propName]}`);
}

// iterating over arrays
console.log("\n\n\nIterating over array of Top 10 Car Companies in World");

const cars = [
  "Volkswagen",
  "Toyota",
  "Stellantis",
  "Mercedes-Benz",
  "Tesla",
  "General Motors",
  "Honda",
  "BYD",
  "Nissan",
  "Ford",
];

for (const car in cars) {
  console.log(`CarIndex[${car}] ${cars[car]}`);
}

// Maps cant be iterated as they are not iterable

// console.log("\n\n\nIterating over map of product");

// const productMap = new Map([
//   ["product_id", 1],
//   ["title", "Smartphone"],
//   ["description", "High-end smartphone with advanced features."],
//   ["price", 599.99],
//   ["unit", "Piece"],
//   ["image", "https://example.com/images/smartphone.jpg"],
//   ["discount", 10],
//   ["availability", true],
//   ["brand", "BrandX"],
//   ["category", "Electronics"],
//   ["rating", 4.5]
//   ],
// );


// // console.log(productMap);

// for (const key in productMap) {
     
//   console.log("#");
// }
