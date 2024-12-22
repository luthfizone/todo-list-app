// Store the data (default data)
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
 * Removes a todo item from the list based on the given index.
 * @param {number} index - The index of the todo item to remove.
 */
function removeTodoList(index) {
  console.log(`Remove item at index ${index}`);
  todoList.splice(index, 1);
  displayTodoList();
}

/**
 * Creates a todo list item and appends it to the display.
 * @param {number} index - The index of the todo item in the list.
 * @param {string} todo - The todo item text.
 */
function addTodoList(index, todo) {
  const todoDisplay = document.querySelector("ul");
  const list = document.createElement("li");
  const listButton = document.createElement("button");
  listButton.textContent = "Done";
  listButton.onclick = function () {
    removeTodoList(index);
  };
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

    const searchText = document.getElementById("search").value.toLowerCase();

    if (todo.toLowerCase().includes(searchText)) {
      // Call addTodoList()
      addTodoList(i, todo);
    }
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
  // Prevent default form submission
  event.preventDefault();

  // Get the data from todo input and store the data to todos
  const todo = document.forms["todoForm"]["todo"].value;
  todoList.push(todo);

  document.forms["todoForm"].reset();

  displayTodoList();
};

// Initial display of the todo list
displayTodoList();

const searchInput = document.getElementById("search");

/**
 * Filters the todo list based on user input.
 * This listener updates the displayed todo list whenever the user
 * types in the search input field.
 * @listener [keydown and keyup]
 */
searchInput.addEventListener("keydown", () => {
  displayTodoList();
});
searchInput.addEventListener("keyup", () => {
  displayTodoList();
});
