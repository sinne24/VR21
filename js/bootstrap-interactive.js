
let submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', createCard);

function deleteCard(e){
        e.target.parentNode.parentNode.parentNode.remove();
}

function createCard() {
    let imgUrl = document.querySelector('#imgUrl');
    let topText = document.querySelector('#topText');
    let bottomText = document.querySelector('#bottomText');

    event.preventDefault();
    const contentCard = `<div class="col-md-6">
    <div class="card text-bg-dark">
        <img src="${imgUrl.value}" class="card-img" alt="meme pic">
        <div class="card-img-overlay">
            <h5 class="card-text-top">${topText.value}</h5>
            <p class="card-text-bottom">${bottomText.value}</p>
            <button type="button" class="btn btn-danger delete">Delete</button>
        </div>  
    </div>`;

    document.querySelector(".row").insertAdjacentHTML("beforeend", contentCard);

    let buttons = document.querySelectorAll('.delete');
    buttons.forEach(button => button.addEventListener('click', deleteCard));
};
