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
  
});


window.addEventListener("load", pullTodosFromLocal );


const list = document.getElementById('js-todo-list');

function addTodo(text) {
 
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };
    todoItems.push(todo);
      console.log(todo);  
      
    localStorage.setItem('todoItem', JSON.stringify(todoItems));
    console.log('This is the list: ', JSON.stringify(todoItems));
    
    list.insertAdjacentHTML('beforeend', `
  <li class="todo-item" id="todoLi" data-key="${todo.id}">
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
    <button class="delete-todo js-delete-todo">
      <svg><use href="#delete-icon"></use></svg>
    </button>
  </li>
`)};

let todos = localStorage.getItem('todoItem'); 

function pullTodosFromLocal() {

 console.log('pullTodosFromLocal has fired');

 const renderTodos = document.getElementById('todoLi');

   
   renderTodos.innerHTML = `<li class="todo-item" id="todoLi" data-key="${todos.id}">
   <input id="${todos.id}" type="checkbox"/>
   <label for="${todos.id}" class="tick js-tick"></label>
   <span>${todos.text}</span>
   <button class="delete-todo js-delete-todo">
     <svg><use href="#delete-icon"></use></svg>
   </button>
 </li>`
 console.log('todos: ', todos);
 };


    


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
  const index = todo.findIndex(item => item.id === Number(key));
    todo[index].checked = !todo[index].checked;
  
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
    //alert('You sure about that, now?');
    item.remove();
    
    //const retrieve = localStorage.getItem('todoItem');
    //const stringToArray = retrieve.split('todoItem');
    //const findIt = stringToArray.indexOf(item);

   // findIt = 'todoItem';

    localStorage.removeItem('todoItem');

    
    //localStorage.removeItem(backToString);
     localStorage.setItem('todoItem', stringToArray);

    console.log('backToString: ', stringToArray);
      };

    
    


    //console.log("This array is the todoItems array: ", todoItems);
    
  
