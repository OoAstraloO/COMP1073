// Gets references to HTML elements
const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Function to add a new task to the list
function addToList()
{
    // Gets the text from the input and removes extra spaces
    const text = taskInput.value.trim();

    // Stops the function If the input is empty
    if (text === "") return;

    // Creates a new list item
    const li = document.createElement("li");

    // Creates a checkbox for marking task as complete
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Creates a checkbox for marking task as complete
    const span = document.createElement("span");
    span.textContent = text;

    // Creates a delete button
    const deleteTask = document.createElement("button");
    deleteTask.textContent = "Delete";

    // Adds checkbox, text, and button to the list item
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteTask);

    // Adds the list item to the task list
    taskList.appendChild(li);

    // Clears the input field after adding the task
    taskInput.value = "";

    // Changes styling depending if checkbox is checked or unchecked
    checkbox.addEventListener("change", function()
    {
        if (checkbox.checked)
        {
            // Adds class to apply styling
            li.classList.add("completed");
            // Moves the completed task to the bottom of the list
            taskList.appendChild(li);
        }
        else
        {
            // Removes styling if unchecked
            li.classList.remove("completed");
        }
    })

    // Deletes task from list if its delete button is clicked
    deleteTask.addEventListener("click", function()
    {
        li.remove();
    })
}

// Runs the addToList() function when Add Task button is clicked
addTask.addEventListener("click", addToList);

