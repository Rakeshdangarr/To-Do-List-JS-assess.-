// function for new task add
// first we get that ul tag here for new task with use of id name
function addTask(task) {
    const todoList = document.getElementById("todo-list");

    // next we use createElement function for add task  dynamically
    const li = document.createElement("li");

    // adding class name and other style use with bootstrap
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    // adding option to edit and delete task with use of innerHTML 
    li.innerHTML = `
        <span class="task-text">${task}</span>
        <input type="text" class="form-control edit-input" style="display: none;" value="${task}">
        <div class="btn-group">
          <button class="btn btn-warning btn-sm edit-btn">✎</button>
        </div>
      `;
todoList.appendChild(li);
 }

//  event listener while click on submit button and function also for that
document.getElementById("todo-form").addEventListener("submit",
    function (event) {
        event.preventDefault();
        const taskInput = document.getElementById("todo-input");
        const task = taskInput.value.trim();
        if (task !== "") {
            addTask(task);
            taskInput.value = ""; 
        }
    });

// Event listener for edit button click 
document.getElementById('todo-list').addEventListener('click',function (event){
if (event.target.classList.contains('edit-btn')){
    const taskText=event.target.parentElement.parentElement.querySelector(".task-text");
    const editInput=event.target.parentElement.parentElement.querySelector(".edit-input");
    if(taskText.style.display!=='none'){
        taskText.style.display="none";
        editInput.style.display='block';
        editInput.focus();
        event.target.innerHTML= "✔";
        
    }else{
        taskText.textContent=editInput.value;
        taskText.style.display='inline';
        editInput.style.display='none';
        event.target.innerHTML=  "✎";
    }
}
});

// Add default tasks

const defaultTasks = ["Read book", "Lunch with caro", "Feed the dog"];
defaultTasks.forEach(task => addTask(task));






