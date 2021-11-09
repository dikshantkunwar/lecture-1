// We want a script that we can type
// node printName.js [Testname]
// => Welcome to WebDevCore [Testname]
const username = process.argv[2];

function printName(){
  console.log("Welcome to WebDevCore " + username + "!")
}

printName();