let container = document.querySelector(`.todo-container`);
let list = document.querySelector(`.list-group`);
let input = document.querySelector(`.form-control`);

container.addEventListener(`click`, function(e) {
    let item = e.target;
    if (item.classList.contains(`btn`)) {
        let text = input.value;
        if (text.length != 0) {
            list.innerHTML += `
            <li class="list-group-item">
                ${text}
            </li>
            `;
            input.value = ``;
        }
    }

    if (item.classList.contains(`list-group-item`)) {
        item.classList.toggle(`text-decoration-line-through`)
        item.classList.toggle(`list-group-item-secondary`)
    }
})