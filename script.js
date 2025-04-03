const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

function createListItem(taskText) {
    const li = document.createElement("li");

    li.textContent = taskText;

    return li;
}

console.log(createListItem("Clear the gutter"))


function addTask() {
    const taskItem = taskInput.value.trim();

    console.log(taskItem);

    if (taskItem != ""){
        const newListItem = createListItem(taskItem);

        taskList.append(newListItem);

        taskInput.value = "";
    }
}

addTaskBtn.addEventListener("click", addTask)