document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    buildToDo(e.target.new_task_description.value);
    form.reset();
  })
});

function buildToDo(todo) {
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.textContent = 'x';
  li.textContent = `${todo} `;
  document.querySelector('ul').append(li);
  li.append(btn);
  btn.addEventListener('click', removeTask);

}

function removeTask(e) {
  e.target.parentNode.remove();
}


