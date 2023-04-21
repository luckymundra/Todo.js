let form = document.querySelector("form")
let input = document.querySelector("input")
let ul = document.querySelector("ul")
let button = document.querySelector("button")

function saveTodo (e){
    e.preventDefault();
    const li = document.createElement("li")
    li.innerText = input.value
    li.className = "list-group-item"
    ul.appendChild(li)
    form.reset()
}
button.addEventListener("click" , saveTodo)
console.log("button")