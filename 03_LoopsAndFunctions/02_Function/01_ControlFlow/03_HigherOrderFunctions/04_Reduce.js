/* 
    - Reduce is used to create a value from iterated value.
    - Reduce takes in 2 values  
        1. Accumulator : is initially set and later this value that get modified on every index by logic 
        2. Current Value : is the current index value which which is iterating over iterable object
*/

const numArray = [1, 2, 3, 4, 5];
const accumulatorInitialValue = 0;

const numArraySum = numArray.reduce(function (accumulator, currentValue) {
  let currentSum = accumulator + currentValue;
  return currentSum;
}, accumulatorInitialValue);

console.log(`Using numArraySum, Total after reduce is  : ${numArraySum}`);

const numArraySumArrow = numArray.reduce(
  (acc, curVal) => acc + curVal,
  accumulatorInitialValue
);

console.log(`Using numArraySumArrow, Total after reduce is  : ${numArraySum}`);

// Sum of all the product is cart

const shoppingCart = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
  },
];

const priceCartTotal = shoppingCart.reduce(
  (acc, curVal) => acc + curVal.price,
  0
);

console.log(`Total Cart Price after reduce is  : ${priceCartTotal}`); // Total Cart Price after reduce is  : 899.23
