const buttonAdd = document.getElementById("add");
const ul = document.querySelector("ul");

// Load tasks from localStorage when the page loads
window.addEventListener("load", () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => {
    addTaskToList(task);
  });
});

buttonAdd.addEventListener("click", (e) => {
  e.preventDefault();
  let input = document.querySelector("input");
  if (input.value === "") {
    alert("please enter some task");
  } else {
    addTaskToList(input.value);
    saveTask(input.value);
    input.value = ""; // Clear input after adding task
  }
});

function addTaskToList(taskText) {
  let li = document.createElement("li");
  li.innerHTML = `
    ${taskText}
    <button class="del btn btn-outline-danger">
      <i class="fa-solid fa-xmark" id="check"></i>
    </button>
  `;

  // Append task to the list
  ul.appendChild(li);

  // Toggle task completion on click (strikethrough effect)
  li.addEventListener("click", () => {
    li.style.textDecoration = li.style.textDecoration === "line-through" ? "none" : "line-through";
  });

  // Delete task on button click
  li.querySelector(".del").addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent task click event from firing
    ul.removeChild(li);
    deleteTask(taskText); // Remove task from localStorage
  });
}

// Save task to localStorage
function saveTask(taskText) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove task from localStorage
function deleteTask(taskText) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const updatedTasks = tasks.filter(task => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}
