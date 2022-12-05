// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Document</title>
// </head>
// <body>
//     <div class="header">
//     </div>
//     <section id="container">
//         <ul>
//             <li class="first">one</li>
//             <li class="second">two</li>
//             <li class="third">three</li>
//         </ul>
//         <ol>
//             <li class="first">one</li>
//             <li class="second">two</li>
//             <li class="third">three</li>
//         </ol>
//     </section>
//     <div class="footer">
//     </div>
// </body>
// </html>

// Exercise»

// Write the code necessary to do the following:

//     Select the section with an id of container without using querySelector.
//     Select the section with an id of container using querySelector.
//     Select all of the list items with a class of “second”.
//     Select a list item with a class of third, but only the list item inside of the ol tag.
//     Give the section with an id of container the text “Hello!”.
//     Add the class main to the div with a class of footer.
//     Remove the class main on the div with a class of footer.
//     Create a new li element.
//     Give the li the text “four”.
//     Append the li to the ul element.
//     Loop over all of the lis inside the ol tag and give them a background color of “green”.
//     Remove the div with a class of footer



document.getElementById("container");


document.querySelector("#container")


document.getElementsByClassName("second")



document.querySelector("ol .third");


let foundDiv = document.querySelector("#container");
foundDiv.innerText = "Hello";


let footer2 = document.querySelector(".footer");
footer2.classList.add("main");

OR

footer.className += "main";


let footer3 = document.querySelector(".footer");
footer.classList.remove("main");


let newLi = document.createElement("li");


newLi.innerText = "four"


let list = document.querySelector("ul");
list.appendChild(newLi);


let liInsideOl = document.querySelectorAll("ol li");

for(let i = 0; i < liInsideOl.length; i++){
    liInsideOl[i].style.backgroundColor = "green";
}


let footer = document.querySelector(".footer");
footer.remove();

