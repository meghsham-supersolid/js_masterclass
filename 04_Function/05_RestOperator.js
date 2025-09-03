/* 
REST operator (...variableName)
is an array acceptor variable in function parameter, which used to take unlimited input and use them in array based on index 

Syntax : 

// with only restVariableVariable is parameter
function functionName (...restVariableVariable){
    // body of function using restVariableVariable[] array
}


// with restVariableVariable and other parameter
function functionName (parameter1,parameter2,...restVariableVariable){
    // body of function using restVariableVariable[] array
}

- in above case first two arguments are pushed into parameter1 and parameter2 respectively and arguments afterwords
- make sure rest operator variable is used as last parameter as it will not stop accepting the input

*/
