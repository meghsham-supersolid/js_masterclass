/*
 - IIFE : Immediately Invoked Function Expression
 - They are used to define function that call them self right after they are defined, so there is no need to call them separately
 - On the other hand, normal function get polluted with global variable and their values, IIFE restricts means if you declare any variable (var, let, or const) inside a function — including an IIFE — that variable is not accessible from outside the function. It becomes function-scoped or block-scoped, depending on how you declared it.
 - Syntax 
    (function functionName(parameter){
    })(arguments);

    in above syntax we can opt to skip writing name IIFE

    (function (parameter){
    })(arguments);

    or

   ( () => functionStatementBody ) ();

   here first parenthesis represents function definition and second parenthesis represents function call or function execution

- In most of the cases, writing semicolon is not in JS but its necessary in IIFE to end the execution, if missed then gives TypeError: (intermediate value)(...) is not a function because without semicolon JS gets confused where to end the execution of the current line. This happens when 2 or more IIFE is written together.

 */

//named IIFE with parameters
(function namedIIFE(name){
   console.log(`Hey ${name}, I am IIFE `);
})("Meghsham");

// unnamed IIFE
(function (){
   console.log("I am IIFE ");
})();

// unnamed IIFE with arrow function

( () => console.log ("I am IIFE in arrow function format") ) ()