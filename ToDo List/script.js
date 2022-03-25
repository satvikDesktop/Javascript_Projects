function addToDo() {

  var Input = document.getElementById("enter").value // gets input from input box
  var list = document.getElementById('todos'); // gets the list div from html doc
  var entry = document.createElement('li'); // creats a new list element 
  entry.setAttribute('id', 'ToDo') // adds id to list element 

  var deleteTodo = document.createElement("button"); // creates a button
  var doneTodo = document.createElement("button");
 

  deleteTodo.setAttribute('id', 'deletetodobtn')
  doneTodo.setAttribute('id', 'donetodobtn')


  deleteTodo.innerHTML = "Delete " // button text  
  doneTodo.innerHTML = "Done"
  
  doneTodo.onclick = function doneTodo() { // function to delete list element (todo) 
    entry.classList.toggle('strike'); // or just classList.add
  }
  deleteTodo.onclick = function deleteTodo() { // function to delete list element (todo) 
    entry.remove()
  }

  entry.textContent = Input // adds  input text to list element 
  list.appendChild(entry); // adds element to list 
  entry.appendChild(deleteTodo); // appends the delete button 
  entry.appendChild(doneTodo);// appends the done button 
  document.getElementById("enter").value = ""; // reinitialises text field with ""
}

document.addEventListener("keypress", function onEvent(event) { // if enter is clicked todo is added
  if (event.key === "Enter")
    addToDo()
})

