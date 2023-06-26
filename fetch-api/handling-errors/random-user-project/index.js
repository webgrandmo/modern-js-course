const btn = document.querySelector('#generate');
const userElement = document.querySelector('#user');

const fetchUser = () => {
	showSpinner();
	fetch('https://randomuser.me/apid')
		.then((res) => {
			if (!res.ok) {
				throw new Error(`Request Failed: ${res.status} ${res.statusText}`);
			}
			return res.json();
		})
		.then((data) => {
			hideSpinner();
			displayUser(data.results[0]);
		})
		.catch((error) => {
			hideSpinner();
			console.error(error);
			userElement.innerHTML = `
        <p class="text-xl text-center text-red-500">
          ${error}
        </p>`;
		});
};

const showSpinner = () => {
	document.querySelector('.spinner').style.display = 'block';
};

const hideSpinner = () => {
	document.querySelector('.spinner').style.display = 'none';
};

const displayUser = (user) => {
	const userBlock = document.querySelector('#user');
	if (user.gender === 'female') {
		document.body.style.backgroundColor = 'rebeccapurple';
	} else {
		document.body.style.backgroundColor = 'steelblue';
	}

	userBlock.innerHTML = `
    <div class="flex justify-between">
      <div class="flex">
        <img class="w-48 h-48 rounded-full mr-8" src="${user.picture.large}" alt="${user.name.first} ${user.name.last}" />
        <div class="space-y-3">
          <p class="text-xl">
            <span class="font=bold">Name: </span>${user.name.first} ${user.name.last}
          </p>
          <p class="text-xl">
            <span class="font=bold">Email: </span>${user.email}
          </p>
          <p class="text-xl">
            <span class="font=bold">Phone: </span>${user.cell}
          </p>
          <p class="text-xl">
            <span class="font=bold">Location: </span>${user.location.country} ${user.location.state}
          </p>
          <p class="text-xl">
            <span class="font=bold">DOB: </span>${new Date(user.dob.date).toDateString()}
          </p>
          <p class="text-xl">
            <span class="font=bold">Age: </span>${user.dob.age}
          </p>
        </div>
      </div>
    </div>
  `;
};

const init = () => {
	document.addEventListener('DOMContentLoaded', fetchUser);
	btn.addEventListener('click', fetchUser);
};
init();
