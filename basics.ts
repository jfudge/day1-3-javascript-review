const tsDemo = function () {
  // Typescript extends Javascript by giving it static typing
  // It is good practise to statically type your variables when you declare them.

  const firstName: string = "Eric";
  let age: number; // You can statically type a variable and then give it a value later
  let isPassing: boolean;

  // Statically typing arrays
  const fruits: string[] = ["apple", "banana", "grape", "mango"]; // Array of strings
  const dataSet: number[] = [0, 3, 44, 6, 7, 2, 100, 34];

  // Statically typing objects
  // Use interfaces when you are typecasting objects
  // An interface is used like a datatype in typescript
  interface User {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    phone: string;
    dob: string;
  }

  const superUser: User = {
    firstName: "Rick",
    lastName: "Sanchez",
    email: "",
    age: 76,
    phone: "",
    dob: "",
  };

  // Setup a variable that will be a list of users
  let listOfUsers: User[];

  // For functions, you want to typecast them as the dataType that they will eventually return
  return firstName;
};

console.log(tsDemo());
