const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");
let todos = [];

addTodoBtn.addEventListener("click", function(){
  const todoText = todoInput.value.trim();
  if(todoText == ""){
    alert("sheiyvane teqsti")
  } else {
    todos.push(todoText);
    renderTodos();
    todoInput.value = "";
  }
  console.log(todos)
});


function renderTodos(){
  todoList.innerHTML = "";
  todos.forEach((todo, index)=>{
    const li = document.createElement('li');
    li.textContent = todo;
    const removeButton = document.createElement('button');
    removeButton.textContent = " X ";
    li.appendChild(removeButton)
    todoList.appendChild(li);
    removeButton.addEventListener('click', function(){
      removeTodos(index);
    })
  })
}

function removeTodos(index){
  todos.splice(index, 1)
  renderTodos()
}