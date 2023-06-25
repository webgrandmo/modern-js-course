const createPost = ({ title, body }) => {
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: JSON.stringify({
			title,
			body,
		}),
		headers: {
			'Content-type': 'application/json',
			token: 'abc123',
		},
	})
		.then((res) => res.json())
		.then((data) => console.log(data));
};

createPost({ title: 'New Post', body: 'New post text' });
