/*
This keyword is used to point to current object means if you using function which used values inside same object, then this keyword point to object and you will get the value of that object only
*/

const laptop = {
  modelName: "Legion Y540 ",
  manufacturer: "Lenovo",
  price: 70000,
  giveDiscount: function () {
    const discountAmount = this.price * (5 / 100);
    // return this.price - this.discountAmount; // this include variables the part of object directly, not function variable, so when try to access function variable using this, it give undefined
    return this.price - this.discountAmount;
  },
  showLaptop: function () {
    console.log(
      `This is  ${this.modelName} by ${this.manufacturer} prized at ${
        this.price
      } and you can get it at ${this.giveDiscount()}`
    );
  },
  printThis: function () {
    console.log(this);
  },
};

laptop.showLaptop();

laptop.printThis();
/*
    {
        modelName: 'Legion Y540 ',
        manufacturer: 'Lenovo',
        price: 70000,
        giveDiscount: [Function: giveDiscount],
        showLaptop: [Function: showLaptop],
        printThis: [Function: printThis]
    }
*/

console.log(this);
/*
    {} // this here is node specific ,this behaves differently in every different code execution environment 
*/
