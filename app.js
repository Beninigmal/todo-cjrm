const formTodo = document.querySelector(".form-add-todo");
const ulContainer = document.querySelector(".todos-container");
const formSearch = document.querySelector(".form-search input");

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
    const hasClassDelete = Array.from(clickedTodo.classList).includes("delete");
    if (hasClassDelete) {
      clickedTodo.parentNode.remove();
    }
  });
};

const searchTodo = () => {
  formSearch.addEventListener("input", (event) => {
    const input = event.target.value.trim().toLowerCase();
    const todos = Array.from(ulContainer.children);
    todos.forEach((todo) => {
      const todoContent = todo.textContent.toLowerCase();
      if (!todoContent.includes(input)) {
        todo.classList.add("hidden");
        todo.classList.remove("d-flex");
      } else {
        todo.classList.add("d-flex");
        todo.classList.remove("hidden");
      }
    });
  });
};

createTodo();
deleteTodo();
searchTodo();
