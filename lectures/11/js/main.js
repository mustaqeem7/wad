//============================================
//-----------  STEP - 1 ----------------------
//============================================


/*
var todos = [];
function add() {
    var task = document.getElementById("task").value;
    todos.push(task);
    document.getElementById('todos').innerText = todos;
}
*/

// the entered text is being added in the array and being shown on the screen with comma delimited


//============================================
//-----------  STEP - 2 ----------------------
//============================================


/*
var todos = [];
function add() {
    var task = document.getElementById('task').value;
    todos.push(task);
    document.getElementById('task').value = '';
    show();
}
function show() {
    var ul = document.createElement('ul');
    ul.classList.add("list-group");
    for(var i=0; i<todos.length; i++){
        var li = document.createElement('li');
        li.innerHTML  = '<li>' + todos[i] + '</li>';
        li.classList.add("list-group-item");
        ul.appendChild(li);
    }
    document.getElementById('todos').appendChild(ul);
}
*/

//the input was pushed into the array and a null was printed at the place of input to free it for further input
//next a function named show was called in which we created an unordered list dynamically and applied a bootstrap class over it
//than a for loop was initiated and array was traversed till the end of the array
//an tem was added everytime and a li tag was added around the data
//styling was applied on the index and shown on the page

//============================================
//-----------  STEP - 3 ----------------------
//============================================

/*
function getTodos() {
    var todos = [];
    var todos_str = localStorage.getItem('todo');
    if(todos_str !== null)
        todos = JSON.parse(todos_str);
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    if(task.trim() == ''){
        document.getElementById('message').style.display = 'block';
        return false;
    } else {
        document.getElementById('message').style.display = 'none';
    }
    var todos = getTodos();
    todos.push({task: task});
    document.getElementById('task').value = '';
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
}


function show() {
    document.getElementById('todos').innerText = '';
    var todos = getTodos();
    var ul = document.createElement('ul');
    ul.classList.add("list-group");
    for(var i=0; i<todos.length; i++){
        var li = document.createElement('li');
        li.innerHTML  = '<li>' + todos[i].task + '</li>' +
            '<button class="btn btn-danger">' +
            '<i class="fas fa-trash-o"></i> ' +
            '<span class="d-none d-sm-inline"> Delete </span> </button>';
        li.classList.add("list-group-item");
        ul.appendChild(li);
    }
    document.getElementById('todos').appendChild(ul);
}
show();*/

//the input was pushed into the array and a null was printed at the place of input to free it for further input
//next a function named show was called in which we created an unordered list dynamically and applied a bootstrap class over it
//than a for loop was initiated and array was traversed till the end of the array
//an tem was added everytime and a li tag was added around the data
//styling was applied on the index and shown on the page


//============================================
//-----------  STEP - 4 ----------------------
//============================================


/*
function getTodos() {
    var todos = [];
    var todos_str = localStorage.getItem('todo');
    if(todos_str !== null)
        todos = JSON.parse(todos_str);
    return todos;
}
function add() {
    var task = document.getElementById('task').value;
    if(task.trim() == ''){
        document.getElementById('message').style.display = 'block';
        return false;
    } else {
        document.getElementById('message').style.display = 'none';
    }
    var todos = getTodos();
    todos.push({task: task, isDone: false});
    document.getElementById('task').value = '';
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}
function remove() {
    var id = this.getAttribute('id');
    var todos = getTodos();
    todos.splice(id,1);
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}
function show() {
    document.getElementById('todos').innerText = '';
    var todos = getTodos();
    var ul = document.createElement('ul');
    ul.classList.add("list-group");
    for(var i=0; i<todos.length; i++){
        var li = document.createElement('li');
        li.innerHTML  = '<li>' + todos[i].task + '</li>' +
            '<button class="btn btn-danger" id="' + i + '">' +
            '<i class="fa fa-trash-o"></i> ' +
            '<span class="d-none d-sm-inline"> Delete </span> </button>';
        li.classList.add("list-group-item");
        if(todos[i].isDone)
            li.classList.add("done");
        ul.appendChild(li);
    }
    document.getElementById('todos').appendChild(ul);
    var buttons = document.getElementsByClassName('btn-danger');
    for(var i=0; i<buttons.length; i++){
        buttons[i].addEventListener('click',remove);
    }
}
function isDone(e) {
    var todos = getTodos();
    if(todos[e.target.id].isDone) {
        e.target.classList.add('done');
        todos[e.target.id].isDone = false;
    }
    else{
        e.target.classList.remove('done');
        todos[e.target.id].isDone = true;
    }
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
}
show();
*/


