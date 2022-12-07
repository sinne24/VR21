let submitButton = document.querySelector('.submit');
submitButton.addEventListener('click', createCard);


function deleteCard(e){
    e.target.parentNode.parentNode.parentNode.remove();
}

function createCard() {
    let imgUrl = document.querySelector('#imgUrl');
    let cardTitle = document.querySelector('#cardTitle');
    let description = document.querySelector('#description');
    
    event.preventDefault();
    const contentCard = `<div class="col-md-3">
    <div class="card" style="width: 18rem;">
        <img src="${imgUrl.value}"
            class="card-img-top" alt="location">
        <div class="card-body">
            <h5 class="cardTitle">${topText.value}</h5>
            <p class="description">${bottomText.value}</p>
                <div>
                    <button class="btn btn-outline-secondary" type="submit" data-bs-target="#updateModal" data-bs-toggle="modal">Update</button>
                    <button class="btn btn-danger delete" type="submit" data-bs-target="#deleteModal" data-bs-toggle="modal">Delete</button>
                </div>
        </div>
    </div>`;

    document.querySelector(".row").insertAdjacentHTML("beforeend", contentCard);

    let buttons = document.querySelectorAll('.delete');
    buttons.forEach(button => button.addEventListener('click', deleteCard));
}