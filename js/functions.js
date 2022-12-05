
function difference(num1, num2){
    let result = num1 - num2;

    return result;
}
console.log(difference(2,2));
console.log(difference(0,2));


function product(num1, num2){
    let result = num1 + num2;

    return result;
}
console.log(product(2,2)); // 4
console.log(product(0,2)); // 0

function printDay(num){
   if(num > 7 || num < 1){
    return;
   }
    switch (num) {
        case 1 :
            return "Sunday";
        case 2 :
            return "Monday";
        case 3 :
            return "Tuesday";
        case 4 :
            return "Wednesday";
        case 5 :
            return "Thursday";
        case 6 :
            return "Friday";
        case 7 :
            return "Saturday";
    }

    return result;
}
console.log(printDay(4)); // "Wednesday"
console.log(printDay(41)); // undefined

function lastElement(){

}
console.log(lastElement([1,2,3,4])); // 4
console.log(lastElement([])); // undefined

function printDay2(num){

    let dates = {
      1: "Sunday",
      2: "Monday",
      3: "Tuesday",
      4: "Wednesday",
      5: "Thursday",
      6: "Friday",
      7: "Saturday",
    };
    return dates[num];
  }
  
  function lastElement(arr){
    return arr[arr.length-1];
  }
  
  function numberCompare(a,b){
    if(a === b){
      return 'Numbers are equal';
    } else if(a > b){
      return 'First is greater';
    }
    return 'Second is greater';
  }
  
  function singleLetterCount(str1, letter){
    let finalCount = 0;
    for(let i=0; i< str1.length; i++){
      if(str1[i].toLowerCase() === letter.toLowerCase()){
        finalCount++;
      }
    }
    return finalCount;
  }
  
  function multipleLetterCount(str){
    str = str.toLowerCase();
    let finalObj = {};
    for(let i =0; i< str.length; i++){
      if (finalObj[str[i]] === undefined){
        finalObj[str[i]] = 1;
      } else {
        finalObj[str[i]]++;
      }
    }
    return finalObj;
  }
  
  function arrayManipulation(arr, command, position, val){
    if(command === 'remove'){
      if(position === 'end'){
        return arr.pop();
      }
        return arr.shift();
    }
    else if(command === 'add'){
      if(position === 'end'){
        arr.push(val)
        return arr;
      }
      arr.unshift(val)
      return arr;
    }
  }
  
  function isPalindrome(str){
    return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
  
    // for(let i =0; i<str.length/2; i++){
    //   if(str[i].toLowerCase() !== str[str.length-1-i].toLowerCase()){
    //     return false;
    //   }
    // }
    // return true;
  }
  
    function RPS(){
  
    function determineComputer(num){
      if(num <= .33) return "rock";
      else if(num <= .66) return "paper";
      return "scissor";
    }
  
    let userChoice = prompt("Choose rock / paper or scissor").toLowerCase();
    let computerChoice = determineComputer(Math.random());
  
  
    let answers = ["rock", "paper", "scissor"];
  
    if(!userChoice || answers.indexOf(userChoice) === -1){
      return "Please select a valid option";
    }
  
    if(userChoice === computerChoice) return "Tie!";
  
    if(userChoice === "rock" && computerChoice === "paper") {
      return "You lose, computer picked " +  computerChoice;
    }
    if(userChoice === "paper" && computerChoice === "scissor") {
      return "You lose, computer picked " +  computerChoice;
    }
    if(userChoice === "scissor" && computerChoice === "rock") {
      return "You lose, computer picked " +  computerChoice;
    }
  
    return "You win! Computer picked " +  computerChoice;
  }