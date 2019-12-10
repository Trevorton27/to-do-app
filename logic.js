let todoItems = [];



const form = document.querySelector('.js-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('.js-todo-input');

  const text = input.value;
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
  console.log(text);
});

const list = document.querySelector('.js-todo-list');

function addTodo(text) {
    const todo = {
      text,
      checked: false,
      id: Date.now(),

    };
  
    todoItems.push(todo);
      console.log(todo);
    localStorage.setItem('key', todo.text);
   
    list.insertAdjacentHTML('beforeend', `
      <li class="todo-item" data-key="${todo.id}">
        <input id="${todo.id}" type="checkbox"/>
        <label for="${todo.id}" class="tick js-tick"></label>
        <span>${todo.text}</span>
        <button class="delete-todo js-delete-todo">
          <svg><use href="#delete-icon"></use></svg>
        </button>
      </li>
    `)};
  

  
list.addEventListener('click', event => {
  if (event.target.classList.contains('js-tick')) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }

  if (event.target.classList.contains('js-delete-todo')) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }
});

function toggleDone(key) {
    const index = todoItems.findIndex(item => item.id === Number(key));
    todoItems[index].checked = !todoItems[index].checked;
  
    const item = document.querySelector(`[data-key='${key}']`);
    if (todoItems[index].checked) {
      item.classList.add('done');
    } else {
      item.classList.remove('done');
    }
  };
  
  function deleteTodo(key) {
    todoItems = todoItems.filter(item => item.id !== Number(key));
    const item = document.querySelector(`[data-key='${key}']`);
    alert('You sure about that, now?')
    item.remove();
  };
