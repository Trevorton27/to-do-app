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

const list = document.querySelector('.js-todo-list');

function addTodo(text) {
 
    const todo = {
      text,
      checked: false,
      id: Date.now(),
    };

    todoItems.push(todo);
      console.log(todo);  
      const theList = JSON.stringify(todoItems);
    localStorage.setItem('todoItem', theList);
    console.log('This is the list: ', theList);
   
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
  
document.onload = function() {
  if(localStorage.getItem('todoItem') !== null) {
    theList = JSON.parse(localStorage.getItem('todoItem'));
  } 

  console.log(theList);
  theList.push('todoItem');

  theList = list;

  list.insertAdjacentHTML('beforeend', `
      <li class="todo-item" data-key="${todo.id}">
        <input id="${todoItem.id}" type="checkbox"/>
        <label for="${todoItem.id}" class="tick js-tick"></label>
        <span>${todoItem.text}</span>
        <button class="delete-todo js-delete-todo">
          <svg><use href="#delete-icon"></use></svg>
        </button>
      </li>
    `);
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
    //alert('You sure about that, now?');
    item.remove();
    const retrieve = localStorage.getItem('todoItem');
    const stringToArray = retrieve.split();
    const findIt = stringToArray.indexOf(item);

    item.delete(findIt);
    localStorage.removeItem(findIt);
    
    let backToString = JSON.stringify(stringToArray);

    console.log('backToString: ', backToString);
      };

    
    


    //console.log("This array is the todoItems array: ", todoItems);
    
  
