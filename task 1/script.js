window.addEventListener('load', () => {
	const form = document.querySelector("#work__form");
	const input = document.querySelector("#task__input");
	const list_el = document.querySelector("#tasks");
    

	form.addEventListener('submit', (e) => {
	e.preventDefault();
    

	const task = input.value;
    if(!task){
        alert("Please add a task");
        return;
    }

    const taskElement= document.createElement('div');
	taskElement.classList.add('task');

    const taskContentElement = document.createElement('div');
		taskContentElement.classList.add('content');
        

		taskElement.appendChild(taskContentElement);


		const taskInputElement = document.createElement('input');
		taskInputElement.classList.add('text');
		taskInputElement.type = 'text';
		taskInputElement.value = task;
		taskInputElement.setAttribute('readonly', 'readonly');

		taskContentElement.appendChild(taskInputElement);

		const taskActionsElement= document.createElement('div');
		taskActionsElement.classList.add('modify');
		
		const taskEditElement = document.createElement('button');
		taskEditElement.classList.add('edit');
		taskEditElement.innerText = 'Edit';

		const taskDeleteElement = document.createElement('button');
		taskDeleteElement.classList.add('delete');
		taskDeleteElement.innerText = 'Delete';

		taskActionsElement.appendChild(taskEditElement);
		taskActionsElement.appendChild(taskDeleteElement);

		taskElement.appendChild(taskActionsElement);

        list_el.appendChild(taskElement);

	input.value = '';

		taskEditElement.addEventListener('click', (e) => {
			if (taskEditElement.innerText.toLowerCase() == "edit") {
				taskEditElement.innerText = "Save";
				taskInputElement.removeAttribute("readonly");
				taskInputElement.focus();
			} else {
				taskEditElement.innerText = "Edit";
				taskInputElement.setAttribute("readonly", "readonly");
			}
		});

		taskDeleteElement.addEventListener('click', (e) => {
			list_el.removeChild(taskElement);
		});
});
 });
