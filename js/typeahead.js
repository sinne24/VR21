
const arrayOfObjects = [
    { name: "Fox", link: "foxnews.com" },
    { name: "Fandango", link: "fandango.com" },
    { name: "Fabletics", link: "fabletics.com" },
    { name: "Famous Footwear", link: "famousfootwear.com" },
    { name: "Fashion Nova", link: "fashionnova.com" },
    { name: "Facebook", link: "facebook.com" },
    { name: "FA World Entertainment", link: "faworldentertainment.com" },
    { name: "Fanconi", link: "fanconi.org" },
    { name: "Fa Euro New York", link: "faeuro.com" },
    { name: "CNN", link: "cnn.com" },
    { name: "Google", link: "google.com" },
    { name: "YouTube", link: "youtube.com" },
    { name: "Instagram", link: "instagram.com" },
    { name: "Amazon", link: "amazon.com" },
    { name: "RideFox", link: "ridefox.com" },
    { name: "Udemy", link: "udemy.com" },
    { name: "Telegram", link: "telegram.org" },
    { name: "Discord", link: "discord.com" },
    { name: "Slack", link: "slack.com" },
  ];

// const MAX_RESULTS = 2; <-- CAN BE UNCOMMENTED!!
const SUGGESTIONS_ID = "suggestions";

const searchInput = document.getElementById("search");

// Call debounce to call the handleKeyUp function so that 
// the suggestions don't show until the person is done typing
searchInput.addEventListener("keyup", debounce(handleKeyUp));

function handleKeyUp(e) {
    // console.log(searchInput.value); check that we are checking what the user types
    const userInput = searchInput.value.toLowerCase();

    //clear existing selections
    clearSuggestions();

    //We only want suggestions to show if their is input in the search field
    if(userInput){
        //check for words that contain the text the user has typed
        const suggestions = arrayOfObjects.filter((result) => 
            result.name.toLowerCase().startsWith(userInput))
            //can filter by number of results you want shown
            //but I'm not splicing because I want the scroll bar
            //.slice(0, MAX_RESULTS); <-- CAN BE UNCOMMENTED!!
        // console.log(suggestions);check that the suggestions are populating correctly   
        showSuggestions(suggestions);
    }
}

function showSuggestions(suggestions){
    const ul = document.getElementById(SUGGESTIONS_ID);

    if(suggestions.length === 0){
        ul.innerHTML = `<li>No matching results</li>`;
    } else {
        //add elements that are applicable
        suggestions.forEach((result) => {
            const li = document.createElement("li");
            li.innerHTML = `<li><a href="${result.link}">${result.name}</a></li>`;
            ul.append(li);
        });
    }
} 

function clearSuggestions(){
    const ul = document.getElementById(SUGGESTIONS_ID); 
    while(ul.firstElementChild) {
        ul.firstElementChild.remove();
    }
}

//Debounce
function debounce(func, timeout = 100){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }
