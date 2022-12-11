// the access key for the site
const client_id = "RBF8eFgIyFtbKPmEzDC9TUOy65nYF5ucO1MKSOeoUk0"; 
//the string search term
const searchStr = "cats";

//make a request to the unsplash api
fetch(
  `https://api.unsplash.com/search/photos?query=${searchStr}&per_page=20&client_id=${client_id}`
)
  .then((response) => response.json())
  .then((data) => {
    //capture the api data
    const container = document.querySelector(".container");

    for (let i = 0; i < data.results.length - 1; i++) {
      const img = document.createElement("img");

      img.setAttribute("src", data.results[i].urls.thumb);

      container.append(img);
    }
  });