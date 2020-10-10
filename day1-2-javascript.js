console.log("Hello World!");

// Single line comment

/**
 * Block Comment
 * Allow for mulit-line commenting
 */

/* =====================================================
 * Variables
 * ===================================================== */
// Javascript(language) vs. ECMAscript (ES6/7) (spec)
// [Typescript - Javascript pre-processor with ECMAscript features]

var instructorName = "Eric"; // Legacy
console.log(instructorName);

// We don't use var in ECMAscript (ES6/7)
let schoolName = "Seneca College"; // Use let whenever you expect your variable to re-assigned
schoolName = "Waterloo"; // Re-assignin the variable with a new value
console.log(schoolName);

const isApproved = true; // Use whenever the variable value will remain constant
console.log(isApproved);

/* =====================================================
 * DataTypes (Primitives)
 * ===================================================== */

const firstName = "Jenny"; // string - anything wrapped within double or single quotes
const userAge = 22; // integer - it is a numeric value
const isHere = true; // boolean - Either true or false

/* =====================================================
 * DataTypes (Objects)
 * ===================================================== */
// Everything in Javascript is an object with the exception of primitive data types.
// All objects have properties

/* ==============
 * Arrays
 * ============= */
// They are used to hold sets of data
const fruits = ["apple", "banana", "kiwi", "watermelon", "pineapple", "grape"];
console.log(fruits.length);
console.log(fruits[0]); // Indexes always start at 0
console.log(fruits[3]);

/* ==============
 * Object Literals
 * ============= */
const assassin = {
  firstName: "John", // key: value pairs
  lastName: "Wick",
  email: "john.wick@thecontinental.com",
};
console.log(assassin["lastName"]); // Not the favoured method, because it's confusing (avoid unless absolutely necessary)
console.log(assassin.email); // Preferred method (dot notation)

/* ==============
 * Function
 * ============= */
// Collection of lines of code to serve a specific purpose

// Define the function (define what the function does)
// Define a parameter called name
const greeting = function (name) {
  // Do Javascript things here
  const salutation = "What's up " + name + "?";
  console.log(salutation);
};

// Call the greeting function to run it
greeting("Kevin");
greeting("Tatiana");
greeting("Alexey");


/**
 * Defining functions for the lesson
 */

const helloWorld = function () {
  console.log("Hello World!");
};

const mathExamples = function () {
  console.log(45 * 138); // +, - , *, /
  console.log(10 % 3); // % - divides two numbers and returns the remainder

  // Everything in Javascript is an object, and Javascript provides you with useful built-in objects
  // Let's look at the Math object
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
  const quotient = 10 / 3;
  const rQuotient = Math.round(quotient); // Math.round "returns" the resulting value
  console.log(rQuotient);
  console.log(Math.PI);
};

const evaluationExamples = function () {
  // The example below is an evaluation of an expression / statement.
  // It will "return" a boolean value
  const expression = 4 < 3; // >, <, >=, <=, ==
  console.log(expression);
  const equalityCheck = Math.round(Math.PI) === "3";
  // === - evaluates whether two values are equal in value and in datatype (always use!).
  console.log(equalityCheck);
};

// Conditionals ====================================
// These are ways you can have your code make decisions under different scenarios
const bouncer = function (age) {
  // The consition will be, if the age is greater than or equal to 21, let the user enter
  // if not greater than or equal to 21, kick them out
  // Use if statement
  if (age >= 21) {
    // When the condition in the if statement is true, this block of code will run,
    // otherwise, it will be skipped
    // console.log("Welcome, please enjoy!");
    // return values always represent the end of a function
    return "Welcome, please enjoy!";
  }
  // console.log("Sorry, you're going to have to leave");
  return "Sorry, you're going to have to leave";
};

const friendlyGreeting = function (username) {
  if (username === "matt") {
    console.log("Hey matt, what's up?");
  } else if (username === "newb_master") {
    console.log("Welcome back sir!");
  } else {
    console.log("Hello, how are you?");
  }
};

const friendlyGreetingV2 = function (username) {
  switch (username) {
    case "matt":
      console.log("Hey matt, what's up?");
      break;
    case "newb_master":
      console.log("Welcome back sir!");
      break;
    default:
      console.log("Hello, how are you?");
  }
};

// Loops and Iterators ====================================
// A simple loop example

const getHeroName = function (data) {
  // For loop through the data
  // console.log(data[0]);
  // console.log(data[1]);
  // console.log(data[2]);

  for (let i = 0; i < data.length; i++) {
    console.log(data[i].name);
  }
};

const getSecretIdentity = function (data) {
  // console.log(data);

  // The parameter data is an array
  // Instead of a for loop, we are going to using an iterator
  // Remember that arrays are objects
  // Use an array method
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  const identities = data.map(function (datum) {
    return datum.secretIdentity;
  });
  console.log(identities);
};

const greetBatman = function (data) {
  const batman = data.find(function (datum) {
    // Search based off of a return criteria
    return datum.secretIdentity === "Bruce Wayne";
  });
  // console.log(batman);
  const greeting = "Hello " + batman.name + "!";
  console.log(greeting);
};

const greetHero = function (data, suspectedIdentity) {
  const hero = data.find(function (datum) {
    // Search based off of a return criteria
    return datum.secretIdentity === suspectedIdentity;
  });
  // console.log(batman);
  if (hero) {
    const greeting = "Hello " + hero.name + "!";
    console.log(greeting);
  } else {
    console.log("Hello citizen!");
  }
};

// Undefined and Null
const bonus = function () {
  let demo; // undefined - there is no value
  console.log(demo);

  const nullDemo = null;
  console.log(nullDemo);
};

/**
 * Running our functions
 */

// helloWorld();
// mathExamples();
// evaluationExamples();
// bouncer(17);
// console.log(bouncer(27));
// friendlyGreeting("hegouhphgr");
// friendlyGreetingV2("newb_master");

const heroes = [
  {
    id: 1,
    name: "Spider-man",
    secretIdentity: "Peter Parker",
    powers: ["web slinging", "wall crawling", "spider-sense"],
  },
  {
    id: 2,
    name: "Wonder Woman",
    secretIdentity: "Diane Prince",
    powers: ["super strength", "invisible jet", "lasso of truth"],
  },
  {
    id: 3,
    name: "Batman",
    secretIdentity: "Bruce Wayne",
    powers: ["martial arts", "greatest detective", "rich"],
  },
  {
    id: 4,
    name: "Captain Marvel",
    secretIdentity: "Carol Danvers",
    powers: ["power blasts", "super strength", "flight"],
  },
];

// getHeroName(heroes);
// getSecretIdentity(heroes);
// greetBatman(heroes);
// greetHero(heroes, "Bruce Wayne");
// greetHero(heroes, "Diane Prince");
// greetHero(heroes, "Clark Kent");

bonus();
