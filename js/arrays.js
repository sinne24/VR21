let people = ["Greg", "Mary", "Devon", "James"];

// 1

people.shift();

// 2

people.pop();

// 3

people.unshift("Matt");

// 4

people.push("Elie");

// 5

people.slice(2);

// 6

people.indexOf("Mary");

// 7

people.indexOf("Foo");


// 8

let people2 = ["Greg", "Mary", "Devon", "James"];

people2.splice(2,1,"Elizabeth", "Artie");

// 9

let withBob = people2.concat("Bob");