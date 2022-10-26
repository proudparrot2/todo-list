let form = document.querySelector('form')
let input = document.querySelector('input')
let todos = document.querySelector('.todos')

function getTodo(value){
    let todo = document.createElement("div")
    let textEl = document.createElement("span")
    textEl.innerHTML = value
    todo.appendChild(textEl)
    let closeEl = document.createElement("span")
    closeEl.innerHTML = "&times;";
    closeEl.classList.add("delete")
    // <span class="tool-tipped" data-tip="Thanks For Hovering">Hover Me</span>
    closeEl.addEventListener('click', function(e){
        todos.removeChild(todo)
    })

    todo.appendChild(closeEl)
    todo.classList.add('todo')
    return todo
}

form.addEventListener('submit', function (e) {
    e.preventDefault()
    let value = input.value
    if(!value.trim()) return
    todos.appendChild(getTodo(value))
    input.value = ''
})


function randomPlaceholder() {
  var arr = ["Make breakfast", "Talk to humans", "Go to the bathroom", "Take a shower", "Eat dinner", "Commit tax fraud"]
   
  var number = Math.random() * arr.length;
  var string = arr[number];
  alert(string);
}
