window.addEventListener("load", () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener("submit", (e) => {

        // This prevents the form from submitting in the traditional way, 
        // which would cause the page to reload.
        e.preventDefault();

        const task = input.value;
        //If the input field is empty, displays an alert and exits the function early.
        if (!task) {
            alert("please fill out input");
            return;
        }
        const task_el = document.createElement("div");
        task_el.classList.add("task");

        //Declares a constant variable named task_content_el.
        //Creates another div element & assigned to const task_content_el
        const task_content_el = document.createElement("div");

        //Adds the CSS class content to the new div.
        task_content_el.classList.add("content");


        //Sets the text content of the div to the value of the task variable. 
        //this means whatever task was entered in the input field will be displayed as text inside this div.
        // task_content_el.innerText = task;


        // Append the content div to the task div
        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        // Append the content div to the task div
        task_el.appendChild(task_content_el);

        const task_action_el = document.createElement("div");
        task_action_el.classList.add("actions");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Delete";

        task_action_el.appendChild(task_edit_el);
        task_action_el.appendChild(task_delete_el);

        task_el.appendChild(task_action_el);

        // Append the task div to the task list
        list_el.appendChild(task_el);

        input.value = "";

        task_edit_el.addEventListener('click', () => {
            if (task_edit_el.innerText.toLocaleLowerCase() == "edit") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "Save"
            } else {
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "Edit"
            }
        })

        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
        });
    });
});
