document.querySelector("#createModal").addEventListener("show.bs.modal", (e) => {
    const div = document.createElement('div');
    const contentCard = `<div class="col-md-3">
    <div class="card" style="width: 18rem;">
        <img src="COimages/pexels-pixabay-221502.jpg"
            class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Arapahoe Basin</h5>
            <p class="card-text">Reasons to visit here: Lorem Ipsum...</p>
                <div>
                    <button class="btn btn-outline-secondary" type="submit" data-bs-target="#updateModal" data-bs-toggle="modal">Update</button>
                    <button class="btn btn-outline-secondary" type="submit" data-bs-target="#deleteModal" data-bs-toggle="modal">Delete</button>
                </div>
        </div>
    </div>`;

    document.querySelector(".row").insertAdjacentHTML("beforeend", contentCard);
});