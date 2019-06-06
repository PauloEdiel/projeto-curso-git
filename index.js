var $listElement = document.querySelector('#app ul');
var $inputElement = document.querySelector('#app input');
var $btnElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('todos')) || [];

//var todos = [
 //   'Estudar Java',
 //   'Aprender Java Script',
 //   'Fazer Café'
//];



function renderTodos() {
    $listElement.innerHTML = '';

    for (todo of todos) {
        var todoElemnent = document.createElement('li');
        var todoText = document.createTextNode(todo);
        
        var linkElement = document.createElement('a');
        
        var linkText = document.createTextNode('Excluir');

        linkElement.setAttribute('href','#')

        var pos = todos.indexOf(todo);

        linkElement.setAttribute('onclick','deleteTodo('+pos+')');
        

        linkElement.appendChild(linkText);
        
        todoElemnent.appendChild(todoText);
        todoElemnent.appendChild(linkElement);

        $listElement.appendChild(todoElemnent);
    }
}

function addTodo() {
    $inputElement.value
    var newTodo = $inputElement.value;
    
    if(newTodo) {
        todos.push(newTodo);
    }else {
        alert('Insira uma tarefa !')
    }
    $inputElement.value = '';
    renderTodos();
    saveToStorage();

}

function deleteTodo(pos) {
    todos.splice(pos, 1);
    saveToStorage();
    renderTodos();
}

function saveToStorage(){

    localStorage.setItem('list_todos', JSON.stringify(todos));

}

renderTodos();

$btnElement.onclick = addTodo;