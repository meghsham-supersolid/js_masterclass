
// const promiseOne = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Async task completed !!! ");
//         resolve();
//     }, 2000);
// });

// promiseOne.then(function () {
//     console.log("Promise consumed !!!");
// });
//
//
//
//
//
//
//
// const promiseTwo = there no need to reference this as will are defining then definition right after promise definition
//
//
// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Async task completed2 !!! ");
//         resolve();
//     }, 2000);
// }).then(
//     function () {
//         console.log("Promise consumed2 !!!");
//     }
// );
//
//
//
//
//
//
//
// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Async task completed, returning a value !!! ");
//         resolve({
//             userName: "MeghshamKapure",
//             score: 650
//         });
//     }, 2000);
// }).then(function (user) {
//     console.log(user);
// });
//
//
//
//
//
//
//
//
//
//
//
//
// return value conditionally  with promise and handling resolve and reject object with then, catch, finally
// const promiseFour = new Promise(function (resolve, reject) {
//     let operationStatus = Math.floor(Math.random() * 10) % 2 === 0 ? true : false;
//     console.log(`operationStatus => ${operationStatus}`);

//     if (operationStatus) resolve({ status: "200" });
//     else reject({ status: "400" });
// })
//     .then(function (returnValue) {
//         console.log(returnValue);
//     })
//     .catch(function name(error) {
//         console.log(error);
//     })
//     .finally(console.log("Promise either resolved or reject."));

//
//
//
//
//
//
//

// Show .then() Chaining

// new Promise((resolve, reject) => {
//     resolve(2);
// })
//     .then((num) => {
//         console.log(num); // 2
//         return num * 2;
//     })
//     .then((num) => {
//         console.log(num); // 4
//         return num * 2;
//     })
//     .then((num) => {
//         console.log(num); // 8
//     });
//
//
//
//
//
//
//
//
//
// Show .catch() without then()
//
// new Promise((resolve, reject) => {
//     reject("Something went wrong!");
// }).catch((error) => console.log("Caught:", error));
// const promiseEight = new Promise(function (resolve, reject) {
//     let operationStatus = Math.floor(Math.random() * 10) % 2 === 0;

//     console.log(`operationStatus => ${operationStatus}`);

//     if (operationStatus) {
//         resolve({ status: "200" });
//     } else {
//         // reject({ status: "400" });
//     }
// });

// async function consumePromiseEight() {
//     try {
//         const response = await promiseEight;
//         console.log(`Response from Promise Eight : ${JSON.stringify(response)}`);
//     } catch (error) {
//         console.log(`Error from Promise Eight : ${JSON.stringify(error)}`);
//     } finally {
//         console.log(`Finally block executed!`);
//     }
// }


// consumePromiseEight();
// // This calls the async function that handles the promise.
// // If you define a promise that can reject, you must handle it
// // (using .catch() or try...catch) to avoid unhandled promise rejections.


