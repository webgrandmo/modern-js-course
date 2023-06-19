const posts = [
	{ title: 'Post One', body: 'This is post one' },
	{ title: 'Post Two', body: 'This is post two' },
];

const createPost = (post, cb) => {
	setTimeout(() => {
		posts.push(post);
		cb();
	}, 2000);
};

const getPosts = () => {
	setTimeout(() => {
		posts.forEach((post) => {
			const div = document.createElement('div');
			div.innerHTML = `
				<h1>${post.title}</h1>
				<p>${post.body}</p>
			`;
			document.getElementById('posts').appendChild(div);
		});
	}, 1000);
};

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);
