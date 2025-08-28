/*
  Strings : Strings are useful for holding data that can be represented in text form.  JS strings are primitive and immutable means All string methods produce a new string without altering the original string.
 Strings can be created using:
 Single quotes: 'Hello, World!'
 Double quotes: "Hello, World!"
 Backticks (template literals): `` Hello, World! ``
 new String ('String content ');

 String Contention
    1. with string addition
        string1 + string2 stringN //  strings are added with no white space
    2. with backtick `string` (String interpolation)
        `some text ${stringName}${notString=Variable} more text`
        ${}is placeholder
 */

let str = "Edwin Jarvis";

console.log(
  `Using length property gives number character in the given string ${str.length}`
);

for (let i = 0; i < str.length; i++) {
  console.log(`Character ${i} in String ${str} is '${str.charAt(i)}'`);
}

console.log(
  `Using toLowerCase() we can convert all letter to lower case only ${str.toLowerCase()}`
);

console.log(
  `Using toUpperCase() we can convert all letter to upper case only ${str.toUpperCase()}`
);

console.log(`indexOf() gives the first occurrence of given string ${str.indexOf('zzz')}`);

