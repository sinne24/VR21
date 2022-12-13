
const arrayOfObjects = [
    { name: "Fox", link: "foxnews.com" },
    { name: "Fandango", link: "fandango.com" },
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

const SUGGESTIONS_ID = "suggestions";

const searchInput = document.getElementById("search");
searchInput.addEventListener("keyup", handleKeyUp);

function handleKeyUp(e) {
    // console.log(searchInput.value); check that we are checking what the user types
    const userInput = searchInput.value.toLowerCase();

    //clear existing selections
    clearSuggestions();

    //We only want suggestions to show if their is input in the search field
    if(userInput){
        //check for words that contain the text the user has typed
        const suggestions = arrayOfObjects.filter((result) => 
            result.name.toLowerCase().startsWith(userInput)
        );
        // console.log(suggestions);check that the suggestions are populating correctly   
        showSuggestions(suggestions);
    }
}

function showSuggestions(suggestions){
    const ul = document.getElementById(SUGGESTIONS_ID);

    //add elements that are applicable
    suggestions.forEach((result) => {
        const li = document.createElement("li");
        li.innerHTML = `<li><a href="${result.link}">${result.name}</a></li>`;
        ul.append(li);
    });
} 

function clearSuggestions(){
    const ul = document.getElementById(SUGGESTIONS_ID); 
    while(ul.firstElementChild) {
        ul.firstElementChild.remove();
    }
}
