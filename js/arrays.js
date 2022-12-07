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

//callback practice:
// mapEach
let arr = [];

function mapEach(arr, callback){
    for(let i =0; i < arr.length; i++){
        newArr.push(callback(arr[1]));
    }

let multiplyByTwo = (num) => {
    return num = 2;
}

console.log(mapEach(arr, multiplyByTwo));
}

//filter

const newArray = [1,2,3,4,5,6,7,8];

function isEven (num){
    return num % 2 === 0;
}

function filter(arr, callback){
    let results = [];
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            results.push(arr[i]);
        }
    }
    return results;
}

console.log(filter(newArray, isEven));

//example of local storage
const users = [{id: 1, initial:"A"}, {id: 2, initial:"B"}, {id: 3, initial:"C"}];

const newArr = users.map(user => {
    if(user.id === 2){
        user.initial = "Z";
    }
    return user;
});

//set items
localStorage.setItem("users", JSON.stringify(newArr));

//retrieve items
console.log(JSON.parse(localStorage.getItem("users")));

debugger;

//primitive gotcha

let myName = "Cindy";

const newName = myName;

console.log(myName === newName);

const ogArr = ["A", "B", "C", "D"];
const copyArr = ogArr;

ogArr[0] = "E";

console.log("Copy Array: ", copyArr);

