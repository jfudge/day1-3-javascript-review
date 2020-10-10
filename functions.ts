// Functions
// Why do we wrap our code in functions?
// In Javascript, we have scopes. You have Global scope and the Local scope.
// The momenet JS runs, we are running the global scope

const globalVar: string = "Bunny!";

const helloWorld = function (sharedParamValue: string = "default") {
  // you can set default values to parameters
  // When you create a function, you create a local scope
  const localVar: string = "Hello World!";
  console.log(globalVar);
  console.log(sharedParamValue);
  return localVar;
};

// Arrow functions
const greeting = () => {
  // With arrow functions, you have an arrow => and on the left you have parameters, and on the right you have your return value
  // If the only thing that you're going to, is return a single line of code, you can skip the return statement
  // and you can skip the curly braces
  return "Hello with an arrow function!";
};

// Single line arrow functions assume that you are returning the code on the right side of the =>
// parameters => return value
const greeting2 = () => "Hello without a return statement and without {}";

console.log(helloWorld("cutomized!"));
console.log(greeting());
console.log(greeting2());

// localVar is not defined in the global scope, it is only defined in the local scope of our helloWorld function
// console.log(localVar);
