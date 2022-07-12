const formTodo = document.querySelector(".form-add-todo");
const ulContainer = document.querySelector(".todos-container");

const createTodo = () => {
  formTodo.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputTodo = event.target.add.value.trim();

    if (inputTodo.length) {
      ulContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${inputTodo}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>
            `;
      event.target.reset();
    }
    console.log(inputTodo);
  });
};

const deleteTodo = () => {
  ulContainer.addEventListener("click", ({ target }) => {
    const clickedTodo = target;
    if (Array.from(clickedTodo.classList).includes("delete")) {
      clickedTodo.parentNode.remove();
    }
  });
};

createTodo();
deleteTodo();