//the input was pushed into the array and a null was printed at the place of input to free it for further input
//next a function named show was called in which we created an unordered list dynamically and applied a bootstrap class over it
//than a for loop was initiated and array was traversed till the end of the array
//an tem was added everytime and a li tag was added around the data
//styling was applied on the index and shown on the page but this time on every addition only the new item was added rather than the whole list twice
// the add function reads data from local storage and show function performs the viewing Job
// remove function performs the task of deleteing an element from the list on the page


//============================================
//-----------  STEP - 5 ----------------------
//============================================

/*
CLASS ACTIVITY (HOME WORK) :
1- Enable State of todos by clicking on the text completed, started etc
HINT: use text-decoration:line-through; property of CSS
2- Enable Editing todos in text field to update text
*/


function getTodos() {
    var todos = [];
    var todos_str = localStorage.getItem('todo');
    if(todos_str !== null)
        todos = JSON.parse(todos_str);
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    if(task.trim() == ''){
        document.getElementById('message').style.display = 'block';
        return false;
    } else {
        document.getElementById('message').style.display = 'none';
    }
    var todos = getTodos();
    todos.push({task: task, isDone: false});
    document.getElementById('task').value = '';
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var todos = getTodos();
    todos.splice(id,1);
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}

function edit() {
    var id = this.getAttribute('id');
    var text = document.getElementById(id).innerText;
    document.getElementById('task').value = text;

}

function strikefun(){
    var id = this.getAttribute('id');
    document.getElementById(id).style.textDecoration='line-through';
}

function show() {
    document.getElementById('todos').innerText = '';
    var todos = getTodos();
    var ul = document.createElement('ul');
    ul.classList.add("list-group");
    for(var i=0; i<todos.length; i++)
    {
        var li = document.createElement('li');
        li.innerHTML  = '<li onclick="strikefun()">' + todos[i].task + '</li>' +
            '<button class="btn btn-danger" id="' + i + '">' +
            '<i class="fa fa-trash-o"></i> ' +
            '<span class="d-none d-sm-inline"> Delete </span> </button>'+
            '<button class="btn btn-primary">'+
            '<i class="fas fa-edit"></i> ' +
            '<span class="d-none d-sm-inline"> Edit </span> </button>';
        li.classList.add("list-group-item");
        li.setAttribute('id','List-'+i);

        if(todos[i].isDone)
            li.classList.add("done");
        ul.appendChild(li);
    }
    document.getElementById('todos').appendChild(ul);
    var buttons = document.getElementsByClassName('btn-danger');
    var editbtn = document.getElementsByClassName('btn-primary');
    var list = document.getElementsByClassName('list-group-item');

    for(var i=0; i<buttons.length; i++){
        buttons[i].addEventListener('click',remove);
        editbtn[i].addEventListener('click',edit);
        list[i].addEventListener('click',strikefun);
    }
}

function isDone(e) {
    var todos = getTodos();
    if(todos[e.target.id].isDone) {
        e.target.classList.add('done');
        todos[e.target.id].isDone = false;
    }
    else{
        e.target.classList.remove('done');
        todos[e.target.id].isDone = true;
    }
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
}
show();