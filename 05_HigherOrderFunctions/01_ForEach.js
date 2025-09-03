/* 

forEach () is a hight order function whi used iterate over only arrays in JS it takes in a callback function which by default get parameter of items on which forEach is Iterating 
  forEach does not return any value.
*/

const superCars = [
  "Koenigsegg Jesko Absolut",
  "Hennessey Venom F5",
  "Bugatti Chiron Super Sport 300+",
  "Rimac Nevera",
  "SSC Tuatara ",
  "Rolls-Royce La Rose Noire Droptail",
  "Rolls-Royce Boat Tail",
  "Bugatti La Voiture Noire",
  "Pagani Zonda HP Barchetta",
  "SP Automotive Chaos",
  "Bugatti Centodieci ",
  "McLaren Speedtail",
  "Maserati MC20 ",
  "Aston Martin Valkyrie",
  "Bugatti Tourbillon",
  "Lamborghini Revuelto",
];

superCars.forEach(function (car) {
  superCars[superCars.indexOf(car)] = car
    .replaceAll("-", " ")
    .replaceAll(" ", "");
});

superCars.forEach((car) => console.log(car));

//passing pre-written function to forEach

// Assume this is pre-written function
function printMe(str) {
  //   console.log("printing => " + str);
}

superCars.forEach(printMe); // note that, we have passed ref erence of function not its execution

// along with iterating item forEach also has access to index and whole array

const fastestBike = [
  "Dodge Tomahawk",
  "MTT 420-RR",
  "Kawasaki Ninja H2R",
  "MTT Y2K Superbike",
  "Lightning LS-218",
];

fastestBike.forEach((item, index, array) => {
  console.log(`${item} is at number ${index} out of [${array}]`);
});

const arrayOfOrdersObject = [
  {
    order_id: 1,
    user_id: 1,
    items: [
      { product_id: 1, quantity: 2 },
      { product_id: 3, quantity: 1 },
    ],
    total_price: 849.97,
    status: "Shipped",
  },
  {
    order_id: 2,
    user_id: 2,
    items: [
      { product_id: 2, quantity: 1 },
      { product_id: 7, quantity: 1 },
    ],
    total_price: 1149.98,
    status: "Delivered",
  },
  {
    order_id: 3,
    user_id: 3,
    items: [
      { product_id: 4, quantity: 1 },
      { product_id: 8, quantity: 1 },
    ],
    total_price: 599.98,
    status: "Processing",
  },
  {
    order_id: 4,
    user_id: 4,
    items: [
      { product_id: 5, quantity: 1 },
      { product_id: 10, quantity: 2 },
    ],
    total_price: 1099.97,
    status: "Shipped",
  },
  {
    order_id: 5,
    user_id: 5,
    items: [
      { product_id: 6, quantity: 1 },
      { product_id: 9, quantity: 1 },
    ],
    total_price: 1399.98,
    status: "Delivered",
  },
];

arrayOfOrdersObject.forEach((order) => {
  console.log(
    `OrderId : ${order.order_id} by User${order.user_id} of Rupees ${order.total_price} with ${order.items.length} is ${order.status}`
  );
});
