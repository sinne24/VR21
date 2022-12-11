//Promise: a place holder for an eventual value
// JS is a synchronous programing language-- meaning it executes one line at a time

//Resolve
const myPromise = new Promise((resolve) =>{
    resolve("hello world");

});
//to get to the fulfilled state must use .then()
myPromise.then(value => {
   console.log(value);
});

//Promise with reject
const myPromise2 = new Promise((resolve, reject) => { 
    reject("Data is rejected");
});

myPromise.then(result => {
    debugger;
    console.log("Success", result);
}).catch(error => {
    debugger;
    console.error("Failure", error);
});

//Promise with 3 second delay
const request = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data"), 3000);
});
request.then((data) => console.log(data));
        //.catch((err) => console.error(err));

//Fetch
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))