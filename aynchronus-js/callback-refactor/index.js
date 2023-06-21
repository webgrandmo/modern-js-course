const posts = [
	{ title: 'Post One', body: 'This is post one' },
	{ title: 'Post Two', body: 'This is post two' },
];

const createPost = (post) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let error = null;
			if (!error) {
				posts.push(post);
				resolve();
			} else {
				reject('Something wen wrong');
			}
		}, 2000);
	});
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

const showError = (error) => {
	const h3 = document.createElement('h3');
	h3.innerHTML = `<strong>${error}</strong>`;
	document.getElementById('posts').appendChild(h3);
};

createPost({ title: 'Post Three', body: 'This is post three' }).then(getPosts).catch(showError);
