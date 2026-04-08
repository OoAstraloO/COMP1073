const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

function addToList()
{
    const text = taskInput.value.trim();

    if (text === "") return;

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = text;

    const deleteTask = document.createElement("button");
    deleteTask.textContent = "Delete";

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteTask);

    taskList.appendChild(li);

    taskInput.value = "";

    checkbox.addEventListener("change", function()
    {
        if (checkbox.checked)
        {
            span.classList.add("completed");
            list.appendChild(li);
        }
        else
        {
            li.style.textDecoration = "none"
        }
    })

    deleteTask.addEventListener("click", function()
    {
        li.remove();
    })
}

addTask.addEventListener("click", addToList);

