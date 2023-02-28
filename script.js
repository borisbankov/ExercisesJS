const task1 = () => {
	let links = document.querySelectorAll('.nav-link');
	links.forEach(item => {
		console.log(item.innerHTML);
	});
}

// task1();

const task2 = () => {
	let cards = document.querySelectorAll('.card-body p');
	cards.forEach(item => { 
		item.innerHTML = "new content";
	});
}

// task2();

const task3 = () => {
	let blue = document.querySelectorAll('.text-blue');
	blue.forEach(item => {
		item.classList.remove('text-blue');
	});
}
// task3();
const task4 = () => {
	let btn = document.querySelector('.btn-yellow');
	btn.style.display = 'none';
}
task4();
const task5 = () => {
	let btn = document.querySelector('.btn-blue');
	btn.addEventListener('click', (e) => {
		// document.querySelector('.btn-yellow').style.removeProperty('display');
		
		if(document.querySelector('.btn-yellow').style.display == 'none'){
			document.querySelector('.btn-yellow').style.display = '';
		} else {
			document.querySelector('.btn-yellow').style.display = 'none';
		}
	});
}
task5();

const task6 = () => {
	let links = document.querySelectorAll('a');
	links.forEach(item => { 
		item.addEventListener('mouseenter', (e) => {
			let text = e.target.innerHTML;
			e.target.innerHTML = text.split("").reverse().join("");
		});
	});

}

task6();