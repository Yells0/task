const taskInput = document.getElementById('task-input');
        const addTaskBtn = document.getElementById('add-task-btn');
        const taskList = document.getElementById('task-list');

        // Add a new task
        addTaskBtn.addEventListener('click', () => {
            const taskText = taskInput.value.trim();
            if (taskText === '') return;

            const taskItem = document.createElement('li');
            taskItem.classList.add('task-item');

            taskItem.innerHTML = `
                <input type="text" value="${taskText}" readonly>
                <div class="actions">
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </div>
            `;

            taskList.appendChild(taskItem);
            taskInput.value = '';
            addTaskListeners(taskItem);
        });

        // Add listeners to edit and delete buttons
        function addTaskListeners(taskItem) {
            const editBtn = taskItem.querySelector('.edit-btn');
            const deleteBtn = taskItem.querySelector('.delete-btn');
            const taskTextInput = taskItem.querySelector('input');
  // Edit task
  editBtn.addEventListener('click', () => {
    if (editBtn.textContent === 'Edit') {
        taskTextInput.removeAttribute('readonly');
        taskTextInput.focus();
        editBtn.textContent = 'Save';
    } else {
        taskTextInput.setAttribute('readonly', true);
        editBtn.textContent = 'Edit';
    }
});

// Delete task
deleteBtn.addEventListener('click', () => {
    taskItem.remove();
   });
        }