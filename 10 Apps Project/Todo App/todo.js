const form = document.getElementById('form');
const input = document.getElementById('input');
const todo = document.getElementById('todo');




// const todo = JSON.parse(localStorage.getItem('todo'));

//      if(todo) {
//          todo.forEach(todo => {

//             addTodo(todo);
//          });
//      }



form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    addtodo();

    updateLS();
});
  
    function addtodo() {
        
     const todoText = input.value;
        if(todoText) {
            const todoEl = document.createElement("li");
            todoEl.innerText = todoText;
        
                todoEl.addEventListener('click', () => {
                todoEl.classList.toggle('completed');

                updateLS();
            });   

            todoEl.addEventListener('contextmenu', (e) => {
                       e.preventDefault();
    
                       todoEl.remove();
            });    
    
            todo.appendChild(todoEl);
           
           updateLS();

         input.value = "";
    

        }
            
        }
    
      function updateLS() {
          const todoEl = document.querySelectorAll('li');
        
           const todo = [];
    
          todoEl.forEach( todoEl => {
            todo.push({
                text: todoEl.innerText,
                completed: todoEl.classList.contains("completed"),
            });
          });
          localStorage.setItem("todo", JSON.stringify(todo));
     }