const gameContainer = document.getElementById("game");
let numCardsFlipped = 0;

let card1;
let card2;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", 'card notflipped');
    newDiv.setAttribute("id", color);

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    // newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);

let cards = document.querySelectorAll('.card');
let totalCards = cards.length;
cards.forEach(card => card.addEventListener('click', event => {
  // Handle the click
    // you can use event.target to see which element was clicked
    console.log(card);
    numCardsFlipped++;

    if(numCardsFlipped === 1){
      card1 = card;
      card1.classList.toggle("notflipped");
    }

    if(numCardsFlipped === 2){
      card2 = card;
      card2.classList.toggle("notflipped");

      console.log(card1);
      console.log(card2);

      if(card1.getAttribute('id') === card2.getAttribute('id')){
        console.log("match");
        totalCards -= 2;
      } else {
        setTimeout(()=>{
          card1.classList.toggle("notflipped");
          card2.classList.toggle("notflipped");
        }, 2000);
      }

      numCardsFlipped = 0;
      if(totalCards === 0){
        console.log("You Win");
        setTimeout(()=>{
          alert("You win!");
          cards.forEach(card => {
            card.classList.toggle("notflipped");
          });
        }, 3000);
      }
    }
}));
