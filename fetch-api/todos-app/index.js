const apiURL = 'https://jsonplaceholder.typicode.com/todos';
const todosList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const getTodos = () => {
	fetch(`${apiURL}?_limit=10`)
		.then((res) => res.json())
		.then((data) => displayTodos(data));
};

const addTodoToDOM = (todo) => {
	const div = document.createElement('div');
	div.appendChild(document.createTextNode(todo.title));
	div.classList.add('todo-item');
	div.setAttribute('data-id', todo.id);
	if (todo.completed) {
		div.classList.add('done');
	}
	todosList.appendChild(div);
};

const addNewTodo = (event) => {
	event.preventDefault();
	const newTodo = {
		title: event.target.firstElementChild.value,
		completed: false,
	};
	fetch(apiURL, {
		method: 'POST',
		body: JSON.stringify(newTodo),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
		.then((res) => res.json())
		.then((data) => addTodoToDOM(data));
};

const toggleCompleted = (event) => {
	const target = event.target;
	const classList = target.classList;
	if (classList.contains('todo-item')) {
		classList.toggle('done');

		updateTodo(target.dataset.id, classList.contains('done'), target.innerText);
	}
};

const updateTodo = (id, completed, title) => {
	fetch(`${apiURL}/${id}`, {
		method: 'PUT',
		body: JSON.stringify({ completed, title }),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	}).catch((error) => console.log(`Something went wrong ${error}`));
};

const deleteTodo = (e) => {
	if (e.target.classList.contains('todo-item')) {
		const id = e.target.dataset.id;

		fetch(`${apiURL}/${id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then(() => {
				if (e.target.classList.contains('todo-item')) {
					e.target.remove();
				}
			});
	}
};

const displayTodos = (todos) => {
	todos.forEach((todo) => addTodoToDOM(todo));
};

const init = () => {
	document.addEventListener('DOMContentLoaded', getTodos);
	todoForm.addEventListener('submit', addNewTodo);
	todosList.addEventListener('dblclick', deleteTodo);
	todosList.addEventListener('click', toggleCompleted);
};

init();
