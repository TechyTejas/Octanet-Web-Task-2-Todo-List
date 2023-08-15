const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

// Fetching todos from localStorage
const todos = JSON.parse(localStorage.getItem('todos')) || [];

// adding todo into list
function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${todo}</span>
      <button class="delete-button" onclick="deleteTodo(${index})">Delete</button>
    `;
    todoList.appendChild(li);
  });
}

// Add todo functionality
function addTodo() { 
  const newTodo = todoInput.value.trim();
  if (newTodo !== '') {
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
    todoInput.value = '';
    renderTodos();
  }
}

//  delete functionality
function deleteTodo(index) {
  todos.splice(index, 1);
  localStorage.removeItem('todos', JSON.stringify(todos));
  renderTodos();
}

 
addButton.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTodo();
  }
});


renderTodos();

