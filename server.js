const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') addTask();
});

function addTask() {
    const taskText = taskInput.value.trim(); // ✅ Changed to taskText

    if (taskText === '') return; // ✅ Correct variable name

    // Create list item
    const li = document.createElement('li');
    li.className = 'task-item';

    // Complete button
    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.textContent = '✔';
    completeBtn.title = 'Mark as complete';

    // Remove button
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = 'Delete';
    removeBtn.title = 'Remove task';

    // Task text
    const span = document.createElement('span');
    span.textContent = taskText;

    // Append elements
    li.appendChild(completeBtn);
    li.appendChild(span);
    li.appendChild(removeBtn);

    // Add to list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';

    // MARK AS COMPLETE
    completeBtn.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    // REMOVE TASK
    removeBtn.addEventListener('click', function () {
        taskList.removeChild(li);
    });
}
