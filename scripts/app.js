// store the data (default data)
const todoList = ["Learn JS Fundamental", "Learn JS OOP", "Learn JS DOM"];

/**
 * Clears all items from the displayed todo list.
 * This function removes all child elements from the <ul> element
 * that displays the todo items.
 */
function clearTodoList() {
  const todoDisplay = document.querySelector("ul");
  while (todoDisplay.firstChild) {
    todoDisplay.removeChild(todoDisplay.firstChild);
  }
}

/**
 * create todo list display when user input
 * @param {todo} todo from parameter when user input
 */
function addTodoList(todo) {
  const todoDisplay = document.querySelector("ul");
  const list = document.createElement("li");
  const listButton = document.createElement("button");
  listButton.textContent = "Done";
  list.appendChild(listButton);

  const todoItem = document.createElement("span");
  todoItem.textContent = todo;
  list.appendChild(todoItem);

  todoDisplay.appendChild(list);
}

/**
 * Displays the current todo list.
 * This function first clears the existing displayed list and then
 * iterates over the `todoList` array to create and append list items
 * to the <ul> element.
 */
function displayTodoList() {
  clearTodoList();

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];

    // call addTodoList()
    addTodoList(todo);
  }
}

/**
 * Handles the submission of the todo form.
 * This function prevents the default form submission behavior,
 * retrieves the value from the todo input field, adds it to the
 * `todoList` array, resets the form, logs the updated list to the
 * console, and updates the displayed todo list.
 *
 * @param {Event} event - The event object representing the form submission.
 */
document.forms["todoForm"].onsubmit = function (event) {
  // reset prevent default()
  event.preventDefault();

  // get the data from todo input and store the data to todos
  const todo = document.forms["todoForm"]["todo"].value;
  todoList.push(todo);

  document.forms["todoForm"].reset();
  console.log(todoList);

  displayTodoList();
};

// Initial display of the todo list
displayTodoList();
