// Creating object literal

const myTechStack = {
    frontEnd: "React",
    backEnd: "SpringBoot",
    dataBase: "Postgres",
    showTechStack: () => console.log(`I use ${this.frontEnd} for UI, ${this.backEnd} for logics and to store data I use  ${this.dataBase}`),
}

// Accessing properties using dot notation and square notation
console.log(`Meghsham uses ${myTechStack.frontEnd}, ${myTechStack["backEnd"]} and  ${myTechStack.dataBase} in his tech stack`);
console.log(myTechStack.showTechStack); // if not executed then returns reference [Function: showTechStack]

// To directly execute  
myTechStack.showTechStack();

// Passing function reference
const ts = myTechStack.showTechStack;
ts();

/*
Output:-

Meghsham uses React, SpringBoot and  Postgres in his tech stack
[Function: showTechStack]
I use undefined for UI, undefined for logics and to store data I use  undefined
I use undefined for UI, undefined for logics and to store data I use  undefined
*/