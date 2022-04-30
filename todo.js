// // const submitForm= document.querySelector('.add');
// // const addButton= document.querySelector('.add-todo');
// // const todoList= document.querySelector('.todos');
// // const list= document.querySelector('.add-todo');

// // let listLength = list.length;

// // const generateTemplate = (todo)=>{
// //     const html = `<li>
// //                     <input type="checkbox" id="todo_${listLength}">
// //                     <label for="todo_${listLength}">
// //                         <span class="check"></span>
// //                         ${todo}
// //                     </label>
// //                     <i class="fa-regular fa-trash-can"></i>
// //                 </li>`
// //     todoList.innerHTML+=html
// // };
// // function addTodos(e){
// //     e.preventDefault();
// //     const todo = submitForm.add.value.trim();
// //     if(todo.length){
// //         listLength=listLength+1;
// //         generateTemplate(todo);
// //         submitForm.requestFullscreen();
// //     }
// // }
// // submitForm.addEventListener('submit',addTodos);
// // addButton.addEventListener('click',addTodos);

// // function deleteTodos(e){
// //     if(e.target.classList.contains('delete')){
// //         e.target.parentElement.remove();
// //     }
// // }
// // todoList.addEventListener('click',deleteTodos);

// const submitForm = document.querySelector('.add');
// const addButton = document.querySelector('.add-todo');
// const todoList = document.querySelector('.todos');
// const list = document.querySelectorAll('.todos li'); 

// let listLenght = list.lenght;

// const generateTempalate = (todo) => {
  
//   const html = `<li>
//                   <input type="checkbox" id="todo_${listLenght}">
//                   <label for="todo_${listLenght}">
//                     <span class="check"></span>
//                     ${todo}
//                   </label>
//                   <i class="far fa-trash-alt delete"></i>
//                 </li>`
//   todoList.innerHTML += html;
// };

// function addTodos(e) {
//   e.preventDefault();
//   const todo = submitForm.add.value.trim();
//   if (todo.length) {
//     listLenght = listLenght + 1;
//     generateTempalate(todo);
//     submitForm.reset();
//   }
// }

// submitForm.addEventListener('submit', addTodos);
// addButton.addEventListener('click', addTodos);

// function deleteTodos(e) {
//   if (e.target.classList.contains('delete')) {
//     e.target.parentElement.remove();
//   }
// }

// todoList.addEventListener('click', deleteTodos);

const container = document.querySelector('.container');
var inputValue = document.querySelector('.input');
const add = document.querySelector('.add');

if(window.localStorage.getItem("todos") == undefined){
     var todos = [];
     window.localStorage.setItem("todos", JSON.stringify(todos));
}

var todosEX = window.localStorage.getItem("todos");
var todos = JSON.parse(todosEX);


class item{
	constructor(name){
		this.createItem(name);
	}
    createItem(name){
    	var itemBox = document.createElement('div');
        itemBox.classList.add('item');

    	var input = document.createElement('input');
    	input.type = "text";
    	input.disabled = true;
    	input.value = name;
    	input.classList.add('item_input');

    	var edit = document.createElement('button');
    	edit.classList.add('edit');
    	edit.innerHTML = "EDIT";
    	edit.addEventListener('click', () => this.edit(input, name));

    	var remove = document.createElement('button');
    	remove.classList.add('remove');
    	remove.innerHTML = "REMOVE";
    	remove.addEventListener('click', () => this.remove(itemBox, name));

    	container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);

    }

    edit(input, name){
        if(input.disabled == true){
           input.disabled = !input.disabled;
        }
    	else{
            input.disabled = !input.disabled;
            let indexof = todos.indexOf(name);
            todos[indexof] = input.value;
            window.localStorage.setItem("todos", JSON.stringify(todos));
        }
    }

    remove(itemBox, name){
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
}

add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
	if(e.which == 13){
		check();
	}
})

function check(){
	if(inputValue.value != ""){
		new item(inputValue.value);
        todos.push(inputValue.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
		inputValue.value = "";
	}
}


for (var v = 0 ; v < todos.length ; v++){
    new item(todos[v]);
}


new item("sport");