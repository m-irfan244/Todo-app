const form = document.querySelector('#form');
const input = document.querySelector('#input');
const todosUl = document.querySelector('#todoUl');

form.addEventListener('submit', function (e) {
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    let todoText = input.value

    if(todo) {
        todoText = todo.text
    }

    if(todoText) {
        const todoElem = document.createElement('li')

        todoElem.innerText = todoText;
        todosUl.appendChild(todoElem)
        console.log(todoElem)

        input.value = '';
    }
}


// function addTodo(todo) {
//     
    
//     if(todoText) {
//         const todoElem = document.createElement('li');

//         if(todo && todo.completed) {
//             todoElem.classList.add('completed')
//         }

//         todoElem.addEventListener('click', () => {
//             todoElem.classList.toggle('completed')
//             updateLis()
//         })

//         todoElem.addEventListener('contextmenu', (e) => {
//             e.preventDefault()
//             todoElem.remove()
//         })
        
//         todoElem.innerText = todoText
//         todosUL.appendChild(todoElem)

//         input.value = ''
        
//         updateLis()
//     }

// }

// function updateLis() {
//     const todosElem = document.querySelectorAll('li');

//     const todos = [];

//     todosElem.forEach(todoElem => {
//         todos.push({
//             test: todoElem.innerText,
//             completed: todoElem.classList.contains('completed')
//         })
//     })

//     console.log(todos)
// }