var tsDemo = function () {
    // Typescript extends Javascript by giving it static typing
    // It is good practise to statically type your variables when you declare them.
    var firstName = "Eric";
    var age; // You can statically type a variable and then give it a value later
    var isPassing;
    // Statically typing arrays
    var fruits = ["apple", "banana", "grape", "mango"]; // Array of strings
    var dataSet = [0, 3, 44, 6, 7, 2, 100, 34];
    var superUser = {
        firstName: "Rick",
        lastName: "Sanchez",
        email: "",
        age: 76,
        phone: "",
        dob: ""
    };
    // Setup a variable that will be a list of users
    var listOfUsers;
    // For functions, you want to typecast them as the dataType that they will eventually return
    return firstName;
};
console.log(tsDemo());
