
function User(userName, password, isLoggedIn) {
    this.userName = userName;
    this.password = password;
    this.isLoggedIn = isLoggedIn;
    return this;
}
const user1 = User("Sham", "Sh@m", true);
/*
 * Above is function constructor and its function call that takes vales and add them in current object in this case global
 * as the any function does no return anything unless set explicitly return current object
*/


const user2 = User("Ram", "R@m", false);
// console.log(user2);


/*
 * Above is second is function call that is made to previously defined constructor function.
 * In this case, properties in global object are present already, so function just overwrite them and don't create any new object.
*/


const user3 = new User("Suresh", "Sur", true);
// console.log(user3);

/*
    * Above is third function call to constructor function, here we are explicitly mentioning that need a new object of user
    * So js create a new object and adds this properties to newly create object
    * In case of constructor function with new keyword newly create object reference is returned internally 
    * so no need mention is explicity but it code convention to make things clearer
 */


console.log(user3.constructor); // this returns the reference to constructor used to build the object

console.log(user1 instanceof User); // false as user1 has reference of global

console.log(user3 instanceof User); // true as user2 has reference of newly created used object


